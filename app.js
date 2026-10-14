/* app.js — Interior Prompt Builder logic.
   In-memory state only (no localStorage). Small, named functions; renderAll()
   redraws everything that depends on state. Data comes from data.js (globals). */

"use strict";

const MAX_ITEMS = 12;

const state = {
  room: ROOM_TYPES[0].id,
  style: null,
  palette: COLOR_PALETTES[0].id,
  mood: LIGHTING_MOODS[0].id,
  selected: [],      // item ids, in the order added
  search: "",
  category: "all",
  showAll: false,
};

/* ---------- tiny helpers ---------- */
const $ = (id) => document.getElementById(id);
const byId = (list, id) => list.find((x) => x.id === id) || null;
const itemById = (id) => byId(ITEMS, id);
const styleById = (id) => byId(STYLES, id);
const roomName = (id) => (byId(ROOM_TYPES, id) || {}).name || "";
function make(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text != null) el.textContent = text;
  return el;
}
function joinNaturally(parts) {
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts[0] + " and " + parts[1];
  return parts.slice(0, -1).join(", ") + ", and " + parts[parts.length - 1];
}
function itemMatchesStyle(item) {
  return state.style != null && item.styleTags.includes(state.style);
}

/* ---------- filtering ---------- */
// Items visible for the current room + search (before the category chip filter).
function roomSearchList() {
  let list = state.showAll ? ITEMS.slice() : ITEMS.filter((i) => i.roomTypes.includes(state.room));
  const q = state.search.trim().toLowerCase();
  if (q) list = list.filter((i) => (i.name + " " + i.promptText + " " + i.category).toLowerCase().includes(q));
  return list;
}

/* ---------- render: room ---------- */
function renderRooms() {
  const g = $("roomGrid");
  g.innerHTML = "";
  ROOM_TYPES.forEach((rt) => {
    const b = make("button", "room-btn", rt.name);
    b.type = "button";
    b.setAttribute("aria-pressed", String(state.room === rt.id));
    b.addEventListener("click", () => setRoom(rt.id));
    g.appendChild(b);
  });
}

/* ---------- render: styles ---------- */
function renderStyles() {
  const wrap = $("styleList");
  wrap.innerHTML = "";
  STYLES.forEach((s) => {
    const card = make("button", "style-card");
    card.type = "button";
    card.setAttribute("aria-pressed", String(state.style === s.id));
    card.appendChild(make("div", "sc-name", s.name));
    card.appendChild(make("div", "sc-desc", s.description));
    card.addEventListener("click", () => setStyle(state.style === s.id ? null : s.id));
    wrap.appendChild(card);
  });
}

/* ---------- render: palette + mood ---------- */
function renderPalettes() {
  const wrap = $("paletteOpts");
  wrap.innerHTML = "";
  COLOR_PALETTES.forEach((p) => {
    const b = make("button", "palette-opt");
    b.type = "button";
    b.setAttribute("aria-pressed", String(state.palette === p.id));
    const row = make("span", "swatch-row");
    p.colors.forEach((c) => {
      const sw = make("span");
      sw.style.background = c;
      row.appendChild(sw);
    });
    b.appendChild(row);
    b.appendChild(make("span", "po-name", p.name));
    b.addEventListener("click", () => { state.palette = p.id; renderPalettes(); renderPreview(); renderPrompt(); });
    wrap.appendChild(b);
  });
}
function renderMoods() {
  const g = $("moodGrid");
  g.innerHTML = "";
  LIGHTING_MOODS.forEach((m) => {
    const b = make("button", "mood-btn", m.label);
    b.type = "button";
    b.setAttribute("aria-pressed", String(state.mood === m.id));
    b.addEventListener("click", () => { state.mood = m.id; renderMoods(); renderPreview(); renderPrompt(); });
    g.appendChild(b);
  });
}

/* ---------- render: category chips ---------- */
function renderChips() {
  const wrap = $("chips");
  wrap.innerHTML = "";
  const present = new Set(roomSearchList().map((i) => i.category));
  const all = make("button", "chip", "All");
  all.type = "button";
  all.setAttribute("aria-pressed", String(state.category === "all"));
  all.addEventListener("click", () => { state.category = "all"; renderChips(); renderLibrary(); });
  wrap.appendChild(all);
  CATEGORIES.filter((c) => present.has(c.id)).forEach((c) => {
    const b = make("button", "chip", c.name);
    b.type = "button";
    b.setAttribute("aria-pressed", String(state.category === c.id));
    b.addEventListener("click", () => { state.category = (state.category === c.id ? "all" : c.id); renderChips(); renderLibrary(); });
    wrap.appendChild(b);
  });
}

/* ---------- render: item library ---------- */
function renderLibrary() {
  const body = $("libBody");
  body.innerHTML = "";
  let list = roomSearchList();
  if (state.category !== "all") list = list.filter((i) => i.category === state.category);

  if (list.length === 0) {
    const msg = state.search.trim()
      ? "No pieces match your search. Try a different word, or turn on “Show all rooms”."
      : "No pieces for this room yet. Turn on “Show all rooms” to browse everything.";
    body.appendChild(make("div", "lib-empty", msg));
    return;
  }

  CATEGORIES.forEach((cat) => {
    let group = list.filter((i) => i.category === cat.id);
    if (group.length === 0) return;
    // style matches first, then alphabetical
    group.sort((a, b) => (itemMatchesStyle(b) - itemMatchesStyle(a)) || a.name.localeCompare(b.name));

    const section = make("div", "cat-section");
    const h = make("h3");
    h.appendChild(make("span", null, cat.name));
    h.appendChild(make("span", "n", String(group.length)));
    section.appendChild(h);

    const grid = make("div", "item-grid");
    group.forEach((item) => grid.appendChild(renderItemCard(item)));
    section.appendChild(grid);
    body.appendChild(section);
  });
}
function renderItemCard(item) {
  const card = make("button", "item");
  card.type = "button";
  card.dataset.selected = String(state.selected.includes(item.id));
  card.dataset.suggested = String(itemMatchesStyle(item));
  card.appendChild(make("div", "it-name", item.name));
  card.appendChild(make("div", "it-prompt", item.promptText));
  card.addEventListener("click", () => toggleItem(item.id));
  return card;
}

/* ---------- render: selection ---------- */
function renderSelection() {
  $("selCount").innerHTML = "<b>" + state.selected.length + "</b> / " + MAX_ITEMS;

  const warnSlot = $("warnSlot");
  warnSlot.innerHTML = "";
  if (state.selected.length >= MAX_ITEMS) {
    warnSlot.appendChild(make("div", "warn", "That’s the 12-piece limit — remove something to add another. Tight edits make sharper prompts."));
  }

  const listEl = $("selList");
  listEl.innerHTML = "";
  if (state.selected.length === 0) {
    listEl.appendChild(make("div", "sel-empty", "Nothing added yet. Click pieces in the library to build your room."));
    return;
  }
  state.selected.forEach((id) => {
    const item = itemById(id);
    if (!item) return;
    const row = make("div", "sel-item");
    const text = make("div", "si-text");
    text.appendChild(make("div", "si-name", item.name));
    text.appendChild(make("div", "si-cat", item.category));
    row.appendChild(text);
    const rm = make("button", "sel-remove", "×");
    rm.type = "button";
    rm.setAttribute("aria-label", "Remove " + item.name);
    rm.addEventListener("click", () => removeItem(id));
    row.appendChild(rm);
    listEl.appendChild(row);
  });
}

/* ---------- render: preview card ---------- */
function renderPreview() {
  const pv = $("preview");
  pv.innerHTML = "";
  const style = styleById(state.style);
  const palette = byId(COLOR_PALETTES, state.palette);
  const mood = byId(LIGHTING_MOODS, state.mood);

  pv.appendChild(make("div", "pv-kicker", "The look"));
  pv.appendChild(make("div", "pv-style", style ? style.name : "Choose a style"));
  pv.appendChild(make("div", "pv-room", roomName(state.room)));

  if (palette) {
    const sw = make("div", "pv-swatches");
    palette.colors.forEach((c) => { const s = make("span"); s.style.background = c; sw.appendChild(s); });
    pv.appendChild(sw);
  }

  if (style) {
    pv.appendChild(make("div", "pv-section-label", "Materials"));
    const tags = make("div", "pv-tags");
    style.typicalMaterials.forEach((m) => tags.appendChild(make("span", "pv-tag mat", m)));
    pv.appendChild(tags);
  }

  pv.appendChild(make("div", "pv-section-label", "Pieces (" + state.selected.length + ")"));
  if (state.selected.length) {
    pv.appendChild(make("div", "pv-items", state.selected.map((id) => (itemById(id) || {}).name).filter(Boolean).join(" · ")));
  } else {
    pv.appendChild(make("div", "pv-items", "No pieces yet"));
  }

  const moodLine = make("div", "pv-mood");
  moodLine.appendChild(make("span", null, "Lighting:"));
  moodLine.appendChild(make("b", null, mood ? mood.label : ""));
  pv.appendChild(moodLine);
}

/* ---------- build + render the prompt ---------- */
function buildPrompt() {
  const style = styleById(state.style);
  const palette = byId(COLOR_PALETTES, state.palette);
  const mood = byId(LIGHTING_MOODS, state.mood);
  const room = roomName(state.room).toLowerCase();

  const itemPhrases = state.selected.map((id) => (itemById(id) || {}).promptText).filter(Boolean);
  const materials = style ? joinNaturally(style.typicalMaterials) : "";

  return (
    "A " + style.name.toLowerCase() + " " + room +
    " with " + joinNaturally(itemPhrases) + ", " +
    palette.name.toLowerCase() + " color palette, " +
    materials + ", " +
    mood.phrase + ", photorealistic, high detail, interior design photography."
  );
}
function renderPrompt() {
  const el = $("promptText");
  const hasStyle = state.style != null;
  const hasItems = state.selected.length > 0;

  if (!hasStyle && !hasItems) {
    el.classList.add("empty");
    el.textContent = "Pick a style and add a few pieces — your prompt builds itself here, ready to copy into any AI image tool.";
  } else if (!hasStyle) {
    el.classList.add("empty");
    el.textContent = "Choose a style to name the look, and the full prompt appears here.";
  } else if (!hasItems) {
    el.classList.add("empty");
    el.textContent = "Add a few pieces from the library, and the full prompt appears here.";
  } else {
    el.classList.remove("empty");
    el.textContent = buildPrompt();
  }
}

/* ---------- actions ---------- */
function setRoom(id) {
  state.room = id;
  state.category = "all";
  renderRooms();
  renderChips();
  renderLibrary();
  renderPreview();
  renderPrompt();
}
function setStyle(id) {
  state.style = id;
  renderStyles();
  renderLibrary();   // re-sorts matches to the top
  renderPreview();
  renderPrompt();
}
function toggleItem(id) {
  const i = state.selected.indexOf(id);
  if (i >= 0) {
    state.selected.splice(i, 1);
  } else {
    if (state.selected.length >= MAX_ITEMS) {
      toast("12-piece limit reached — remove one first");
      renderSelection();
      return;
    }
    state.selected.push(id);
  }
  afterSelectionChange();
}
function removeItem(id) {
  state.selected = state.selected.filter((x) => x !== id);
  afterSelectionChange();
}
function afterSelectionChange() {
  renderLibrary();
  renderSelection();
  renderPreview();
  renderPrompt();
}

function randomize() {
  const style = STYLES[Math.floor(Math.random() * STYLES.length)];
  state.style = style.id;
  state.palette = style.typicalPalette || state.palette;

  // candidate items that suit this style and fit the current room (fall back to any room)
  let pool = ITEMS.filter((i) => i.styleTags.includes(style.id) && i.roomTypes.includes(state.room));
  if (pool.length < 5) pool = ITEMS.filter((i) => i.styleTags.includes(style.id));
  pool = pool.slice();
  // shuffle
  for (let k = pool.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [pool[k], pool[j]] = [pool[j], pool[k]];
  }
  const n = Math.min(pool.length, 5 + Math.floor(Math.random() * 3)); // 5–7
  state.selected = pool.slice(0, n).map((i) => i.id);

  renderAll();
  toast("Surprised you with " + style.name);
}
function reset() {
  state.style = null;
  state.palette = COLOR_PALETTES[0].id;
  state.mood = LIGHTING_MOODS[0].id;
  state.selected = [];
  state.search = "";
  state.category = "all";
  state.showAll = false;
  $("search").value = "";
  $("showAll").setAttribute("aria-pressed", "false");
  $("showAll").textContent = "Show all rooms";
  renderAll();
  toast("Cleared");
}

/* ---------- copy ---------- */
function copyPrompt() {
  if (state.style == null || state.selected.length === 0) {
    toast("Pick a style and add a piece first");
    return;
  }
  const text = buildPrompt();
  const done = () => { flashCopied(); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => legacyCopy(text, done));
  } else {
    legacyCopy(text, done);
  }
}
function legacyCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
  document.body.removeChild(ta);
  if (ok) done(); else toast("Select the prompt text and press Ctrl+C");
}
function flashCopied() {
  const btn = $("copyBtn");
  const old = btn.textContent;
  btn.textContent = "Copied ✓";
  toast("Prompt copied");
  setTimeout(() => { btn.textContent = old; }, 1400);
}

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------- mobile drawers ---------- */
function wireDrawers() {
  const left = $("colLeft"), right = $("colRight"), scrim = $("scrim");
  const close = () => { left.classList.remove("open"); right.classList.remove("open"); scrim.classList.remove("show"); };
  $("openLeft").addEventListener("click", () => { close(); left.classList.add("open"); scrim.classList.add("show"); });
  $("openRight").addEventListener("click", () => { close(); right.classList.add("open"); scrim.classList.add("show"); });
  scrim.addEventListener("click", close);
}

/* ---------- init ---------- */
function renderAll() {
  renderRooms();
  renderStyles();
  renderPalettes();
  renderMoods();
  renderChips();
  renderLibrary();
  renderSelection();
  renderPreview();
  renderPrompt();
}
function init() {
  $("styleHint").textContent = STYLES.length + " to choose from";
  renderAll();

  $("search").addEventListener("input", (e) => { state.search = e.target.value; state.category = "all"; renderChips(); renderLibrary(); });
  $("showAll").addEventListener("click", (e) => {
    state.showAll = !state.showAll;
    e.currentTarget.setAttribute("aria-pressed", String(state.showAll));
    e.currentTarget.textContent = state.showAll ? "This room only" : "Show all rooms";
    state.category = "all";
    renderChips();
    renderLibrary();
  });
  $("randomizeBtn").addEventListener("click", randomize);
  $("resetBtn").addEventListener("click", reset);
  $("copyBtn").addEventListener("click", copyPrompt);
  wireDrawers();
}

document.addEventListener("DOMContentLoaded", init);

# Roomprompt — Interior Prompt Builder

Pick a room, a style, and a few pieces. The app writes a ready-to-use prompt for an
AI image generator and shows a live preview of the look (style, palette, materials,
pieces). No build step, no server, no internet — just open the file.

## Run it

Double-click **`index.html`**, or open it in any modern browser. That's it.

> Everything runs locally with no external libraries, fonts, or CDNs, so it works
> fully offline. (If the Copy button is ever blocked by the browser on `file://`,
> the app falls back to selecting the text so you can press Ctrl/Cmd + C.)

## Files

| File | What it holds |
|------|---------------|
| `index.html` | The page — four panels: Room & Style, Item Library, Selection, Generated Prompt. |
| `styles.css` | All styling (warm oatmeal canvas, olive accent, responsive down to phone). |
| `data.js`    | All content: `ROOM_TYPES`, `STYLES`, `ITEMS`, `COLOR_PALETTES`, `MATERIALS`, plus `CATEGORIES` and `LIGHTING_MOODS`. |
| `app.js`     | Logic: selecting, filtering, search, building the prompt, copy, randomize, reset. |

## How it works

- **Room** — pick one of 10 rooms. The library then shows only pieces that suit it;
  toggle **Show all rooms** to browse everything.
- **Style** — 30 clickable cards. Choosing one pushes matching pieces to the top of
  each category (marked with an ochre edge) and names the look in the prompt.
- **Item Library** — 100 pieces grouped by category, with a search box and category
  chips. Click a piece to add it, click again to remove it. Max 12 pieces.
- **Palette & lighting** — pick a colour palette and a lighting mood; both feed the
  prompt and the preview.
- **Generated prompt** — built in this shape and updated live:
  *"A [style] [room] with [pieces], [palette] color palette, [materials], [lighting],
  photorealistic, high detail, interior design photography."*
  Hit **Copy prompt** (confirms with "Copied ✓").
- **Surprise me** picks a random style and 5–7 matching pieces. **Reset** clears
  everything. State lives in memory only — a refresh starts fresh.

## Add a new style

Open `data.js` and copy an entry in the `STYLES` array:

```js
{ id: "my-style", name: "My Style",
  description: "One sentence describing the look.",
  keywords: ["five", "to", "eight", "evocative", "words"],
  typicalPalette: "warm-neutrals",          // an id from COLOR_PALETTES
  typicalMaterials: ["oak", "linen", "brass"] },
```

Reference the new `id` in any item's `styleTags` to have it suggested for that style.

## Add a new item

Copy an entry in the `ITEMS` array:

```js
{ id: "unique-id", name: "Display name", category: "furniture",
  roomTypes: ["living-room", "bedroom"],    // ids from ROOM_TYPES
  styleTags: ["scandinavian", "japandi"],   // ids from STYLES
  promptText: "a short descriptive phrase" },
```

- `category` must be one of: furniture, lighting, decor, flooring, walls, textiles,
  plants, kitchen, bathroom, outdoor, storage.
- `promptText` is what appears inside the generated sentence, so write it as a noun
  phrase ("a cream bouclé sectional sofa").

No other files need changing — the UI rebuilds from the data on load.

## Contents

10 room types · 30 styles · 100 items · 6 colour palettes · 19 materials.

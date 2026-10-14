/* data.js — all content for the Interior Prompt Builder in one place.
   Loaded as a plain script, so everything here is a global:
   ROOM_TYPES, STYLES, ITEMS, COLOR_PALETTES, MATERIALS.
   To add a style or item, copy an existing object and keep the same fields.
   Item styleTags / roomTypes reference the ids defined in STYLES and ROOM_TYPES. */

/* 10 room types */
const ROOM_TYPES = [
  { id: "living-room",   name: "Living room" },
  { id: "bedroom",       name: "Bedroom" },
  { id: "kitchen",       name: "Kitchen" },
  { id: "bathroom",      name: "Bathroom" },
  { id: "dining-room",   name: "Dining room" },
  { id: "home-office",   name: "Home office" },
  { id: "kids-room",     name: "Kids room" },
  { id: "balcony",       name: "Balcony" },
  { id: "entrance-hall", name: "Entrance hall" },
  { id: "guest-room",    name: "Guest room" },
];

/* 6 colour palettes, 4 hex each */
const COLOR_PALETTES = [
  { id: "warm-neutrals", name: "Warm neutrals", colors: ["#efe7da", "#d9c7ad", "#b89b74", "#8a6f4e"] },
  { id: "cool-neutrals", name: "Cool neutrals", colors: ["#eef0f1", "#cfd6d8", "#9aa6ab", "#5f6b70"] },
  { id: "earth-tones",   name: "Earth tones",   colors: ["#cebfa6", "#9c7a54", "#6b5a3e", "#3e4a3a"] },
  { id: "jewel-tones",   name: "Jewel tones",   colors: ["#1f6f5c", "#7b2d4e", "#2b4b8c", "#c9922b"] },
  { id: "monochrome",    name: "Monochrome",    colors: ["#f2f2f2", "#b8b8b8", "#6e6e6e", "#1c1c1c"] },
  { id: "pastel",        name: "Pastel",        colors: ["#f6dfe4", "#e7eadf", "#dfe7f0", "#f3ecdd"] },
];

/* 17 materials */
const MATERIALS = [
  { name: "pale oak",        category: "wood" },
  { name: "walnut",          category: "wood" },
  { name: "reclaimed wood",  category: "wood" },
  { name: "rattan",          category: "natural fiber" },
  { name: "jute",            category: "natural fiber" },
  { name: "linen",           category: "fabric" },
  { name: "bouclé",          category: "fabric" },
  { name: "velvet",          category: "fabric" },
  { name: "leather",         category: "fabric" },
  { name: "wool",            category: "fabric" },
  { name: "brass",           category: "metal" },
  { name: "blackened steel", category: "metal" },
  { name: "wrought iron",    category: "metal" },
  { name: "marble",          category: "stone" },
  { name: "travertine",      category: "stone" },
  { name: "concrete",        category: "stone" },
  { name: "glass",           category: "glass" },
  { name: "terracotta",      category: "ceramic" },
  { name: "zellige tile",    category: "ceramic" },
];

/* 30 styles */
const STYLES = [
  { id: "scandinavian", name: "Scandinavian", description: "Light, airy rooms with pale wood, clean lines, and cosy, functional simplicity.", keywords: ["light wood", "white walls", "cosy", "functional", "hygge", "natural light", "minimal"], typicalPalette: "warm-neutrals", typicalMaterials: ["pale oak", "wool", "linen"] },
  { id: "japandi", name: "Japandi", description: "A calm blend of Japanese restraint and Scandinavian warmth — spare, natural, and serene.", keywords: ["minimal", "natural", "muted", "serene", "craft", "low furniture", "warm wood"], typicalPalette: "earth-tones", typicalMaterials: ["oak", "paper", "linen", "bamboo"] },
  { id: "minimalist", name: "Minimalist", description: "A pared-back space where every object earns its place and empty space is the luxury.", keywords: ["spare", "monochrome", "uncluttered", "essential", "clean", "calm"], typicalPalette: "monochrome", typicalMaterials: ["concrete", "glass", "white oak"] },
  { id: "modern", name: "Modern", description: "Crisp geometry, open layouts, and a restrained neutral palette with confident accents.", keywords: ["clean lines", "open plan", "neutral", "geometric", "uncluttered"], typicalPalette: "cool-neutrals", typicalMaterials: ["steel", "glass", "oak"] },
  { id: "contemporary", name: "Contemporary", description: "An of-the-moment mix of soft curves, warm neutrals, and tactile materials.", keywords: ["current", "soft curves", "neutral", "tactile", "layered", "understated"], typicalPalette: "warm-neutrals", typicalMaterials: ["bouclé", "oak", "brass"] },
  { id: "mid-century", name: "Mid-Century Modern", description: "Organic 1950s–60s forms, warm woods, tapered legs, and optimistic colour.", keywords: ["tapered legs", "walnut", "retro", "organic", "warm", "graphic"], typicalPalette: "earth-tones", typicalMaterials: ["walnut", "leather", "brass"] },
  { id: "industrial", name: "Industrial", description: "Raw warehouse character — exposed brick, steel, concrete, and salvaged wood.", keywords: ["exposed brick", "steel", "concrete", "raw", "utilitarian", "moody"], typicalPalette: "monochrome", typicalMaterials: ["blackened steel", "concrete", "reclaimed wood"] },
  { id: "loft", name: "Loft", description: "Open, high-ceilinged urban space mixing raw structure with comfortable living.", keywords: ["open plan", "high ceilings", "brick", "ductwork", "urban", "airy"], typicalPalette: "cool-neutrals", typicalMaterials: ["concrete", "steel", "oak"] },
  { id: "farmhouse", name: "Farmhouse", description: "Warm, welcoming country comfort with shiplap, reclaimed wood, and soft whites.", keywords: ["shiplap", "reclaimed wood", "cosy", "rustic", "soft white", "apron sink"], typicalPalette: "warm-neutrals", typicalMaterials: ["reclaimed wood", "linen", "galvanised metal"] },
  { id: "rustic", name: "Rustic", description: "Rugged natural materials — rough-hewn timber, stone, and earthy warmth.", keywords: ["timber", "stone", "rough", "earthy", "handcrafted", "warm"], typicalPalette: "earth-tones", typicalMaterials: ["rough timber", "stone", "wrought iron"] },
  { id: "coastal", name: "Coastal", description: "Breezy, light-filled rooms with soft blues, whites, and natural textures.", keywords: ["airy", "blue and white", "linen", "driftwood", "relaxed", "bright"], typicalPalette: "cool-neutrals", typicalMaterials: ["driftwood", "linen", "rattan"] },
  { id: "mediterranean", name: "Mediterranean", description: "Sun-warmed terracotta, plaster walls, gentle arches, and rustic wood.", keywords: ["terracotta", "plaster", "arches", "warm", "rustic", "tile"], typicalPalette: "earth-tones", typicalMaterials: ["terracotta", "plaster", "olive wood"] },
  { id: "moroccan", name: "Moroccan", description: "Richly patterned, jewel-toned rooms with zellige tile, carved wood, and lanterns.", keywords: ["zellige", "jewel tones", "pattern", "lanterns", "carved wood", "ornate"], typicalPalette: "jewel-tones", typicalMaterials: ["zellige tile", "brass", "carved wood"] },
  { id: "boho", name: "Bohemian", description: "A layered, collected, free-spirited mix of patterns, plants, and global textiles.", keywords: ["layered", "eclectic", "plants", "pattern", "macramé", "textured"], typicalPalette: "earth-tones", typicalMaterials: ["rattan", "jute", "mixed textiles"] },
  { id: "art-deco", name: "Art Deco", description: "Glamorous geometry, lacquer, brass, and bold symmetrical opulence.", keywords: ["geometric", "brass", "lacquer", "glamorous", "symmetrical", "bold"], typicalPalette: "jewel-tones", typicalMaterials: ["brass", "lacquered wood", "marble"] },
  { id: "hollywood-regency", name: "Hollywood Regency", description: "Theatrical, high-gloss luxury with mirrored surfaces and vivid colour.", keywords: ["glossy", "mirrored", "bold colour", "glamorous", "ornate", "dramatic"], typicalPalette: "jewel-tones", typicalMaterials: ["mirror", "velvet", "brass"] },
  { id: "traditional", name: "Traditional", description: "Timeless, symmetrical rooms with classic wood furniture and rich textiles.", keywords: ["classic", "symmetrical", "wood", "rich textiles", "refined", "warm"], typicalPalette: "warm-neutrals", typicalMaterials: ["mahogany", "wool", "leather"] },
  { id: "victorian", name: "Victorian", description: "Ornate, layered period rooms with dark wood, deep colour, and detailed trim.", keywords: ["ornate", "dark wood", "patterned", "period", "layered", "formal"], typicalPalette: "jewel-tones", typicalMaterials: ["dark wood", "velvet", "brass"] },
  { id: "neoclassical", name: "Neoclassical", description: "Restrained classical elegance — columns, symmetry, marble, and soft neutrals.", keywords: ["classical", "symmetry", "marble", "elegant", "refined", "neutral"], typicalPalette: "warm-neutrals", typicalMaterials: ["marble", "plaster", "gilt"] },
  { id: "modern-luxury", name: "Modern Luxury", description: "Sleek, high-end calm with marble, warm metals, and plush tactile materials.", keywords: ["sleek", "marble", "brass", "plush", "refined", "calm"], typicalPalette: "warm-neutrals", typicalMaterials: ["marble", "brass", "velvet"] },
  { id: "transitional", name: "Transitional", description: "A balanced middle ground between traditional comfort and modern clean lines.", keywords: ["balanced", "neutral", "soft", "tailored", "classic-modern", "calm"], typicalPalette: "warm-neutrals", typicalMaterials: ["oak", "linen", "brushed nickel"] },
  { id: "wabi-sabi", name: "Wabi-Sabi", description: "Quiet beauty in imperfection — raw plaster, aged wood, and handmade texture.", keywords: ["imperfect", "handmade", "raw", "muted", "textured", "serene"], typicalPalette: "earth-tones", typicalMaterials: ["raw plaster", "aged wood", "stoneware"] },
  { id: "maximalist", name: "Maximalist", description: "More is more — bold colour, pattern on pattern, and curated abundance.", keywords: ["bold", "pattern", "colour", "layered", "eclectic", "abundant"], typicalPalette: "jewel-tones", typicalMaterials: ["velvet", "lacquer", "mixed pattern"] },
  { id: "memphis", name: "Memphis Design", description: "Playful 1980s postmodern shapes, primary colour, and graphic squiggles.", keywords: ["playful", "primary colour", "geometric", "graphic", "bold", "retro"], typicalPalette: "jewel-tones", typicalMaterials: ["laminate", "terrazzo", "lacquer"] },
  { id: "tropical", name: "Tropical", description: "Lush, resort-like rooms with rattan, palm prints, and verdant greenery.", keywords: ["rattan", "palm", "lush", "greenery", "breezy", "warm"], typicalPalette: "jewel-tones", typicalMaterials: ["rattan", "teak", "linen"] },
  { id: "zen", name: "Zen", description: "Serene, uncluttered calm with natural materials and soft, even light.", keywords: ["serene", "natural", "uncluttered", "soft light", "balanced", "minimal"], typicalPalette: "earth-tones", typicalMaterials: ["bamboo", "stone", "linen"] },
  { id: "urban-chic", name: "Urban Chic", description: "Polished city style mixing sleek modern pieces with warm industrial edges.", keywords: ["polished", "city", "sleek", "warm industrial", "tailored", "moody"], typicalPalette: "monochrome", typicalMaterials: ["blackened steel", "oak", "leather"] },
  { id: "country-cottage", name: "Country Cottage", description: "Charming, soft, lived-in comfort with florals, painted wood, and warmth.", keywords: ["cosy", "floral", "painted wood", "soft", "lived-in", "warm"], typicalPalette: "pastel", typicalMaterials: ["painted wood", "cotton", "ceramic"] },
  { id: "gothic-revival", name: "Gothic Revival", description: "Dramatic, dark romance with pointed arches, deep colour, and ornate detail.", keywords: ["dramatic", "dark", "ornate", "arches", "moody", "rich"], typicalPalette: "jewel-tones", typicalMaterials: ["dark oak", "wrought iron", "velvet"] },
  { id: "biophilic", name: "Biophilic", description: "Design that brings nature indoors — abundant plants, natural light, and organic materials.", keywords: ["plants", "natural light", "organic", "green", "living wall", "calm"], typicalPalette: "earth-tones", typicalMaterials: ["reclaimed wood", "stone", "greenery"] },
];

/* 100 items across 11 categories */
const ITEMS = [
  /* furniture (14) */
  { id: "sectional-sofa", name: "Sectional sofa", category: "furniture", roomTypes: ["living-room"], styleTags: ["scandinavian", "contemporary", "modern", "minimalist", "modern-luxury", "transitional"], promptText: "a cream bouclé sectional sofa" },
  { id: "loveseat", name: "Loveseat", category: "furniture", roomTypes: ["living-room", "guest-room"], styleTags: ["mid-century", "art-deco", "hollywood-regency", "traditional", "maximalist"], promptText: "a tufted velvet loveseat" },
  { id: "accent-armchair", name: "Accent armchair", category: "furniture", roomTypes: ["living-room", "bedroom", "home-office", "guest-room", "entrance-hall"], styleTags: ["mid-century", "modern", "contemporary", "boho", "scandinavian"], promptText: "a sculptural accent armchair" },
  { id: "dining-chairs", name: "Dining chairs", category: "furniture", roomTypes: ["dining-room", "kitchen"], styleTags: ["scandinavian", "japandi", "farmhouse", "coastal", "rustic", "mediterranean"], promptText: "a set of woven dining chairs" },
  { id: "coffee-table", name: "Coffee table", category: "furniture", roomTypes: ["living-room"], styleTags: ["rustic", "wabi-sabi", "mid-century", "boho", "farmhouse", "biophilic"], promptText: "a live-edge wood coffee table" },
  { id: "dining-table", name: "Dining table", category: "furniture", roomTypes: ["dining-room", "kitchen"], styleTags: ["farmhouse", "scandinavian", "rustic", "traditional", "transitional"], promptText: "a solid oak dining table" },
  { id: "platform-bed", name: "Platform bed", category: "furniture", roomTypes: ["bedroom", "guest-room"], styleTags: ["japandi", "minimalist", "scandinavian", "zen", "modern"], promptText: "a low oak platform bed" },
  { id: "upholstered-bed", name: "Upholstered bed", category: "furniture", roomTypes: ["bedroom", "guest-room"], styleTags: ["modern-luxury", "hollywood-regency", "contemporary", "transitional", "art-deco"], promptText: "a channel-tufted upholstered bed" },
  { id: "writing-desk", name: "Writing desk", category: "furniture", roomTypes: ["home-office", "bedroom"], styleTags: ["mid-century", "modern", "industrial", "traditional", "transitional"], promptText: "a walnut writing desk" },
  { id: "wardrobe", name: "Wardrobe", category: "furniture", roomTypes: ["bedroom", "guest-room"], styleTags: ["modern-luxury", "contemporary", "art-deco", "traditional"], promptText: "a freestanding fluted wardrobe" },
  { id: "entry-bench", name: "Entry bench", category: "furniture", roomTypes: ["entrance-hall", "bedroom"], styleTags: ["scandinavian", "farmhouse", "boho", "coastal", "japandi"], promptText: "a woven-seat entry bench" },
  { id: "nightstand", name: "Nightstand", category: "furniture", roomTypes: ["bedroom", "guest-room"], styleTags: ["japandi", "scandinavian", "mid-century", "contemporary"], promptText: "a rounded oak nightstand" },
  { id: "bar-stools", name: "Bar stools", category: "furniture", roomTypes: ["kitchen"], styleTags: ["industrial", "modern", "urban-chic", "farmhouse", "mid-century"], promptText: "leather counter bar stools" },
  { id: "ottoman-pouf", name: "Ottoman pouf", category: "furniture", roomTypes: ["living-room", "bedroom", "kids-room", "balcony"], styleTags: ["boho", "moroccan", "tropical", "maximalist"], promptText: "a Moroccan leather pouf" },

  /* lighting (11) */
  { id: "pendant-light", name: "Pendant light", category: "lighting", roomTypes: ["kitchen", "dining-room", "living-room", "entrance-hall"], styleTags: ["modern", "contemporary", "scandinavian", "industrial", "japandi"], promptText: "a sculptural pendant light" },
  { id: "chandelier", name: "Chandelier", category: "lighting", roomTypes: ["dining-room", "living-room", "bedroom", "entrance-hall"], styleTags: ["art-deco", "hollywood-regency", "victorian", "neoclassical", "modern-luxury", "gothic-revival"], promptText: "a crystal statement chandelier" },
  { id: "floor-lamp", name: "Floor lamp", category: "lighting", roomTypes: ["living-room", "home-office", "bedroom", "guest-room"], styleTags: ["mid-century", "modern", "contemporary", "minimalist"], promptText: "an arched reading floor lamp" },
  { id: "table-lamp", name: "Table lamp", category: "lighting", roomTypes: ["living-room", "bedroom", "home-office", "guest-room", "entrance-hall"], styleTags: ["traditional", "transitional", "contemporary", "coastal", "wabi-sabi"], promptText: "a ceramic-base table lamp" },
  { id: "wall-sconce", name: "Wall sconces", category: "lighting", roomTypes: ["bathroom", "bedroom", "living-room", "entrance-hall", "dining-room"], styleTags: ["art-deco", "modern-luxury", "traditional", "industrial", "neoclassical"], promptText: "brass wall sconces" },
  { id: "led-strip", name: "LED accent strip", category: "lighting", roomTypes: ["kitchen", "bedroom", "home-office", "kids-room", "living-room"], styleTags: ["modern", "contemporary", "urban-chic", "minimalist"], promptText: "warm hidden LED accent lighting" },
  { id: "cove-lighting", name: "Cove lighting", category: "lighting", roomTypes: ["living-room", "bedroom", "home-office", "dining-room"], styleTags: ["modern", "modern-luxury", "contemporary", "minimalist"], promptText: "concealed cove lighting" },
  { id: "recessed-lights", name: "Recessed downlights", category: "lighting", roomTypes: ["kitchen", "bathroom", "living-room", "home-office", "dining-room", "entrance-hall"], styleTags: ["modern", "minimalist", "contemporary", "industrial"], promptText: "recessed ceiling downlights" },
  { id: "arc-lamp", name: "Arc lamp", category: "lighting", roomTypes: ["living-room", "dining-room"], styleTags: ["mid-century", "modern", "hollywood-regency", "contemporary"], promptText: "an oversized arc lamp" },
  { id: "skylight", name: "Skylight", category: "lighting", roomTypes: ["kitchen", "bathroom", "bedroom", "living-room", "home-office"], styleTags: ["modern", "scandinavian", "minimalist", "biophilic", "loft"], promptText: "a flush ceiling skylight" },
  { id: "paper-lantern", name: "Paper lantern", category: "lighting", roomTypes: ["bedroom", "living-room", "guest-room", "kids-room"], styleTags: ["japandi", "zen", "scandinavian", "wabi-sabi", "boho"], promptText: "a rice-paper lantern" },

  /* decor (11) */
  { id: "framed-art", name: "Framed art", category: "decor", roomTypes: ["living-room", "bedroom", "home-office", "dining-room", "entrance-hall", "guest-room"], styleTags: ["modern", "contemporary", "mid-century", "maximalist", "minimalist"], promptText: "a large framed abstract artwork" },
  { id: "round-mirror", name: "Round mirror", category: "decor", roomTypes: ["entrance-hall", "bathroom", "bedroom", "living-room"], styleTags: ["art-deco", "contemporary", "modern-luxury", "boho", "coastal"], promptText: "a round brass-framed mirror" },
  { id: "ceramic-vase", name: "Ceramic vase", category: "decor", roomTypes: ["living-room", "dining-room", "bedroom", "entrance-hall"], styleTags: ["wabi-sabi", "japandi", "scandinavian", "boho", "contemporary"], promptText: "a hand-thrown ceramic vase" },
  { id: "sculpture", name: "Sculpture", category: "decor", roomTypes: ["living-room", "home-office", "entrance-hall"], styleTags: ["wabi-sabi", "modern", "minimalist", "modern-luxury", "contemporary"], promptText: "an organic stone sculpture" },
  { id: "wall-clock", name: "Wall clock", category: "decor", roomTypes: ["living-room", "kitchen", "home-office", "entrance-hall"], styleTags: ["modern", "industrial", "mid-century", "minimalist"], promptText: "an oversized minimalist wall clock" },
  { id: "candles", name: "Candles", category: "decor", roomTypes: ["living-room", "bedroom", "bathroom", "dining-room"], styleTags: ["rustic", "wabi-sabi", "traditional", "boho", "zen"], promptText: "a cluster of pillar candles" },
  { id: "coffee-books", name: "Coffee-table books", category: "decor", roomTypes: ["living-room", "home-office", "guest-room"], styleTags: ["contemporary", "modern", "traditional", "maximalist", "mid-century"], promptText: "a styled stack of coffee-table books" },
  { id: "photo-frames", name: "Photo frames", category: "decor", roomTypes: ["living-room", "bedroom", "home-office", "entrance-hall", "kids-room"], styleTags: ["traditional", "transitional", "contemporary", "country-cottage"], promptText: "a gallery wall of photo frames" },
  { id: "tapestry", name: "Wall tapestry", category: "decor", roomTypes: ["living-room", "bedroom", "guest-room"], styleTags: ["boho", "moroccan", "tropical", "maximalist", "rustic"], promptText: "a woven wall tapestry" },
  { id: "decorative-tray", name: "Decorative tray", category: "decor", roomTypes: ["living-room", "bedroom", "bathroom"], styleTags: ["modern-luxury", "contemporary", "hollywood-regency", "transitional"], promptText: "a styled decorative tray" },
  { id: "floor-mirror", name: "Floor mirror", category: "decor", roomTypes: ["bedroom", "living-room", "entrance-hall", "guest-room"], styleTags: ["modern-luxury", "contemporary", "art-deco", "minimalist", "coastal"], promptText: "a leaning oversized floor mirror" },

  /* flooring (8) */
  { id: "oak-hardwood", name: "Oak hardwood", category: "flooring", roomTypes: ["living-room", "bedroom", "dining-room", "home-office", "entrance-hall", "guest-room"], styleTags: ["scandinavian", "traditional", "transitional", "contemporary", "farmhouse", "modern"], promptText: "wide-plank oak hardwood floors" },
  { id: "walnut-floor", name: "Walnut flooring", category: "flooring", roomTypes: ["living-room", "bedroom", "dining-room", "home-office"], styleTags: ["mid-century", "traditional", "modern-luxury", "victorian"], promptText: "rich walnut plank flooring" },
  { id: "herringbone-parquet", name: "Herringbone parquet", category: "flooring", roomTypes: ["living-room", "dining-room", "bedroom", "entrance-hall"], styleTags: ["art-deco", "neoclassical", "traditional", "modern-luxury", "victorian"], promptText: "a herringbone parquet floor" },
  { id: "polished-concrete", name: "Polished concrete", category: "flooring", roomTypes: ["living-room", "kitchen", "home-office", "entrance-hall"], styleTags: ["industrial", "loft", "minimalist", "modern", "urban-chic"], promptText: "polished concrete floors" },
  { id: "terrazzo", name: "Terrazzo", category: "flooring", roomTypes: ["kitchen", "bathroom", "entrance-hall", "dining-room"], styleTags: ["memphis", "modern", "contemporary", "art-deco"], promptText: "speckled terrazzo flooring" },
  { id: "marble-tile", name: "Marble tile", category: "flooring", roomTypes: ["bathroom", "entrance-hall", "kitchen", "living-room"], styleTags: ["modern-luxury", "neoclassical", "hollywood-regency", "art-deco"], promptText: "veined marble tile floors" },
  { id: "ceramic-tile", name: "Ceramic tile", category: "flooring", roomTypes: ["kitchen", "bathroom", "balcony", "entrance-hall"], styleTags: ["mediterranean", "moroccan", "farmhouse", "rustic", "coastal"], promptText: "handmade ceramic floor tile" },
  { id: "wool-carpet", name: "Wool carpet", category: "flooring", roomTypes: ["bedroom", "home-office", "guest-room", "kids-room"], styleTags: ["traditional", "modern-luxury", "transitional", "contemporary"], promptText: "plush wool wall-to-wall carpet" },

  /* walls (8) */
  { id: "limewash-paint", name: "Limewash paint", category: "walls", roomTypes: ["living-room", "bedroom", "dining-room", "entrance-hall"], styleTags: ["wabi-sabi", "mediterranean", "rustic", "contemporary", "farmhouse"], promptText: "soft limewash-painted walls" },
  { id: "venetian-plaster", name: "Venetian plaster", category: "walls", roomTypes: ["living-room", "bathroom", "bedroom", "entrance-hall"], styleTags: ["modern-luxury", "mediterranean", "neoclassical", "contemporary"], promptText: "polished Venetian plaster walls" },
  { id: "shiplap", name: "Shiplap panelling", category: "walls", roomTypes: ["living-room", "bedroom", "kitchen", "bathroom", "entrance-hall"], styleTags: ["farmhouse", "coastal", "country-cottage", "rustic"], promptText: "white shiplap wall panelling" },
  { id: "exposed-brick", name: "Exposed brick", category: "walls", roomTypes: ["living-room", "kitchen", "home-office", "dining-room"], styleTags: ["industrial", "loft", "urban-chic", "rustic"], promptText: "an exposed red brick wall" },
  { id: "wallpaper", name: "Patterned wallpaper", category: "walls", roomTypes: ["living-room", "bedroom", "dining-room", "guest-room", "kids-room"], styleTags: ["maximalist", "victorian", "boho", "tropical", "country-cottage", "art-deco"], promptText: "botanical patterned wallpaper" },
  { id: "wood-paneling", name: "Wood panelling", category: "walls", roomTypes: ["living-room", "bedroom", "home-office", "entrance-hall"], styleTags: ["japandi", "mid-century", "scandinavian", "modern", "biophilic"], promptText: "warm wood slat panelling" },
  { id: "accent-wall", name: "Accent wall", category: "walls", roomTypes: ["living-room", "bedroom", "home-office", "kids-room"], styleTags: ["contemporary", "maximalist", "modern", "memphis"], promptText: "a colour-drenched accent wall" },
  { id: "zellige-wall", name: "Zellige tile wall", category: "walls", roomTypes: ["kitchen", "bathroom"], styleTags: ["moroccan", "mediterranean", "modern-luxury", "contemporary"], promptText: "a glazed zellige tile wall" },

  /* textiles (9) */
  { id: "wool-rug", name: "Wool area rug", category: "textiles", roomTypes: ["living-room", "bedroom", "dining-room", "home-office", "guest-room"], styleTags: ["scandinavian", "contemporary", "transitional", "traditional", "boho"], promptText: "a hand-knotted wool area rug" },
  { id: "persian-rug", name: "Persian rug", category: "textiles", roomTypes: ["living-room", "bedroom", "dining-room", "entrance-hall"], styleTags: ["boho", "traditional", "maximalist", "victorian", "mediterranean"], promptText: "a vintage Persian rug" },
  { id: "linen-curtains", name: "Linen curtains", category: "textiles", roomTypes: ["living-room", "bedroom", "dining-room", "guest-room"], styleTags: ["scandinavian", "coastal", "contemporary", "minimalist", "japandi"], promptText: "floor-length linen curtains" },
  { id: "roman-blinds", name: "Roman blinds", category: "textiles", roomTypes: ["kitchen", "bedroom", "home-office", "bathroom"], styleTags: ["traditional", "transitional", "farmhouse", "country-cottage"], promptText: "tailored roman blinds" },
  { id: "throw-pillows", name: "Throw pillows", category: "textiles", roomTypes: ["living-room", "bedroom", "guest-room", "balcony"], styleTags: ["boho", "coastal", "contemporary", "maximalist", "tropical"], promptText: "layered throw pillows" },
  { id: "throw-blanket", name: "Throw blanket", category: "textiles", roomTypes: ["living-room", "bedroom", "guest-room"], styleTags: ["scandinavian", "farmhouse", "rustic", "contemporary"], promptText: "a chunky knit throw blanket" },
  { id: "velvet-cushions", name: "Velvet cushions", category: "textiles", roomTypes: ["living-room", "bedroom"], styleTags: ["hollywood-regency", "art-deco", "maximalist", "modern-luxury", "victorian"], promptText: "jewel-toned velvet cushions" },
  { id: "boucle-upholstery", name: "Bouclé upholstery", category: "textiles", roomTypes: ["living-room", "bedroom", "home-office"], styleTags: ["contemporary", "modern-luxury", "scandinavian", "minimalist"], promptText: "soft bouclé upholstery" },
  { id: "sheer-drapes", name: "Sheer drapes", category: "textiles", roomTypes: ["living-room", "bedroom", "balcony", "guest-room"], styleTags: ["coastal", "tropical", "contemporary", "minimalist"], promptText: "airy sheer drapes" },

  /* plants (10) */
  { id: "monstera", name: "Monstera", category: "plants", roomTypes: ["living-room", "home-office", "bedroom", "balcony", "entrance-hall"], styleTags: ["boho", "tropical", "biophilic", "contemporary", "scandinavian"], promptText: "a large monstera plant" },
  { id: "fiddle-leaf", name: "Fiddle leaf fig", category: "plants", roomTypes: ["living-room", "home-office", "entrance-hall", "bedroom"], styleTags: ["contemporary", "modern", "biophilic", "coastal", "minimalist"], promptText: "a fiddle leaf fig tree" },
  { id: "snake-plant", name: "Snake plant", category: "plants", roomTypes: ["bedroom", "home-office", "bathroom", "entrance-hall"], styleTags: ["minimalist", "modern", "biophilic", "japandi"], promptText: "a sculptural snake plant" },
  { id: "pothos", name: "Pothos", category: "plants", roomTypes: ["kitchen", "bathroom", "home-office", "bedroom", "living-room"], styleTags: ["boho", "biophilic", "tropical", "contemporary"], promptText: "a trailing pothos vine" },
  { id: "olive-tree", name: "Olive tree", category: "plants", roomTypes: ["living-room", "balcony", "entrance-hall", "kitchen"], styleTags: ["mediterranean", "rustic", "contemporary", "biophilic", "coastal"], promptText: "a potted olive tree" },
  { id: "bird-of-paradise", name: "Bird of paradise", category: "plants", roomTypes: ["living-room", "home-office", "balcony", "entrance-hall"], styleTags: ["tropical", "biophilic", "contemporary", "coastal"], promptText: "a bird of paradise plant" },
  { id: "succulents", name: "Succulents", category: "plants", roomTypes: ["kitchen", "home-office", "bathroom", "bedroom", "balcony"], styleTags: ["minimalist", "modern", "biophilic", "memphis"], promptText: "a small succulent arrangement" },
  { id: "hanging-fern", name: "Hanging fern", category: "plants", roomTypes: ["bathroom", "balcony", "living-room", "kids-room"], styleTags: ["boho", "tropical", "biophilic", "country-cottage"], promptText: "a hanging Boston fern" },
  { id: "zz-plant", name: "ZZ plant", category: "plants", roomTypes: ["home-office", "entrance-hall", "bedroom", "bathroom"], styleTags: ["minimalist", "modern", "contemporary", "biophilic"], promptText: "a glossy ZZ plant" },
  { id: "bonsai", name: "Bonsai", category: "plants", roomTypes: ["home-office", "living-room", "bedroom", "entrance-hall"], styleTags: ["zen", "japandi", "wabi-sabi", "minimalist"], promptText: "a miniature bonsai tree" },

  /* kitchen (8) */
  { id: "kitchen-island", name: "Kitchen island", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["modern", "farmhouse", "modern-luxury", "contemporary", "transitional"], promptText: "a marble-topped kitchen island" },
  { id: "open-shelving", name: "Open shelving", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["scandinavian", "farmhouse", "japandi", "coastal", "rustic"], promptText: "open wood kitchen shelving" },
  { id: "quartz-counter", name: "Quartz countertop", category: "kitchen", roomTypes: ["kitchen", "bathroom"], styleTags: ["modern", "contemporary", "minimalist", "modern-luxury"], promptText: "quartz countertops" },
  { id: "shaker-cabinets", name: "Shaker cabinets", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["farmhouse", "traditional", "transitional", "country-cottage", "coastal"], promptText: "shaker-style cabinetry" },
  { id: "range-hood", name: "Range hood", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["mediterranean", "modern-luxury", "farmhouse", "contemporary"], promptText: "a statement plaster range hood" },
  { id: "farmhouse-sink", name: "Farmhouse sink", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["farmhouse", "country-cottage", "rustic", "coastal"], promptText: "an apron-front farmhouse sink" },
  { id: "pot-rack", name: "Pot rack", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["rustic", "farmhouse", "industrial", "traditional"], promptText: "a hanging iron pot rack" },
  { id: "island-pendants", name: "Island pendants", category: "kitchen", roomTypes: ["kitchen"], styleTags: ["modern", "industrial", "farmhouse", "contemporary", "mid-century"], promptText: "a pair of pendants over the island" },

  /* bathroom (8) */
  { id: "freestanding-tub", name: "Freestanding tub", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern-luxury", "contemporary", "scandinavian", "art-deco", "minimalist"], promptText: "a sculptural freestanding bathtub" },
  { id: "walk-in-shower", name: "Walk-in shower", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern", "minimalist", "contemporary", "modern-luxury"], promptText: "a frameless walk-in shower" },
  { id: "vessel-sink", name: "Vessel sink", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["wabi-sabi", "rustic", "contemporary", "japandi", "mediterranean"], promptText: "a stone vessel sink" },
  { id: "double-vanity", name: "Double vanity", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern", "contemporary", "modern-luxury", "minimalist"], promptText: "a floating double vanity" },
  { id: "backlit-mirror", name: "Backlit mirror", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern", "contemporary", "minimalist", "modern-luxury"], promptText: "a backlit LED mirror" },
  { id: "towel-rail", name: "Heated towel rail", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern", "contemporary", "transitional", "modern-luxury"], promptText: "a heated towel rail" },
  { id: "rainfall-shower", name: "Rainfall showerhead", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["modern-luxury", "contemporary", "modern", "zen"], promptText: "a rainfall showerhead" },
  { id: "bath-mat", name: "Bath mat", category: "bathroom", roomTypes: ["bathroom"], styleTags: ["scandinavian", "coastal", "contemporary", "farmhouse"], promptText: "a textured cotton bath mat" },

  /* outdoor (6) */
  { id: "bistro-set", name: "Bistro set", category: "outdoor", roomTypes: ["balcony", "entrance-hall"], styleTags: ["mediterranean", "country-cottage", "rustic", "farmhouse"], promptText: "a wrought-iron bistro set" },
  { id: "hammock", name: "Hammock", category: "outdoor", roomTypes: ["balcony", "kids-room"], styleTags: ["boho", "tropical", "coastal", "biophilic"], promptText: "a woven hanging hammock" },
  { id: "outdoor-sofa", name: "Outdoor sofa", category: "outdoor", roomTypes: ["balcony"], styleTags: ["coastal", "tropical", "contemporary", "boho", "modern"], promptText: "a weatherproof rattan outdoor sofa" },
  { id: "planters", name: "Planters", category: "outdoor", roomTypes: ["balcony", "entrance-hall"], styleTags: ["mediterranean", "biophilic", "contemporary", "coastal"], promptText: "oversized outdoor planters" },
  { id: "string-lights", name: "String lights", category: "outdoor", roomTypes: ["balcony"], styleTags: ["boho", "coastal", "country-cottage", "tropical", "farmhouse"], promptText: "warm festoon string lights" },
  { id: "pergola", name: "Pergola", category: "outdoor", roomTypes: ["balcony"], styleTags: ["mediterranean", "coastal", "rustic", "biophilic"], promptText: "a timber pergola overhead" },

  /* storage (7) */
  { id: "floating-shelves", name: "Floating shelves", category: "storage", roomTypes: ["living-room", "bedroom", "home-office", "kitchen", "bathroom", "kids-room"], styleTags: ["scandinavian", "minimalist", "modern", "contemporary", "industrial"], promptText: "minimal floating shelves" },
  { id: "built-in-wardrobe", name: "Built-in wardrobe", category: "storage", roomTypes: ["bedroom", "guest-room"], styleTags: ["modern", "modern-luxury", "contemporary", "minimalist", "transitional"], promptText: "a seamless built-in wardrobe" },
  { id: "storage-baskets", name: "Storage baskets", category: "storage", roomTypes: ["living-room", "bedroom", "bathroom", "kids-room", "entrance-hall"], styleTags: ["boho", "scandinavian", "coastal", "farmhouse", "japandi"], promptText: "woven storage baskets" },
  { id: "bookshelf", name: "Bookshelf", category: "storage", roomTypes: ["living-room", "home-office", "bedroom"], styleTags: ["traditional", "industrial", "mid-century", "contemporary", "maximalist"], promptText: "a floor-to-ceiling bookshelf" },
  { id: "media-console", name: "Media console", category: "storage", roomTypes: ["living-room", "bedroom"], styleTags: ["mid-century", "modern", "contemporary", "scandinavian", "minimalist"], promptText: "a low media console" },
  { id: "sideboard", name: "Sideboard", category: "storage", roomTypes: ["dining-room", "living-room", "entrance-hall"], styleTags: ["mid-century", "art-deco", "contemporary", "modern-luxury", "transitional"], promptText: "a fluted wood sideboard" },
  { id: "shoe-cabinet", name: "Shoe cabinet", category: "storage", roomTypes: ["entrance-hall"], styleTags: ["scandinavian", "minimalist", "modern", "contemporary"], promptText: "a slim shoe cabinet" },
];

/* category display order + labels used by the library */
const CATEGORIES = [
  { id: "furniture", name: "Furniture" },
  { id: "lighting",  name: "Lighting" },
  { id: "decor",     name: "Decor" },
  { id: "flooring",  name: "Flooring" },
  { id: "walls",     name: "Walls" },
  { id: "textiles",  name: "Textiles" },
  { id: "plants",    name: "Plants" },
  { id: "kitchen",   name: "Kitchen" },
  { id: "bathroom",  name: "Bathroom" },
  { id: "outdoor",   name: "Outdoor" },
  { id: "storage",   name: "Storage" },
];

const LIGHTING_MOODS = [
  { id: "daylight", label: "Natural daylight", phrase: "bright natural daylight" },
  { id: "evening",  label: "Warm evening",     phrase: "warm evening light" },
  { id: "dramatic", label: "Dramatic spotlight", phrase: "dramatic directional spotlighting" },
  { id: "soft",     label: "Soft diffused",     phrase: "soft diffused light" },
];

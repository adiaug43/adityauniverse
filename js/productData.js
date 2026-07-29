// Demo data — generic sample entries with clearly-labeled placeholder images
// (via placehold.co) so this file works out-of-the-box when hosted
// (e.g. GitHub Pages) without any local /database/thumbnails folder or
// personal information. Each image shows the product name as text so it
// stays relevant to the item it represents (no random unrelated photos).

// helper to build a labeled placeholder image url
// colors: electronics = blue, cloth = green, lifestyle = orange
const img = (text, color) =>
  `https://placehold.co/500x500/${color}/ffffff?text=${encodeURIComponent(text)}&font=roboto`;

const COLORS = {
  electronics: "2563eb",
  cloth: "16a34a",
  lifestyle: "ea580c"
};

const inventory = {
  // product-01
  "bluetooth-headphone": {
    name: "SonicWave Wireless Gaming Headphone with Mic",
    type: "electronics",
    inBox: "headphone",
    location: "Storage Shelf B2",
    material: "plastic, other",
    mainImg: img("Bluetooth Headphone", COLORS.electronics),
    extraImages: [
      img("Headphone - View 1", COLORS.electronics),
      img("Headphone - View 2", COLORS.electronics),
      img("Headphone - View 3", COLORS.electronics)
    ]
  },
  // product-02
  "home-decoration-led-light": {
    name: "home decoration led light",
    type: "electronics",
    inBox: "led strip with usb connector",
    location: "Drawer 3, Living Room Unit",
    material: "metal wire, plastic cable",
    mainImg: img("LED Decoration Light", COLORS.electronics),
    extraImages: [
      img("LED Light - View 1", COLORS.electronics),
      img("LED Light - View 2", COLORS.electronics),
      img("LED Light - View 3", COLORS.electronics),
      img("LED Light - View 4", COLORS.electronics)
    ]
  },
  // product-03
  "vebnor-lower": {
    name: "Vebnor gray, black lower",
    type: "cloth",
    inBox: "one black and one gray lower",
    location: "Wardrobe, Section 2",
    material: "synthetic fiber",
    mainImg: img("Vebnor Lower", COLORS.cloth),
    extraImages: [
      img("Lower - View 1", COLORS.cloth),
      img("Lower - View 2", COLORS.cloth),
      img("Lower - View 3", COLORS.cloth),
      img("Lower - View 4", COLORS.cloth),
      img("Lower - View 5", COLORS.cloth)
    ]
  },
  //product-04
  "laptop-bag": {
    name: "Voyager Unisex Spacy Laptop Backpack with Rain Cover, 35L",
    type: "lifestyle",
    inBox: "a bag and rain-cover",
    location: "Hallway Closet",
    material: "synthetic fiber and plastic",
    mainImg: img("Laptop Backpack", COLORS.lifestyle),
    extraImages: [
      img("Backpack - View 1", COLORS.lifestyle),
      img("Backpack - View 2", COLORS.lifestyle),
      img("Backpack - View 3", COLORS.lifestyle),
      img("Backpack - View 4", COLORS.lifestyle),
      img("Backpack - View 5", COLORS.lifestyle),
      img("Backpack - View 6", COLORS.lifestyle),
      img("Backpack - View 7", COLORS.lifestyle),
      img("Backpack - View 8", COLORS.lifestyle),
      img("Backpack - View 9", COLORS.lifestyle)
    ]
  },
  //product-05
  "pexpo-water-bottle": {
    name: "AquaFresh BISTRO Stainless Steel Leakproof Water Bottle, 1000 ml, Black",
    type: "lifestyle",
    inBox: "water bottle and rust preventer",
    location: "Kitchen Cabinet",
    material: "stainless steel",
    mainImg: img("Water Bottle", COLORS.lifestyle),
    extraImages: [
      img("Bottle - View 1", COLORS.lifestyle),
      img("Bottle - View 2", COLORS.lifestyle),
      img("Bottle - View 3", COLORS.lifestyle),
      img("Bottle - View 4", COLORS.lifestyle),
      img("Bottle - View 5", COLORS.lifestyle)
    ]
  },
  //product-06
  "lower-innerwear": {
    name: "ComfyFit lower innerwear",
    type: "cloth",
    inBox: "single brown trunk",
    location: "Dresser Drawer",
    material: "100% super combed cotton",
    mainImg: img("Innerwear - Lower", COLORS.cloth),
    extraImages: [
      img("Innerwear - View 1", COLORS.cloth),
      img("Innerwear - View 2", COLORS.cloth)
    ]
  },
  //product-07
  "upper-innerwear-maroon": {
    name: "ComfyFit sando vest",
    type: "cloth",
    inBox: "single maroon 80cm sando vest",
    location: "Dresser Drawer",
    material: "100% super combed cotton",
    mainImg: img("Vest - Maroon", COLORS.cloth),
    extraImages: [
      img("Vest Maroon - View 1", COLORS.cloth)
    ]
  },
  //product-08
  "upper-innerwear-white": {
    name: "PureStyle sando vest",
    type: "cloth",
    inBox: "single white 80cm sando vest",
    location: "Dresser Drawer",
    material: "cotton",
    mainImg: img("Vest - White", COLORS.cloth),
    extraImages: [
      img("Vest White - View 1", COLORS.cloth)
    ]
  },
  //product-09
  "bluetooth-earbuds": {
    name: "TWS-L21 Wireless Earbuds",
    type: "electronics",
    inBox: "pair of earbuds, charging case and micro USB cable",
    location: "Desk Organizer",
    material: "mostly plastic, rubber, internal circuit and battery",
    mainImg: img("Bluetooth Earbuds", COLORS.electronics),
    extraImages: [
      img("Earbuds - View 1", COLORS.electronics),
      img("Earbuds - View 2", COLORS.electronics),
      img("Earbuds - View 3", COLORS.electronics),
      img("Earbuds - View 4", COLORS.electronics),
      img("Earbuds - View 5", COLORS.electronics)
    ]
  },
  //product-10
  "mosquito-racket": {
    name: "ZapPro 888 Rechargeable Electric Insect Swatter",
    type: "electronics",
    inBox: "only mosquito racket",
    location: "Utility Cabinet",
    material: "plastic, metal net and other",
    mainImg: img("Mosquito Racket", COLORS.electronics),
    extraImages: [
      img("Racket - View 1", COLORS.electronics),
      img("Racket - View 2", COLORS.electronics),
      img("Racket - View 3", COLORS.electronics),
      img("Racket - View 4", COLORS.electronics)
    ]
  },
  //product-11
  "rosegold-ethnic": {
    name: "N003 Rosegold Gold-Plated Stainless Steel Ethnic Bracelet",
    type: "lifestyle",
    inBox: "one rosegold ethnic bracelet",
    location: "Jewelry Box",
    material: "stainless steel",
    mainImg: img("Rosegold Bracelet", COLORS.lifestyle),
    extraImages: [
      img("Bracelet - View 1", COLORS.lifestyle),
      img("Bracelet - View 2", COLORS.lifestyle),
      img("Bracelet - View 3", COLORS.lifestyle),
      img("Bracelet - View 4", COLORS.lifestyle),
      img("Bracelet - View 5", COLORS.lifestyle)
    ]
  },
};

// If using ES modules, uncomment the line below:
// export default inventory;
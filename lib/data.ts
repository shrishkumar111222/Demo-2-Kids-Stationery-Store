import type { ArtKind } from "@/components/art/ProductArt";

export type Product = {
  id: string;
  name: string;
  art: ArtKind;
  price: number;
  mrp?: number;
  rating: number;
  reviews: number;
  tag?: string;
  plate: string;
  blurb: string;
};

const PLATES = ["#FFD93D", "#5BC0FF", "#8B5CF6", "#FF80BF", "#6EE7B7"];
const plate = (i: number) => PLATES[i % PLATES.length];

export const schoolEssentials: Product[] = [
  { id: "se-1", name: "Ruled Notebooks (Pack of 6)", art: "notebook", price: 249, mrp: 349, rating: 4.9, reviews: 214, tag: "Bestseller", plate: plate(0), blurb: "172 pages, bright covers, no bleed-through." },
  { id: "se-2", name: "NCERT & School Book Set", art: "books", price: 899, mrp: 1099, rating: 4.8, reviews: 156, tag: "All Classes", plate: plate(1), blurb: "Class 1–10 sets, brown-paper cover free." },
  { id: "se-3", name: "Smooth Gel Pens (Pack of 10)", art: "pen", price: 199, mrp: 260, rating: 4.7, reviews: 302, plate: plate(2), blurb: "Quick-dry ink, no smudge on exam day." },
  { id: "se-4", name: "Dark Writing Pencils (Box of 12)", art: "pencil", price: 99, mrp: 130, rating: 4.9, reviews: 411, tag: "Top Rated", plate: plate(3), blurb: "Extra-dark lead that doesn't snap." },
  { id: "se-5", name: "Dust-Free Erasers (Set of 5)", art: "eraser", price: 60, mrp: 85, rating: 4.6, reviews: 189, plate: plate(4), blurb: "Erases clean, leaves no grey ghost." },
  { id: "se-6", name: "Cartoon Sharpener with Bin", art: "sharpener", price: 75, mrp: 99, rating: 4.7, reviews: 143, plate: plate(1), blurb: "Catches every shaving. No messy desks." },
  { id: "se-7", name: "Flexible 30cm Scale", art: "ruler", price: 45, mrp: 60, rating: 4.5, reviews: 97, plate: plate(2), blurb: "Bends but never breaks in the bag." },
  { id: "se-8", name: "Complete Geometry Box", art: "geometry", price: 279, mrp: 399, rating: 4.8, reviews: 268, tag: "30% OFF", plate: plate(3), blurb: "Compass, divider, set squares & more." },
  { id: "se-9", name: "Exam-Approved Calculator", art: "calculator", price: 649, mrp: 799, rating: 4.7, reviews: 88, plate: plate(4), blurb: "Scientific, 240 functions, board-safe." },
  { id: "se-10", name: "Document Folders (Pack of 3)", art: "folder", price: 149, mrp: 199, rating: 4.6, reviews: 121, plate: plate(0), blurb: "Keeps projects crisp, not crumpled." },
];

export const artCraft: Product[] = [
  { id: "ac-1", name: "Water Colour Cake Set", art: "watercolor", price: 189, mrp: 249, rating: 4.8, reviews: 234, tag: "Loved", plate: plate(1), blurb: "24 shades, washes off little hands." },
  { id: "ac-2", name: "Poster Colour Bottles (12)", art: "postercolor", price: 329, mrp: 449, rating: 4.7, reviews: 176, plate: plate(3), blurb: "Thick, bright, perfect for chart work." },
  { id: "ac-3", name: "Sketch Pens (Pack of 24)", art: "sketchpens", price: 179, mrp: 229, rating: 4.9, reviews: 388, tag: "Bestseller", plate: plate(0), blurb: "Washable ink, fine tips, bold colour." },
  { id: "ac-4", name: "Canvas Board with Easel", art: "canvas", price: 449, mrp: 599, rating: 4.6, reviews: 64, plate: plate(2), blurb: "Real artist canvas, kid-sized." },
  { id: "ac-5", name: "Craft Paper Bundle (100)", art: "craftpaper", price: 199, mrp: 260, rating: 4.7, reviews: 142, plate: plate(4), blurb: "Textured, glitter & metallic sheets." },
  { id: "ac-6", name: "Origami Sheets (200 pcs)", art: "origami", price: 149, mrp: 199, rating: 4.8, reviews: 205, plate: plate(1), blurb: "Comes with a 30-model booklet." },
  { id: "ac-7", name: "Non-Toxic Glue Sticks (3)", art: "glue", price: 99, mrp: 135, rating: 4.7, reviews: 167, plate: plate(2), blurb: "Washable, acid-free, safe for tiny hands." },
  { id: "ac-8", name: "Blunt-Tip Safety Scissors", art: "scissors", price: 89, mrp: 120, rating: 4.9, reviews: 254, tag: "Kid Safe", plate: plate(3), blurb: "Rounded tips — cuts paper, not fingers." },
  { id: "ac-9", name: "Modelling Clay Kit (12 Colours)", art: "clay", price: 249, mrp: 349, rating: 4.8, reviews: 291, plate: plate(0), blurb: "Soft, reusable, no drying out." },
  { id: "ac-10", name: "DIY Robot Craft Kit", art: "diykit", price: 599, mrp: 799, rating: 4.7, reviews: 73, tag: "New", plate: plate(4), blurb: "Build-it-yourself, screwdriver included." },
];

export const backpacks: Product[] = [
  { id: "bp-1", name: "Kids School Backpack", art: "backpack", price: 899, mrp: 1299, rating: 4.8, reviews: 312, tag: "Padded Straps", plate: plate(2), blurb: "Cushioned back panel for growing spines. Fits A4 files, water bottle and a big lunch box." },
  { id: "bp-2", name: "Character Print Bag", art: "characterbag", price: 749, mrp: 999, rating: 4.9, reviews: 268, tag: "Kids' Favourite", plate: plate(3), blurb: "Ears, faces and colours they'll show off in the school van." },
  { id: "bp-3", name: "Weekend Travel Duffel", art: "travelbag", price: 1249, mrp: 1699, rating: 4.6, reviews: 94, plate: plate(4), blurb: "Sturdy zips, wipe-clean base — sports kit or sleepover ready." },
  { id: "bp-4", name: "Trolley School Bag", art: "trolley", price: 1899, mrp: 2499, rating: 4.7, reviews: 121, tag: "Back Friendly", plate: plate(1), blurb: "Silent wheels and a lock-in handle for heavy book days." },
  { id: "bp-5", name: "Teen Laptop Backpack", art: "laptopbag", price: 1499, mrp: 1999, rating: 4.8, reviews: 87, plate: plate(0), blurb: "Padded 15\" sleeve, water-resistant, quietly premium." },
];

export const lunchBoxes: Product[] = [
  { id: "lb-1", name: "Insulated Lunch Box", art: "lunchbox", price: 549, mrp: 699, rating: 4.8, reviews: 231, tag: "Stays Warm 5h", plate: plate(0), blurb: "Leak-locked lid, warm rotis till lunch bell." },
  { id: "lb-2", name: "Steel Water Bottle 750ml", art: "steelbottle", price: 649, mrp: 849, rating: 4.9, reviews: 344, tag: "Bestseller", plate: plate(1), blurb: "Double wall, sweat-free, no metal taste." },
  { id: "lb-3", name: "BPA-Free Plastic Bottle", art: "plasticbottle", price: 249, mrp: 349, rating: 4.6, reviews: 198, plate: plate(3), blurb: "Feather-light with a flip-lock sipper." },
  { id: "lb-4", name: "Two-Section Snack Box", art: "snackbox", price: 329, mrp: 429, rating: 4.7, reviews: 156, plate: plate(4), blurb: "Fruit on one side, biscuits the other." },
  { id: "lb-5", name: "Mini Thermos Flask", art: "thermos", price: 799, mrp: 999, rating: 4.8, reviews: 102, plate: plate(2), blurb: "Soup and milk, still hot at recess." },
];

export const pencilBoxes: Product[] = [
  { id: "pb-1", name: "Magnetic Cartoon Box", art: "tinbox", price: 299, mrp: 399, rating: 4.8, reviews: 187, tag: "Double Deck", plate: plate(3), blurb: "Snap-shut lid with a secret second tray." },
  { id: "pb-2", name: "Metal Pencil Case", art: "tinbox", price: 199, mrp: 260, rating: 4.6, reviews: 134, plate: plate(1), blurb: "Dent-proof tin that survives Class 4." },
  { id: "pb-3", name: "Zipper Pouch – Mint", art: "pouch", price: 179, mrp: 240, rating: 4.7, reviews: 211, plate: plate(4), blurb: "Soft canvas, three roomy pockets." },
  { id: "pb-4", name: "Zipper Pouch – Bubble", art: "pouch", price: 179, mrp: 240, rating: 4.7, reviews: 168, plate: plate(3), blurb: "Same pouch, sweeter colour." },
  { id: "pb-5", name: "Pop-Up Pencil Box", art: "tinbox", price: 349, mrp: 499, rating: 4.9, reviews: 143, tag: "New", plate: plate(2), blurb: "Press the button, the sharpener pops out." },
  { id: "pb-6", name: "Gift-Wrapped Combo Box", art: "giftbox", price: 599, mrp: 799, rating: 4.9, reviews: 96, tag: "Gift Ready", plate: plate(0), blurb: "Box, pens, eraser set — wrapped free." },
];

export const bestSellers: Product[] = [
  schoolEssentials[0],
  artCraft[2],
  lunchBoxes[1],
  backpacks[1],
  schoolEssentials[3],
  artCraft[8],
  pencilBoxes[0],
  schoolEssentials[7],
  lunchBoxes[0],
  artCraft[0],
  backpacks[0],
  pencilBoxes[5],
].map((p, i) => ({ ...p, id: `bs-${i}-${p.id}` }));

export type Category = {
  name: string;
  art: ArtKind;
  count: string;
  color: string;
  soft: string;
};

export const categories: Category[] = [
  { name: "Notebooks", art: "notebook", count: "48 items", color: "#5BC0FF", soft: "#D6F0FF" },
  { name: "Pens & Pencils", art: "pencil", count: "92 items", color: "#FFD93D", soft: "#FFF3C4" },
  { name: "Crayons", art: "crayons", count: "34 items", color: "#FF80BF", soft: "#FFE0EF" },
  { name: "Colour Pencils", art: "colorpencils", count: "27 items", color: "#8B5CF6", soft: "#EAE2FD" },
  { name: "Paint Kits", art: "paintkit", count: "31 items", color: "#6EE7B7", soft: "#D6F9EA" },
  { name: "Sketch Books", art: "sketchbook", count: "22 items", color: "#5BC0FF", soft: "#D6F0FF" },
  { name: "Geometry Box", art: "geometry", count: "14 items", color: "#FFD93D", soft: "#FFF3C4" },
  { name: "Craft Supplies", art: "craftpaper", count: "63 items", color: "#FF80BF", soft: "#FFE0EF" },
  { name: "School Bags", art: "backpack", count: "40 items", color: "#8B5CF6", soft: "#EAE2FD" },
  { name: "Lunch Boxes", art: "lunchbox", count: "26 items", color: "#6EE7B7", soft: "#D6F9EA" },
  { name: "Water Bottles", art: "steelbottle", count: "35 items", color: "#5BC0FF", soft: "#D6F0FF" },
  { name: "Pencil Boxes", art: "tinbox", count: "29 items", color: "#FFD93D", soft: "#FFF3C4" },
  { name: "Gift Items", art: "giftbox", count: "58 items", color: "#FF80BF", soft: "#FFE0EF" },
];

export const testimonials = [
  {
    name: "Ritu Sharma",
    role: "Mother of 2 · Class 3 & Class 7",
    initials: "RS",
    color: "#FF80BF",
    quote:
      "I sent one WhatsApp message with my daughter's school list and everything came home the same evening — labelled, wrapped and exactly right. I haven't stood in a stationery queue in two years.",
  },
  {
    name: "Anil Verma",
    role: "Father · Class 5",
    initials: "AV",
    color: "#5BC0FF",
    quote:
      "The bag we bought last April is still going strong after a full year of being thrown around a school bus. That says more than any discount.",
  },
  {
    name: "Meenakshi Iyer",
    role: "Mother · Class 1",
    initials: "#6EE7B7",
    quote:
      "My son is five, so 'non-toxic' isn't a nice-to-have. They showed me the safety marking on every single craft item without me even asking.",
  },
  {
    name: "Sunita Das",
    role: "Primary School Teacher",
    initials: "SD",
    color: "#FFD93D",
    quote:
      "I order craft supplies for 40 children before every annual day. Bulk rate, one delivery, zero follow-up calls. They just handle it.",
  },
  {
    name: "Rohit Kumar",
    role: "Father of 3",
    initials: "RK",
    color: "#8B5CF6",
    quote:
      "Three school lists, three different classes, one shop. The staff know which notebook each school insists on — that alone saves me a Sunday.",
  },
].map((t, i) => ({
  ...t,
  initials: [t.name[0], t.name.split(" ")[1]?.[0] ?? ""].join(""),
  color: ["#FF80BF", "#5BC0FF", "#6EE7B7", "#FFD93D", "#8B5CF6"][i],
}));

export const faqs = [
  {
    q: "Do you deliver?",
    a: "Yes. Free home delivery across the city on orders above ₹499, usually the same day if you order before 4 PM. Outside city limits we ship pan-India in 2–4 working days, and you get a tracking link on WhatsApp.",
  },
  {
    q: "Do you sell school books?",
    a: "We stock NCERT and most local school syllabus sets for Classes 1 to 10, plus practice books, atlases and drawing files. Send us a photo of your school's book list and we'll confirm availability within the hour.",
  },
  {
    q: "Can I order on WhatsApp?",
    a: "That's how most of our parents shop. Send the list — typed, handwritten photo, or a voice note — and we'll reply with a priced cart, pack it, and deliver. Pay on delivery or by UPI, whichever you prefer.",
  },
  {
    q: "Do you provide gift wrapping?",
    a: "Free gift wrapping on every gift item, with a handwritten card if you tell us the birthday child's name. Premium ribbon-and-box wrapping is ₹49 extra and looks worth a lot more than that.",
  },
  {
    q: "Do you offer bulk discounts?",
    a: "Yes — for schools, tuition centres, birthday return-gift orders and anything above 25 pieces. Bulk pricing starts at 15% off and goes up with quantity. Message us with what you need and we'll send a written quote.",
  },
];

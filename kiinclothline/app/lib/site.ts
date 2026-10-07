export const site = {
  name: "Kiin Clothline",
  location: "Eastleigh,Astom College  Nairobi, Kenya",
  phone: "+254790132055",
  phoneDisplay: "+254 790 132 055",
  whatsapp: "254790132055",
  instagram: "https://www.instagram.com/kiin_clothline/",
  instagramHandle: "@kiin_clothline",
  mapEmbed: "https://www.google.com/maps?q=Eastleigh Astom College,+Nairobi,+Kenya&output=embed",
};

export type Suit = {
  title: string;
  category: "Wedding" | "Business" | "Evening" | "Blazers & Coats" | "Smart Casual";
  image: string;
  description: string;
};

// Gallery content. Images live in /public/suits.
export const suits: Suit[] = [
  { title: "Embroidered Groom Suit", category: "Wedding", image: "/suits/embroidered-groom-suit.jpg", description: "Ivory three-piece with hand-beaded lapels." },
  { title: "Cream Double-Breasted", category: "Wedding", image: "/suits/cream-double-breasted.jpg", description: "Peak lapels, six-button front, tailored waist." },
  { title: "Ivory Two-Piece", category: "Wedding", image: "/suits/ivory-two-piece.jpg", description: "Clean ivory suit with a teal shirt, made for the big day." },
  { title: "The Wedding Party", category: "Wedding", image: "/suits/wedding-party.jpg", description: "Matching black tuxedo and dove-grey suit for the groom's party." },
  { title: "Navy Pinstripe Double-Breasted", category: "Business", image: "/suits/navy-pinstripe-double-breasted.jpg", description: "Chalk-stripe navy with an orange silk accent." },
  { title: "Charcoal Double-Breasted", category: "Business", image: "/suits/charcoal-double-breasted.jpg", description: "Sharp charcoal cut with a structured shoulder." },
  { title: "Royal Blue Double-Breasted", category: "Business", image: "/suits/royal-blue-double-breasted.jpg", description: "Bold royal blue, slim trousers, statement tie." },
  { title: "Navy Double-Breasted", category: "Business", image: "/suits/navy-double-breasted.jpg", description: "Classic navy with gold buttons." },
  { title: "Navy Two-Piece", category: "Business", image: "/suits/navy-two-piece.jpg", description: "Everyday navy suit paired with a burgundy tie." },
  { title: "Charcoal Signature Suit", category: "Business", image: "/suits/charcoal-suit-red.jpg", description: "Deep charcoal two-piece for the boardroom." },
  { title: "Silver-Grey Suit", category: "Business", image: "/suits/silver-grey-suit.jpg", description: "Light silver-grey with a soft open collar." },
  { title: "Slate Grey Suit", category: "Business", image: "/suits/slate-grey-suit.jpg", description: "Slate grey, slim fit, worn with a striped tie." },
  { title: "Light Grey Check Suit", category: "Business", image: "/suits/light-grey-check-suit.jpg", description: "Subtle windowpane check, perfect for day events." },
  { title: "Black Tuxedo", category: "Evening", image: "/suits/black-tuxedo.jpg", description: "Satin shawl lapel tuxedo with a bow tie." },
  { title: "Ivory Dinner Jacket", category: "Evening", image: "/suits/ivory-dinner-jacket.jpg", description: "White dinner jacket over navy trousers." },
  { title: "Burgundy Double-Breasted", category: "Evening", image: "/suits/burgundy-double-breasted.jpg", description: "Rich burgundy with gold buttons." },
  { title: "Brown Check Blazer", category: "Blazers & Coats", image: "/suits/brown-check-blazer.jpg", description: "Brown windowpane check with a patterned silk tie." },
  { title: "Camel Blazer", category: "Blazers & Coats", image: "/suits/camel-blazer.jpg", description: "Soft camel jacket with navy accents." },
  { title: "Houndstooth Sport Coat", category: "Blazers & Coats", image: "/suits/houndstooth-sport-coat.jpg", description: "Tan houndstooth with grey trousers." },
  { title: "Black Overcoat", category: "Blazers & Coats", image: "/suits/black-overcoat.jpg", description: "Long tailored overcoat for cooler Nairobi evenings." },
  { title: "Navy & Cream Showroom Pair", category: "Smart Casual", image: "/suits/showroom-navy-and-cream.jpg", description: "Navy suit and cream jacket, styled in our showroom." },
  { title: "Smart Casual", category: "Smart Casual", image: "/suits/smart-casual-white-trousers.jpg", description: "Tailored white trousers with a denim-blue shirt." },
];

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
  category:
    | "Wedding Suits"
    | "Evening Suits"
    | "Business Suits"
    | "Tailored Pants"
    | "Linen"
    | "Smart Casual"
    | "Blazers"
    | "Premium Luxury Wool Suits";
  image: string;
  description: string;
};

// Gallery images grouped by collection category. Images live in /public/suits.
export const suits: Suit[] = [
  { title: "Embroidered Groom Suit", category: "Wedding Suits", image: "/suits/embroidered-groom-suit.jpg", description: "An ivory groom's suit with embroidered lapels for a memorable day." },
  { title: "Cream Double-Breasted", category: "Wedding Suits", image: "/suits/cream-double-breasted.jpg", description: "A cream double-breasted look with a sharp, tailored shape." },
  { title: "Ivory Two-Piece", category: "Wedding Suits", image: "/suits/ivory-two-piece.jpg", description: "A clean ivory suit styled for a wedding celebration." },
  { title: "The Wedding Party", category: "Wedding Suits", image: "/suits/wedding-party.jpg", description: "Coordinated looks for the groom and his party." },

  { title: "Black Tuxedo", category: "Evening Suits", image: "/suits/black-tuxedo.jpg", description: "A classic black tuxedo for black-tie occasions." },
  { title: "Ivory Dinner Jacket", category: "Evening Suits", image: "/suits/ivory-dinner-jacket.jpg", description: "An ivory dinner jacket with a formal evening silhouette." },
  { title: "Burgundy Double-Breasted", category: "Evening Suits", image: "/suits/burgundy-double-breasted.jpg", description: "A rich burgundy double-breasted look for evening events." },
  { title: "Burgundy Evening Jacket", category: "Evening Suits", image: "/suits/18e591fa-5284-4d94-8b03-999e73ad005f.JPG", description: "A deep burgundy jacket styled for a night out." },
  { title: "Burgundy Formal Look", category: "Evening Suits", image: "/suits/56d7b8aa-4bab-41a1-81b2-1eff06722357.JPG", description: "A bold burgundy look with clean black accents." },

  { title: "Navy Pinstripe Double-Breasted", category: "Business Suits", image: "/suits/navy-pinstripe-double-breasted.jpg", description: "Navy chalk stripes with a confident double-breasted cut." },
  { title: "Charcoal Double-Breasted", category: "Business Suits", image: "/suits/charcoal-double-breasted.jpg", description: "A sharp charcoal suit with a structured shoulder." },
  { title: "Royal Blue Double-Breasted", category: "Business Suits", image: "/suits/royal-blue-double-breasted.jpg", description: "A bold blue suit for a modern professional wardrobe." },
  { title: "Navy Double-Breasted", category: "Business Suits", image: "/suits/navy-double-breasted.jpg", description: "Classic navy with a double-breasted front." },
  { title: "Navy Two-Piece", category: "Business Suits", image: "/suits/navy-two-piece.jpg", description: "An adaptable navy two-piece for work and formal occasions." },

  { title: "Brown Tailored Trousers", category: "Tailored Pants", image: "/suits/1224c974-6e44-4ce9-8ace-0216435d1af8.JPG", description: "Close-up of a brown tailored trouser with a high waist." },
  { title: "Classic Brown Trousers", category: "Tailored Pants", image: "/suits/41e0da1e-e9a0-4170-8c01-be4eaeb0210f.JPG", description: "A clean front crease and adjustable side details." },
  { title: "Ivory Tailored Trousers", category: "Tailored Pants", image: "/suits/bcc973eb-68be-4bc0-b53f-9cda739f33b2.JPG", description: "Light trousers with a crisp, tailored line." },
  { title: "Checked Tailored Trousers", category: "Tailored Pants", image: "/suits/f15bb022-efa4-4f76-b64c-c09abbc1a5fa.JPG", description: "A subtle check adds character to these tailored trousers." },

  { title: "White Trousers and Denim Shirt", category: "Linen", image: "/suits/00e94e1a-de8a-4ebf-8ef0-5c0734593b85.JPG", description: "A linen look with white trousers and a denim shirt." },
  { title: "White Linen Trousers", category: "Linen", image: "/suits/6f567115-e196-4e90-b2e0-346df2198a0a.JPG", description: "A relaxed linen look styled with crisp white trousers." },
  { title: "Blue Linen Separates", category: "Linen", image: "/suits/ee0529b6-6db6-4ed8-a911-4d48b3ee1ec9.JPG", description: "A casual blue linen look for warm days." },

  { title: "Navy & Cream Showroom Pair", category: "Smart Casual", image: "/suits/showroom-navy-and-cream.jpg", description: "Relaxed tailoring styled in navy and cream." },
  { title: "White Trousers and Denim Shirt", category: "Smart Casual", image: "/suits/smart-casual-white-trousers.jpg", description: "A laid-back combination with tailored white trousers." },
  { title: "Casual Jacket and Trousers", category: "Smart Casual", image: "/suits/3b0faec6-4797-41c1-b7f6-6d617cc70670.JPG", description: "A casual jacket styled with comfortable trousers." },
  { title: "Relaxed Grey Trousers", category: "Smart Casual", image: "/suits/97d0c1f5-e140-402f-921c-c27e418a9ede.JPG", description: "Relaxed grey trousers styled with a casual jacket." },
  { title: "Brown Check Separates", category: "Smart Casual", image: "/suits/brown-check-blazer.jpg", description: "A checked jacket styled as a relaxed separate." },
  { title: "Camel Jacket and Navy Trousers", category: "Smart Casual", image: "/suits/camel-blazer.jpg", description: "A warm-toned jacket paired with contrasting trousers." },
  { title: "Houndstooth Sport Coat", category: "Smart Casual", image: "/suits/houndstooth-sport-coat.jpg", description: "A patterned sport coat for relaxed smart dressing." },

  { title: "Brown Check Blazer", category: "Blazers", image: "/suits/brown-check-blazer.jpg", description: "A brown windowpane blazer with a tailored finish." },
  { title: "Camel Blazer", category: "Blazers", image: "/suits/camel-blazer.jpg", description: "A versatile camel blazer for day and evening." },
  { title: "Houndstooth Sport Coat", category: "Blazers", image: "/suits/houndstooth-sport-coat.jpg", description: "A tan houndstooth sport coat with distinctive texture." },
  { title: "Two Blazer Looks", category: "Blazers", image: "/suits/11c58804-573b-46bd-a05e-17a5533f39f3.JPG", description: "A pair of tailored blazer looks in contrasting colours." },
  { title: "Navy and Check Blazers", category: "Blazers", image: "/suits/cdfa2bdd-fd68-4186-b560-bc2ac0bd30a9.JPG", description: "Navy and checked blazers styled with separate trousers." },

  { title: "Charcoal Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/80c051c3-c725-426a-939b-c9729f98dfa2.JPG", description: "A refined charcoal suit styled with a blue shirt and tie." },
  { title: "Navy Pinstripe Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/962713cd-f3b0-4b23-98d0-2b4622e1ec2d.JPG", description: "A timeless navy pinstripe with a polished finish." },
  { title: "Black Pinstripe Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/f9dbe57f-ea3f-4d42-be06-94477930eeb5.JPG", description: "A black pinstripe suit with formal accessories." },
  { title: "Grey Suit Collection", category: "Premium Luxury Wool Suits", image: "/suits/05cbfadd-d7e0-4d81-bf21-e9263827eca8.JPG", description: "A fine grey suit paired with classic accessories." },
  { title: "Tailored Suit Pair", category: "Premium Luxury Wool Suits", image: "/suits/ae288092-b426-4084-b24a-f5b3169fd6c6.JPG", description: "Two refined suit looks with carefully chosen details." },
];

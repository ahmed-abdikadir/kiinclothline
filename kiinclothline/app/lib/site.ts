export const site = {
  name: "Kiin Clothline",
  location: "Tenth Street, Nairobi, Kenya",
  phone: "+254790132055",
  phoneDisplay: "+254 790 132 055",
  whatsapp: "254790132055",
  instagram: "https://www.instagram.com/kiin_clothline/",
  instagramHandle: "@kiin_clothline",
  mapEmbed: "https://www.google.com/maps?q=Kiin+Clothline,+Tenth+St,+Nairobi&ftid=0x182f179d8dbabcd3:0xa7fced443ed8893&output=embed",
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
  { title: "Embroidered Groom Suit", category: "Wedding Suits", image: "/suits/wedding suit.JPG", description: "A black groom's suit with ornate embroidery for a memorable day." },
  { title: "Embroidered Black Wedding Suit", category: "Wedding Suits", image: "/suits/wedding suit1.JPG", description: "A formal black wedding suit with detailed lapel embroidery." },
  { title: "Ivory Embroidered Wedding Suit", category: "Wedding Suits", image: "/suits/wedding suit5.JPG", description: "An ivory wedding suit with floral embroidery on the lapels and sleeves." },
  { title: "Black Embroidered Wedding Suit", category: "Wedding Suits", image: "/suits/wedding suit6.JPG", description: "A black wedding suit with ornate gold embroidery." },

  { title: "Black Tuxedo", category: "Evening Suits", image: "/suits/black-tuxedo.jpg", description: "A classic black tuxedo for black-tie occasions." },
  { title: "Ivory Shawl-Lapel Dinner Suit", category: "Evening Suits", image: "/suits/evening suit.JPG", description: "An ivory dinner jacket with a formal shawl lapel and bow tie." },
  { title: "Ivory Dinner Jacket", category: "Evening Suits", image: "/suits/ivory-dinner-jacket.jpg", description: "An ivory dinner jacket with a formal evening silhouette." },
  { title: "Burgundy Double-Breasted", category: "Evening Suits", image: "/suits/burgundy-double-breasted.jpg", description: "A rich burgundy double-breasted look for evening events." },
  { title: "Burgundy Evening Jacket", category: "Evening Suits", image: "/suits/18e591fa-5284-4d94-8b03-999e73ad005f.JPG", description: "A deep burgundy jacket styled for a night out." },
  { title: "Burgundy Formal Look", category: "Evening Suits", image: "/suits/56d7b8aa-4bab-41a1-81b2-1eff06722357.JPG", description: "A bold burgundy look with clean black accents." },

  { title: "Brown Business Suit", category: "Business Suits", image: "/suits/business suit.JPG", description: "A brown single-breasted suit for a polished professional look." },
  { title: "Green Business Suit", category: "Business Suits", image: "/suits/business suit1.JPG", description: "A distinctive green suit with a clean, tailored finish." },
  { title: "Dark Brown Business Suit", category: "Business Suits", image: "/suits/business suit3.JPG", description: "A dark brown suit for a refined business wardrobe." },
  { title: "Light Blue Double-Breasted Suit", category: "Business Suits", image: "/suits/business suit4.JPG", description: "A light blue double-breasted suit with a sharp, structured cut." },
  { title: "Blue Double-Breasted Suit", category: "Business Suits", image: "/suits/business suit5.JPG", description: "A tailored blue double-breasted suit for the office or formal meetings." },
  { title: "Blue Single-Breasted Suit", category: "Business Suits", image: "/suits/business suit6.JPG", description: "A classic blue single-breasted suit for professional occasions." },
  { title: "Black Business Suit", category: "Business Suits", image: "/suits/business suit7.JPG", description: "A black single-breasted suit with a timeless formal finish." },
  { title: "Navy Double-Breasted Suit", category: "Business Suits", image: "/suits/business suit8.JPG", description: "A navy double-breasted suit with a confident tailored profile." },

  { title: "Brown Tailored Trousers", category: "Tailored Pants", image: "/suits/1224c974-6e44-4ce9-8ace-0216435d1af8.JPG", description: "Close-up of a brown tailored trouser with a high waist." },
  { title: "Classic Brown Trousers", category: "Tailored Pants", image: "/suits/41e0da1e-e9a0-4170-8c01-be4eaeb0210f.JPG", description: "A clean front crease and adjustable side details." },
  { title: "Ivory Tailored Trousers", category: "Tailored Pants", image: "/suits/bcc973eb-68be-4bc0-b53f-9cda739f33b2.JPG", description: "Light trousers with a crisp, tailored line." },
  { title: "Checked Tailored Trousers", category: "Tailored Pants", image: "/suits/f15bb022-efa4-4f76-b64c-c09abbc1a5fa.JPG", description: "A subtle check adds character to these tailored trousers." },
  { title: "Tailored Trouser Selection", category: "Tailored Pants", image: "/suits/38f25141-71df-4a54-9168-26ea81e154f0.JPG", description: "A selection of tailored trousers in neutral shades." },
  { title: "Grey Tailored Trousers", category: "Tailored Pants", image: "/suits/2e3e22ad-41e1-4ed3-ab72-4b55c41ea006.JPG", description: "A tailored trouser look with a clean, refined finish." },

  { title: "Brown Linen Jacket", category: "Linen", image: "/suits/linen.JPG", description: "A relaxed brown linen jacket with natural texture." },
  { title: "Dark Linen Shirt", category: "Linen", image: "/suits/linen1.JPG", description: "A lightweight dark linen shirt for relaxed dressing." },

  { title: "White Trousers and Denim Shirt", category: "Smart Casual", image: "/suits/smart-casual-white-trousers.jpg", description: "A laid-back combination with tailored white trousers." },
  { title: "Blue Denim Smart Casual", category: "Smart Casual", image: "/suits/smart casual.JPG", description: "A relaxed denim look styled for casual occasions." },
  { title: "Denim Shirt and White Trousers", category: "Smart Casual", image: "/suits/00e94e1a-de8a-4ebf-8ef0-5c0734593b85.JPG", description: "A relaxed denim shirt and white trouser combination." },
  { title: "Casual Jacket and Trousers", category: "Smart Casual", image: "/suits/3b0faec6-4797-41c1-b7f6-6d617cc70670.JPG", description: "A casual jacket styled with comfortable trousers." },
  { title: "Relaxed Grey Trousers", category: "Smart Casual", image: "/suits/97d0c1f5-e140-402f-921c-c27e418a9ede.JPG", description: "Relaxed grey trousers styled with a casual jacket." },

  { title: "Brown Check Blazer", category: "Blazers", image: "/suits/brown-check-blazer.jpg", description: "A brown windowpane blazer with a tailored finish." },
  { title: "Camel Blazer", category: "Blazers", image: "/suits/camel-blazer.jpg", description: "A versatile camel blazer for day and evening." },
  { title: "Houndstooth Sport Coat", category: "Blazers", image: "/suits/houndstooth-sport-coat.jpg", description: "A tan houndstooth sport coat with distinctive texture." },
  { title: "Two Blazer Looks", category: "Blazers", image: "/suits/11c58804-573b-46bd-a05e-17a5533f39f3.JPG", description: "A pair of tailored blazer looks in contrasting colours." },
  { title: "Navy and Check Blazers", category: "Blazers", image: "/suits/cdfa2bdd-fd68-4186-b560-bc2ac0bd30a9.JPG", description: "Navy and checked blazers styled with separate trousers." },
  { title: "Navy and Cream Mixed Looks", category: "Blazers", image: "/suits/showroom-navy-and-cream.jpg", description: "Mixed blazer and trouser combinations in navy and cream." },
  { title: "Brown Blazer with Cream Trousers", category: "Blazers", image: "/suits/blazers.JPG", description: "A brown blazer paired with contrasting cream trousers." },
  { title: "Navy Blazer with White Trousers", category: "Blazers", image: "/suits/blazers1.JPG", description: "A double-breasted navy blazer styled with white trousers." },

  { title: "Charcoal Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/80c051c3-c725-426a-939b-c9729f98dfa2.JPG", description: "A refined charcoal suit styled with a blue shirt and tie." },
  { title: "Navy Pinstripe Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/962713cd-f3b0-4b23-98d0-2b4622e1ec2d.JPG", description: "A timeless navy pinstripe with a polished finish." },
  { title: "Black Pinstripe Wool Suit", category: "Premium Luxury Wool Suits", image: "/suits/f9dbe57f-ea3f-4d42-be06-94477930eeb5.JPG", description: "A black pinstripe suit with formal accessories." },
];

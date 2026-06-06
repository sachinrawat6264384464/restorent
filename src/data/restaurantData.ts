export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isChefRecommendation?: boolean;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'food' | 'chefs';
  image: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "fine-dining",
    title: "Fine Dining",
    description: "An exceptional, multi-sensory gastronomic journey curated by world-class chefs, set in an elegant gold-accented ambient atmosphere.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "family-dining",
    title: "Family Dining",
    description: "Impeccable table-sharing experiences with luxury custom tasting platters, suitable for sophisticated family celebrations.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "online-ordering",
    title: "Online Ordering",
    description: "Experience fine-dining at your doorstep. Order signature gourmet recipes packed in premium thermal-insulated signature cases.",
    image: "https://images.unsplash.com/photo-1526367790999-015078648c7e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "catering-services",
    title: "Catering Services",
    description: "Bespoke catering solutions for upscale corporate events, weddings, and elite social gatherings with signature active live counters.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "event-booking",
    title: "Event Booking",
    description: "Book our luxury main dining hall or golden garden mezzanine for private galas, milestone dinners, and press conferences.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "private-dining",
    title: "Private Dining",
    description: "Exquisite private chambers featuring dedicated waitstaff, personalized customized menus, and a premium rare whiskey drawer.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "home-delivery",
    title: "Home Delivery",
    description: "Dedicated white-glove concierge delivery agents ensure your hot gourmet order arrives flawlessly preserved in record time.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop"
  }
];

export const categoriesData: CategoryItem[] = [
  {
    id: "pizza",
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "burgers",
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "pasta",
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "indian",
    name: "Indian Cuisine",
    image: "https://images.unsplash.com/photo-1585938338392-50a59970d2ee?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "chinese",
    name: "Chinese Cuisine",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "desserts",
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "beverages",
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "seafood",
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop"
  }
];

export const menuData: MenuItem[] = [
  // Pizza
  {
    id: "p1",
    name: "Truffle & Gold Prosciutto Pizza",
    description: "Sourdough crust, fresh buffalo mozzarella, 24-month aged prosciutto, shaved black truffles, finished with edible 24k gold leaf flakes.",
    price: 38.00,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    isChefRecommendation: true,
    tags: ["Signature", "Truffle"]
  },
  // Burgers
  {
    id: "b1",
    name: "The Imperial A5 Wagyu Burger",
    description: "A5 Japanese Wagyu patty, gold-sprinkled brioche bun, house truffle-infused aioli, aged cave gruyère, wild rocket.",
    price: 45.00,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    rating: 4.95,
    isChefRecommendation: true,
    tags: ["Exclusive", "Wagyu"]
  },
  // Pasta
  {
    id: "pa1",
    name: "Saffron Caviar Tagliolini",
    description: "Hand-rolled tagliolini tossed in premium Kashmiri saffron butter, crowned with white sturgeon caviar, fine herbs.",
    price: 54.00,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    tags: ["Best Seller"]
  },
  // Indian
  {
    id: "ind1",
    name: "Saffron Cardamom Braised Lamb",
    description: "Slow-braised New Zealand lamb shanks in premium saffron-cardamom almond sauce, gold dusting, toasted pistachio.",
    price: 49.00,
    category: "indian",
    image: "https://images.unsplash.com/photo-1585938338392-50a59970d2ee?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    isChefRecommendation: true,
    tags: ["Award Winning"]
  },
  // Chinese
  {
    id: "ch1",
    name: "Peking Duck Glacé with Plum Caviar",
    description: "Perfect dry-aged honey-glazed crispy duck breast, served with warm scallion crepes, organic plum glaze spheres.",
    price: 52.00,
    category: "chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    rating: 4.75,
    tags: ["Classic"]
  },
  // Desserts
  {
    id: "d1",
    name: "Golden Leaf Chocolate Dome",
    description: "Dark chocolate shell encasing Madagascar vanilla bean gelato and wild berries, melted by warm gold caramel tableside pour.",
    price: 26.00,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
    rating: 4.98,
    isChefRecommendation: true,
    tags: ["Showstopper"]
  },
  // Beverages
  {
    id: "bev1",
    name: "Smoked Amber Whiskey Sour",
    description: "Bespoke reserve bourbon, local honeycomb syrup, freshly pressed lemon juice, gold leaf dust, served in oakwood smoke dome.",
    price: 24.00,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    rating: 4.85,
    tags: ["Artisanal"]
  },
  // Seafood
  {
    id: "sf1",
    name: "Chilean Sea Bass & Caviar",
    description: "Pan-seared sea bass over organic wild mushroom ragout, swimming in light champagne chive emulsion, caviar dollop.",
    price: 64.00,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop",
    rating: 4.92,
    isChefRecommendation: true,
    tags: ["Ocean Fresh"]
  }
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: "w1",
    title: "Fresh Ingredients",
    description: "We source our vegetables from local organic biodynamic greenhouses and our seafood flown in fresh daily from Mediterranean ports."
  },
  {
    id: "w2",
    title: "Expert Chefs",
    description: "Led by Michelin-starred culinary director Alexandre Dubois, our kitchen artisans have polished their crafts in world-leading restaurants."
  },
  {
    id: "w3",
    title: "Fast Delivery",
    description: "Our high-end dedicated white-glove logistics network guarantees that your gourmet orders arrive inside custom-temperature chambers."
  },
  {
    id: "w4",
    title: "Hygienic Kitchen",
    description: "Equipped with state-of-the-art medical-grade air filtration and HEPA hoods, maintaining absolute pristine zero-contamination workspaces."
  },
  {
    id: "w5",
    title: "Premium Quality",
    description: "Every item, from gold flakes to premium A5 Japanese Wagyu, undergoes a triple inspection of origin, grade, and temperature."
  },
  {
    id: "w6",
    title: "Best Customer Service",
    description: "Our dedicated VIP hostesses, expert sommeliers, and personal table concierges treat every client as an esteemed royalty visitor."
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Lady Penelope Sterling",
    role: "Michelin Guide Reviewer",
    review: "AURELIA represents the absolute peak of modern fine dining. The Truffle & Gold Pizza is not just a dish, it is a magnificent work of art. The atmosphere is warm, gold-laden, and deeply luxurious.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t2",
    name: "Marcus Aurelius Vance",
    role: "Culinary Connoisseur",
    review: "The A5 Wagyu burger blew my expectations away. Standard gourmet burgers pale in comparison to this masterpiece. Outstanding service, elite wine pairings, and breathtaking ambient music.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Vogue Lifestyle Editor",
    review: "The Golden Leaf Chocolate Dome tableside presentation is worthy of royal feasts. The glassmorphism architecture and soft gold backlighting make Aurelia the most aesthetic venue in the country.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Plating",
    category: "food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=650&auto=format&fit=crop"
  },
  {
    id: "g2",
    title: "The Golden Chandelier Hall",
    category: "interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=650&auto=format&fit=crop"
  },
  {
    id: "g3",
    title: "Chef Alexandre in action",
    category: "chefs",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=650&auto=format&fit=crop"
  },
  {
    id: "g4",
    title: "Truffle Tagliolini close-up",
    category: "food",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=650&auto=format&fit=crop"
  },
  {
    id: "g5",
    title: "Private VIP Vault",
    category: "interior",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=650&auto=format&fit=crop"
  },
  {
    id: "g6",
    title: "Precision Pastry plating",
    category: "chefs",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=650&auto=format&fit=crop"
  }
];

// Default African Bar & Grill Menu items for Old English

export const DEFAULT_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'suya-starters', label: 'Suya & Starters' },
  { id: 'charcoal-grill', label: 'Charcoal Mains' },
  { id: 'soups-swallow', label: 'Soups & Bowls' },
  { id: 'sides', label: 'Sides & Bites' },
  { id: 'cocktails-drinks', label: 'Craft Cocktails' },
  { id: 'desserts', label: 'Desserts' },
];

export const INITIAL_MENU_ITEMS = [
  // Suya & Starters
  {
    id: 'item-1',
    name: 'Aged Beef Suya Skewers',
    category: 'suya-starters',
    price: 18,
    spicyLevel: 3, // 1 to 3
    tags: ['Chef Special', 'Halal', 'Gluten-Free'],
    description: 'Thinly sliced prime ribeye marinated in authentic Yaji spice blend, flash-grilled over glowing hardwood charcoal, served with sliced red onions and fresh tomatoes.',
    ingredients: ['Prime Ribeye', 'Authentic Yaji Spice', 'Peanut Powder', 'Ginger', 'Red Onion', 'Vine Tomatoes'],
    pairing: 'Smoked Charcoal Old Fashioned or Cold Draught Stout',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-2',
    name: 'Crispy Plantain & Asun Bites',
    category: 'suya-starters',
    price: 16,
    spicyLevel: 2,
    tags: ['Popular'],
    description: 'Slow-roasted spicy habanero goat meat (Asun) tossed with sweet caramelized plantain rounds and fresh scotch bonnet oil.',
    ingredients: ['Tender Goat Meat', 'Sweet Plantain', 'Habanero Peppers', 'Spring Onion', 'Smoked Salt'],
    pairing: 'Zobo Hibiscus Rum Spritz',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-3',
    name: 'Peppered Goat Bites (Nkwobi style)',
    category: 'suya-starters',
    price: 19,
    spicyLevel: 3,
    tags: ['Gluten-Free'],
    description: 'Chopped cow foot and tender goat meat cooked in a rich, aromatic palm oil emulsion infused with Ehuru (African nutmeg) and Utazi leaves.',
    ingredients: ['Goat Meat', 'Cow Foot', 'Potash Emulsion', 'Ehuru Nutmeg', 'Utazi Leaves', 'Red Chili'],
    pairing: 'Ice Cold Draught Stout',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-4',
    name: 'Suya Glazed Chicken Wings',
    category: 'suya-starters',
    price: 15,
    spicyLevel: 2,
    tags: ['Halal'],
    description: 'Jumbo chicken wings charred over hardwood, glazed with honey-Yaji reduction, served with roasted garlic dipping sauce.',
    ingredients: ['Free-range Wings', 'Honey Yaji Glaze', 'Garlic Aioli', 'Chives'],
    pairing: 'Old English Signature Chapman',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Charcoal Mains
  {
    id: 'item-5',
    name: 'Old English Whole Grilled Tilapia',
    category: 'charcoal-grill',
    price: 34,
    spicyLevel: 2,
    tags: ['Chef Special', 'Gluten-Free', 'Halal'],
    description: 'Whole jumbo fresh Tilapia score-cut and marinated in garlic-herb chili rub, flame-grilled over open coals. Served with fried sweet plantain, spicy bell pepper sauce, and attieke.',
    ingredients: ['Fresh Jumbo Tilapia', 'African Red Pepper Rub', 'Ginger', 'Sweet Plantain', 'Attieke'],
    pairing: 'Crisp Sauvignon Blanc or Palm Wine Sour',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-6',
    name: 'Charcoal Smoked Party Jollof & Grilled Chicken',
    category: 'charcoal-grill',
    price: 26,
    spicyLevel: 1,
    tags: ['Popular', 'Halal'],
    description: 'Authentic smoky long-grain basmati Jollof rice infused with firewood aroma, served with flame-grilled quarter chicken, fried dodo, and house coleslaw.',
    ingredients: ['Basmati Rice', 'Roast Tomato Reduction', 'Scotch Bonnet', 'Suya Chicken', 'Sweet Plantains'],
    pairing: 'Old English Signature Chapman',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-7',
    name: 'Old English Suya Smash Burger',
    category: 'charcoal-grill',
    price: 22,
    spicyLevel: 2,
    tags: ['Signature'],
    description: 'Two smash patties of dry-aged brisket & ribeye seasoned with Yaji, sharp English Cheddar, caramelized onions, smoked Asun chili aioli on a brioche bun. Served with truffle yam chips.',
    ingredients: ['Dry-Aged Beef Patty', 'Yaji Crust', 'English Cheddar', 'Chili Aioli', 'Brioche', 'Yam Chips'],
    pairing: 'Smoked Charcoal Old Fashioned',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-8',
    name: 'Dry-Aged Charcoal Ribeye & Suya Butter',
    category: 'charcoal-grill',
    price: 42,
    spicyLevel: 1,
    tags: ['Gluten-Free'],
    description: '12oz 28-day dry-aged English ribeye steak charcoal-grilled to preference, topped with melting Yaji bone-marrow compound butter. Served with roasted spiced yam chips.',
    ingredients: ['12oz Dry-Aged Ribeye', 'Yaji Bone Marrow Butter', 'Spiced Yam Chips', 'Charred Asparagus'],
    pairing: 'Full-bodied Cabernet Sauvignon',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Soups & Bowls
  {
    id: 'item-9',
    name: 'Fisherman’s Seafood Okra Pot',
    category: 'soups-swallow',
    price: 36,
    spicyLevel: 2,
    tags: ['Chef Special', 'Gluten-Free'],
    description: 'Fresh chopped green okra soup simmered with jumbo prawns, king crab legs, calamari, and fresh croaker fish in a rich lobster dashi. Served with smooth pounded yam.',
    ingredients: ['Jumbo Prawns', 'King Crab', 'Calamari', 'Fresh Okra', 'Palm Oil Extract', 'Pounded Yam'],
    pairing: 'Chilled Pinot Grigio',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-10',
    name: 'Slow-Cooked Goat Meat Pepper Soup',
    category: 'soups-swallow',
    price: 24,
    spicyLevel: 3,
    tags: ['Popular', 'Gluten-Free'],
    description: 'Aromatic spicy broth infused with wild pepper soup spices, ginger, alligator pepper, and tender chunks of island goat meat.',
    ingredients: ['Tender Goat Meat', 'Wild Pepper Spices', 'Uziza Leaves', 'Ginger', 'Alligator Pepper'],
    pairing: 'Palm Wine Sour or Cold Lager',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-11',
    name: 'Rich Egusi Soup & Smoked Goat',
    category: 'soups-swallow',
    price: 28,
    spicyLevel: 1,
    tags: ['Gluten-Free'],
    description: 'Melon seed soup cooked with bitterleaf, spinach, smoked dried fish, and tender beef. Served with your choice of Pounded Yam, Eba, or Amala.',
    ingredients: ['Toasted Egusi Seeds', 'Bitterleaf', 'Smoked Fish', 'Tender Goat', 'Pounded Yam'],
    pairing: 'Cold Draught Stout',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Sides & Bites
  {
    id: 'item-12',
    name: 'Sweet Fried Plantains (Dodo)',
    category: 'sides',
    price: 8,
    spicyLevel: 0,
    tags: ['Vegan', 'Gluten-Free'],
    description: 'Ripe golden plantain slices fried until crispy outside and tender caramelized inside.',
    ingredients: ['Ripe Yellow Plantains', 'Sea Salt'],
    pairing: 'Any Cocktail',
    image: 'https://images.unsplash.com/photo-1628773822503-930a858546f3?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-13',
    name: 'Truffle & Yaji Yam Fries',
    category: 'sides',
    price: 11,
    spicyLevel: 1,
    tags: ['Vegetarian'],
    description: 'Hand-cut white yam fries tossed in black truffle oil, aged parmesan, and light Yaji spice, served with chili mayo.',
    ingredients: ['African White Yam', 'Black Truffle Oil', 'Yaji Spice', 'Parmesan', 'Chili Mayo'],
    pairing: 'Smoked Charcoal Sour',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Craft Cocktails & Drinks
  {
    id: 'item-14',
    name: 'Old English Signature Chapman',
    category: 'cocktails-drinks',
    price: 14,
    spicyLevel: 0,
    tags: ['House Favorite', 'Non-Alcoholic Option'],
    description: 'The iconic Nigerian club classic - blended Fanta & Sprite with Angostura bitters, cucumber ribbons, orange slices, and maraschino cherry over crushed ice (with option to add Dark Rum).',
    ingredients: ['Fanta', 'Sprite', 'Angostura Bitters', 'Cucumber', 'Citrus', 'Maraschino Cherry'],
    pairing: 'Pairs perfectly with Suya & Ribs',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-15',
    name: 'Zobo Hibiscus Rum Spritz',
    category: 'cocktails-drinks',
    price: 16,
    spicyLevel: 0,
    tags: ['Signature'],
    description: 'In-house brewed hibiscus tea infused with cloves, ginger, and pineapple, shaken with aged Spiced Rum, lime juice, and topped with Prosecco.',
    ingredients: ['Hibiscus Flowers', 'Cloves & Ginger', 'Spiced Rum', 'Fresh Lime', 'Prosecco'],
    pairing: 'Asun Bites & Grill',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-16',
    name: 'Smoked Charcoal Old Fashioned',
    category: 'cocktails-drinks',
    price: 18,
    spicyLevel: 0,
    tags: ['Luxury'],
    description: 'Bourbon Whiskey infused with charred cinnamon stick, palm sugar syrup, dash of chocolate bitters, served over hand-carved ice sphere smoked with oak wood chips.',
    ingredients: ['Woodford Reserve Bourbon', 'Charred Cinnamon', 'Palm Sugar', 'Chocolate Bitters'],
    pairing: 'Dry-Aged Ribeye or Suya Burger',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Desserts
  {
    id: 'item-17',
    name: 'Puff-Puff & Vanilla Bean Gelato',
    category: 'desserts',
    price: 12,
    spicyLevel: 0,
    tags: ['Vegetarian'],
    description: 'Golden fried Nigerian puff-puff dough balls dusted with cinnamon palm sugar, served warm alongside artisanal vanilla bean gelato and dark chocolate drizzle.',
    ingredients: ['Warm Puff-Puff', 'Cinnamon Palm Sugar', 'Vanilla Bean Gelato', 'Belgian Chocolate'],
    pairing: 'Zobo Hibiscus Spritz',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

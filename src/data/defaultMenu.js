// Verified Premium Menu Items from Official Old English Menu PDF
// Curated selection of top premium dishes (Prices intentionally omitted)

export const DEFAULT_CATEGORIES = [
  { id: 'all', label: 'All Premium Select' },
  { id: 'starters', label: 'Starters & Finger Chops' },
  { id: 'grills', label: 'Grills & Special Platters' },
  { id: 'soups', label: 'Africana Soups' },
  { id: 'drinks', label: 'Cocktails & Spirits' },
];

export const INITIAL_MENU_ITEMS = [
  {
    id: 'item-1',
    name: 'Old English Executive Mix Grill',
    category: 'grills',
    spicyLevel: 2,
    tags: ['Chef Signature', '100% Halal'],
    description: 'Executive master platter of hardwood charcoal-grilled Suya beef, flame-charred chicken, peppered goat, jumbo prawns, and sweet fried plantain.',
    ingredients: ['Prime Beef Suya', 'Charred Chicken', 'Peppered Goat', 'Jumbo Prawns', 'Fried Plantain', 'Yaji Rub'],
    pairing: 'Smoked Charcoal Old Fashioned or Cold Stout',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-2',
    name: 'Whole BBQ Catfish',
    category: 'grills',
    spicyLevel: 2,
    tags: ['Customer Favorite', 'Fresh Daily'],
    description: 'Whole jumbo catfish flame-kissed over glowing hardwood coals with Chef Segun\'s signature spicy Yaji glaze and scotch bonnet oil.',
    ingredients: ['Whole Jumbo Catfish', 'House Yaji Glaze', 'Scotch Bonnet', 'Scent Leaves', 'Fried Plantain'],
    pairing: 'Ice Cold Draught Lager or Fresh Fruit Juice',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-3',
    name: 'Royal Ofe Owerri',
    category: 'soups',
    spicyLevel: 1,
    tags: ['Heritage Classic', 'Royal Imo Specialty'],
    description: 'The pride of Imo State. Royal rich soup cooked with stockfish, smoked croaker, dried snails, and fresh Okazi & Uziza leaves.',
    ingredients: ['Stockfish', 'Smoked Croaker', 'Snails', 'Okazi Leaves', 'Uziza', 'Palm Oil Extract'],
    pairing: 'Smooth Pounded Yam or Fufu',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-4',
    name: 'Authentic Beef Suya Skewers',
    category: 'starters',
    spicyLevel: 3,
    tags: ['Hausa Yaji Craft', 'Flame Grilled'],
    description: 'Prime beef ribeye thin-cut and seared over hardwood charcoal, rubbed with authentic house-ground Hausa Yaji spice.',
    ingredients: ['Prime Ribeye Beef', 'Authentic Yaji Rub', 'Roasted Peanuts', 'Sliced Red Onions', 'Fresh Tomatoes'],
    pairing: 'Signature Chapman or Chilled Beer',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-5',
    name: 'Traditional Nkwobi',
    category: 'starters',
    spicyLevel: 2,
    tags: ['Traditional Delicacy'],
    description: 'Tender chopped cow foot cooked in aromatic palm oil potash emulsion infused with calabash nutmeg (Ehuru) and fresh Utazi.',
    ingredients: ['Tender Cow Foot', 'Palm Oil Potash Emulsion', 'Ehuru Calabash Nutmeg', 'Utazi Leaves', 'Red Chili'],
    pairing: 'Cold Draught Stout or Palm Wine',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-6',
    name: 'Fisherman Seafood Soup',
    category: 'soups',
    spicyLevel: 2,
    tags: ['Seafood Special'],
    description: 'Rich coastal broth loaded with jumbo ocean prawns, periwinkles, crabs, fresh croaker fish, and aromatic African bush pepper.',
    ingredients: ['Jumbo Ocean Prawns', 'Fresh Croaker', 'Periwinkle', 'Crabs', 'Uziza Leaves', 'Bush Pepper'],
    pairing: 'Pounded Yam or Eba',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-7',
    name: 'Platter Seafood',
    category: 'grills',
    spicyLevel: 1,
    tags: ['Luxury Seafood'],
    description: 'Grand platter of pan-seared jumbo tiger prawns, grilled ocean croaker fillets, and calamari served with fragrant coconut rice.',
    ingredients: ['Jumbo Tiger Prawns', 'Ocean Croaker', 'Calamari', 'Coconut Basmati Rice', 'Garlic Butter'],
    pairing: 'Chilled Sauvignon Blanc',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-8',
    name: 'Isiewu Special',
    category: 'starters',
    spicyLevel: 3,
    tags: ['Igbo Specialty'],
    description: 'Slow-cooked tender goat head simmered in traditional oil emulsion, wild African spices, and crisp onion rings.',
    ingredients: ['Goat Head Meat', 'Oil Emulsion', 'African Nutmeg', 'Utazi', 'Onion Rings'],
    pairing: 'Ice Cold Draught Beer',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'item-9',
    name: 'Art De Vivre Pink',
    category: 'drinks',
    spicyLevel: 0,
    tags: ['Signature Cocktail'],
    description: 'Signature Old English luxury cocktail crafted with botanical spirits, fresh pomegranate, citrus, and rose water.',
    ingredients: ['Botanical Pink Spirit', 'Pomegranate Juice', 'Fresh Lime', 'Rose Water', 'Crushed Ice'],
    pairing: 'Pairs with Suya & Finger Chops',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'item-10',
    name: 'Old English Signature Chapman',
    category: 'drinks',
    spicyLevel: 0,
    tags: ['House Classic'],
    description: 'Classic club refreshment elevated with fresh citrus juices, cucumber ribbons, and Angostura bitters over crushed ice.',
    ingredients: ['Fanta & Sprite Blend', 'Angostura Bitters', 'Cucumber Ribbons', 'Orange Slices', 'Maraschino Cherry'],
    pairing: 'Pairs with any Grill item',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

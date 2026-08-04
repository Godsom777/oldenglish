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
    description: 'Executive master platter of hardwood flame-grilled Suya beef, flame-charred chicken, peppered goat, jumbo prawns, and sweet fried plantain.',
    ingredients: ['Prime Beef Suya', 'Charred Chicken', 'Peppered Goat', 'Jumbo Prawns', 'Fried Plantain', 'Yaji Rub'],
    pairing: 'Smoked Flame Old Fashioned or Cold Stout',
    image: '/images/food/food-sizzling-special.jpg',
    featured: true
  },
  {
    id: 'item-2',
    name: 'Whole BBQ Catfish & Charcoal Grill',
    category: 'grills',
    spicyLevel: 2,
    tags: ['Customer Favorite', 'Fresh Daily'],
    description: 'Whole jumbo catfish flame-kissed over glowing hardwood coals with Executive Chef Uzochukwu Elui\'s signature spicy Yaji glaze and scotch bonnet oil.',
    ingredients: ['Whole Jumbo Catfish', 'House Yaji Glaze', 'Scotch Bonnet', 'Scent Leaves', 'Fried Plantain'],
    pairing: 'Ice Cold Draught Lager or Fresh Fruit Juice',
    image: '/images/food/food-seafood-platter.jpg',
    featured: true
  },
  {
    id: 'item-3',
    name: 'Old English Special Fried Rice & Stew',
    category: 'grills',
    spicyLevel: 1,
    tags: ['House Specialty', 'Chef Selection'],
    description: 'Fragrant seasoned African fried rice served with signature slow-simmered peppered stew, fresh vegetable garnish, and tender seasoned meat.',
    ingredients: ['Seasoned Rice', 'Peppered Stew', 'Carrots & Peas', 'Spicy Meat Cut', 'Spring Onion'],
    pairing: 'Chilled Draught Lager or Signature Chapman',
    image: '/images/food/food-special-rice.jpg',
    featured: true
  },
  {
    id: 'item-4',
    name: 'Authentic Beef Suya Skewers & Fries',
    category: 'starters',
    spicyLevel: 3,
    tags: ['Hausa Yaji Craft', 'Flame Grilled'],
    description: 'Prime beef ribeye thin-cut and seared over hardwood flames, rubbed with authentic house-ground Hausa Yaji spice, served with golden fries.',
    ingredients: ['Prime Ribeye Beef', 'Authentic Yaji Rub', 'Roasted Peanuts', 'Golden Fries', 'Fresh Tomatoes'],
    pairing: 'Signature Chapman or Chilled Beer',
    image: '/images/food/food-grill-combo.jpg',
    featured: true
  },
  {
    id: 'item-5',
    name: 'Old English Grand Chef Salad',
    category: 'starters',
    spicyLevel: 0,
    tags: ['Fresh Daily', 'House Special'],
    description: 'Grand platter of fresh garden crisp cabbage, sliced juicy tomatoes, cucumber ribbons, sweetcorn, olives, kidney beans, and diced seasoned ham.',
    ingredients: ['Crisp Cabbage', 'Fresh Tomatoes', 'Cucumber', 'Sweetcorn', 'Olives', 'Kidney Beans', 'Diced Ham'],
    pairing: 'Chilled White Wine or Fresh Citrus Juice',
    image: '/images/food/food-chef-salad.jpg',
    featured: false
  },
  {
    id: 'item-6',
    name: 'Fisherman Seafood Special Platter',
    category: 'soups',
    spicyLevel: 2,
    tags: ['Seafood Special'],
    description: 'Rich coastal seafood platter loaded with jumbo ocean prawns, fresh croaker, periwinkles, crabs, and spicy peppers.',
    ingredients: ['Jumbo Ocean Prawns', 'Fresh Croaker', 'Periwinkle', 'Crabs', 'Uziza Leaves', 'Bush Pepper'],
    pairing: 'Pounded Yam or Chilled White Wine',
    image: '/images/food/food-seafood-platter.jpg',
    featured: false
  },
  {
    id: 'item-7',
    name: 'Sizzling Old English Special Platter',
    category: 'grills',
    spicyLevel: 2,
    tags: ['Luxury Seafood', 'Branded Favorite'],
    description: 'Signature sizzling cast iron platter loaded with pan-seared jumbo tiger prawns, grilled ocean croaker, seasoned rice, and crisp wok-tossed vegetables.',
    ingredients: ['Jumbo Tiger Prawns', 'Ocean Croaker', 'Sizzling Rice', 'Wok Vegetables', 'Garlic Butter'],
    pairing: 'Chilled Sauvignon Blanc',
    image: '/images/food/food-sizzling-special.jpg',
    featured: true
  },
  {
    id: 'item-8',
    name: 'Flame Grill & Suya Combo Platter',
    category: 'grills',
    spicyLevel: 3,
    tags: ['Igbo & Suya Specialty'],
    description: 'Generous platter of hardwood flame-grilled peppered meats, prawns, and crab claws served with golden French fries.',
    ingredients: ['Peppered Goat Meat', 'Flame-Grilled Prawns', 'Crab Claws', 'Golden Fries', 'Yaji Spice'],
    pairing: 'Ice Cold Draught Beer',
    image: '/images/food/food-grill-combo.jpg',
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

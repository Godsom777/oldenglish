import Papa from 'papaparse';

// Helper to parse user uploaded CSV file
export const parseMenuCsv = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim().toLowerCase().replace(/[\s_-]+/g, ''),
      complete: (results) => {
        if (!results.data || results.data.length === 0) {
          reject(new Error('CSV file is empty or could not be read.'));
          return;
        }

        try {
          const parsedItems = results.data.map((row, index) => {
            // Flexible column matching
            const name = row.name || row.item || row.dish || row.title || `Item ${index + 1}`;
            const categoryRaw = row.category || row.type || row.section || 'charcoal-grill';
            const price = parseFloat(row.price || row.cost || row.amount || '0') || 15;
            const description = row.description || row.desc || row.details || 'Delicious grilled specialty item.';
            const spicyLevel = parseInt(row.spicy || row.spicylevel || row.spice || '0', 10) || 0;
            const tagsRaw = row.tags || row.diet || row.labels || '';
            const image = row.image || row.photo || row.img || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';

            // Clean category ID
            const category = cleanCategoryId(categoryRaw);
            const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : ['Custom Item'];

            return {
              id: `csv-item-${Date.now()}-${index}`,
              name,
              category,
              price,
              spicyLevel: Math.min(3, Math.max(0, spicyLevel)),
              tags,
              description,
              ingredients: row.ingredients ? row.ingredients.split(',').map(i => i.trim()) : [],
              pairing: row.pairing || 'Pairs well with cold draught drinks',
              image,
              featured: row.featured ? String(row.featured).toLowerCase() === 'true' : false
            };
          });

          resolve(parsedItems);
        } catch (err) {
          reject(new Error('Failed to parse CSV format. Please ensure correct headers: Name, Category, Price, Description, Spicy, Tags, Image'));
        }
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};

const cleanCategoryId = (catStr) => {
  const normalized = String(catStr).toLowerCase();
  if (normalized.includes('suya') || normalized.includes('starter')) return 'suya-starters';
  if (normalized.includes('grill') || normalized.includes('main') || normalized.includes('charcoal')) return 'charcoal-grill';
  if (normalized.includes('soup') || normalized.includes('bowl') || normalized.includes('swallow')) return 'soups-swallow';
  if (normalized.includes('side') || normalized.includes('bite')) return 'sides';
  if (normalized.includes('cocktail') || normalized.includes('drink') || normalized.includes('beverage')) return 'cocktails-drinks';
  if (normalized.includes('dessert') || normalized.includes('sweet')) return 'desserts';
  return 'charcoal-grill';
};

// Generate and trigger download of sample CSV file
export const downloadSampleMenuCsv = () => {
  const sampleData = [
    {
      Name: 'Aged Beef Suya Skewers',
      Category: 'suya-starters',
      Price: 18,
      Spicy: 3,
      Tags: 'Chef Special, Halal, Gluten-Free',
      Description: 'Thinly sliced prime ribeye marinated in authentic Yaji spice blend, flash-grilled over glowing hardwood charcoal.',
      Ingredients: 'Prime Ribeye, Yaji Spice, Peanut Powder, Ginger, Onion',
      Pairing: 'Smoked Charcoal Old Fashioned',
      Image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      Featured: true
    },
    {
      Name: 'Old English Whole Grilled Tilapia',
      Category: 'charcoal-grill',
      Price: 34,
      Spicy: 2,
      Tags: 'Popular, Halal',
      Description: 'Whole jumbo fresh Tilapia flame-grilled over open coals with fried plantain & attieke.',
      Ingredients: 'Fresh Tilapia, Red Pepper Rub, Sweet Plantain',
      Pairing: 'Palm Wine Sour',
      Image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      Featured: true
    },
    {
      Name: 'Old English Signature Chapman',
      Category: 'cocktails-drinks',
      Price: 14,
      Spicy: 0,
      Tags: 'House Favorite',
      Description: 'The iconic Nigerian club drink with Fanta, Sprite, Angostura bitters, cucumber & citrus.',
      Ingredients: 'Fanta, Sprite, Bitters, Cucumber, Lime',
      Pairing: 'Pairs with Suya',
      Image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      Featured: false
    }
  ];

  const csvString = Papa.unparse(sampleData);
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'old_english_menu_template.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

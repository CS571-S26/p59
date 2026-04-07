// src/data/sampleRecipes.js

export const recipes = [
  {
    id: 1,
    name: "Copycat Fettuccine Alfredo",
    isCopycat: true,
    copycatOf: "Olive Garden Fettuccine Alfredo",
    restaurant: "Olive Garden",
    cuisine: "Italian",
    dietary: ["Vegetarian"],
    difficulty: "Easy",
    time: 30,
    ingredientsCount: 5,
    method: "Stovetop"
    ,
    ingredients: [
      '12 oz fettuccine',
      '1 cup heavy cream',
      '4 tbsp unsalted butter',
      '1 cup freshly grated Parmesan',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook fettuccine according to package directions.',
      'In a saucepan, melt butter and add cream; simmer 2 minutes.',
      'Stir in Parmesan until smooth.',
      'Toss sauce with pasta and season to taste.'
    ],
    restaurantsWithDish: [
      { name: 'Olive Garden', price: '$$' }
    ]
  },
  {
    id: 2,
    name: "Quick Campus Burger",
    isCopycat: false,
    restaurant: "Campus Eats",
    cuisine: "American",
    dietary: [],
    difficulty: "Easy",
    time: 15,
    ingredientsCount: 6,
    method: "Pan Fry"
    ,
    ingredients: [
      '1 lb ground beef',
      '4 burger buns',
      '4 slices cheddar',
      'Lettuce, tomato, pickles',
      'Salt and pepper'
    ],
    instructions: [
      'Form patties and season with salt and pepper.',
      'Cook patties in a hot pan 3-4 minutes per side.',
      'Melt cheese on patties, assemble on buns with toppings.'
    ],
    restaurantsWithDish: [
      { name: 'Campus Eats', price: '$' }
    ]
  },
  {
    id: 3,
    name: "Tempura Shrimp",
    isCopycat: true,
    copycatOf: "Sakura Tempura Shrimp",
    restaurant: "Sakura Sushi",
    cuisine: "Japanese",
    dietary: [],
    difficulty: "Medium",
    time: 45,
    ingredientsCount: 8,
    method: "Frying"
    ,
    ingredients: [
      '12 large shrimp, peeled and deveined',
      '1 cup tempura flour',
      '1 cup ice cold water',
      'Vegetable oil for frying'
    ],
    instructions: [
      'Heat oil to 350°F (175°C).',
      'Whisk tempura flour and ice water briefly to combine.',
      'Dip shrimp in batter and fry until crisp and golden.',
      'Drain on paper towels and serve with dipping sauce.'
    ],
    restaurantsWithDish: [
      { name: 'Sakura Sushi', price: '$$$' }
    ]
  },
  {
    id: 4,
    name: "Quinoa Power Bowl",
    isCopycat: false,
    restaurant: "The Green Plate",
    cuisine: "Vegetarian",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    difficulty: "Easy",
    time: 25,
    ingredientsCount: 7,
    method: "One-Pan"
    ,
    ingredients: [
      '1 cup quinoa',
      '2 cups vegetable broth',
      '1 cup roasted vegetables',
      '1/2 cup chickpeas',
      'Lemon-tahini dressing'
    ],
    instructions: [
      'Rinse quinoa and cook in broth until fluffy.',
      'Assemble bowl with quinoa, roasted veg, chickpeas.',
      'Drizzle with dressing and serve.'
    ],
    restaurantsWithDish: [
      { name: 'The Green Plate', price: '$$' }
    ]
  },
  {
    id: 5,
    name: "Street Tacos",
    isCopycat: false,
    restaurant: "Lively Tacos",
    cuisine: "Mexican",
    dietary: [],
    difficulty: "Medium",
    time: 30,
    ingredientsCount: 10,
    method: "Grilling"
    ,
    ingredients: [
      '1 lb skirt steak or chicken',
      'Corn tortillas',
      'Onion, cilantro, lime',
      'Salsa'
    ],
    instructions: [
      'Season and grill protein, then slice thin.',
      'Warm tortillas and assemble with meat, onion, cilantro, and salsa.',
      'Serve with lime wedges.'
    ],
    restaurantsWithDish: [
      { name: 'Lively Tacos', price: '$' }
    ]
  }
];
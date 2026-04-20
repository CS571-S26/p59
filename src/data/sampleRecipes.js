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
    method: "Stovetop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZIJ_z9Jf_w6jMiEUR41Px9pBPu8Rfc57zw&s",
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
    method: "Pan Fry",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/tk%2Fphoto%2F2025%2F06-2025%2F2025-06-veggie-burger%2Fveggie-burger-340",
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
    method: "Frying",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qNEj3D9N81kmGAZVP3MMSMev9IKGaKg9oQ&s",
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
    method: "One-Pan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNVOE7WXaCOZSy5kUdsrPyLPGvyLnNStRuQ&s",
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
    method: "Grilling",
    image: "https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg",
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
  },
  {
    id: 6,
    name: "Miso Butter Salmon Bowl",
    isCopycat: false,
    restaurant: "Fresh Market",
    cuisine: "Japanese",
    dietary: ["Gluten-Free", "Paleo"],
    difficulty: "Medium",
    time: 20,
    ingredientsCount: 8,
    method: "Oven & Stovetop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoCkWFog7UW-XRkIBHIFvD-ugfgKB4ZqKXA&s",
    ingredients: [
      '4 salmon fillets',
      '3 tbsp miso paste',
      '2 tbsp butter',
      '2 cups cooked white rice',
      'Cucumber, edamame, avocado'
    ],
    instructions: [
      'Mix miso paste and butter into a glaze.',
      'Coat salmon and bake at 400°F for 12 minutes.',
      'Serve over rice with cucumber and edamame salad.'
    ],
    restaurantsWithDish: [
      { name: 'Fresh Market', price: '$$' }
    ]
  },
  {
    id: 7,
    name: "One-Pan Roast Chicken with Herbs",
    isCopycat: false,
    restaurant: "Comfort Kitchen",
    cuisine: "American",
    dietary: ["Gluten-Free"],
    difficulty: "Easy",
    time: 50,
    ingredientsCount: 12,
    method: "Oven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCy5tkZwICyTQnRexx1W1UFQ9oCnPAMgOKA&s",
    ingredients: [
      '1 whole chicken (4-5 lbs)',
      'White beans, potatoes, garlic',
      'Thyme, rosemary, lemon',
      'Olive oil, salt, pepper'
    ],
    instructions: [
      'Arrange chicken, beans, potatoes on a sheet pan.',
      'Drizzle with oil, season with herbs, lemon.',
      'Roast at 425°F for 45-50 minutes until golden.'
    ],
    restaurantsWithDish: [
      { name: 'Comfort Kitchen', price: '$$' }
    ]
  },
  {
    id: 8,
    name: "Butternut Squash Carbonara",
    isCopycat: false,
    restaurant: "Seasonal Table",
    cuisine: "Italian",
    dietary: ["Vegetarian"],
    difficulty: "Medium",
    time: 35,
    ingredientsCount: 10,
    method: "Stovetop",
    image: "https://www.mykitchenlove.com/wp-content/uploads/2014/10/squash-carbonara-update-2.jpg",
    ingredients: [
      '1 lb pappardelle pasta',
      '1 butternut squash, cubed',
      '4 oz pancetta, diced',
      '4 egg yolks, parmesan, black pepper'
    ],
    instructions: [
      'Roast squash until tender, cook pasta.',
      'Crisp pancetta, then toss with pasta and squash.',
      'Mix egg yolks and cheese, toss off heat to create sauce.'
    ],
    restaurantsWithDish: [
      { name: 'Seasonal Table', price: '$$$' }
    ]
  },
  {
    id: 9,
    name: "Marry Me Chicken Meatballs",
    isCopycat: false,
    restaurant: "Italian Kitchen",
    cuisine: "Italian",
    dietary: ["Gluten-Free"],
    difficulty: "Medium",
    time: 40,
    ingredientsCount: 14,
    method: "Stovetop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pR2911oaZC3hRqBKsYlyIKh7JZusS4sHLQ&s",
    ingredients: [
      '1 lb ground chicken',
      'Breadcrumbs, egg, parmesan',
      'Sun-dried tomatoes, spinach',
      'Heavy cream, garlic, basil'
    ],
    instructions: [
      'Form and pan-fry meatballs until browned.',
      'Make creamy sun-dried tomato sauce with spinach.',
      'Simmer meatballs in sauce for 15 minutes.'
    ],
    restaurantsWithDish: [
      { name: 'Italian Kitchen', price: '$$' }
    ]
  },
  {
    id: 10,
    name: "Tomato Egg Drop Soup",
    isCopycat: false,
    restaurant: "Golden Dragon",
    cuisine: "Chinese",
    dietary: ["Vegetarian", "Gluten-Free"],
    difficulty: "Easy",
    time: 20,
    ingredientsCount: 8,
    method: "Stovetop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xoF9sohcUQ1XvilYDr1hwILE8HmELq7ItA&s",
    ingredients: [
      '4 cups vegetable broth',
      '3 large tomatoes, diced',
      '4 eggs, beaten',
      'Green onion, white pepper, sesame oil'
    ],
    instructions: [
      'Bring broth to boil, add diced tomatoes.',
      'Slowly drizzle beaten eggs while stirring gently.',
      'Season with white pepper and sesame oil.'
    ],
    restaurantsWithDish: [
      { name: 'Golden Dragon', price: '$$' }
    ]
  },
  {
    id: 11,
    name: "Pad Thai from Bangkok Kitchen",
    isCopycat: true,
    copycatOf: "Pad Thai",
    restaurant: "Bangkok Kitchen",
    cuisine: "Thai",
    dietary: [],
    difficulty: "Medium",
    time: 25,
    ingredientsCount: 12,
    method: "Stovetop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0UlbhMSQfjFm9BHUdRNoPkJYs09S7kZZew&s",
    ingredients: [
      '8 oz rice noodles',
      '2 tbsp tamarind paste',
      '2 tbsp fish sauce',
      '2 eggs, beaten',
      '1 cup shrimp or chicken, 1/2 cup peanuts, green onions'
    ],
    instructions: [
      'Soak noodles in warm water until pliable.',
      'Heat wok and scramble eggs, remove and set aside.',
      'Stir-fry protein, add noodles and sauce mixture.',
      'Top with peanuts, green onions, and lime.'
    ],
    restaurantsWithDish: [
      { name: 'Bangkok Kitchen', price: '$$' }
    ]
  },
  {
    id: 12,
    name: "Herb Brined Chicken Breast",
    isCopycat: true,
    copycatOf: "Herb Brined Chicken",
    restaurant: "Stone Barn Inn",
    cuisine: "Contemporary American",
    dietary: ["Gluten-Free"],
    difficulty: "Medium",
    time: 45,
    ingredientsCount: 10,
    method: "Oven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgkoGaQ9mFwRSZ_VhlFUi2nJGptKqN8_Qmg&s",
    ingredients: [
      '4 chicken breasts',
      'Salt, brown sugar, thyme, rosemary',
      'Bay leaves, peppercorns',
      'Butter, garlic'
    ],
    instructions: [
      'Brine chicken in salt solution with herbs for 4 hours.',
      'Pat dry and season with salt and pepper.',
      'Sear in hot pan, finish in 375°F oven for 15 minutes.'
    ],
    restaurantsWithDish: [
      { name: 'Stone Barn Inn', price: '$$$' }
    ]
  }
];
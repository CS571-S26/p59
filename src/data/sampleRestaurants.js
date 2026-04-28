// src/data/sampleRestaurants.js

export const restaurants = [
  {
    id: 1,
    name: "Olive Garden",
    cuisine: "Italian",
    vibe: ["Family-Friendly", "Date Night"],
    price: "$$",
    signatureDishes: ["Fettuccine Alfredo", "Lasagna", "Chicken Parm"],
    menuItemDescriptions: {
      "Fettuccine Alfredo": "Creamy pasta with a rich Parmesan sauce and unlimited breadsticks.",
      "Lasagna": "Layers of pasta, meat sauce, and three cheeses baked to perfection.",
      "Chicken Parm": "Crispy breaded chicken topped with tomato sauce and melted mozzarella."
    },
    menuItemPrices: {
      "Fettuccine Alfredo": "$14.99",
      "Lasagna": "$16.50",
      "Chicken Parm": "$17.25"
    },
    location: "Madison",
    image: "https://media.olivegarden.com/en_us/images/product/d-parties-to-go-dozen-breadsticks-dpv.jpg"
  },
  {
    id: 2,
    name: "Mooyah",
    cuisine: "Fast Food",
    vibe: ["Student Specials", "Lively", "Quick Bite"],
    price: "$",
    signatureDishes: ["Burger", "Fries", "Chicken Nuggets"],
    menuItemDescriptions: {
      "Burger": "Juicy custom-built burgers with fresh toppings and special sauces.",
      "Fries": "Hand-cut golden fries served with variety of dipping sauces.",
      "Chicken Nuggets": "Crispy breaded chicken pieces perfect for a quick snack."
    },
    menuItemPrices: {
      "Burger": "$8.49",
      "Fries": "$3.99",
      "Chicken Nuggets": "$5.99"
    },
    location: "State St., Madison",
    image: "https://p1.socds.net/llp/4398/photo_upload_493704fa8c74fb87dbe3bfdcc272ce03-2024-05-16.jpg"
  },
  {
    id: 3,
    name: "Sushi RED",
    cuisine: "Japanese",
    vibe: ["Quiet", "Aesthetic", "Date Night", "Happy Hour"],
    price: "$$$",
    signatureDishes: ["Sushi Platter", "Ramen", "Tempura"],
    menuItemDescriptions: {
      "Sushi Platter": "Assorted fresh sashimi and rolls with premium ingredients and wasabi.",
      "Ramen": "Rich broth with tender noodles, egg, and traditional toppings.",
      "Tempura": "Light and crispy battered vegetables and shrimp with dipping sauce."
    },
    menuItemPrices: {
      "Sushi Platter": "$29.95",
      "Ramen": "$13.50",
      "Tempura": "$12.75"
    },
    happyHour: "Deals on drinks and specific menu items from 4:30-5:30pm Monday-Thursday at the bar.",
    location: "Capitol, Madison",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/33/2c/ce/para-compartir-tokio.jpg?w=900&h=500&s=1"
  },
  {
    id: 4,
    name: "Pure Green",
    cuisine: "Vegetarian",
    vibe: ["Student Specials", "Healthy", "Casual"],
    price: "$$",
    signatureDishes: ["Veggie Wrap", "Quinoa Salad", "Smoothie Bowl"],
    menuItemDescriptions: {
      "Veggie Wrap": "Fresh vegetables, hummus, and homemade spreads in a spinach tortilla.",
      "Quinoa Salad": "Protein-packed quinoa with seasonal vegetables and light vinaigrette.",
      "Smoothie Bowl": "Thick fruit smoothie base topped with granola, coconut, and berries."
    },
    menuItemPrices: {
      "Veggie Wrap": "$9.25",
      "Quinoa Salad": "$10.50",
      "Smoothie Bowl": "$8.75"
    },
    location: "State St., Madison",
    image: "https://images.squarespace-cdn.com/content/v1/558499eae4b0f4cd8ade2a14/e9f494b9-600b-4f96-8a96-28d20666dcf6/Screenshot+2025-06-21+at+12.17.30%E2%80%AFPM.png"
  },
  {
    id: 5,
    name: "Canteen",
    cuisine: "Mexican",
    vibe: ["Lively", "Good for Groups", "Late Night", "Happy Hour"],
    price: "$",
    signatureDishes: ["Street Tacos", "Guacamole", "Churros"],
    menuItemDescriptions: {
      "Street Tacos": "Authentic Mexican tacos with marinated meat, fresh cilantro, and lime.",
      "Guacamole": "Freshly made guacamole with ripe avocados, lime, and jalapeños.",
      "Churros": "Golden fried pastry sticks dusted with cinnamon sugar and chocolate sauce."
    },
    menuItemPrices: {
      "Street Tacos": "$3.50",
      "Guacamole": "$6.75",
      "Churros": "$4.25"
    },
    happyHour: "Half off tacos, margs, and other drinks everyday from 2-5pm.",
    location: "Capitol, Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5EPJnqKB8raOE2JIEKFepL0YpibUoSTuwQ&s"
  },
  {
    id: 6,
    name: "Old Fashioned",
    cuisine: "American",
    vibe: ["Historic", "Classic", "Comfort Food"],
    price: "$$",
    signatureDishes: ["Tavern Burger", "Brandy Old Fashioned", "Cheese Curds"],
    menuItemDescriptions: {
      "Tavern Burger": "Wisconsin classic - thin crispy burger topped with sautéed onions.",
      "Brandy Old Fashioned": "Madison's famous cocktail - brandy, sugar, bitters, and fresh orange.",
      "Cheese Curds": "Squeaky fresh Wisconsin cheese curds served hot and crispy."
    },
    menuItemPrices: {
      "Tavern Burger": "$15.00",
      "Brandy Old Fashioned": "$10.00",
      "Cheese Curds": "$7.50"
    },
    location: "Capitol, Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XdeLIY65XkU4phox-huvL74A4NlBegIayg&s"
  },
  {
    id: 7,
    name: "Graze",
    cuisine: "Farm-to-Table",
    vibe: ["Upscale", "Seasonal", "Local"],
    price: "$$$",
    signatureDishes: ["Seasonal Vegetable Plate", "Local Lamb", "Grass-Fed Beef"],
    menuItemDescriptions: {
      "Seasonal Vegetable Plate": "Chef's selection of the finest local vegetables prepared simply and beautifully.",
      "Local Lamb": "Pasture-raised lamb from Wisconsin farms with seasonal herbs and reductions.",
      "Grass-Fed Beef": "Premium grass-fed beef with rich flavor, grilled to perfection with farm vegetables."
    },
    menuItemPrices: {
      "Seasonal Vegetable Plate": "$22.00",
      "Local Lamb": "$28.50",
      "Grass-Fed Beef": "$31.00"
    },
    location: "Capitol, Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9O83drRhMt9XpP0-GfbCOPgLOsxPBegoKHw&s"
  },
  {
    id: 8,
    name: "Taco Bell Cantina",
    cuisine: "Mexican",
    vibe: ["Fun", "Casual", "Affordable"],
    price: "$",
    signatureDishes: ["Doritos Locos Tacos", "Crunch Wrap", "Baja Blast"],
    menuItemDescriptions: {
      "Doritos Locos Tacos": "Seasoned meat wrapped in a Doritos-flavored shell - a crunchy favorite.",
      "Crunch Wrap": "Grilled wrap filled with meat, nacho cheese, and a crispy tortilla shell.",
      "Baja Blast": "Tropical lime flavored beverage - the perfect pair to any Taco Bell meal."
    },
    menuItemPrices: {
      "Doritos Locos Tacos": "$2.99",
      "Crunch Wrap": "$4.99",
      "Baja Blast": "$1.99"
    },
    location: "State St., Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX3zvVNRzYrnnTy60BEq2gRa74sD746abmA&s"
  },
  {
    id: 9,
    name: "Essen Haus",
    cuisine: "German",
    vibe: ["Cozy", "Traditional", "Hearty"],
    price: "$$",
    signatureDishes: ["Schnitzel", "Spätzle", "Bratwurst"],
    menuItemDescriptions: {
      "Schnitzel": "Breaded and fried thin-cut pork or veal, served with lemon and lingonberry.",
      "Spätzle": "Tender egg noodles with caramelized onions and crispy fried onion strings.",
      "Bratwurst": "Authentic German sausage served with sauerkraut and whole grain mustard."
    },
    menuItemPrices: {
      "Schnitzel": "$18.50",
      "Spätzle": "$9.75",
      "Bratwurst": "$12.00"
    },
    location: "Downtown, Madison",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/10/44/28/d0/1-liter-boot-of-pilsner.jpg"
  },
  {
    id: 10,
    name: "The Old Fashioned Steakhouse",
    cuisine: "Steakhouse",
    vibe: ["Elegant", "Fine Dining", "Special Occasion"],
    price: "$$$",
    signatureDishes: ["Prime Rib", "Filet Mignon", "Wisconsin Cheese Board"],
    menuItemDescriptions: {
      "Prime Rib": "Slow-roasted prime rib with au jus, perfectly aged and juicy.",
      "Filet Mignon": "Tender, buttery center-cut steak with truffle butter and wild mushrooms.",
      "Wisconsin Cheese Board": "Selection of local Wisconsin cheeses with house-made crackers and preserves."
    },
    menuItemPrices: {
      "Prime Rib": "$39.99",
      "Filet Mignon": "$42.50",
      "Wisconsin Cheese Board": "$24.00"
    },
    location: "Downtown, Madison",
    image: "https://robbreport.com/wp-content/uploads/2018/11/keens-interior.jpg"
  },
  {
    id: 11,
    name: "Thai Basil",
    cuisine: "Thai",
    vibe: ["Aromatic", "Spicy", "Date Night"],
    price: "$$",
    signatureDishes: ["Pad Thai", "Green Curry", "Mango Sticky Rice"],
    menuItemDescriptions: {
      "Pad Thai": "Stir-fried noodles with shrimp or chicken, peanuts, and lime - a Thai classic.",
      "Green Curry": "Creamy coconut curry with green chilies, bamboo shoots, and Thai basil.",
      "Mango Sticky Rice": "Sweet sticky rice paired with ripe mango and topped with sesame seeds."
    },
    menuItemPrices: {
      "Pad Thai": "$12.95",
      "Green Curry": "$13.50",
      "Mango Sticky Rice": "$6.50"
    },
    location: "University, Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1t_DY5pvLIgZaV5zyvy7TFhNwvdO6eR4BA&s"
  },
  {
    id: 12,
    name: "Eno Vino",
    cuisine: "Contemporary American",
    vibe: ["Upscale", "Fine Dining", "Romantic", "Happy Hour"],
    price: "$$$",
    signatureDishes: ["Herb Brined Chicken", "Pan Seared Fish", "Root Vegetable Gratin"],
    menuItemDescriptions: {
      "Herb Brined Chicken": "Succulent herb-brined chicken breast with seasonal vegetables and reduction sauce.",
      "Pan Seared Fish": "Fresh catch of the day, pan-seared with lemon butter and accompanied by asparagus.",
      "Root Vegetable Gratin": "Layered root vegetables with cream and Gruyère cheese, baked until golden."
    },
    menuItemPrices: {
      "Herb Brined Chicken": "$27.00",
      "Pan Seared Fish": "$29.50",
      "Root Vegetable Gratin": "$12.75"
    },
    happyHour: "$2 off cocktails and glasses of wine, deals on select appetizers and menu items, Monday-Thursday from 4-6pm.",
    location: "Capitol, Madison",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxB2w0zEjhsLxtO3BVK1cFzDNfMeZx3K7sw&s"
  }
];
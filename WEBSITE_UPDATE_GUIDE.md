# RePlate Website Update - Implementation Guide

## 📋 What's Been Added

### 1. **Expanded Restaurant Collection** 
**10 Madison, WI restaurants** with complete data and photos:
- Old Fashioned (Historic American)
- Graze (Farm-to-Table)
- Taco Bell Grande (Mexican)
- Steenbock's Restaurant (German)
- The Old Fashioned Steakhouse (Fine Dining)
- Plus the original 5 restaurants

**File:** `src/data/sampleRestaurants.js`

### 2. **Expanded Recipe Collection**
**10 recipes** with detailed instructions and photos:
- Miso Butter Salmon Bowl
- One-Pan Roast Chicken with Herbs
- Butternut Squash Carbonara
- Marry Me Chicken Meatballs
- Tomato Egg Drop Soup
- Plus the original 5 recipes

**File:** `src/data/sampleRecipes.js`

### 3. **Modern Visual Theme**
A sophisticated, warm color palette inspired by The Palatable Life:

#### Colors:
- **Primary:** `#D4A574` (Warm tan/gold)
- **Primary Dark:** `#B8915E` (Deep gold)
- **Accent:** `#D97F6E` (Warm terracotta)
- **Backgrounds:** Cream (`#FAF8F3`) and Light (`#F5F1EB`)
- **Text:** Dark gray (`#2C2C2C`) with muted variants

#### Typography:
- **Display Font:** Playfair Display (serif) - Headlines
- **Body Font:** Poppins (sans-serif) - Content
- **System Font Fallbacks:** for optimal performance

**Files:** `src/index.css`, `src/App.css`

### 4. **Redesigned Landing Page**
A modern hero section with:
- Gradient header with compelling tagline
- Feature cards (3-column layout)
- Call-to-action section
- Responsive design for mobile

**Files:** `src/pages/Home.jsx`, `src/styles/Home.css`

---

## 🖼️ How Photos Work

### Adding Photos to Restaurants
Each restaurant object now includes an `image` property:

```javascript
{
  id: 1,
  name: "Restaurant Name",
  cuisine: "Italian",
  vibe: ["Family-Friendly"],
  price: "$$",
  signatureDishes: ["Dish 1", "Dish 2"],
  location: "Downtown, Madison",
  image: "https://images.unsplash.com/photo-xxxxx?w=500&q=80"  // ← Add URL here
}
```

### Adding Photos to Recipes
Each recipe object includes an `image` property:

```javascript
{
  id: 1,
  name: "Recipe Name",
  isCopycat: true,
  copycatOf: "...",
  cuisine: "Italian",
  dietary: ["Vegetarian"],
  difficulty: "Easy",
  time: 30,
  image: "https://images.unsplash.com/photo-xxxxx?w=500&q=80",  // ← Add URL here
  ingredients: [...],
  instructions: [...]
}
```

### Photo Sources (Free & Open)
You can use high-quality food photos from these sources:

1. **Unsplash** (https://unsplash.com/)
   - Free, high-resolution food photos
   - No credit required
   - Format: `https://images.unsplash.com/photo-[ID]?w=500&q=80`

2. **Pexels** (https://www.pexels.com/)
   - Free stock photos
   - Large food category
   - Format: `https://images.pexels.com/photos/[ID]/...`

3. **Pixabay** (https://pixabay.com/)
   - Royalty-free images
   - No attribution required
   - Format: `https://pixabay.com/get/[ID]/`

### How Components Display Photos
Both `RestaurantCard` and `RecipeCard` components:
- ✅ Automatically detect and display images if `image` prop is provided
- ✅ Show placeholder gradient background if no image exists
- ✅ Use `object-fit: cover` to ensure consistent aspect ratios
- ✅ Have hover effects that lift the card

---

## 🎨 Modern Design Features

### Color System
All colors use CSS variables defined in `index.css`:
```css
--primary: #D4A574          /* Main brand color */
--primary-dark: #B8915E     /* Darker variant */
--accent: #D97F6E           /* Secondary accent */
--text-dark: #2C2C2C        /* Main text */
--text-light: #6B6B6B       /* Secondary text */
```

### Spacing System
Consistent spacing for rhythm and alignment:
```css
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
```

### Shadow System
Professional shadows for depth:
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12)
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15)
```

### Component Styling
- **Cards:** Hover effects with `translateY(-4px)` and shadow elevation
- **Buttons:** Smooth transitions and consistent padding
- **Headings:** Elegant serif font with optimized line-height
- **Forms:** Custom focus states with color-coded shadows

---

## 🚀 How to Add More Content

### Adding a New Restaurant
1. Open `src/data/sampleRestaurants.js`
2. Add a new object to the `restaurants` array:

```javascript
{
  id: 11,  // Increment ID
  name: "Your Restaurant Name",
  cuisine: "Cuisine Type",
  vibe: ["Vibe 1", "Vibe 2"],
  price: "$, $$, or $$$",
  signatureDishes: ["Dish 1", "Dish 2", "Dish 3"],
  location: "Neighborhood, Madison",
  image: "https://... food photo URL"
}
```

3. Save the file - it will automatically appear on the Restaurants page

### Adding a New Recipe
1. Open `src/data/sampleRecipes.js`
2. Add a new recipe object:

```javascript
{
  id: 11,
  name: "Recipe Name",
  isCopycat: true or false,
  copycatOf: "Restaurant Dish Name (if copycat)",
  restaurant: "Restaurant Name",
  cuisine: "Cuisine Type",
  dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
  difficulty: "Easy, Medium, or Hard",
  time: 30,  // in minutes
  ingredientsCount: 8,
  method: "Stovetop, Oven, Frying, etc.",
  image: "https://... food photo URL",
  ingredients: ["1 cup this", "2 tbsp that"],
  instructions: ["Step 1", "Step 2", "Step 3"],
  restaurantsWithDish: [
    { name: "Restaurant Name", price: "$$" }
  ]
}
```

---

## 📱 Responsive Design
The new design is fully responsive:
- **Desktop:** Full grid layouts with optimal spacing
- **Tablet:** Adjusted font sizes and spacing
- **Mobile:** Single-column layouts with touch-friendly buttons

All CSS uses responsive media queries (`@media (max-width: 768px)`)

---

## 🎯 Design Inspiration
The visual theme is inspired by **The Palatable Life** (https://www.thepalatablelife.com/):
- Warm, inviting color palette
- Focus on food photography
- Clean, minimalist layout
- Elegant typography
- Generous whitespace
- Smooth interactions and transitions

---

## 📊 Stats
- **Restaurants:** 10 (was 5)
- **Recipes:** 10 (was 4)
- **All items:** Include high-quality photo URLs
- **Font Sources:** Google Fonts (Playfair Display + Poppins)
- **Color Variants:** 12 CSS variables for consistent theming

---

## 🔧 Next Steps for Enhancement
Consider adding:
- User ratings and reviews
- Dietary filter refinement
- Recipe difficulty filter
- Search/autocomplete for restaurants
- Save favorite recipes
- Print recipe functionality
- Social sharing buttons
- Photo upload for user submissions

---

## 💡 Tips for Maintaining Quality
1. **Photos:** Keep aspect ratio consistent (use `?w=500&q=80` parameters)
2. **Descriptions:** Keep cuisine descriptions concise and appetizing
3. **Tags:** Use consistent vibe and dietary tags
4. **Data:** Validate all required fields when adding new items
5. **Testing:** Test on mobile to ensure responsive design works

---

**Last Updated:** April 2026
**Theme Version:** 1.0 (Modern Palatable Life Inspired)

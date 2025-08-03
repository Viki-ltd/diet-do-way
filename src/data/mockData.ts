import { Product } from "@/components/ProductCard";
import { Recipe } from "@/components/RecipeCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Himalayan Pink Salt - The Drama Queen of Salts",
    brand: "Pink Perfection",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500",
    price: "$12.99",
    rating: 4.7,
    reviewCount: 342,
    category: "Spices & Seasonings",
    dietaryTags: ["Organic", "Gluten-Free"],
    affiliateUrl: "https://amazon.com/example",
    description: "This salt has traveled more than most people. Mined from ancient sea beds 250 million years old, it's basically the vintage wine of seasonings."
  },
  {
    id: "2",
    name: "Saffron Threads - Liquid Gold in Thread Form",
    brand: "Golden Harvest",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    price: "$89.99",
    rating: 4.9,
    reviewCount: 127,
    category: "Spices & Seasonings",
    dietaryTags: ["Premium", "Organic"],
    affiliateUrl: "https://amazon.com/example",
    description: "More expensive than gold by weight. Your risotto will feel so fancy, it might demand its own tax bracket."
  },
  {
    id: "3",
    name: "Japanese Wagyu Beef Jerky - Cow Candy",
    brand: "Tokyo Treats",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500",
    price: "$45.99",
    rating: 4.8,
    reviewCount: 89,
    category: "Meat & Seafood",
    dietaryTags: ["Premium", "High-Protein"],
    affiliateUrl: "https://amazon.com/example",
    description: "Jerky so tender, it makes regular jerky file for unemployment. Warning: May cause uncontrollable drooling."
  },
  {
    id: "4",
    name: "Truffle Oil - Fungi's Greatest Hit",
    brand: "European Delights",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500",
    price: "$28.50",
    rating: 4.6,
    reviewCount: 234,
    category: "Oils & Vinegars",
    dietaryTags: ["Premium", "Vegetarian"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made from truffles that pigs in France fought over. One drop turns instant ramen into fine dining."
  },
  {
    id: "5",
    name: "Manuka Honey - The Beyoncé of Honeys",
    brand: "New Zealand Gold",
    image: "https://images.unsplash.com/photo-1619895092538-128341789045?w=500",
    price: "$67.99",
    rating: 4.9,
    reviewCount: 445,
    category: "Sweeteners",
    dietaryTags: ["Raw", "Medicinal", "Premium"],
    affiliateUrl: "https://amazon.com/example",
    description: "Collected by bees with PHDs in flower selection. This honey is so pure, it judges other sweeteners."
  },
  {
    id: "6",
    name: "Ethiopian Coffee Beans - Liquid Motivation",
    brand: "Mountain Peak",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    price: "$24.99",
    rating: 4.7,
    reviewCount: 678,
    category: "Beverages",
    dietaryTags: ["Fair Trade", "Organic"],
    affiliateUrl: "https://amazon.com/example",
    description: "Grown at 7,000 feet where the beans get a better view than most people's apartments. Each sip is basically a hug from Ethiopia."
  },
  {
    id: "7",
    name: "Aged Parmesan - The Wise Elder of Cheese",
    brand: "Italian Heritage",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500",
    price: "$34.99",
    rating: 4.8,
    reviewCount: 156,
    category: "Dairy",
    dietaryTags: ["Aged", "Premium"],
    affiliateUrl: "https://amazon.com/example",
    description: "24 months of patience distilled into cheese form. This Parmesan has seen more seasons than your favorite TV show."
  },
  {
    id: "8",
    name: "Korean Gochujang - Spicy Relationship Goals",
    brand: "Seoul Kitchen",
    image: "https://images.unsplash.com/photo-1569901111808-e4c1a2d267f0?w=500",
    price: "$16.99",
    rating: 4.6,
    reviewCount: 293,
    category: "Sauces & Condiments",
    dietaryTags: ["Fermented", "Spicy", "Vegan"],
    affiliateUrl: "https://amazon.com/example",
    description: "Fermented for months like a fine wine, but with more heat and attitude. Warning: May cause spontaneous Korean food cravings."
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Quinoa's Identity Crisis Bowl",
    description: "When quinoa finally accepts it's the overachiever of grains and decides to make friends with Mediterranean flavors.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500",
    cookTime: "25 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Healthy Bowls",
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Ripe avocados", amount: "2" },
      { name: "Cherry tomatoes", amount: "1 cup" },
      { name: "Feta cheese", amount: "1/2 cup" },
      { name: "Olive oil", amount: "2 tbsp" },
      { name: "Lemon juice", amount: "1 lemon" },
      { name: "Salt and pepper", amount: "to taste" }
    ],
    instructions: [
      "Convince quinoa it's actually cool by rinsing until it stops judging you",
      "Cook with vegetable broth for ego boost (2:1 ratio)",
      "While quinoa cooks, prep the vegetables that will make it feel popular",
      "Dice avocados, halve cherry tomatoes, crumble feta",
      "Make dressing by whisking olive oil, lemon juice, salt, and pepper",
      "Combine all ingredients and serve with confidence you didn't ruin an ancient grain"
    ],
    tags: ["Gluten-Free", "Vegetarian", "High-Protein"]
  },
  {
    id: "2",
    title: "Saffron Risotto: When Rice Gets Expensive Therapy",
    description: "Arborio rice undergoes a luxury spa treatment with saffron and emerges as pure golden elegance.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
    cookTime: "45 mins",
    difficulty: "Medium",
    servings: 6,
    category: "Italian",
    ingredients: [
      { name: "Arborio rice", amount: "2 cups" },
      { name: "Saffron threads", amount: "1 pinch" },
      { name: "Warm vegetable stock", amount: "6 cups" },
      { name: "Grated Parmesan", amount: "1 cup" },
      { name: "Onion, diced", amount: "1" },
      { name: "White wine", amount: "1/2 cup" },
      { name: "Butter", amount: "2 tbsp" }
    ],
    instructions: [
      "Heat stock like you're warming a relationship - keep it warm but not boiling",
      "Sauté onions until they cry tears of joy (5 minutes)",
      "Add rice and stir with the devotion of a monk for 2 minutes",
      "Add wine and let it evaporate while contemplating life choices",
      "Slowly add stock one ladle at a time, stirring constantly",
      "Add saffron and watch magic happen",
      "Finish with Parmesan and butter, questioning why you don't cook like this daily"
    ],
    tags: ["Gluten-Free", "Luxurious", "Italian"]
  },
  {
    id: "3",
    title: "Chocolate Therapy Session (Mug Cake)",
    description: "Emergency chocolate intervention in under 3 minutes. No appointment necessary, insurance not required.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    cookTime: "3 mins",
    difficulty: "Easy",
    servings: 1,
    category: "Desserts",
    ingredients: [
      { name: "Cocoa powder", amount: "2 tbsp" },
      { name: "Flour", amount: "3 tbsp" },
      { name: "Sugar", amount: "2 tbsp" },
      { name: "Milk", amount: "3 tbsp" },
      { name: "Vegetable oil", amount: "2 tbsp" },
      { name: "Salt", amount: "1 pinch" }
    ],
    instructions: [
      "Mix dry ingredients while contemplating life choices",
      "Add wet ingredients with the hope of better days",
      "Stir until smooth (no lumps, unlike life)",
      "Microwave for 90 seconds (longer than most attention spans)",
      "Top with whatever makes you happy",
      "Eat while pretending it's breakfast"
    ],
    tags: ["Quick Fix", "Mood Booster", "Single Serving"]
  },
  {
    id: "4",
    title: "Truffle Pasta: When Fungi Become Your Best Friend",
    description: "Simple pasta elevated to aristocratic status with the magic of truffle oil.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500",
    cookTime: "20 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Italian",
    ingredients: [
      { name: "Fettuccine", amount: "1 lb" },
      { name: "Truffle oil", amount: "3 tbsp" },
      { name: "Grated Parmesan", amount: "1 cup" },
      { name: "Fresh parsley", amount: "1/4 cup" },
      { name: "Salt and pepper", amount: "to taste" },
      { name: "Garlic cloves", amount: "2" }
    ],
    instructions: [
      "Boil pasta like your reputation depends on it",
      "Heat truffle oil with garlic with religious reverence",
      "Toss drained pasta with oil and watch miracles happen",
      "Add Parmesan like you're blessing the dish",
      "Garnish with parsley for color therapy",
      "Serve to people you actually like"
    ],
    tags: ["Luxurious", "Vegetarian", "Italian"]
  },
  {
    id: "5",
    title: "Miso Soup: Liquid Meditation",
    description: "Ancient Japanese wisdom in a bowl. Side effects may include inner peace and umami enlightenment.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    cookTime: "15 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Japanese",
    ingredients: [
      { name: "Miso paste", amount: "3 tbsp" },
      { name: "Dashi stock", amount: "4 cups" },
      { name: "Silken tofu, diced", amount: "1/2 cup" },
      { name: "Wakame seaweed", amount: "2 tbsp" },
      { name: "Green onions, sliced", amount: "2" }
    ],
    instructions: [
      "Heat dashi like you're summoning ancient spirits",
      "Whisk miso paste until smooth (unlike your day)",
      "Add tofu cubes for protein and life meaning",
      "Sprinkle seaweed like ocean confetti",
      "Garnish with scallions for spring vibes",
      "Sip slowly while contemplating existence"
    ],
    tags: ["Vegan", "Probiotic", "Umami Bomb"]
  }
];
import { Product } from "@/components/ProductCard";
import { Recipe } from "@/components/RecipeCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Himalayan Pink Salt - The Drama Queen of Salts",
    brand: "Pink Perfection",
    image: "photo-1618160702438-9b02ab6515c9",
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
    image: "photo-1465146344425-f00d5f5c8f07",
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
    image: "photo-1500673922987-e212871fec22",
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
    image: "photo-1506744038136-46273834b3fb",
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
    image: "photo-1618160702438-9b02ab6515c9",
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
    image: "photo-1465146344425-f00d5f5c8f07",
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
    image: "photo-1500673922987-e212871fec22",
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
    image: "photo-1506744038136-46273834b3fb",
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
    image: "photo-1618160702438-9b02ab6515c9",
    cookTime: "25 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Healthy Bowls",
    ingredients: [
      "1 cup quinoa",
      "2 ripe avocados",
      "1 cup cherry tomatoes",
      "1/2 cup feta cheese",
      "2 tbsp olive oil",
      "1 lemon (juiced)",
      "Salt and pepper to taste"
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
    image: "photo-1465146344425-f00d5f5c8f07",
    cookTime: "45 mins",
    difficulty: "Medium",
    servings: 6,
    category: "Italian",
    ingredients: [
      "2 cups Arborio rice",
      "1 pinch saffron threads",
      "6 cups warm vegetable stock",
      "1 cup grated Parmesan",
      "1 onion, diced",
      "1/2 cup white wine",
      "2 tbsp butter"
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
    image: "photo-1500673922987-e212871fec22",
    cookTime: "3 mins",
    difficulty: "Easy",
    servings: 1,
    category: "Desserts",
    ingredients: [
      "2 tbsp cocoa powder",
      "3 tbsp flour",
      "2 tbsp sugar",
      "3 tbsp milk",
      "2 tbsp vegetable oil",
      "1 pinch salt"
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
    image: "photo-1506744038136-46273834b3fb",
    cookTime: "20 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Italian",
    ingredients: [
      "1 lb fettuccine",
      "3 tbsp truffle oil",
      "1 cup grated Parmesan",
      "1/4 cup fresh parsley",
      "Salt and pepper",
      "2 cloves garlic"
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
    image: "photo-1618160702438-9b02ab6515c9",
    cookTime: "15 mins",
    difficulty: "Easy",
    servings: 4,
    category: "Japanese",
    ingredients: [
      "3 tbsp miso paste",
      "4 cups dashi stock",
      "1/2 cup silken tofu, diced",
      "2 tbsp wakame seaweed",
      "2 green onions, sliced"
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
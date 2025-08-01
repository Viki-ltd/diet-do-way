import { Product } from "@/components/ProductCard";
import { Recipe } from "@/components/RecipeCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Almond Flour Cookies - Chocolate Chip",
    brand: "Simple Mills",
    image: "/placeholder.svg",
    price: "$4.99",
    rating: 4.5,
    reviewCount: 127,
    category: "Snacks",
    dietaryTags: ["Gluten-Free", "Dairy-Free"],
    affiliateUrl: "https://amazon.com/example",
    description: "Delicious crispy cookies made with almond flour and real chocolate chips."
  },
  {
    id: "2", 
    name: "Coconut Flour - Organic",
    brand: "Bob's Red Mill",
    image: "/placeholder.svg",
    price: "$8.49",
    rating: 4.8,
    reviewCount: 89,
    category: "Flours & Baking",
    dietaryTags: ["Gluten-Free", "Organic", "Keto"],
    affiliateUrl: "https://amazon.com/example",
    description: "Premium organic coconut flour perfect for low-carb baking."
  },
  {
    id: "3",
    name: "Cashew Milk - Unsweetened",
    brand: "Silk",
    image: "/placeholder.svg", 
    price: "$3.99",
    rating: 4.3,
    reviewCount: 234,
    category: "Dairy Alternatives",
    dietaryTags: ["Dairy-Free", "Vegan"],
    affiliateUrl: "https://amazon.com/example",
    description: "Creamy cashew milk with no added sugar, perfect for cereals and coffee."
  },
  {
    id: "4",
    name: "Cauliflower Rice - Frozen",
    brand: "Green Giant",
    image: "/placeholder.svg",
    price: "$2.99",
    rating: 4.1,
    reviewCount: 156,
    category: "Frozen Foods",
    dietaryTags: ["Low-Carb", "Keto", "Gluten-Free"],
    affiliateUrl: "https://amazon.com/example",
    description: "Ready-to-cook cauliflower rice, a perfect low-carb substitute."
  },
  {
    id: "5",
    name: "Dark Chocolate Bark - 85% Cacao",
    brand: "Lindt",
    image: "/placeholder.svg",
    price: "$5.49",
    rating: 4.7,
    reviewCount: 203,
    category: "Snacks",
    dietaryTags: ["Dairy-Free", "Low-Carb"],
    affiliateUrl: "https://amazon.com/example",
    description: "Rich dark chocolate with minimal sugar, perfect for low-carb diets."
  },
  {
    id: "6",
    name: "Kombucha - Ginger Lemon",
    brand: "GT's",
    image: "/placeholder.svg",
    price: "$4.29",
    rating: 4.4,
    reviewCount: 98,
    category: "Beverages",
    dietaryTags: ["Organic", "Dairy-Free", "Gluten-Free"],
    affiliateUrl: "https://amazon.com/example",
    description: "Probiotic-rich kombucha with zesty ginger and lemon flavors."
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Keto Chocolate Mug Cake",
    image: "/placeholder.svg",
    prepTime: "5 mins",
    servings: 1,
    dietaryTags: ["Keto", "Gluten-Free", "Low-Carb"],
    steps: [
      "Mix dry ingredients",
      "Add wet ingredients", 
      "Microwave 90 seconds",
      "Top and enjoy"
    ],
    ingredients: [
      { name: "Almond Flour", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Cocoa Powder", amount: "1 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Stevia", amount: "1 tsp" },
      { name: "Egg", amount: "1 large" }
    ]
  },
  {
    id: "2",
    title: "Dairy-Free Smoothie Bowl",
    image: "/placeholder.svg",
    prepTime: "10 mins",
    servings: 2,
    dietaryTags: ["Dairy-Free", "Vegan", "Gluten-Free"],
    steps: [
      "Freeze fruits overnight",
      "Blend with cashew milk",
      "Add protein powder",
      "Top with berries"
    ],
    ingredients: [
      { name: "Cashew Milk", amount: "1 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Frozen Berries", amount: "1 cup" },
      { name: "Protein Powder", amount: "1 scoop", affiliateUrl: "https://amazon.com/example" },
      { name: "Chia Seeds", amount: "1 tbsp" }
    ]
  },
  {
    id: "3",
    title: "Cauliflower Fried Rice",
    image: "/placeholder.svg", 
    prepTime: "15 mins",
    servings: 4,
    dietaryTags: ["Low-Carb", "Keto", "Gluten-Free"],
    steps: [
      "Heat oil in pan",
      "Add cauliflower rice",
      "Stir-fry with veggies",
      "Season and serve"
    ],
    ingredients: [
      { name: "Cauliflower Rice", amount: "1 bag", affiliateUrl: "https://amazon.com/example" },
      { name: "Coconut Oil", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Mixed Vegetables", amount: "1 cup" },
      { name: "Tamari Sauce", amount: "2 tbsp" }
    ]
  }
];
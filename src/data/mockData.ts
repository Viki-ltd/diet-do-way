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
  },
  {
    id: "9",
    name: "Matcha Green Tea Powder - Zen in a Tin",
    brand: "Kyoto Premium",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500",
    price: "$31.99",
    rating: 4.8,
    reviewCount: 189,
    category: "Beverages",
    dietaryTags: ["Organic", "Ceremonial Grade", "Antioxidant"],
    affiliateUrl: "https://amazon.com/example",
    description: "Stone-ground matcha so pure, it makes other green teas question their life choices. Meditation sold separately."
  },
  {
    id: "10",
    name: "Black Truffle Pasta Sauce - Luxury in a Jar",
    brand: "Tuscan Treasures",
    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=500",
    price: "$42.50",
    rating: 4.9,
    reviewCount: 76,
    category: "Sauces & Condiments",
    dietaryTags: ["Premium", "Artisanal", "Gluten-Free"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made with real black truffles that cost more than your car payment. Your pasta will never be the same."
  },
  {
    id: "11",
    name: "Artisan Sourdough Starter - The Living Culture",
    brand: "Ancient Grains Co",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    price: "$18.99",
    rating: 4.6,
    reviewCount: 312,
    category: "Baking",
    dietaryTags: ["Live Culture", "Natural", "Traditional"],
    affiliateUrl: "https://amazon.com/example",
    description: "100-year-old starter with more personality than most people. Requires daily feeding and emotional support."
  },
  {
    id: "12",
    name: "Vanilla Bean Paste - Madagascar Magic",
    brand: "Island Spice",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500",
    price: "$26.99",
    rating: 4.7,
    reviewCount: 234,
    category: "Baking",
    dietaryTags: ["Pure Extract", "Madagascar", "Premium"],
    affiliateUrl: "https://amazon.com/example",
    description: "Real vanilla beans from Madagascar. So aromatic, your neighbors will start showing up uninvited."
  },
  {
    id: "13",
    name: "Smoked Paprika - Spanish Sunshine",
    brand: "Iberian Delights",
    image: "https://images.unsplash.com/photo-1596040033229-a79a5b6987bf?w=500",
    price: "$14.99",
    rating: 4.8,
    reviewCount: 445,
    category: "Spices & Seasonings",
    dietaryTags: ["Smoked", "Spanish", "Traditional"],
    affiliateUrl: "https://amazon.com/example",
    description: "Oak-smoked paprika that brings the soul of Spain to your kitchen. Warning: May cause spontaneous flamenco dancing."
  },
  {
    id: "14",
    name: "Aged Balsamic Vinegar - Time in a Bottle",
    brand: "Modena Masters",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
    price: "$89.99",
    rating: 4.9,
    reviewCount: 123,
    category: "Oils & Vinegars",
    dietaryTags: ["25-Year Aged", "Traditional", "Premium"],
    affiliateUrl: "https://amazon.com/example",
    description: "Aged longer than some marriages. Each drop contains decades of Italian passion and patience."
  },
  {
    id: "15",
    name: "Raw Cacao Nibs - Chocolate's Wild Cousin",
    brand: "Rainforest Harvest",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500",
    price: "$21.99",
    rating: 4.5,
    reviewCount: 267,
    category: "Superfoods",
    dietaryTags: ["Raw", "Organic", "Fair Trade"],
    affiliateUrl: "https://amazon.com/example",
    description: "Unprocessed cacao in its rebellious teenage phase. All the benefits of chocolate without the sugar crash."
  },
  {
    id: "16",
    name: "Duck Fat - The French Secret",
    brand: "Gourmet France",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    price: "$19.99",
    rating: 4.7,
    reviewCount: 189,
    category: "Cooking Fats",
    dietaryTags: ["Premium", "French", "High Smoke Point"],
    affiliateUrl: "https://amazon.com/example",
    description: "The secret behind perfect French fries. Your vegetables will finally understand what fine dining means."
  },
  {
    id: "17",
    name: "Miso Paste - Umami Treasure",
    brand: "Tokyo Traditions",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
    price: "$16.50",
    rating: 4.8,
    reviewCount: 334,
    category: "Fermented Foods",
    dietaryTags: ["Fermented", "Probiotic", "Traditional"],
    affiliateUrl: "https://amazon.com/example",
    description: "Fermented soybean paste with more depth than your favorite novel. The umami equivalent of a PhD."
  },
  {
    id: "18",
    name: "Tahini - Middle Eastern Gold",
    brand: "Damascus Delights",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500",
    price: "$13.99",
    rating: 4.6,
    reviewCount: 278,
    category: "Nut Butters",
    dietaryTags: ["Sesame", "Natural", "Middle Eastern"],
    affiliateUrl: "https://amazon.com/example",
    description: "Ground sesame seeds that make hummus possible. The unsung hero of Mediterranean cuisine."
  },
  {
    id: "19",
    name: "Coconut Aminos - Soy Sauce's Tropical Cousin",
    brand: "Island Essence",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c95a?w=500",
    price: "$12.99",
    rating: 4.5,
    reviewCount: 401,
    category: "Sauces & Condiments",
    dietaryTags: ["Soy-Free", "Paleo", "Coconut"],
    affiliateUrl: "https://amazon.com/example",
    description: "Soy sauce went on vacation and came back as this. All the umami, none of the soy, with a hint of tropical vibes."
  },
  {
    id: "20",
    name: "Rose Harissa - Floral Fire",
    brand: "North African Spice Co",
    image: "https://images.unsplash.com/photo-1596040033229-a79a5b6987bf?w=500",
    price: "$17.99",
    rating: 4.7,
    reviewCount: 156,
    category: "Spices & Seasonings",
    dietaryTags: ["Spicy", "Floral", "North African"],
    affiliateUrl: "https://amazon.com/example",
    description: "Harissa that went to finishing school. Spicy with a romantic twist that'll make your taste buds write poetry."
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
  },
  {
    id: "6",
    title: "Ethiopian Coffee Ceremony Experience",
    description: "Transform your morning routine into a sacred ritual with this traditional coffee ceremony.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    cookTime: "45 mins",
    difficulty: "Medium",
    servings: 6,
    category: "Beverages",
    ingredients: [
      { name: "Green coffee beans", amount: "1 cup" },
      { name: "Water", amount: "3 cups" },
      { name: "Incense", amount: "1 stick" },
      { name: "Small glasses", amount: "6" },
      { name: "Sugar", amount: "to taste" }
    ],
    instructions: [
      "Light incense and create a ceremonial atmosphere",
      "Roast green beans in a pan until fragrant and dark",
      "Grind beans by hand with mortar and pestle",
      "Brew in traditional pot over low heat",
      "Serve in three rounds: Abol, Tona, and Baraka",
      "Share with friends while discussing life's mysteries"
    ],
    tags: ["Traditional", "Ceremonial", "Coffee"]
  },
  {
    id: "7",
    title: "Molecular Gastronomy Spherical Olives",
    description: "Science meets cuisine in this mind-bending appetizer that looks like olives but explodes with flavor.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
    cookTime: "2 hours",
    difficulty: "Hard",
    servings: 8,
    category: "Molecular",
    ingredients: [
      { name: "Olive juice", amount: "500ml" },
      { name: "Sodium alginate", amount: "2.5g" },
      { name: "Calcium chloride", amount: "5g" },
      { name: "Water", amount: "1000ml" },
      { name: "Immersion blender", amount: "1" }
    ],
    instructions: [
      "Create calcium bath by dissolving calcium chloride in water",
      "Blend olive juice with sodium alginate using immersion blender",
      "Form spheres using specialized spoon technique",
      "Let spheres sit in calcium bath for 2 minutes",
      "Rinse in clean water and serve immediately",
      "Watch guests' minds explode along with the spheres"
    ],
    tags: ["Molecular", "Avant-garde", "Mind-bending"]
  },
  {
    id: "8",
    title: "Sourdough Bread - The Ancient Art",
    description: "Master the ancient art of bread making with this therapeutic sourdough recipe.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    cookTime: "24 hours",
    difficulty: "Hard",
    servings: 1,
    category: "Baking",
    ingredients: [
      { name: "Active sourdough starter", amount: "100g" },
      { name: "Bread flour", amount: "500g" },
      { name: "Water", amount: "375ml" },
      { name: "Salt", amount: "10g" },
      { name: "Patience", amount: "Lots" }
    ],
    instructions: [
      "Feed your starter and wait for it to double (like waiting for good news)",
      "Mix flour and water, let autolyse for 30 minutes",
      "Add starter and salt, mix until just combined",
      "Perform stretch and folds every 30 minutes for 2 hours",
      "Bulk ferment for 4-6 hours (or until doubled)",
      "Shape, proof overnight, and bake in Dutch oven at 450°F"
    ],
    tags: ["Artisanal", "Fermented", "Time-intensive"]
  },
  {
    id: "9",
    title: "Levitating Ramen Bowl",
    description: "Gravity-defying ramen that will make your guests question the laws of physics.",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500",
    cookTime: "3 hours",
    difficulty: "Hard",
    servings: 4,
    category: "Japanese",
    ingredients: [
      { name: "Ramen noodles", amount: "400g" },
      { name: "Pork belly", amount: "500g" },
      { name: "Miso paste", amount: "100g" },
      { name: "Dashi stock", amount: "1L" },
      { name: "Soft-boiled eggs", amount: "4" },
      { name: "Architectural skills", amount: "Advanced" }
    ],
    instructions: [
      "Prepare 24-hour pork belly (start yesterday)",
      "Create the perfect soft-boiled egg with 6.5-minute timing",
      "Build ramen tower using secret engineering techniques",
      "Balance noodles in impossible positions",
      "Garnish with precision that would make surgeons jealous",
      "Serve before gravity remembers how to work"
    ],
    tags: ["Architectural", "Instagram-worthy", "Physics-defying"]
  },
  {
    id: "10",
    title: "Edible Garden Salad",
    description: "A salad so realistic, bees will try to pollinate it. Edible flowers and microgreens create an actual garden.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    cookTime: "30 mins",
    difficulty: "Medium",
    servings: 4,
    category: "Salads",
    ingredients: [
      { name: "Mixed microgreens", amount: "200g" },
      { name: "Edible flowers", amount: "50g" },
      { name: "Baby vegetables", amount: "Various" },
      { name: "Herb oil", amount: "100ml" },
      { name: "Artistic vision", amount: "Essential" }
    ],
    instructions: [
      "Create 'soil' using black olive tapenade and breadcrumbs",
      "Plant microgreens in organized chaos pattern",
      "Scatter flowers like nature intended (but better)",
      "Hide baby vegetables as surprise 'discoveries'",
      "Drizzle herb oil like morning dew",
      "Photograph extensively before anyone eats it"
    ],
    tags: ["Artistic", "Edible flowers", "Instagram-bait"]
  },
  {
    id: "11",
    title: "Deconstructed Tiramisu Universe",
    description: "Tiramisu exploded across the plate in the most elegant way possible. Each component tells its own story.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
    cookTime: "4 hours",
    difficulty: "Hard",
    servings: 6,
    category: "Desserts",
    ingredients: [
      { name: "Mascarpone spheres", amount: "12" },
      { name: "Coffee soil", amount: "200g" },
      { name: "Ladyfinger crumbs", amount: "100g" },
      { name: "Cocoa dust", amount: "50g" },
      { name: "Espresso pearls", amount: "24" },
      { name: "Philosophy degree", amount: "Helpful" }
    ],
    instructions: [
      "Question the very nature of what tiramisu should be",
      "Create mascarpone spheres using molecular techniques",
      "Transform coffee into edible soil components",
      "Scatter ladyfinger ruins artistically across plate",
      "Dust with cocoa like the ashes of traditional desserts",
      "Serve with a manifesto explaining your artistic choices"
    ],
    tags: ["Deconstructed", "Philosophical", "Pretentious"]
  },
  {
    id: "12",
    title: "Time-Traveling Carbonara",
    description: "Carbonara that somehow improves as you eat it, like it's traveling back in time to fix its own mistakes.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500",
    cookTime: "20 mins",
    difficulty: "Medium",
    servings: 4,
    category: "Italian",
    ingredients: [
      { name: "Guanciale", amount: "150g" },
      { name: "Pecorino Romano", amount: "100g" },
      { name: "Egg yolks", amount: "4" },
      { name: "Spaghetti", amount: "400g" },
      { name: "Black pepper", amount: "Generous" },
      { name: "Time manipulation skills", amount: "Optional" }
    ],
    instructions: [
      "Cook guanciale until it renders enough fat to fuel a small car",
      "Whisk eggs and cheese like you're conducting an orchestra",
      "Cook pasta exactly al dente (no exceptions, we're not monsters)",
      "Combine everything off heat with the precision of a Swiss watchmaker",
      "Toss until silky smooth (this is where the time travel happens)",
      "Serve immediately before the temporal paradox collapses"
    ],
    tags: ["Time-defying", "Italian perfection", "Silk-smooth"]
  },
  {
    id: "13",
    title: "Levitating Chocolate Mousse",
    description: "A chocolate mousse so light it appears to float above the plate. Gravity is just a suggestion.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    cookTime: "6 hours",
    difficulty: "Hard",
    servings: 8,
    category: "Desserts",
    ingredients: [
      { name: "Dark chocolate", amount: "200g" },
      { name: "Aquafaba", amount: "150ml" },
      { name: "Coconut cream", amount: "200ml" },
      { name: "Agar agar", amount: "2g" },
      { name: "Antigravity particles", amount: "A pinch" }
    ],
    instructions: [
      "Melt chocolate while contemplating the nature of density",
      "Whip aquafaba until it defies all logic",
      "Combine with chocolate using techniques known only to monks",
      "Add agar for structure (gravity needs help sometimes)",
      "Chill until it achieves enlightenment",
      "Serve on invisible plates for maximum effect"
    ],
    tags: ["Physics-defying", "Vegan magic", "Levitation"]
  },
  {
    id: "14",
    title: "Telepathic Soup",
    description: "A soup that somehow knows exactly what flavor you're craving before you do. Mind-reading technology included.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    cookTime: "1 hour",
    difficulty: "Medium",
    servings: 6,
    category: "Soups",
    ingredients: [
      { name: "Vegetable broth", amount: "1.5L" },
      { name: "Mood-responsive vegetables", amount: "500g" },
      { name: "Psychic herbs", amount: "Bundle" },
      { name: "Emotional seasoning", amount: "To taste" },
      { name: "Crystal ball", amount: "For presentation" }
    ],
    instructions: [
      "Meditate over broth until you achieve soup consciousness",
      "Add vegetables based on your guests' unspoken desires",
      "Season with herbs that understand feelings",
      "Simmer while maintaining eye contact with the pot",
      "Taste test using only your third eye",
      "Serve with confidence that it's exactly what they wanted"
    ],
    tags: ["Psychic", "Mood-responsive", "Mind-reading"]
  },
  {
    id: "15",
    title: "Invisible Pasta Primavera",
    description: "All the flavors of pasta primavera without any visible pasta. It's there, you just can't see it.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500",
    cookTime: "45 mins",
    difficulty: "Hard",
    servings: 4,
    category: "Pasta",
    ingredients: [
      { name: "Glass noodles", amount: "200g" },
      { name: "Transparent vegetables", amount: "300g" },
      { name: "Clear sauce", amount: "200ml" },
      { name: "Invisible garnish", amount: "For effect" },
      { name: "Faith", amount: "Enormous amounts" }
    ],
    instructions: [
      "Cook glass noodles until they achieve true transparency",
      "Prepare vegetables using camouflage techniques",
      "Create sauce so clear it questions its own existence",
      "Combine all ingredients while maintaining disbelief",
      "Plate artistically on invisible plates",
      "Serve to guests who believe in culinary magic"
    ],
    tags: ["Invisible", "Glass-like", "Belief-required"]
  }
];
import { Product } from "@/components/ProductCard";
import { Recipe } from "@/components/RecipeCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Himalayan Pink Salt - The Drama Queen of Salts",
    brand: "Pink Perfection",
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    name: "Coconut Oil - Tropical Vacation in a Jar",
    brand: "Island Pure",
    image: "/placeholder.svg",
    price: "$18.99",
    rating: 4.5,
    reviewCount: 567,
    category: "Oils & Vinegars",
    dietaryTags: ["Virgin", "Organic", "Multi-Use"],
    affiliateUrl: "https://amazon.com/example",
    description: "Cold-pressed by coconuts who meditate daily. Use it for cooking, beauty, or summoning tropical vibes in winter."
  },
  {
    id: "10",
    name: "Quinoa - The Overachiever Grain",
    brand: "Andean Pride",
    image: "/placeholder.svg",
    price: "$22.99",
    rating: 4.4,
    reviewCount: 445,
    category: "Grains & Rice",
    dietaryTags: ["Complete Protein", "Gluten-Free", "Ancient"],
    affiliateUrl: "https://amazon.com/example",
    description: "This grain has more protein than most gym bros. Quinoa: making other grains feel inadequate since 3000 BC."
  },
  {
    id: "11",
    name: "Icelandic Sea Salt - Vikings' Choice",
    brand: "Nordic Waters",
    image: "/placeholder.svg",
    price: "$15.99",
    rating: 4.7,
    reviewCount: 189,
    category: "Spices & Seasonings",
    dietaryTags: ["Wild Harvested", "Pure"],
    affiliateUrl: "https://amazon.com/example",
    description: "Harvested from waters so clean, fish there speak three languages. This salt makes your food more interesting than most people."
  },
  {
    id: "12",
    name: "Turkish Delight - Sultan's Sweet Secret",
    brand: "Istanbul Sweets",
    image: "/placeholder.svg",
    price: "$19.99",
    rating: 4.6,
    reviewCount: 234,
    category: "Sweets & Desserts",
    dietaryTags: ["Traditional", "Rose Flavored"],
    affiliateUrl: "https://amazon.com/example",
    description: "So good, it started trade wars. Each bite transports you to a Turkish bazaar where your biggest worry is choosing more flavors."
  },
  {
    id: "13",
    name: "Peruvian Quinoa Pasta - Rebellion in Carb Form",
    brand: "Inca Innovation",
    image: "/placeholder.svg",
    price: "$12.99",
    rating: 4.3,
    reviewCount: 167,
    category: "Pasta & Grains",
    dietaryTags: ["Gluten-Free", "High-Protein"],
    affiliateUrl: "https://amazon.com/example",
    description: "Pasta that's secretly healthy. Your Italian grandmother might be confused, but your nutritionist will applaud."
  },
  {
    id: "14",
    name: "Madagascar Vanilla - Perfume for Your Desserts",
    brand: "Vanilla Dreams",
    image: "/placeholder.svg",
    price: "$56.99",
    rating: 4.9,
    reviewCount: 145,
    category: "Extracts & Flavorings",
    dietaryTags: ["Pure", "Hand-Selected"],
    affiliateUrl: "https://amazon.com/example",
    description: "Vanilla so pure, it makes other flavors question their life choices. Each bottle contains the dreams of Madagascan vanilla farmers."
  },
  {
    id: "15",
    name: "Brazilian Açaí Powder - Superfood Superhero",
    brand: "Amazon Force",
    image: "/placeholder.svg",
    price: "$32.99",
    rating: 4.6,
    reviewCount: 378,
    category: "Superfoods",
    dietaryTags: ["Antioxidant Rich", "Organic", "Raw"],
    affiliateUrl: "https://amazon.com/example",
    description: "Purple powder that makes your smoothies Instagram-worthy and your cells do happy dances. Warning: May cause sudden urges to surf."
  },
  {
    id: "16",
    name: "Swiss Chocolate - Happiness in Bar Form",
    brand: "Alpine Bliss",
    image: "/placeholder.svg",
    price: "$8.99",
    rating: 4.8,
    reviewCount: 567,
    category: "Sweets & Desserts",
    dietaryTags: ["Premium", "Single Origin"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made by chocolate wizards in the Swiss Alps. Each bite contains approximately 47% cocoa and 53% pure joy."
  },
  {
    id: "17",
    name: "Indian Basmati Rice - Grain Royalty",
    brand: "Royal Harvest",
    image: "/placeholder.svg",
    price: "$19.99",
    rating: 4.7,
    reviewCount: 234,
    category: "Grains & Rice",
    dietaryTags: ["Aged", "Premium", "Aromatic"],
    affiliateUrl: "https://amazon.com/example",
    description: "Aged like fine wine, each grain is longer than your attention span. This rice has more elegance than most formal dinners."
  },
  {
    id: "18",
    name: "Lebanese Za'atar - Herb Mix of Champions",
    brand: "Middle East Magic",
    image: "/placeholder.svg",
    price: "$14.99",
    rating: 4.5,
    reviewCount: 198,
    category: "Spices & Seasonings",
    dietaryTags: ["Traditional", "Wild Herbs"],
    affiliateUrl: "https://amazon.com/example",
    description: "Herb blend so good, it makes toast feel like fine dining. Sprinkle on everything because life's too short for bland food."
  },
  {
    id: "19",
    name: "Thai Coconut Milk - Tropical Silk",
    brand: "Bangkok Best",
    image: "/placeholder.svg",
    price: "$6.99",
    rating: 4.6,
    reviewCount: 445,
    category: "Canned Goods",
    dietaryTags: ["Full Fat", "No Preservatives"],
    affiliateUrl: "https://amazon.com/example",
    description: "Creamier than your best pickup line. This coconut milk makes curry so good, you'll forget you ever ate anything else."
  },
  {
    id: "20",
    name: "Mexican Vanilla Extract - Liquid Sunshine",
    brand: "Aztec Gold",
    image: "/placeholder.svg",
    price: "$24.99",
    rating: 4.4,
    reviewCount: 123,
    category: "Extracts & Flavorings",
    dietaryTags: ["Pure", "Traditional"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made from vanilla beans that sunbathed in Veracruz. One teaspoon transforms baking disasters into 'meant to do that' masterpieces."
  },
  {
    id: "21",
    name: "Norwegian Salmon - Swimming Luxury",
    brand: "Arctic Premium",
    image: "/placeholder.svg",
    price: "$45.99",
    rating: 4.9,
    reviewCount: 89,
    category: "Meat & Seafood",
    dietaryTags: ["Wild Caught", "Omega-3 Rich"],
    affiliateUrl: "https://amazon.com/example",
    description: "Salmon so fresh, it's still getting mail from Norway. Rich in omega-3 and poor in regrets when you taste it."
  },
  {
    id: "22",
    name: "Italian Balsamic Vinegar - Liquid Time",
    brand: "Modena Masters",
    image: "/placeholder.svg",
    price: "$78.99",
    rating: 4.8,
    reviewCount: 156,
    category: "Oils & Vinegars",
    dietaryTags: ["25-Year Aged", "Traditional"],
    affiliateUrl: "https://amazon.com/example",
    description: "Aged longer than most marriages. This vinegar has seen empires rise and fall while developing its complex character."
  },
  {
    id: "23",
    name: "Japanese Miso Paste - Fermented Philosophy",
    brand: "Tokyo Tradition",
    image: "/placeholder.svg",
    price: "$18.99",
    rating: 4.7,
    reviewCount: 267,
    category: "Sauces & Condiments",
    dietaryTags: ["Fermented", "Traditional", "Umami"],
    affiliateUrl: "https://amazon.com/example",
    description: "Fermented with the patience of a zen master. This miso has more depth than most Netflix documentaries."
  },
  {
    id: "24",
    name: "Greek Extra Virgin Olive Oil - Athena's Choice",
    brand: "Olympus Gold",
    image: "/placeholder.svg",
    price: "$34.99",
    rating: 4.8,
    reviewCount: 445,
    category: "Oils & Vinegars",
    dietaryTags: ["Cold Pressed", "Single Estate"],
    affiliateUrl: "https://amazon.com/example",
    description: "Pressed from olives that have seen more history than any textbook. Each drop contains the wisdom of ancient Greece."
  },
  {
    id: "25",
    name: "French Sea Salt - Oceanic Sophistication",
    brand: "Brittany Harvest",
    image: "/placeholder.svg",
    price: "$22.99",
    rating: 4.6,
    reviewCount: 234,
    category: "Spices & Seasonings",
    dietaryTags: ["Hand Harvested", "Fleur de Sel"],
    affiliateUrl: "https://amazon.com/example",
    description: "Harvested by French salt farmers who take their job more seriously than most people take their marriages. Très magnifique!"
  },
  {
    id: "26",
    name: "Colombian Coffee - Mountain Magic",
    brand: "Andes Peak",
    image: "/placeholder.svg",
    price: "$28.99",
    rating: 4.7,
    reviewCount: 378,
    category: "Beverages",
    dietaryTags: ["Single Origin", "Fair Trade"],
    affiliateUrl: "https://amazon.com/example",
    description: "Grown at altitudes where clouds go for vacation. This coffee is so smooth, it makes Monday mornings bearable."
  },
  {
    id: "27",
    name: "Moroccan Argan Oil - Liquid Gold Rush",
    brand: "Desert Treasures",
    image: "/placeholder.svg",
    price: "$67.99",
    rating: 4.8,
    reviewCount: 189,
    category: "Oils & Vinegars",
    dietaryTags: ["Cold Pressed", "Beauty Grade"],
    affiliateUrl: "https://amazon.com/example",
    description: "Pressed by Moroccan goats with excellent taste. Use for cooking, beauty, or summoning Saharan wind energy."
  },
  {
    id: "28",
    name: "Scottish Shortbread - Buttery Time Machine",
    brand: "Highland Heritage",
    image: "/placeholder.svg",
    price: "$16.99",
    rating: 4.5,
    reviewCount: 445,
    category: "Sweets & Desserts",
    dietaryTags: ["Traditional", "Butter Rich"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made with more butter than seems legally possible. Each bite transports you to a Scottish castle where calories don't count."
  },
  {
    id: "29",
    name: "Chinese Five-Spice - Ancient Algorithm",
    brand: "Dynasty Blend",
    image: "/placeholder.svg",
    price: "$13.99",
    rating: 4.6,
    reviewCount: 267,
    category: "Spices & Seasonings",
    dietaryTags: ["Traditional", "Balanced"],
    affiliateUrl: "https://amazon.com/example",
    description: "Balanced like a feng shui master's living room. This blend has been perfecting harmony for over 1,000 years."
  },
  {
    id: "30",
    name: "Jamaican Blue Mountain Coffee - Peak Performance",
    brand: "Caribbean Crown",
    image: "/placeholder.svg",
    price: "$89.99",
    rating: 4.9,
    reviewCount: 123,
    category: "Beverages",
    dietaryTags: ["Premium", "High Altitude"],
    affiliateUrl: "https://amazon.com/example",
    description: "Grown at heights where eagles get vertigo. This coffee is so exclusive, it has its own zip code in flavor town."
  },
  {
    id: "31",
    name: "Russian Caviar - Tiny Spheres of Luxury",
    brand: "Caspian Elite",
    image: "/placeholder.svg",
    price: "$299.99",
    rating: 4.9,
    reviewCount: 67,
    category: "Gourmet",
    dietaryTags: ["Premium", "Wild"],
    affiliateUrl: "https://amazon.com/example",
    description: "Each egg is worth more than most people's lunch. Eating this is basically consuming liquid status symbols."
  },
  {
    id: "32",
    name: "German Mustard - Tangy Time Travel",
    brand: "Munich Tradition",
    image: "/placeholder.svg",
    price: "$9.99",
    rating: 4.4,
    reviewCount: 234,
    category: "Sauces & Condiments",
    dietaryTags: ["Traditional", "No Additives"],
    affiliateUrl: "https://amazon.com/example",
    description: "Made with the precision of German engineering and the passion of Oktoberfest. Your bratwurst will never forgive you if you use anything else."
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Quinoa's Identity Crisis Bowl",
    image: "/placeholder.svg",
    prepTime: "25 mins",
    servings: 4,
    dietaryTags: ["Gluten-Free", "Vegetarian", "High-Protein"],
    steps: [
      "Convince quinoa it's actually cool",
      "Rinse quinoa until it stops judging you",
      "Cook with vegetable broth for ego boost",
      "Top with ingredients that make it feel popular",
      "Serve with confidence you didn't ruin an ancient grain"
    ],
    ingredients: [
      { name: "Quinoa", amount: "1 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Avocado", amount: "2 ripe ones" },
      { name: "Cherry tomatoes", amount: "1 cup" },
      { name: "Feta cheese", amount: "1/2 cup", affiliateUrl: "https://amazon.com/example" }
    ]
  },
  {
    id: "2",
    title: "Saffron Risotto: When Rice Gets Expensive Therapy",
    image: "/placeholder.svg",
    prepTime: "45 mins",
    servings: 6,
    dietaryTags: ["Gluten-Free", "Luxurious"],
    steps: [
      "Heat stock like you're warming a relationship",
      "Sauté onions until they cry tears of joy",
      "Add rice and stir with the devotion of a monk",
      "Slowly add stock while whispering sweet nothings",
      "Add saffron and watch magic happen",
      "Finish with parmesan and question why you don't cook like this daily"
    ],
    ingredients: [
      { name: "Arborio Rice", amount: "2 cups", affiliateUrl: "https://amazon.com/example" },
      { name: "Saffron Threads", amount: "pinch", affiliateUrl: "https://amazon.com/example" },
      { name: "Vegetable Stock", amount: "6 cups" },
      { name: "Parmesan", amount: "1 cup grated", affiliateUrl: "https://amazon.com/example" }
    ]
  },
  {
    id: "3",
    title: "Chocolate Therapy Session (Mug Cake)",
    image: "/placeholder.svg",
    prepTime: "3 mins",
    servings: 1,
    dietaryTags: ["Quick Fix", "Mood Booster"],
    steps: [
      "Mix dry ingredients while contemplating life choices",
      "Add wet ingredients with the hope of better days",
      "Microwave for 90 seconds (longer than most attention spans)",
      "Top with whatever makes you happy",
      "Eat while pretending it's breakfast"
    ],
    ingredients: [
      { name: "Cocoa Powder", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Flour", amount: "3 tbsp" },
      { name: "Sugar", amount: "2 tbsp" },
      { name: "Milk", amount: "3 tbsp" }
    ]
  },
  {
    id: "4",
    title: "Truffle Pasta: When Fungi Become Your Best Friend",
    image: "/placeholder.svg",
    prepTime: "20 mins",
    servings: 4,
    dietaryTags: ["Luxurious", "Vegetarian"],
    steps: [
      "Boil pasta like your reputation depends on it",
      "Heat truffle oil with religious reverence",
      "Toss pasta with oil and watch miracles happen",
      "Add parmesan like you're blessing the dish",
      "Garnish with parsley for color therapy",
      "Serve to people you actually like"
    ],
    ingredients: [
      { name: "Fettuccine", amount: "1 lb" },
      { name: "Truffle Oil", amount: "3 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Parmesan", amount: "1 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Fresh Parsley", amount: "1/4 cup" }
    ]
  },
  {
    id: "5",
    title: "Miso Soup: Liquid Meditation",
    image: "/placeholder.svg",
    prepTime: "15 mins",
    servings: 4,
    dietaryTags: ["Vegan", "Probiotic", "Umami Bomb"],
    steps: [
      "Heat dashi like you're summoning ancient spirits",
      "Whisk miso until smooth (unlike your day)",
      "Add tofu cubes for protein and life meaning",
      "Sprinkle seaweed like ocean confetti",
      "Garnish with scallions for spring vibes",
      "Sip slowly while contemplating existence"
    ],
    ingredients: [
      { name: "Miso Paste", amount: "3 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Dashi Stock", amount: "4 cups" },
      { name: "Silken Tofu", amount: "1/2 cup diced" },
      { name: "Wakame Seaweed", amount: "2 tbsp" }
    ]
  },
  {
    id: "6",
    title: "Açaí Bowl: Instagram's Favorite Child",
    image: "/placeholder.svg",
    prepTime: "10 mins",
    servings: 2,
    dietaryTags: ["Superfood", "Photogenic", "Antioxidant Rich"],
    steps: [
      "Blend açaí with the enthusiasm of a fitness influencer",
      "Add frozen fruits for that perfect texture",
      "Pour into bowl like you're creating art",
      "Arrange toppings with museum-level precision",
      "Take 47 photos before eating",
      "Tag everyone you know"
    ],
    ingredients: [
      { name: "Açaí Powder", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Frozen Berries", amount: "1 cup" },
      { name: "Banana", amount: "1 large" },
      { name: "Granola", amount: "1/4 cup", affiliateUrl: "https://amazon.com/example" }
    ]
  },
  {
    id: "7",
    title: "Gochujang Stir-Fry: Spice Education Program",
    image: "/placeholder.svg",
    prepTime: "20 mins",
    servings: 4,
    dietaryTags: ["Spicy", "Korean-Inspired", "Vegetable Forward"],
    steps: [
      "Heat wok until it's hotter than your last argument",
      "Add vegetables in order of cooking stubbornness",
      "Stir-fry with the speed of someone avoiding responsibility",
      "Add gochujang and prepare for flavor enlightenment",
      "Toss until everything is coated in spicy salvation",
      "Serve over rice to people who can handle the heat"
    ],
    ingredients: [
      { name: "Gochujang", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Mixed Vegetables", amount: "4 cups" },
      { name: "Sesame Oil", amount: "1 tbsp" },
      { name: "Jasmine Rice", amount: "2 cups cooked" }
    ]
  },
  {
    id: "8",
    title: "Honey Lavender Cookies: Floral Mood Enhancers",
    image: "/placeholder.svg",
    prepTime: "35 mins",
    servings: 24,
    dietaryTags: ["Aromatic", "Therapeutic", "Unique"],
    steps: [
      "Cream butter and honey like you're making clouds",
      "Add lavender with the delicacy of a perfumer",
      "Mix dough until it smells like a spa",
      "Shape cookies with zen-like patience",
      "Bake until golden like a Tuscan sunset",
      "Cool before eating (the hardest step)"
    ],
    ingredients: [
      { name: "Manuka Honey", amount: "1/2 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Dried Lavender", amount: "1 tbsp" },
      { name: "Butter", amount: "1/2 cup" },
      { name: "Flour", amount: "2 cups" }
    ]
  },
  {
    id: "9",
    title: "Turkish Coffee: Caffeinated Fortune Telling",
    image: "/placeholder.svg",
    prepTime: "10 mins",
    servings: 2,
    dietaryTags: ["Traditional", "Strong", "Mystical"],
    steps: [
      "Grind coffee finer than your patience",
      "Heat water and sugar like you're casting spells",
      "Add coffee and stir counterclockwise (very important)",
      "Watch for foam like you're reading tea leaves",
      "Pour carefully, leaving grounds behind",
      "Drink slowly while pondering life's mysteries"
    ],
    ingredients: [
      { name: "Turkish Coffee", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Water", amount: "1 cup" },
      { name: "Sugar", amount: "to taste" },
      { name: "Cardamom", amount: "pinch", affiliateUrl: "https://amazon.com/example" }
    ]
  },
  {
    id: "10",
    title: "Za'atar Flatbread: Middle Eastern Magic Carpet",
    image: "/placeholder.svg",
    prepTime: "30 mins",
    servings: 6,
    dietaryTags: ["Traditional", "Herb-Rich", "Shareable"],
    steps: [
      "Mix dough like you're building foundations",
      "Let rise while contemplating ancient civilizations",
      "Roll flat like you're smoothing wrinkles from time",
      "Brush with olive oil generously (life's too short)",
      "Sprinkle za'atar like you're seasoning memories",
      "Bake until crispy and aromatic as a Lebanese morning"
    ],
    ingredients: [
      { name: "Za'atar Blend", amount: "1/4 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Bread Flour", amount: "3 cups" },
      { name: "Olive Oil", amount: "1/4 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Yeast", amount: "1 packet" }
    ]
  },
  {
    id: "11",
    title: "Coconut Curry: Tropical Escape in a Bowl",
    image: "/placeholder.svg",
    prepTime: "40 mins",
    servings: 6,
    dietaryTags: ["Coconut Rich", "Spicy", "Comfort Food"],
    steps: [
      "Sauté aromatics until your kitchen smells like Thailand",
      "Add curry paste and fry until fragrant (trust the process)",
      "Pour coconut milk like you're adding liquid sunshine",
      "Add vegetables in order of cooking time (organization matters)",
      "Simmer until everything is harmoniously tender",
      "Serve with rice and pretend you're on vacation"
    ],
    ingredients: [
      { name: "Coconut Milk", amount: "2 cans", affiliateUrl: "https://amazon.com/example" },
      { name: "Red Curry Paste", amount: "3 tbsp" },
      { name: "Mixed Vegetables", amount: "4 cups" },
      { name: "Thai Basil", amount: "1/4 cup" }
    ]
  },
  {
    id: "12",
    title: "Balsamic Glazed Salmon: Fish with a PhD",
    image: "/placeholder.svg",
    prepTime: "25 mins",
    servings: 4,
    dietaryTags: ["High-Protein", "Omega-3 Rich", "Sophisticated"],
    steps: [
      "Season salmon like you're blessing it for greatness",
      "Sear skin-side down with confidence",
      "Flip once (patience, young grasshopper)",
      "Reduce balsamic until syrupy and magical",
      "Glaze salmon like you're painting a masterpiece",
      "Serve to people who appreciate fine things"
    ],
    ingredients: [
      { name: "Norwegian Salmon", amount: "4 fillets", affiliateUrl: "https://amazon.com/example" },
      { name: "Balsamic Vinegar", amount: "1/4 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Fresh Rosemary", amount: "2 sprigs" }
    ]
  },
  {
    id: "13",
    title: "Five-Spice Tofu: Plant-Based Enlightenment",
    image: "/placeholder.svg",
    prepTime: "30 mins",
    servings: 4,
    dietaryTags: ["Vegan", "Protein Rich", "Asian-Inspired"],
    steps: [
      "Press tofu like you're extracting wisdom",
      "Marinate with five-spice and soy sauce",
      "Pan-fry until golden like autumn leaves",
      "Flip with the grace of a tai chi master",
      "Serve with vegetables and enlightened satisfaction",
      "Convert carnivores one bite at a time"
    ],
    ingredients: [
      { name: "Extra-Firm Tofu", amount: "1 block" },
      { name: "Five-Spice Powder", amount: "1 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Soy Sauce", amount: "3 tbsp" },
      { name: "Sesame Oil", amount: "1 tbsp" }
    ]
  },
  {
    id: "14",
    title: "Vanilla Bean Crème Brûlée: Dessert Doctorate",
    image: "/placeholder.svg",
    prepTime: "4 hours",
    servings: 6,
    dietaryTags: ["Advanced Level", "French Technique", "Show-Off Worthy"],
    steps: [
      "Heat cream with vanilla bean like you're brewing potions",
      "Whisk egg yolks until pale as your complexion after winter",
      "Temper mixture with the patience of a saint",
      "Strain through fine mesh (perfectionism required)",
      "Bake in water bath like you're conducting science",
      "Torch sugar until you feel like a culinary pyrotechnician"
    ],
    ingredients: [
      { name: "Madagascar Vanilla Bean", amount: "1 pod", affiliateUrl: "https://amazon.com/example" },
      { name: "Heavy Cream", amount: "2 cups" },
      { name: "Egg Yolks", amount: "6 large" },
      { name: "Sugar", amount: "1/2 cup plus extra for torching" }
    ]
  },
  {
    id: "15",
    title: "Argan Oil Couscous: Moroccan Sand Therapy",
    image: "/placeholder.svg",
    prepTime: "20 mins",
    servings: 4,
    dietaryTags: ["North African", "Nutty", "Vegetarian"],
    steps: [
      "Steam couscous like you're summoning desert winds",
      "Fluff with fork until each grain is liberated",
      "Drizzle argan oil with the reverence it deserves",
      "Add almonds for texture and life meaning",
      "Garnish with herbs like you're decorating an oasis",
      "Serve while imagining camel bells in the distance"
    ],
    ingredients: [
      { name: "Couscous", amount: "2 cups" },
      { name: "Argan Oil", amount: "3 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Sliced Almonds", amount: "1/4 cup" },
      { name: "Fresh Mint", amount: "2 tbsp" }
    ]
  },
  {
    id: "16",
    title: "German Mustard Pretzel Bites: Oktoberfest Preparation",
    image: "/placeholder.svg",
    prepTime: "2 hours",
    servings: 12,
    dietaryTags: ["Traditional", "Carb Loading", "Beer Friendly"],
    steps: [
      "Make dough with Germanic precision",
      "Knead until your forearms understand hard work",
      "Shape into bite-sized perfection",
      "Boil in baking soda bath (chemistry in action)",
      "Brush with mustard like you're painting tiny masterpieces",
      "Bake until brown as Bavarian leather"
    ],
    ingredients: [
      { name: "Bread Flour", amount: "4 cups" },
      { name: "German Mustard", amount: "1/4 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Baking Soda", amount: "1/4 cup" },
      { name: "Coarse Salt", amount: "2 tbsp" }
    ]
  },
  {
    id: "17",
    title: "Shortbread Therapy Session",
    image: "/placeholder.svg",
    prepTime: "45 mins",
    servings: 16,
    dietaryTags: ["Butter Rich", "Scottish Heritage", "Meditation Aid"],
    steps: [
      "Cream butter until fluffy as Highland clouds",
      "Add sugar with the delicacy of morning frost",
      "Incorporate flour like you're building castles",
      "Pat into pan with thoughts of rolling green hills",
      "Score before baking (planning ahead is key)",
      "Cool completely before cutting (patience, dear human)"
    ],
    ingredients: [
      { name: "Scottish Butter", amount: "1 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Powdered Sugar", amount: "1/2 cup" },
      { name: "Flour", amount: "2 cups" },
      { name: "Salt", amount: "pinch" }
    ]
  },
  {
    id: "18",
    title: "Blue Mountain Coffee Tiramisu: Caffeine Clouds",
    image: "/placeholder.svg",
    prepTime: "6 hours",
    servings: 8,
    dietaryTags: ["Coffee Intensive", "No-Bake", "Make-Ahead"],
    steps: [
      "Brew coffee strong enough to wake ancestors",
      "Whip mascarpone until cloud-like",
      "Dip ladyfingers quickly (timing is everything)",
      "Layer like you're building flavor architecture",
      "Refrigerate overnight (delayed gratification builds character)",
      "Dust with cocoa before serving like fairy dust"
    ],
    ingredients: [
      { name: "Blue Mountain Coffee", amount: "2 cups brewed", affiliateUrl: "https://amazon.com/example" },
      { name: "Mascarpone", amount: "2 cups" },
      { name: "Ladyfinger Cookies", amount: "2 packages" },
      { name: "Cocoa Powder", amount: "for dusting" }
    ]
  },
  {
    id: "19",
    title: "Caviar and Blini: Tiny Luxury Bites",
    image: "/placeholder.svg",
    prepTime: "1 hour",
    servings: 6,
    dietaryTags: ["Luxury", "Russian Inspired", "Party Worthy"],
    steps: [
      "Make blini batter smooth as diplomatic relations",
      "Cook small pancakes with precision timing",
      "Top with crème fraîche like spreading happiness",
      "Add caviar one precious spoonful at a time",
      "Garnish with chives for color contrast",
      "Serve to people who understand the finer things"
    ],
    ingredients: [
      { name: "Russian Caviar", amount: "2 oz", affiliateUrl: "https://amazon.com/example" },
      { name: "Buckwheat Flour", amount: "1 cup" },
      { name: "Crème Fraîche", amount: "1/2 cup" },
      { name: "Fresh Chives", amount: "2 tbsp" }
    ]
  },
  {
    id: "20",
    title: "Sea Salt Chocolate Tart: Ocean Meets Cocoa",
    image: "/placeholder.svg",
    prepTime: "3 hours",
    servings: 10,
    dietaryTags: ["Decadent", "Salty-Sweet", "Impressive"],
    steps: [
      "Make pastry with cold hands and warm heart",
      "Blind bake until golden as beach sand",
      "Melt chocolate with reverent patience",
      "Whisk in cream until silky smooth",
      "Pour into shell like liquid velvet",
      "Sprinkle sea salt like ocean kisses"
    ],
    ingredients: [
      { name: "Dark Chocolate", amount: "8 oz", affiliateUrl: "https://amazon.com/example" },
      { name: "Icelandic Sea Salt", amount: "1 tsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Heavy Cream", amount: "1 cup" },
      { name: "Pastry Flour", amount: "2 cups" }
    ]
  },
  {
    id: "21",
    title: "Turkish Delight Ice Cream: Frozen Poetry",
    image: "/placeholder.svg",
    prepTime: "24 hours",
    servings: 8,
    dietaryTags: ["Rose Flavored", "Exotic", "Summer Essential"],
    steps: [
      "Heat cream with rose water like brewing dreams",
      "Whisk custard until thick as plot lines",
      "Cool overnight (anticipation enhances flavor)",
      "Churn in ice cream maker while humming Turkish melodies",
      "Fold in chopped Turkish delight pieces",
      "Freeze until firm as Ottoman resolve"
    ],
    ingredients: [
      { name: "Turkish Delight", amount: "1 cup chopped", affiliateUrl: "https://amazon.com/example" },
      { name: "Heavy Cream", amount: "2 cups" },
      { name: "Rose Water", amount: "2 tbsp" },
      { name: "Egg Yolks", amount: "6" }
    ]
  },
  {
    id: "22",
    title: "Basmati Rice Pudding: Grain Royalty Dessert",
    image: "/placeholder.svg",
    prepTime: "1 hour",
    servings: 6,
    dietaryTags: ["Aromatic", "Comfort Food", "Cardamom Scented"],
    steps: [
      "Rinse basmati until water runs clear as conscience",
      "Simmer in milk with cardamom pods",
      "Stir occasionally while meditating on grains",
      "Add sugar when rice is tender as forgiveness",
      "Garnish with pistachios like green jewels",
      "Serve warm or cold depending on season and mood"
    ],
    ingredients: [
      { name: "Basmati Rice", amount: "1 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Whole Milk", amount: "4 cups" },
      { name: "Cardamom Pods", amount: "6" },
      { name: "Pistachios", amount: "1/4 cup chopped" }
    ]
  },
  {
    id: "23",
    title: "Olive Oil Cake: Mediterranean Moisture",
    image: "/placeholder.svg",
    prepTime: "1 hour",
    servings: 8,
    dietaryTags: ["Moist", "Fruity", "Ancient Grains"],
    steps: [
      "Whisk eggs until pale as Aegean foam",
      "Stream in olive oil like liquid sunshine",
      "Fold in flour with Greek goddess grace",
      "Add lemon zest for Mediterranean brightness",
      "Bake until golden as olive tree leaves",
      "Cool before slicing (if you have self-control)"
    ],
    ingredients: [
      { name: "Extra Virgin Olive Oil", amount: "3/4 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Eggs", amount: "4 large" },
      { name: "Lemon Zest", amount: "2 tbsp" },
      { name: "Almond Flour", amount: "2 cups" }
    ]
  },
  {
    id: "24",
    title: "Colombian Coffee Flan: Caffeine Caramel",
    image: "/placeholder.svg",
    prepTime: "4 hours",
    servings: 8,
    dietaryTags: ["Coffee Forward", "Silky", "Latin Inspired"],
    steps: [
      "Make caramel until amber as sunset over Bogotá",
      "Brew coffee stronger than your willpower",
      "Blend with eggs and milk until smooth as salsa moves",
      "Pour over caramel like liquid gold",
      "Steam in water bath with zen patience",
      "Chill until set and your patience is rewarded"
    ],
    ingredients: [
      { name: "Colombian Coffee", amount: "1 cup strong", affiliateUrl: "https://amazon.com/example" },
      { name: "Eggs", amount: "6 whole" },
      { name: "Condensed Milk", amount: "1 can" },
      { name: "Sugar for caramel", amount: "1 cup" }
    ]
  },
  {
    id: "25",
    title: "Moroccan Mint Tea Cookies: Edible Oasis",
    image: "/placeholder.svg",
    prepTime: "45 mins",
    servings: 24,
    dietaryTags: ["Minty Fresh", "Tea Inspired", "Delicate"],
    steps: [
      "Cream butter until fluffy as desert clouds",
      "Add ground mint tea leaves for exotic essence",
      "Form dough into crescents like moon phases",
      "Bake until edges are lightly golden",
      "Dust with powdered sugar like Sahara sand",
      "Serve with actual mint tea for full experience"
    ],
    ingredients: [
      { name: "Mint Tea Leaves", amount: "2 tbsp ground" },
      { name: "Butter", amount: "1 cup" },
      { name: "Powdered Sugar", amount: "1/2 cup plus for dusting" },
      { name: "Flour", amount: "2 cups" }
    ]
  },
  {
    id: "26",
    title: "Saffron Honey Panna Cotta: Golden Dreams",
    image: "/placeholder.svg",
    prepTime: "4 hours",
    servings: 6,
    dietaryTags: ["Saffron Luxury", "Silky", "No-Bake"],
    steps: [
      "Bloom gelatin like awakening sleeping beauty",
      "Heat cream with saffron until golden as treasure",
      "Whisk in honey until dissolved completely",
      "Add gelatin and stir until smooth as silk roads",
      "Pour into molds like liquid sunshine",
      "Refrigerate until set and dreams come true"
    ],
    ingredients: [
      { name: "Saffron Threads", amount: "pinch", affiliateUrl: "https://amazon.com/example" },
      { name: "Manuka Honey", amount: "1/3 cup", affiliateUrl: "https://amazon.com/example" },
      { name: "Heavy Cream", amount: "2 cups" },
      { name: "Gelatin", amount: "1 packet" }
    ]
  },
  {
    id: "27",
    title: "Five-Spice Pear Tart: Autumn Philosophy",
    image: "/placeholder.svg",
    prepTime: "2 hours",
    servings: 8,
    dietaryTags: ["Seasonal", "Spiced", "French Technique"],
    steps: [
      "Make pastry with philosophical patience",
      "Arrange pear slices like fallen leaves",
      "Sprinkle five-spice like ancient wisdom",
      "Brush with honey for golden finish",
      "Bake until bubbling with seasonal joy",
      "Cool slightly before serving to eager autumn lovers"
    ],
    ingredients: [
      { name: "Pears", amount: "4 large, sliced" },
      { name: "Five-Spice Powder", amount: "1 tsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Honey", amount: "3 tbsp" },
      { name: "Pastry Dough", amount: "1 recipe" }
    ]
  },
  {
    id: "28",
    title: "Lavender Honey Macarons: Purple Perfection",
    image: "/placeholder.svg",
    prepTime: "3 hours",
    servings: 20,
    dietaryTags: ["French Technique", "Floral", "Challenge Accepted"],
    steps: [
      "Sift almond flour until fine as fairy dust",
      "Whip meringue to stiff peaks (patience required)",
      "Macaronage until lava-like (technical term)",
      "Pipe with precision of Swiss watchmaker",
      "Rest until skin forms (delayed gratification)",
      "Bake until feet develop (not human feet)"
    ],
    ingredients: [
      { name: "Almond Flour", amount: "1 cup" },
      { name: "Dried Lavender", amount: "1 tsp" },
      { name: "Honey", amount: "2 tbsp", affiliateUrl: "https://amazon.com/example" },
      { name: "Egg Whites", amount: "3 large" }
    ]
  },
  {
    id: "29",
    title: "Coconut Curry Soup: Liquid Vacation",
    image: "/placeholder.svg",
    prepTime: "35 mins",
    servings: 4,
    dietaryTags: ["Warming", "Coconut Rich", "Soul Food"],
    steps: [
      "Sauté aromatics until kitchen smells like paradise",
      "Add curry paste and fry until fragrant as temple incense",
      "Pour coconut milk like tropical rain",
      "Simmer vegetables until tender as sunset",
      "Adjust seasoning with wisdom of island elders",
      "Serve hot with dreams of palm trees"
    ],
    ingredients: [
      { name: "Coconut Milk", amount: "2 cans", affiliateUrl: "https://amazon.com/example" },
      { name: "Red Curry Paste", amount: "2 tbsp" },
      { name: "Lemongrass", amount: "2 stalks" },
      { name: "Lime Leaves", amount: "4" }
    ]
  },
  {
    id: "30",
    title: "Chocolate Truffle Meditation Spheres",
    image: "/placeholder.svg",
    prepTime: "2 hours",
    servings: 20,
    dietaryTags: ["Pure Chocolate", "Mindfulness", "Decadent"],
    steps: [
      "Melt chocolate with monastic patience",
      "Heat cream to perfect temperature (precision matters)",
      "Combine into ganache smoother than zen thoughts",
      "Chill until firm enough to shape",
      "Roll into spheres while contemplating cocoa beans",
      "Coat in cocoa powder like dusting with earth's essence"
    ],
    ingredients: [
      { name: "Dark Chocolate", amount: "8 oz", affiliateUrl: "https://amazon.com/example" },
      { name: "Heavy Cream", amount: "1/2 cup" },
      { name: "Cocoa Powder", amount: "for rolling" },
      { name: "Vanilla Extract", amount: "1 tsp", affiliateUrl: "https://amazon.com/example" }
    ]
  }
];
export interface Business {
  id: string;
  name: string;
  type: string;
  location: string;
  image: string;
  specialties: string[];
  imporTradeProducts: string[];
  rating: number;
  description: string;
  priceRange: string;
  website?: string;
}

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "The Saffron Thread",
    type: "Fine Dining Restaurant",
    location: "Downtown",
    image: "/placeholder.svg",
    specialties: ["Persian Cuisine", "Saffron Dishes", "Wine Pairing"],
    imporTradeProducts: ["Persian Saffron", "Pomegranate Molasses", "Rose Water"],
    rating: 4.8,
    description: "Where ancient Persian flavors meet modern culinary artistry. Our chef trained in Isfahan and brought back secrets older than your great-grandmother's stories.",
    priceRange: "$$$",
    website: "thesaffronthread.com"
  },
  {
    id: "2",
    name: "Truffle & Trouble",
    type: "Bistro",
    location: "Arts District",
    image: "/placeholder.svg",
    specialties: ["Truffle Dishes", "French Technique", "Seasonal Menu"],
    imporTradeProducts: ["Italian Truffle Oil", "French Sea Salt", "Aged Balsamic"],
    rating: 4.7,
    description: "Small plates, big flavors, and enough truffle to make your taste buds write poetry. Our portions are European-sized but our flavor is American-bold.",
    priceRange: "$$",
    website: "truffleandtrouble.com"
  },
  {
    id: "3",
    name: "Miso Happy Ramen Bar",
    type: "Casual Dining",
    location: "University District",
    image: "/placeholder.svg",
    specialties: ["Authentic Ramen", "Japanese Comfort Food", "Late Night"],
    imporTradeProducts: ["White Miso Paste", "Shiitake Mushrooms", "Nori Sheets"],
    rating: 4.6,
    description: "Ramen so good, it makes you question every instant noodle decision you've ever made. Open until 2 AM because enlightenment doesn't follow business hours.",
    priceRange: "$",
    website: "misohappyramen.com"
  },
  {
    id: "4",
    name: "Coconut & Co.",
    type: "Vegan Café",
    location: "Green Valley",
    image: "/placeholder.svg",
    specialties: ["Plant-Based", "Coconut Desserts", "Smoothie Bowls"],
    imporTradeProducts: ["Virgin Coconut Oil", "Coconut Flour", "Açaí Powder"],
    rating: 4.5,
    description: "Where coconuts come to fulfill their highest purpose. We've convinced even the most dedicated carnivores that plants can be exciting.",
    priceRange: "$$",
    website: "coconutandco.com"
  },
  {
    id: "5",
    name: "Honey & Smoke BBQ",
    type: "BBQ Joint",
    location: "Industrial District",
    image: "/placeholder.svg",
    specialties: ["Smoked Meats", "Honey Glazes", "Craft Beer"],
    imporTradeProducts: ["Manuka Honey", "Himalayan Salt", "Maple Syrup"],
    rating: 4.7,
    description: "Low and slow cooking meets high-quality ingredients. Our pit master has a PhD in smoke and a masters in making vegetarians question their life choices.",
    priceRange: "$$",
    website: "honeysmokebbq.com"
  },
  {
    id: "6",
    name: "Za'atar & Friends",
    type: "Mediterranean Deli",
    location: "Old Town",
    image: "/placeholder.svg",
    specialties: ["Middle Eastern", "Fresh Bread", "Mezze Platters"],
    imporTradeProducts: ["Lebanese Za'atar", "Extra Virgin Olive Oil", "Sumac"],
    rating: 4.6,
    description: "Family recipes passed down through generations of people who really understood flavor. Our hummus has its own fan club.",
    priceRange: "$",
    website: "zaatarfriends.com"
  },
  {
    id: "7",
    name: "The Quinoa Queen",
    type: "Health Food Café",
    location: "Fitness District",
    image: "/placeholder.svg",
    specialties: ["Superfood Bowls", "Protein Smoothies", "Gluten-Free"],
    imporTradeProducts: ["Peruvian Quinoa", "Chia Seeds", "Açaí Powder"],
    rating: 4.4,
    description: "Where quinoa finally gets the respect it deserves. We make healthy food so tasty, you'll forget it's good for you.",
    priceRange: "$$",
    website: "quinoaqueen.com"
  },
  {
    id: "8",
    name: "Chocolate Therapy",
    type: "Dessert Bar",
    location: "Shopping District",
    image: "/placeholder.svg",
    specialties: ["Artisan Chocolates", "Dessert Cocktails", "Therapy Sessions"],
    imporTradeProducts: ["Belgian Chocolate", "Madagascar Vanilla", "Sea Salt"],
    rating: 4.9,
    description: "We solve life's problems one chocolate at a time. Our desserts are so good, they should come with a warning label.",
    priceRange: "$$$",
    website: "chocolatetherapy.com"
  },
  {
    id: "9",
    name: "Blue Mountain Brew",
    type: "Coffee Roastery",
    location: "Coffee Row",
    image: "/placeholder.svg",
    specialties: ["Single Origin", "Cold Brew", "Coffee Education"],
    imporTradeProducts: ["Jamaican Blue Mountain", "Ethiopian Beans", "Colombian Coffee"],
    rating: 4.8,
    description: "We take coffee more seriously than most people take their relationships. Our baristas are basically coffee therapists with advanced degrees in caffeine.",
    priceRange: "$$",
    website: "bluemountainbrew.com"
  },
  {
    id: "10",
    name: "Spice Route Trading Post",
    type: "Fusion Restaurant",
    location: "International District",
    image: "/placeholder.svg",
    specialties: ["Global Fusion", "Spice Blends", "Adventure Dining"],
    imporTradeProducts: ["Five-Spice Blend", "Cardamom Pods", "Star Anise"],
    rating: 4.6,
    description: "Every dish tells a story from somewhere on the ancient spice routes. Our menu is basically a geography lesson with amazing side effects.",
    priceRange: "$$",
    website: "spiceroutetp.com"
  },
  {
    id: "11",
    name: "The Fermented Fox",
    type: "Gastropub",
    location: "Brewery District",
    image: "/placeholder.svg",
    specialties: ["Fermented Foods", "Craft Beer", "Kimchi Everything"],
    imporTradeProducts: ["Korean Gochujang", "Miso Paste", "Kombucha Cultures"],
    rating: 4.5,
    description: "Where fermentation meets fascination. We believe everything tastes better with a little bacterial help and a lot of time.",
    priceRange: "$$",
    website: "fermentedfox.com"
  },
  {
    id: "12",
    name: "Caspian Caviar Club",
    type: "Luxury Dining",
    location: "Financial District",
    image: "/placeholder.svg",
    specialties: ["Caviar Service", "Champagne Pairing", "Wealth Display"],
    imporTradeProducts: ["Russian Caviar", "Crème Fraîche", "Mother of Pearl Spoons"],
    rating: 4.9,
    description: "Where tiny fish eggs cost more than most people's cars. Our caviar has better provenance than most people's family trees.",
    priceRange: "$$$$",
    website: "caspiancaviarclub.com"
  },
  {
    id: "13",
    name: "Pasta La Vista",
    type: "Italian Trattoria",
    location: "Little Italy",
    image: "/placeholder.svg",
    specialties: ["Handmade Pasta", "Truffle Dishes", "Italian Wines"],
    imporTradeProducts: ["Italian Truffle Oil", "San Marzano Tomatoes", "Parmigiano-Reggiano"],
    rating: 4.7,
    description: "Where pasta is made with love, cursing, and just the right amount of Italian drama. Our nonna would approve (maybe).",
    priceRange: "$$",
    website: "pastalavista.com"
  },
  {
    id: "14",
    name: "The Salty Sailor",
    type: "Seafood House",
    location: "Harbor District",
    image: "/placeholder.svg",
    specialties: ["Fresh Seafood", "Salt-Cured Fish", "Maritime Atmosphere"],
    imporTradeProducts: ["Icelandic Sea Salt", "Norwegian Salmon", "Kelp Seasonings"],
    rating: 4.6,
    description: "Fresh from the sea to your plate, with just enough salt air to make you feel like you've been sailing. Our fish is so fresh, it's still texting its friends.",
    priceRange: "$$",
    website: "saltysailor.com"
  },
  {
    id: "15",
    name: "Grain & Simple",
    type: "Bakery Café",
    location: "Farmers Market",
    image: "/placeholder.svg",
    specialties: ["Artisan Breads", "Ancient Grains", "Sourdough Culture"],
    imporTradeProducts: ["Heritage Wheat", "Sea Salt", "Olive Oil"],
    rating: 4.5,
    description: "Where bread is still made the way people did before they invented shortcuts. Our sourdough starter is older than some of our customers.",
    priceRange: "$",
    website: "grainsimple.com"
  }
];

// Enhanced food database with more comprehensive nutritional data
export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  serving: string;
  category: string;
}

export const foodDatabase: FoodItem[] = [
  // Proteins
  { id: '1', name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74, serving: '100g', category: 'protein' },
  { id: '2', name: 'Salmon', calories: 208, protein: 22, carbs: 0, fat: 13, fiber: 0, sugar: 0, sodium: 93, serving: '100g', category: 'protein' },
  { id: '3', name: 'Greek Yogurt', calories: 59, protein: 10, carbs: 3.6, fat: 0.4, fiber: 0, sugar: 3.6, sodium: 36, serving: '100g', category: 'protein' },
  { id: '4', name: 'Eggs', calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, sugar: 1.1, sodium: 124, serving: '100g', category: 'protein' },
  
  // Carbohydrates
  { id: '5', name: 'Brown Rice', calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8, sugar: 0.4, sodium: 5, serving: '100g cooked', category: 'carb' },
  { id: '6', name: 'Quinoa', calories: 120, protein: 4.4, carbs: 22, fat: 1.9, fiber: 2.8, sugar: 0.9, sodium: 7, serving: '100g cooked', category: 'carb' },
  { id: '7', name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3, sugar: 4.2, sodium: 7, serving: '100g', category: 'carb' },
  { id: '8', name: 'Oats', calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 11, sugar: 0.9, sodium: 2, serving: '100g dry', category: 'carb' },
  
  // Fats
  { id: '9', name: 'Avocado', calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, sugar: 0.7, sodium: 7, serving: '100g', category: 'fat' },
  { id: '10', name: 'Almonds', calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12, sugar: 4.4, sodium: 1, serving: '100g', category: 'fat' },
  { id: '11', name: 'Olive Oil', calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 2, serving: '100g', category: 'fat' },
  
  // Vegetables
  { id: '12', name: 'Spinach', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, sodium: 79, serving: '100g', category: 'vegetable' },
  { id: '13', name: 'Broccoli', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, sugar: 1.5, sodium: 33, serving: '100g', category: 'vegetable' },
  { id: '14', name: 'Bell Pepper', calories: 31, protein: 1, carbs: 7, fat: 0.3, fiber: 2.5, sugar: 4.2, sodium: 4, serving: '100g', category: 'vegetable' },
  
  // Fruits
  { id: '15', name: 'Banana', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, sugar: 12, sodium: 1, serving: '100g', category: 'fruit' },
  { id: '16', name: 'Apple', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, sugar: 10, sodium: 1, serving: '100g', category: 'fruit' },
  { id: '17', name: 'Berries', calories: 57, protein: 0.7, carbs: 14, fat: 0.3, fiber: 2.4, sugar: 10, sodium: 1, serving: '100g', category: 'fruit' },
];

export const searchFoods = (query: string): FoodItem[] => {
  if (!query.trim()) return foodDatabase;
  
  return foodDatabase.filter(food =>
    food.name.toLowerCase().includes(query.toLowerCase()) ||
    food.category.toLowerCase().includes(query.toLowerCase())
  );
};

export const getFoodById = (id: string): FoodItem | undefined => {
  return foodDatabase.find(food => food.id === id);
};

export const getFoodsByCategory = (category: string): FoodItem[] => {
  return foodDatabase.filter(food => food.category === category);
};

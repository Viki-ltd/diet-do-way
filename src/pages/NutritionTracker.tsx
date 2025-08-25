import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/PageHeader";
import { Plus, Target, Utensils, Search, Clock, ChefHat, Trash2, Edit } from "lucide-react";

interface UserProfile {
  gender: 'male' | 'female' | 'other';
  age: number;
  height: number;
  weight: number;
  dietaryType: 'balanced' | 'low-carb' | 'high-protein' | 'vegetarian' | 'vegan' | 'keto';
  cuisineType: 'mediterranean' | 'asian' | 'middle-eastern' | 'western' | 'mixed';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  goal: 'lose' | 'maintain' | 'gain';
}

interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

interface FoodItem {
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
}

interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foods: (FoodItem & { quantity: number })[];
  timestamp: Date;
}

// Mock food database
const foodDatabase: FoodItem[] = [
  { id: '1', name: 'Grilled Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74, serving: '100g' },
  { id: '2', name: 'Brown Rice', calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8, sugar: 0.4, sodium: 5, serving: '100g cooked' },
  { id: '3', name: 'Avocado', calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, sugar: 0.7, sodium: 7, serving: '100g' },
  { id: '4', name: 'Greek Yogurt', calories: 59, protein: 10, carbs: 3.6, fat: 0.4, fiber: 0, sugar: 3.6, sodium: 36, serving: '100g' },
  { id: '5', name: 'Almonds', calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12, sugar: 4.4, sodium: 1, serving: '100g' },
  { id: '6', name: 'Spinach', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, sodium: 79, serving: '100g' },
  { id: '7', name: 'Salmon Fillet', calories: 208, protein: 22, carbs: 0, fat: 13, fiber: 0, sugar: 0, sodium: 93, serving: '100g' },
  { id: '8', name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3, sugar: 4.2, sodium: 7, serving: '100g' },
];

// Predefined meals
const mealTemplates = {
  breakfast: [
    {
      name: "Mediterranean Breakfast",
      foods: [
        { ...foodDatabase[3], quantity: 1.5 }, // Greek Yogurt
        { ...foodDatabase[4], quantity: 0.3 }, // Almonds
        { name: "Honey", calories: 304, protein: 0.3, carbs: 82, fat: 0, fiber: 0.2, sugar: 82, sodium: 4, serving: "100g", quantity: 0.2 }
      ]
    },
    {
      name: "Protein Power Bowl",
      foods: [
        { ...foodDatabase[0], quantity: 0.8 }, // Chicken
        { ...foodDatabase[5], quantity: 1 }, // Spinach
        { ...foodDatabase[2], quantity: 0.5 }, // Avocado
      ]
    }
  ],
  lunch: [
    {
      name: "Balanced Lunch",
      foods: [
        { ...foodDatabase[0], quantity: 1.2 }, // Chicken
        { ...foodDatabase[1], quantity: 0.8 }, // Brown Rice
        { ...foodDatabase[5], quantity: 1 }, // Spinach
      ]
    },
    {
      name: "Salmon Power Bowl",
      foods: [
        { ...foodDatabase[6], quantity: 1 }, // Salmon
        { ...foodDatabase[7], quantity: 1.5 }, // Sweet Potato
        { ...foodDatabase[2], quantity: 0.5 }, // Avocado
      ]
    }
  ],
  dinner: [
    {
      name: "Light Dinner",
      foods: [
        { ...foodDatabase[6], quantity: 1.2 }, // Salmon
        { ...foodDatabase[5], quantity: 2 }, // Spinach
        { ...foodDatabase[4], quantity: 0.2 }, // Almonds
      ]
    }
  ],
  snack: [
    {
      name: "Healthy Snack",
      foods: [
        { ...foodDatabase[3], quantity: 1 }, // Greek Yogurt
        { ...foodDatabase[4], quantity: 0.25 }, // Almonds
      ]
    }
  ]
};

export default function NutritionTracker() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false);
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    gender: 'female',
    age: 28,
    height: 165,
    weight: 65,
    dietaryType: 'balanced',
    cuisineType: 'mediterranean',
    activityLevel: 'moderate',
    goal: 'maintain'
  });

  const calculateGoals = (profile: UserProfile): NutritionGoals => {
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr = profile.gender === 'male' 
      ? 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5
      : 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
    
    // Activity factor
    const activityFactors = {
      'sedentary': 1.2,
      'light': 1.375,
      'moderate': 1.55,
      'active': 1.725,
      'very-active': 1.9
    };
    
    let calories = bmr * activityFactors[profile.activityLevel];
    
    // Adjust for goal
    if (profile.goal === 'lose') calories -= 500;
    if (profile.goal === 'gain') calories += 500;
    
    // Macro ratios based on dietary type
    const macroRatios = {
      'balanced': { protein: 0.2, carbs: 0.5, fat: 0.3 },
      'low-carb': { protein: 0.25, carbs: 0.25, fat: 0.5 },
      'high-protein': { protein: 0.35, carbs: 0.4, fat: 0.25 },
      'vegetarian': { protein: 0.18, carbs: 0.55, fat: 0.27 },
      'vegan': { protein: 0.15, carbs: 0.6, fat: 0.25 },
      'keto': { protein: 0.25, carbs: 0.05, fat: 0.7 }
    };
    
    const ratios = macroRatios[profile.dietaryType];
    
    return {
      calories: Math.round(calories),
      protein: Math.round((calories * ratios.protein) / 4),
      carbs: Math.round((calories * ratios.carbs) / 4),
      fat: Math.round((calories * ratios.fat) / 9),
      fiber: Math.round(calories / 100),
      sugar: Math.round(calories * 0.1 / 4),
      sodium: 2300 // Daily recommended limit
    };
  };

  const goals = calculateGoals(userProfile);

  const calculateDailyTotals = () => {
    const today = new Date().toDateString();
    const todayMeals = meals.filter(meal => meal.timestamp.toDateString() === today);
    
    return todayMeals.reduce((totals, meal) => {
      meal.foods.forEach(food => {
        totals.calories += food.calories * food.quantity;
        totals.protein += food.protein * food.quantity;
        totals.carbs += food.carbs * food.quantity;
        totals.fat += food.fat * food.quantity;
        totals.fiber += food.fiber * food.quantity;
        totals.sugar += food.sugar * food.quantity;
        totals.sodium += food.sodium * food.quantity;
      });
      return totals;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 0 });
  };

  const dailyTotals = calculateDailyTotals();

  const addMealFromTemplate = (template: any) => {
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: template.name,
      type: selectedMealType,
      foods: template.foods,
      timestamp: new Date()
    };
    setMeals(prev => [...prev, newMeal]);
    setIsAddMealOpen(false);
  };

  const addIndividualFood = (food: FoodItem, quantity: number = 1) => {
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: food.name,
      type: selectedMealType,
      foods: [{ ...food, quantity }],
      timestamp: new Date()
    };
    setMeals(prev => [...prev, newMeal]);
    setIsAddFoodOpen(false);
  };

  const deleteMeal = (mealId: string) => {
    setMeals(prev => prev.filter(meal => meal.id !== mealId));
  };

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMealsByType = (type: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    const today = new Date().toDateString();
    return meals.filter(meal => 
      meal.type === type && meal.timestamp.toDateString() === today
    );
  };

  const getProgressColor = (current: number, goal: number) => {
    const percentage = (current / goal) * 100;
    if (percentage < 70) return "bg-orange-500";
    if (percentage > 110) return "bg-red-500";
    return "bg-sage";
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Nutrition Tracker" 
        description="Track your daily nutrition with personalized goals and meal planning"
        imageUrl="/placeholder.svg"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-sage" />
                  Daily Goals
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">{userProfile.dietaryType}</Badge>
                  <Badge variant="outline">{userProfile.goal} weight</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Calories */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Calories</span>
                    <span className="font-medium">{Math.round(dailyTotals.calories)}/{goals.calories}</span>
                  </div>
                  <Progress 
                    value={(dailyTotals.calories / goals.calories) * 100} 
                    className="h-3"
                  />
                </div>

                {/* Macronutrients */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Protein</span>
                      <span>{Math.round(dailyTotals.protein)}g/{goals.protein}g</span>
                    </div>
                    <Progress value={(dailyTotals.protein / goals.protein) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Carbs</span>
                      <span>{Math.round(dailyTotals.carbs)}g/{goals.carbs}g</span>
                    </div>
                    <Progress value={(dailyTotals.carbs / goals.carbs) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Fat</span>
                      <span>{Math.round(dailyTotals.fat)}g/{goals.fat}g</span>
                    </div>
                    <Progress value={(dailyTotals.fat / goals.fat) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Fiber</span>
                      <span>{Math.round(dailyTotals.fiber)}g/{goals.fiber}g</span>
                    </div>
                    <Progress value={(dailyTotals.fiber / goals.fiber) * 100} className="h-2" />
                  </div>
                </div>

                {/* Additional nutrients */}
                <Separator />
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Sugar</span>
                    <span>{Math.round(dailyTotals.sugar)}g / {goals.sugar}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sodium</span>
                    <span>{Math.round(dailyTotals.sodium)}mg / {goals.sodium}mg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meal Tracking */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-sage">Today's Meals</h2>
              <div className="flex gap-2">
                <Dialog open={isAddMealOpen} onOpenChange={setIsAddMealOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-sage hover:bg-sage/90">
                      <ChefHat className="h-4 w-4 mr-2" />
                      Add Meal
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Meal Template</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Meal Type</Label>
                        <Select value={selectedMealType} onValueChange={(value: any) => setSelectedMealType(value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="breakfast">Breakfast</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="snack">Snack</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        {mealTemplates[selectedMealType]?.map((template, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() => addMealFromTemplate(template)}
                          >
                            <ChefHat className="h-4 w-4 mr-2" />
                            {template.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isAddFoodOpen} onOpenChange={setIsAddFoodOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Food
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Individual Food</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Meal Type</Label>
                        <Select value={selectedMealType} onValueChange={(value: any) => setSelectedMealType(value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="breakfast">Breakfast</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="snack">Snack</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search foods..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <div className="max-h-64 overflow-y-auto space-y-2">
                        {filteredFoods.map((food) => (
                          <Button
                            key={food.id}
                            variant="outline"
                            className="w-full justify-between"
                            onClick={() => addIndividualFood(food)}
                          >
                            <span>{food.name}</span>
                            <span className="text-xs text-muted-foreground">{food.calories} cal</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Tabs defaultValue="breakfast" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="breakfast">
                  <Clock className="h-4 w-4 mr-2" />
                  Breakfast
                </TabsTrigger>
                <TabsTrigger value="lunch">
                  <Utensils className="h-4 w-4 mr-2" />
                  Lunch
                </TabsTrigger>
                <TabsTrigger value="dinner">
                  <ChefHat className="h-4 w-4 mr-2" />
                  Dinner
                </TabsTrigger>
                <TabsTrigger value="snack">
                  Snacks
                </TabsTrigger>
              </TabsList>

              {['breakfast', 'lunch', 'dinner', 'snack'].map((mealType) => (
                <TabsContent key={mealType} value={mealType} className="space-y-3">
                  {getMealsByType(mealType as any).length === 0 ? (
                    <Card className="p-8 text-center">
                      <p className="text-muted-foreground">No {mealType} logged yet</p>
                    </Card>
                  ) : (
                    getMealsByType(mealType as any).map((meal) => (
                      <Card key={meal.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">{meal.name}</h4>
                              <p className="text-xs text-muted-foreground">
                                {meal.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteMeal(meal.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            {meal.foods.map((food, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{food.name} ({food.quantity}x {food.serving})</span>
                                <span>{Math.round(food.calories * food.quantity)} cal</span>
                              </div>
                            ))}
                          </div>
                          
                          <Separator className="my-3" />
                          
                          <div className="grid grid-cols-4 text-xs text-center">
                            <div>
                              <p className="font-medium">{Math.round(meal.foods.reduce((sum, food) => sum + food.calories * food.quantity, 0))}</p>
                              <p className="text-muted-foreground">Calories</p>
                            </div>
                            <div>
                              <p className="font-medium">{Math.round(meal.foods.reduce((sum, food) => sum + food.protein * food.quantity, 0))}g</p>
                              <p className="text-muted-foreground">Protein</p>
                            </div>
                            <div>
                              <p className="font-medium">{Math.round(meal.foods.reduce((sum, food) => sum + food.carbs * food.quantity, 0))}g</p>
                              <p className="text-muted-foreground">Carbs</p>
                            </div>
                            <div>
                              <p className="font-medium">{Math.round(meal.foods.reduce((sum, food) => sum + food.fat * food.quantity, 0))}g</p>
                              <p className="text-muted-foreground">Fat</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
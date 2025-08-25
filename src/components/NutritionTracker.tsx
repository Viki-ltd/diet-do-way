import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, Utensils, Activity, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  gender: 'male' | 'female' | 'other';
  age: number;
  dietaryType: 'balanced' | 'low-carb' | 'high-protein' | 'vegetarian' | 'vegan' | 'keto';
  cuisineType: 'mediterranean' | 'asian' | 'middle-eastern' | 'western' | 'mixed';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
}

interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  timestamp: Date;
}

interface QuickMeal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

const quickMeals: QuickMeal[] = [
  { name: "Greek Yogurt Bowl", calories: 250, protein: 20, carbs: 30, fat: 8, fiber: 5 },
  { name: "Chicken Salad", calories: 350, protein: 35, carbs: 15, fat: 18, fiber: 8 },
  { name: "Protein Smoothie", calories: 280, protein: 25, carbs: 35, fat: 6, fiber: 4 },
  { name: "Salmon & Rice", calories: 450, protein: 30, carbs: 45, fat: 15, fiber: 3 },
];

export function NutritionTracker() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [currentIntake, setCurrentIntake] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0
  });
  
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>([]);
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    fiber: ''
  });

  // Mock user profile - in real app this would come from user context/database
  const userProfile: UserProfile = {
    gender: 'female',
    age: 28,
    dietaryType: 'balanced',
    cuisineType: 'mediterranean',
    activityLevel: 'moderate'
  };

  // Calculate personalized nutrition goals based on user profile
  const calculateGoals = (profile: UserProfile): NutritionGoals => {
    let baseCalories = 1800; // Base for moderate activity female
    
    // Adjust for gender and age
    if (profile.gender === 'male') baseCalories += 400;
    if (profile.age > 40) baseCalories -= 100;
    if (profile.age > 60) baseCalories -= 200;
    
    // Adjust for activity level
    const activityMultipliers = {
      'sedentary': 0.8,
      'light': 0.9,
      'moderate': 1.0,
      'active': 1.2,
      'very-active': 1.4
    };
    baseCalories *= activityMultipliers[profile.activityLevel];
    
    // Adjust macros based on dietary type
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
      calories: Math.round(baseCalories),
      protein: Math.round((baseCalories * ratios.protein) / 4), // 4 cal per gram
      carbs: Math.round((baseCalories * ratios.carbs) / 4),
      fat: Math.round((baseCalories * ratios.fat) / 9), // 9 cal per gram
      fiber: Math.round(baseCalories / 100) // rough estimate
    };
  };

  const goals = calculateGoals(userProfile);

  const addQuickMeal = (meal: QuickMeal) => {
    const entry: FoodEntry = {
      id: Date.now().toString(),
      name: meal.name,
      calories: meal.calories,
      protein: meal.protein,
      carbs: meal.carbs,
      fat: meal.fat,
      fiber: meal.fiber,
      timestamp: new Date()
    };
    
    setFoodEntries(prev => [...prev, entry]);
    setCurrentIntake(prev => ({
      calories: prev.calories + entry.calories,
      protein: prev.protein + entry.protein,
      carbs: prev.carbs + entry.carbs,
      fat: prev.fat + entry.fat,
      fiber: prev.fiber + entry.fiber
    }));
    setShowQuickAdd(false);
  };

  const getProgressColor = (current: number, goal: number) => {
    const percentage = (current / goal) * 100;
    if (percentage < 70) return "bg-orange-500";
    if (percentage > 110) return "bg-red-500";
    return "bg-sage";
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg bg-sage hover:bg-sage/90"
        >
          <Utensils className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-xl border-sage/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-sage flex items-center gap-2">
              <Target className="h-4 w-4" />
              Quick Nutrition
            </CardTitle>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/nutrition')}
                className="h-8 px-2 text-xs"
              >
                Full Tracker
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {userProfile.dietaryType}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {userProfile.cuisineType}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {/* Progress Bars */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Calories</span>
              <span>{currentIntake.calories}/{goals.calories}</span>
            </div>
            <Progress 
              value={(currentIntake.calories / goals.calories) * 100} 
              className="h-2"
            />
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span>{currentIntake.protein}g/{goals.protein}g</span>
                </div>
                <Progress value={(currentIntake.protein / goals.protein) * 100} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Carbs</span>
                  <span>{currentIntake.carbs}g/{goals.carbs}g</span>
                </div>
                <Progress value={(currentIntake.carbs / goals.carbs) * 100} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Fat</span>
                  <span>{currentIntake.fat}g/{goals.fat}g</span>
                </div>
                <Progress value={(currentIntake.fat / goals.fat) * 100} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Fiber</span>
                  <span>{currentIntake.fiber}g/{goals.fiber}g</span>
                </div>
                <Progress value={(currentIntake.fiber / goals.fiber) * 100} className="h-1" />
              </div>
            </div>
          </div>

          {/* Quick Add Meals */}
          <div className="border-t pt-3">
            {!showQuickAdd ? (
              <Button 
                onClick={() => setShowQuickAdd(true)}
                variant="outline" 
                className="w-full text-xs h-8"
              >
                <Plus className="h-3 w-3 mr-1" />
                Quick Add Meal
              </Button>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Quick Meals</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQuickAdd(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                {quickMeals.map((meal, index) => (
                  <Button
                    key={index}
                    onClick={() => addQuickMeal(meal)}
                    variant="outline"
                    className="w-full justify-between text-xs h-8 p-2"
                  >
                    <span>{meal.name}</span>
                    <span className="text-muted-foreground">{meal.calories}cal</span>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Recent Foods */}
          {foodEntries.length > 0 && (
            <div className="border-t pt-2 max-h-24 overflow-y-auto">
              <div className="text-xs text-muted-foreground mb-1">Recent:</div>
              {foodEntries.slice(-2).map((entry) => (
                <div key={entry.id} className="text-xs py-1 border-b border-muted">
                  <div className="font-medium">{entry.name}</div>
                  <div className="text-muted-foreground">
                    {entry.calories}cal • P:{entry.protein}g • C:{entry.carbs}g
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
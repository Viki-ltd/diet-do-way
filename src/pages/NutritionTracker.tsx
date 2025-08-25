
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/PageHeader";
import { NutritionChat } from "@/components/NutritionChat";
import { NutritionSettings } from "@/components/NutritionSettings";
import { StandardMealsManager } from "@/components/StandardMealsManager";
import { CustomTargetsManager } from "@/components/CustomTargetsManager";
import { MicronutrientPanel } from "@/components/MicronutrientPanel";
import { HealthVerdict } from "@/components/HealthVerdict";
import { Target, Utensils, Calendar, BarChart3, MessageCircle } from "lucide-react";
import { MealCard } from "@/components/MealCard";

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
  preparationType?: 'home' | 'restaurant';
  foods: (FoodItem & { quantity: number })[];
  timestamp: Date;
}

interface StandardMeal {
  id: string;
  name: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  preparationType: 'home' | 'restaurant';
  foods: Array<{
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    serving: string;
    quantity: number;
  }>;
}

interface CustomTargets {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
}

export default function NutritionTracker() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [viewPeriod, setViewPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCustomTargetsOpen, setIsCustomTargetsOpen] = useState(false);
  const [showNutritionChat, setShowNutritionChat] = useState(false);
  const [standardMeals, setStandardMeals] = useState<StandardMeal[]>([]);
  const [customTargets, setCustomTargets] = useState<CustomTargets>({});
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
    // Use custom targets if set, otherwise calculate
    if (Object.keys(customTargets).length > 0) {
      const calculated = calculateDefaultGoals(profile);
      return {
        calories: customTargets.calories || calculated.calories,
        protein: customTargets.protein || calculated.protein,
        carbs: customTargets.carbs || calculated.carbs,
        fat: customTargets.fat || calculated.fat,
        fiber: customTargets.fiber || calculated.fiber,
        sugar: calculated.sugar,
        sodium: calculated.sodium
      };
    }
    return calculateDefaultGoals(profile);
  };

  const calculateDefaultGoals = (profile: UserProfile): NutritionGoals => {
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

  // Calculate remaining macros
  const remaining = {
    calories: Math.max(0, goals.calories - dailyTotals.calories),
    protein: Math.max(0, goals.protein - dailyTotals.protein),
    carbs: Math.max(0, goals.carbs - dailyTotals.carbs),
    fat: Math.max(0, goals.fat - dailyTotals.fat)
  };

  // Mock micronutrient data
  const currentMicronutrients = {
    vitaminA: dailyTotals.calories * 0.3,
    vitaminC: dailyTotals.calories * 0.02,
    vitaminD: dailyTotals.calories * 0.005,
    vitaminE: dailyTotals.calories * 0.006,
    vitaminK: dailyTotals.calories * 0.04,
    vitaminB1: dailyTotals.calories * 0.0005,
    vitaminB2: dailyTotals.calories * 0.0006,
    vitaminB3: dailyTotals.calories * 0.007,
    vitaminB6: dailyTotals.calories * 0.0008,
    vitaminB12: dailyTotals.calories * 0.001,
    folate: dailyTotals.calories * 0.15,
    calcium: dailyTotals.calories * 0.4,
    iron: dailyTotals.calories * 0.008,
    magnesium: dailyTotals.calories * 0.15,
    phosphorus: dailyTotals.calories * 0.3,
    potassium: dailyTotals.calories * 1.2,
    zinc: dailyTotals.calories * 0.005
  };

  const addStandardMeal = (standardMeal: StandardMeal) => {
    const multiplier = standardMeal.preparationType === 'restaurant' ? 1.2 : 1;
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: standardMeal.name,
      type: standardMeal.mealType,
      preparationType: standardMeal.preparationType,
      foods: standardMeal.foods.map(food => ({
        id: Date.now().toString() + Math.random(),
        name: food.name,
        calories: food.calories * multiplier,
        protein: food.protein * multiplier,
        carbs: food.carbs * multiplier,
        fat: food.fat * multiplier,
        fiber: food.fiber * multiplier,
        sugar: (food.carbs * 0.1) * multiplier,
        sodium: (food.calories * 0.5) * multiplier,
        serving: food.serving,
        quantity: food.quantity
      })),
      timestamp: new Date()
    };
    setMeals(prev => [...prev, newMeal]);
  };

  const addNutritionFromChat = (nutrition: any) => {
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: nutrition.name,
      type: nutrition.mealType || 'snack',
      foods: [{
        id: Date.now().toString(),
        name: nutrition.name,
        calories: nutrition.calories,
        protein: nutrition.protein,
        carbs: nutrition.carbs,
        fat: nutrition.fat,
        fiber: nutrition.fiber || 0,
        sugar: nutrition.sugar || 0,
        sodium: nutrition.sodium || 0,
        serving: nutrition.serving || "1 portion",
        quantity: 1
      }],
      timestamp: new Date()
    };
    setMeals(prev => [...prev, newMeal]);
  };

  const deleteMeal = (mealId: string) => {
    setMeals(prev => prev.filter(meal => meal.id !== mealId));
  };

  const editMeal = (updatedMeal: Meal) => {
    setMeals(prev => prev.map(meal => meal.id === updatedMeal.id ? updatedMeal : meal));
  };

  const saveAsStandardMeal = (standardMeal: StandardMeal) => {
    setStandardMeals(prev => [...prev, standardMeal]);
  };

  const getAllMeals = () => {
    const filterDate = getFilterDate();
    return meals.filter(meal => isWithinPeriod(meal.timestamp, filterDate));
  };

  const getFilterDate = () => {
    const now = new Date();
    switch (viewPeriod) {
      case 'weekly':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        return weekStart;
      case 'monthly':
        return new Date(now.getFullYear(), now.getMonth(), 1);
      default:
        return new Date(now.toDateString());
    }
  };

  const isWithinPeriod = (mealDate: Date, filterDate: Date) => {
    const mealDay = new Date(mealDate.toDateString());
    switch (viewPeriod) {
      case 'weekly':
        const weekEnd = new Date(filterDate);
        weekEnd.setDate(filterDate.getDate() + 6);
        return mealDay >= filterDate && mealDay <= weekEnd;
      case 'monthly':
        const monthEnd = new Date(filterDate.getFullYear(), filterDate.getMonth() + 1, 0);
        return mealDay >= filterDate && mealDay <= monthEnd;
      default:
        return mealDay.getTime() === filterDate.getTime();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Nutrition Tracker" 
        description="Track your daily nutrition with personalized goals and meal planning"
        imageUrl="/placeholder.svg"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDEBAR - All Settings & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            {/* View Controls */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-xs">Time Period</Label>
                  <Select value={viewPeriod} onValueChange={(value: any) => setViewPeriod(value)}>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsSettingsOpen(true)}
                  className="w-full justify-start"
                >
                  <Target className="h-3 w-3 mr-2" />
                  Profile Settings
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsCustomTargetsOpen(true)}
                  className="w-full justify-start"
                >
                  <BarChart3 className="h-3 w-3 mr-2" />
                  Custom Targets
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowNutritionChat(true)}
                  className="w-full justify-start"
                >
                  <MessageCircle className="h-3 w-3 mr-2" />
                  AI Nutrition Chat
                </Button>
              </CardContent>
            </Card>

            {/* Standard Meals Manager */}
            <StandardMealsManager 
              standardMeals={standardMeals}
              onStandardMealsUpdate={setStandardMeals}
              onMealLog={addStandardMeal}
            />

            {/* Health Verdict */}
            <HealthVerdict 
              currentIntake={dailyTotals}
              goals={goals}
              userProfile={userProfile}
            />
          </div>

          {/* MIDDLE COLUMN - Main Content */}
          <div className="col-span-12 lg:col-span-6">
            {/* Progress Overview */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Today's Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { label: 'Calories', current: Math.round(dailyTotals.calories), goal: goals.calories, unit: 'kcal' },
                    { label: 'Protein', current: Math.round(dailyTotals.protein), goal: goals.protein, unit: 'g' },
                    { label: 'Carbs', current: Math.round(dailyTotals.carbs), goal: goals.carbs, unit: 'g' },
                    { label: 'Fat', current: Math.round(dailyTotals.fat), goal: goals.fat, unit: 'g' },
                    { label: 'Fiber', current: Math.round(dailyTotals.fiber), goal: goals.fiber, unit: 'g' },
                  ].map((macro) => (
                    <div key={macro.label} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium">{macro.label}</span>
                        <span>{macro.current}/{macro.goal}{macro.unit}</span>
                      </div>
                      <Progress 
                        value={(macro.current / macro.goal) * 100} 
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground">
                        {Math.round((macro.current / macro.goal) * 100)}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meals Log */}
            <Card>
              <CardHeader>
                <CardTitle>Meals Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getAllMeals().length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      No meals logged for this period. Start by adding some food!
                    </p>
                  ) : (
                    getAllMeals().map((meal) => (
                      <MealCard
                        key={meal.id}
                        meal={meal}
                        onEdit={editMeal}
                        onDelete={deleteMeal}
                        onSaveAsStandard={saveAsStandardMeal}
                      />
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDEBAR - Micronutrients */}
          <div className="col-span-12 lg:col-span-3">
            <MicronutrientPanel 
              currentIntake={currentMicronutrients}
            />
          </div>
        </div>

        {/* Settings Dialogs */}
        <NutritionSettings 
          isOpen={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
          profile={userProfile}
          onProfileUpdate={setUserProfile}
        />

        <CustomTargetsManager 
          isOpen={isCustomTargetsOpen}
          onOpenChange={setIsCustomTargetsOpen}
          customTargets={customTargets}
          onTargetsUpdate={setCustomTargets}
        />

        <NutritionChat 
          isOpen={showNutritionChat}
          onOpenChange={setShowNutritionChat}
          onNutritionAdd={addNutritionFromChat}
          userProfile={userProfile}
          currentIntake={dailyTotals}
          goals={goals}
          remaining={remaining}
        />
      </div>
    </div>
  );
}

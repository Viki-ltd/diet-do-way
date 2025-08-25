
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Clock, Utensils, ChefHat, Trash2, Home, Store, Search, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { searchFoods, foodDatabase, type FoodItem } from "@/utils/foodDatabase";
import { AIStandardMealCreator } from "@/components/AIStandardMealCreator";

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

interface StandardMealsManagerProps {
  standardMeals: StandardMeal[];
  onStandardMealsUpdate: (meals: StandardMeal[]) => void;
  onMealLog: (meal: StandardMeal) => void;
}

export function StandardMealsManager({ standardMeals, onStandardMealsUpdate, onMealLog }: StandardMealsManagerProps) {
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  const [isAICreatorOpen, setIsAICreatorOpen] = useState(false);
  const [newMeal, setNewMeal] = useState<Partial<StandardMeal>>({
    name: '',
    mealType: 'breakfast',
    preparationType: 'home',
    foods: []
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { toast } = useToast();

  const filteredFoods = searchFoods(searchTerm);

  const addFoodFromDatabase = (food: FoodItem, quantity: number = selectedQuantity) => {
    const foodItem = {
      name: food.name,
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
      fiber: food.fiber,
      serving: food.serving,
      quantity: quantity
    };
    
    setNewMeal(prev => ({
      ...prev,
      foods: [...(prev.foods || []), foodItem]
    }));
    
    setSearchTerm('');
    setSelectedQuantity(1);

    toast({
      title: "Food Added",
      description: `${food.name} added to meal with auto-calculated macros`,
    });
  };

  const removeFoodFromMeal = (index: number) => {
    setNewMeal(prev => ({
      ...prev,
      foods: (prev.foods || []).filter((_, i) => i !== index)
    }));
  };

  const saveStandardMeal = () => {
    if (!newMeal.name || !newMeal.foods?.length) {
      toast({
        title: "Error",
        description: "Please add a meal name and at least one food item",
        variant: "destructive"
      });
      return;
    }

    const meal: StandardMeal = {
      id: Date.now().toString(),
      name: newMeal.name,
      mealType: newMeal.mealType!,
      preparationType: newMeal.preparationType!,
      foods: newMeal.foods
    };

    onStandardMealsUpdate([...standardMeals, meal]);
    setNewMeal({ name: '', mealType: 'breakfast', preparationType: 'home', foods: [] });
    setIsAddMealOpen(false);
    
    toast({
      title: "Standard Meal Saved",
      description: `${meal.name} has been added to your standard meals`,
    });
  };

  const deleteStandardMeal = (mealId: string) => {
    onStandardMealsUpdate(standardMeals.filter(meal => meal.id !== mealId));
    toast({
      title: "Meal Removed",
      description: "Standard meal has been removed",
    });
  };

  const logStandardMeal = (meal: StandardMeal) => {
    onMealLog(meal);
    toast({
      title: "Meal Logged",
      description: `${meal.name} has been added to your daily log`,
    });
  };

  const getMealCalories = (meal: StandardMeal) => {
    return meal.foods.reduce((total, food) => total + (food.calories * food.quantity), 0);
  };

  const getPreparationIcon = (type: 'home' | 'restaurant') => {
    return type === 'home' ? <Home className="h-3 w-3" /> : <Store className="h-3 w-3" />;
  };

  const getMealTypeIcon = (type: string) => {
    switch (type) {
      case 'breakfast': return <Clock className="h-4 w-4" />;
      case 'lunch': return <Utensils className="h-4 w-4" />;
      case 'dinner': return <ChefHat className="h-4 w-4" />;
      default: return <Utensils className="h-4 w-4" />;
    }
  };

  const handleAICreatedMeal = (aiMeal: any) => {
    onStandardMealsUpdate([...standardMeals, aiMeal]);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Standard Meals</CardTitle>
          <div className="flex gap-1">
            <Button 
              size="sm" 
              onClick={() => setIsAICreatorOpen(true)}
              className="bg-sage hover:bg-sage/90"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              AI Create
            </Button>
            <Dialog open={isAddMealOpen} onOpenChange={setIsAddMealOpen}>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <Plus className="h-3 w-3 mr-1" />
                  Manual
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create Standard Meal</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs">Meal Name</Label>
                    <Input
                      value={newMeal.name || ''}
                      onChange={(e) => setNewMeal(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., My Breakfast Bowl"
                      className="h-8"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Meal Type</Label>
                    <Select 
                      value={newMeal.mealType} 
                      onValueChange={(value: any) => setNewMeal(prev => ({ ...prev, mealType: value }))}
                    >
                      <SelectTrigger className="h-8">
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
                </div>

                <div>
                  <Label className="text-xs">Preparation Type</Label>
                  <Select 
                    value={newMeal.preparationType} 
                    onValueChange={(value: any) => setNewMeal(prev => ({ ...prev, preparationType: value }))}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Cooked</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Takeout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-medium">Add Foods (Auto-calculated macros)</Label>
                  <div className="flex gap-2 mt-2">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search foods..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-8 pl-8"
                      />
                    </div>
                    <Input
                      type="number"
                      placeholder="Qty"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(parseFloat(e.target.value) || 1)}
                      className="h-8 w-20"
                      step="0.1"
                      min="0.1"
                    />
                  </div>
                  
                  {searchTerm && (
                    <div className="max-h-32 overflow-y-auto border rounded mt-2">
                      {filteredFoods.slice(0, 5).map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-2 hover:bg-muted/50 cursor-pointer" 
                             onClick={() => addFoodFromDatabase(food)}>
                          <div className="text-xs">
                            <div className="font-medium">{food.name}</div>
                            <div className="text-muted-foreground">
                              {food.calories}cal • P:{food.protein}g • C:{food.carbs}g • F:{food.fat}g per {food.serving}
                            </div>
                          </div>
                          <Button size="sm" className="h-6 px-2 text-xs">
                            Add
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {newMeal.foods && newMeal.foods.length > 0 && (
                  <div>
                    <Label className="text-sm font-medium">Meal Contents</Label>
                    <div className="space-y-2 mt-2">
                      {newMeal.foods.map((food, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div className="text-xs">
                            <div className="font-medium">{food.name}</div>
                            <div className="text-muted-foreground">
                              {food.quantity}x {food.serving} • {Math.round(food.calories * food.quantity)} cal
                              • P:{Math.round(food.protein * food.quantity)}g
                              • C:{Math.round(food.carbs * food.quantity)}g
                              • F:{Math.round(food.fat * food.quantity)}g
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFoodFromMeal(index)}
                            className="h-6 w-6 p-0"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button onClick={saveStandardMeal} className="flex-1 bg-sage hover:bg-sage/90">
                    Save Standard Meal
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddMealOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {standardMeals.length === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-4">
            No standard meals configured yet
          </p>
        ) : (
          standardMeals.map((meal) => (
            <div key={meal.id} className="border rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getMealTypeIcon(meal.mealType)}
                  <span className="text-sm font-medium">{meal.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    {getPreparationIcon(meal.preparationType)}
                    {meal.preparationType}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteStandardMeal(meal.id)}
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground mb-2">
                {meal.foods.length} items • {Math.round(getMealCalories(meal))} calories
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => logStandardMeal(meal)}
                className="w-full h-6 text-xs"
              >
                Quick Log
              </Button>
            </div>
          ))
        )}
      </CardContent>
      
      <AIStandardMealCreator 
        isOpen={isAICreatorOpen}
        onOpenChange={setIsAICreatorOpen}
        onMealCreated={handleAICreatedMeal}
      />
    </Card>
  );
}

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Clock, Utensils, ChefHat, Trash2, Home, Store } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  const [newMeal, setNewMeal] = useState<Partial<StandardMeal>>({
    name: '',
    mealType: 'breakfast',
    preparationType: 'home',
    foods: []
  });
  const [currentFood, setCurrentFood] = useState({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    serving: '',
    quantity: 1
  });
  const { toast } = useToast();

  const addFoodToMeal = () => {
    if (!currentFood.name || !currentFood.calories) {
      toast({
        title: "Error",
        description: "Please enter food name and calories",
        variant: "destructive"
      });
      return;
    }
    
    setNewMeal(prev => ({
      ...prev,
      foods: [...(prev.foods || []), { ...currentFood }]
    }));
    
    setCurrentFood({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      serving: '',
      quantity: 1
    });

    toast({
      title: "Food Added",
      description: `${currentFood.name} added to meal`,
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

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Standard Meals</CardTitle>
          <Dialog open={isAddMealOpen} onOpenChange={setIsAddMealOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-sage hover:bg-sage/90">
                <Plus className="h-3 w-3 mr-1" />
                Add
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
                  <Label className="text-sm font-medium">Add Food Items</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Input
                      placeholder="Food name"
                      value={currentFood.name}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, name: e.target.value }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Calories"
                      value={currentFood.calories || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, calories: parseFloat(e.target.value) || 0 }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Protein (g)"
                      value={currentFood.protein || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, protein: parseFloat(e.target.value) || 0 }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Carbs (g)"
                      value={currentFood.carbs || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, carbs: parseFloat(e.target.value) || 0 }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Fat (g)"
                      value={currentFood.fat || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, fat: parseFloat(e.target.value) || 0 }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Fiber (g)"
                      value={currentFood.fiber || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, fiber: parseFloat(e.target.value) || 0 }))}
                      className="h-8"
                    />
                    <Input
                      placeholder="Serving size"
                      value={currentFood.serving}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, serving: e.target.value }))}
                      className="h-8"
                    />
                    <Input
                      type="number"
                      placeholder="Quantity"
                      value={currentFood.quantity || ''}
                      onChange={(e) => setCurrentFood(prev => ({ ...prev, quantity: parseFloat(e.target.value) || 1 }))}
                      className="h-8"
                      step="0.1"
                    />
                  </div>
                  <Button 
                    onClick={addFoodToMeal}
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    disabled={!currentFood.name}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add Food
                  </Button>
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
    </Card>
  );
}
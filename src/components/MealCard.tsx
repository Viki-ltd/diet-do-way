import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Edit, Save, Home, Store, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { PortionConverter } from "./PortionConverter";

interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  preparationType?: 'home' | 'restaurant';
  foods: Array<{
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
    quantity: number;
  }>;
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

interface MealCardProps {
  meal: Meal;
  onDelete: (mealId: string) => void;
  onEdit: (meal: Meal) => void;
  onSaveAsStandard?: (standardMeal: StandardMeal) => void;
}

export function MealCard({ meal, onDelete, onEdit, onSaveAsStandard }: MealCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMeal, setEditedMeal] = useState(meal);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [standardMealName, setStandardMealName] = useState(meal.name);
  const { toast } = useToast();

  const handleSave = () => {
    onEdit(editedMeal);
    setIsEditing(false);
    toast({
      title: "Meal Updated",
      description: "Your meal has been saved",
    });
  };

  const handleSaveAsStandard = () => {
    if (!standardMealName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for the standard meal",
        variant: "destructive"
      });
      return;
    }

    const standardMeal: StandardMeal = {
      id: Date.now().toString(),
      name: standardMealName,
      mealType: meal.type,
      preparationType: meal.preparationType || 'home',
      foods: meal.foods.map(food => ({
        name: food.name,
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat,
        fiber: food.fiber,
        serving: food.serving,
        quantity: food.quantity
      }))
    };

    onSaveAsStandard?.(standardMeal);
    setShowSaveDialog(false);
    toast({
      title: "Standard Meal Saved",
      description: `${standardMealName} has been saved as a standard meal`,
    });
  };

  const updateFoodQuantity = (foodIndex: number, newQuantity: number) => {
    const updatedFoods = [...editedMeal.foods];
    updatedFoods[foodIndex] = { ...updatedFoods[foodIndex], quantity: newQuantity };
    setEditedMeal({ ...editedMeal, foods: updatedFoods });
  };

  const getMealCalories = () => {
    return Math.round(meal.foods.reduce((sum, food) => sum + food.calories * food.quantity, 0));
  };

  const getMealMacros = () => {
    return {
      protein: Math.round(meal.foods.reduce((sum, food) => sum + food.protein * food.quantity, 0)),
      carbs: Math.round(meal.foods.reduce((sum, food) => sum + food.carbs * food.quantity, 0)),
      fat: Math.round(meal.foods.reduce((sum, food) => sum + food.fat * food.quantity, 0))
    };
  };

  const macros = getMealMacros();

  return (
    <>
      <Card 
        className="relative cursor-pointer hover:shadow-md transition-shadow"
        onDoubleClick={() => setIsEditing(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">
              {meal.name}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                {meal.preparationType === 'home' ? <Home className="h-3 w-3" /> : <Store className="h-3 w-3" />}
                {meal.preparationType}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
                className="h-6 w-6 p-0 text-muted-foreground hover:text-primary"
              >
                <Edit className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSaveDialog(true);
                }}
                className="h-6 w-6 p-0 text-muted-foreground hover:text-sage"
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(meal.id);
                }}
                className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {meal.foods.map((food, idx) => (
              <div key={idx} className="text-xs text-muted-foreground">
                {food.name} ({food.quantity}x {food.serving})
              </div>
            ))}
            <div className="pt-2 border-t">
              <div className="text-xs font-medium">
                📊 {getMealCalories()} cal • {macros.protein}g protein • {macros.carbs}g carbs • {macros.fat}g fat
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Double-click to edit
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Meal</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label className="text-xs">Meal Name</Label>
              <Input
                value={editedMeal.name}
                onChange={(e) => setEditedMeal({ ...editedMeal, name: e.target.value })}
                className="h-8"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Meal Type</Label>
                <Select 
                  value={editedMeal.type} 
                  onValueChange={(value: any) => setEditedMeal({ ...editedMeal, type: value })}
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
              <div>
                <Label className="text-xs">Preparation</Label>
                <Select 
                  value={editedMeal.preparationType} 
                  onValueChange={(value: any) => setEditedMeal({ ...editedMeal, preparationType: value })}
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
            </div>

            <div>
              <Label className="text-sm font-medium">Food Items</Label>
              <div className="space-y-3 mt-2">
                {editedMeal.foods.map((food, index) => (
                  <div key={index} className="p-3 border rounded space-y-2">
                    <div className="font-medium text-sm">{food.name}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs">Portion Size</Label>
                        <PortionConverter
                          value={food.quantity}
                          onChange={(value) => updateFoodQuantity(index, value)}
                          foodType={food.name}
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Serving</Label>
                        <Input
                          value={food.serving}
                          onChange={(e) => {
                            const updatedFoods = [...editedMeal.foods];
                            updatedFoods[index] = { ...updatedFoods[index], serving: e.target.value };
                            setEditedMeal({ ...editedMeal, foods: updatedFoods });
                          }}
                          className="h-8"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSave} className="flex-1 bg-sage hover:bg-sage/90">
                <Save className="h-3 w-3 mr-1" />
                Save Changes
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Save as Standard Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save as Standard Meal</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label className="text-xs">Standard Meal Name</Label>
              <Input
                value={standardMealName}
                onChange={(e) => setStandardMealName(e.target.value)}
                placeholder="e.g., My Breakfast Bowl"
                className="h-8"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSaveAsStandard} className="flex-1 bg-sage hover:bg-sage/90">
                Save Standard Meal
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowSaveDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
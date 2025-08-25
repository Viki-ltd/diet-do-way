import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Camera, Send, Sparkles, Upload } from "lucide-react";
import { MealCard } from "@/components/MealCard";
import { NutritionChat } from "@/components/NutritionChat";
import { useToast } from "@/components/ui/use-toast";

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

interface MealsLogWithChatProps {
  meals: Meal[];
  onEditMeal: (meal: Meal) => void;
  onDeleteMeal: (mealId: string) => void;
  onSaveAsStandard: (meal: any) => void;
  onNutritionAdd: (nutrition: any) => void;
  userProfile: any;
  currentIntake: any;
  goals: any;
  remaining: any;
  viewPeriod: 'daily' | 'weekly' | 'monthly';
  getAllMeals: () => Meal[];
}

export function MealsLogWithChat({ 
  meals, 
  onEditMeal, 
  onDeleteMeal, 
  onSaveAsStandard, 
  onNutritionAdd,
  userProfile,
  currentIntake,
  goals,
  remaining,
  viewPeriod,
  getAllMeals
}: MealsLogWithChatProps) {
  const [showNutritionChat, setShowNutritionChat] = useState(false);
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Meals & AI Assistant</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowNutritionChat(!showNutritionChat)}
            className="bg-sage hover:bg-sage/90 text-white border-sage"
          >
            <MessageCircle className="h-3 w-3 mr-2" />
            {showNutritionChat ? 'Hide AI Chat' : 'AI Food Logger'}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="meals" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="meals" className="flex items-center gap-2">
              <span>Meals Log</span>
              <Badge variant="secondary" className="text-xs">
                {getAllMeals().length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              AI Assistant
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="meals" className="mt-4">
            <div className="space-y-3">
              {getAllMeals().length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-muted-foreground mb-4">
                    No meals logged for this {viewPeriod.replace('ly', '')} period
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowNutritionChat(true)}
                    className="bg-sage hover:bg-sage/90 text-white border-sage"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start with AI Food Logger
                  </Button>
                </div>
              ) : (
                getAllMeals().map((meal) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    onEdit={onEditMeal}
                    onDelete={onDeleteMeal}
                    onSaveAsStandard={onSaveAsStandard}
                  />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="ai-chat" className="mt-4">
            <div className="border rounded-lg p-1">
              <NutritionChat 
                isOpen={true}
                onOpenChange={() => {}}
                onNutritionAdd={onNutritionAdd}
                userProfile={userProfile}
                currentIntake={currentIntake}
                goals={goals}
                remaining={remaining}
                embedded={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
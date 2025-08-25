import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Loader2, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AIStandardMealCreatorProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onMealCreated: (meal: any) => void;
}

export function AIStandardMealCreator({ isOpen, onOpenChange, onMealCreated }: AIStandardMealCreatorProps) {
  const [description, setDescription] = useState('');
  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');
  const [preparationType, setPreparationType] = useState<'home' | 'restaurant'>('home');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateMealFromAI = async () => {
    if (!description.trim()) {
      toast({
        title: "Description Required",
        description: "Please describe the meal you want to create",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate AI processing for now - in real app would call AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock AI-generated meal data
      const aiGeneratedMeal = {
        id: Date.now().toString(),
        name: description,
        mealType,
        preparationType,
        foods: [
          {
            name: "Grilled Chicken Breast",
            calories: 231,
            protein: 43.5,
            carbs: 0,
            fat: 5,
            fiber: 0,
            serving: "1 breast (172g)",
            quantity: 1
          },
          {
            name: "Brown Rice",
            calories: 216,
            protein: 5,
            carbs: 45,
            fat: 1.8,
            fiber: 3.5,
            serving: "1 cup cooked",
            quantity: 0.75
          },
          {
            name: "Steamed Broccoli",
            calories: 25,
            protein: 3,
            carbs: 5,
            fat: 0.3,
            fiber: 2.6,
            serving: "1 cup",
            quantity: 1
          }
        ]
      };

      onMealCreated(aiGeneratedMeal);
      setDescription('');
      onOpenChange(false);
      
      toast({
        title: "AI Meal Created! ✨",
        description: `Generated ${description} with calculated macros`,
      });
      
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Sorry, couldn't generate the meal. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-sage" />
            AI Meal Creator
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Describe a meal and I'll calculate the macros and create it for you!
          </div>
          
          <div>
            <Label className="text-xs">Describe Your Meal</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Grilled chicken with rice and vegetables"
              className="h-10"
              disabled={isGenerating}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Meal Type</Label>
              <Select 
                value={mealType} 
                onValueChange={(value: any) => setMealType(value)}
                disabled={isGenerating}
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
                value={preparationType} 
                onValueChange={(value: any) => setPreparationType(value)}
                disabled={isGenerating}
              >
                <SelectTrigger className="h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home Cooked</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={generateMealFromAI}
              disabled={isGenerating || !description.trim()}
              className="flex-1 bg-sage hover:bg-sage/90"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-3 w-3 mr-2" />
                  Generate Meal
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isGenerating}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
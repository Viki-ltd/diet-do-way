import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Target, Settings, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CustomTargets {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
}

interface CustomTargetsManagerProps {
  customTargets: CustomTargets;
  onTargetsUpdate: (targets: CustomTargets) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CustomTargetsManager({ customTargets, onTargetsUpdate, isOpen, onOpenChange }: CustomTargetsManagerProps) {
  const [localTargets, setLocalTargets] = useState<CustomTargets>(customTargets);
  const { toast } = useToast();

  const handleSave = () => {
    onTargetsUpdate(localTargets);
    onOpenChange(false);
    toast({
      title: "Custom Targets Saved",
      description: "Your nutrition targets have been updated",
    });
  };

  const updateTarget = (field: keyof CustomTargets, value: number) => {
    setLocalTargets(prev => ({ ...prev, [field]: value }));
  };

  const resetToDefault = () => {
    setLocalTargets({});
    toast({
      title: "Targets Reset",
      description: "Custom targets cleared, using calculated goals",
    });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => onOpenChange(true)}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 w-full"
      >
        <Target className="h-4 w-4" />
        Custom Targets
      </Button>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium text-sage flex items-center gap-2">
          <Target className="h-5 w-5" />
          Custom Nutrition Targets
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-xs text-muted-foreground">
          Set custom targets to override calculated goals. Leave empty to use auto-calculated values.
        </div>
        
        <div className="space-y-3">
          <div>
            <Label className="text-xs">Daily Calories</Label>
            <Input
              type="number"
              value={localTargets.calories || ''}
              onChange={(e) => updateTarget('calories', parseInt(e.target.value) || 0)}
              placeholder="e.g., 2000"
              className="h-8"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Protein (g)</Label>
              <Input
                type="number"
                value={localTargets.protein || ''}
                onChange={(e) => updateTarget('protein', parseInt(e.target.value) || 0)}
                placeholder="e.g., 150"
                className="h-8"
              />
            </div>
            <div>
              <Label className="text-xs">Carbs (g)</Label>
              <Input
                type="number"
                value={localTargets.carbs || ''}
                onChange={(e) => updateTarget('carbs', parseInt(e.target.value) || 0)}
                placeholder="e.g., 200"
                className="h-8"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Fat (g)</Label>
              <Input
                type="number"
                value={localTargets.fat || ''}
                onChange={(e) => updateTarget('fat', parseInt(e.target.value) || 0)}
                placeholder="e.g., 80"
                className="h-8"
              />
            </div>
            <div>
              <Label className="text-xs">Fiber (g)</Label>
              <Input
                type="number"
                value={localTargets.fiber || ''}
                onChange={(e) => updateTarget('fiber', parseInt(e.target.value) || 0)}
                placeholder="e.g., 25"
                className="h-8"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            onClick={handleSave}
            className="flex-1 bg-sage hover:bg-sage/90 h-8"
          >
            <Save className="h-3 w-3 mr-2" />
            Save Targets
          </Button>
          <Button 
            onClick={resetToDefault}
            variant="outline"
            className="flex-1 h-8"
          >
            Reset
          </Button>
          <Button 
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="flex-1 h-8"
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
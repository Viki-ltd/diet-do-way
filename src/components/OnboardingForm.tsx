import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Heart } from "lucide-react";

interface OnboardingFormProps {
  onComplete: (preferences: DietaryPreferences) => void;
}

export interface DietaryPreferences {
  glutenFree: boolean;
  dairyFree: boolean;
  lowCarb: boolean;
  email: string;
  name: string;
}

export const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const [preferences, setPreferences] = useState<DietaryPreferences>({
    glutenFree: false,
    dairyFree: false,
    lowCarb: false,
    email: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preferences.email && preferences.name) {
      onComplete(preferences);
    }
  };

  const isValid = preferences.email && preferences.name;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream to-fresh-green-light flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-fresh-green-light p-3 rounded-full">
              <Leaf className="h-8 w-8 text-fresh-green" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to ImporTrade!</CardTitle>
          <p className="text-muted-foreground">
            Tell us about your dietary preferences to discover products perfect for you.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={preferences.name}
                  onChange={(e) => setPreferences({ ...preferences, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={preferences.email}
                  onChange={(e) => setPreferences({ ...preferences, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-medium flex items-center gap-2">
                <Heart className="h-4 w-4 text-fresh-green" />
                Dietary Preferences
              </Label>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gluten-free"
                    checked={preferences.glutenFree}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, glutenFree: !!checked })
                    }
                  />
                  <Label htmlFor="gluten-free">Gluten-Free</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dairy-free"
                    checked={preferences.dairyFree}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, dairyFree: !!checked })
                    }
                  />
                  <Label htmlFor="dairy-free">Dairy-Free</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="low-carb"
                    checked={preferences.lowCarb}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, lowCarb: !!checked })
                    }
                  />
                  <Label htmlFor="low-carb">Low-Carb</Label>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              variant="fresh" 
              size="lg" 
              className="w-full"
              disabled={!isValid}
            >
              Start Shopping
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              We'll use this info to show you the most relevant products. 
              You can update your preferences anytime.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
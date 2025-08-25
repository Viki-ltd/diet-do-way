import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Settings, Save, User, Target, Utensils } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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

interface NutritionSettingsProps {
  profile: UserProfile;
  onProfileUpdate: (profile: UserProfile) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NutritionSettings({ profile, onProfileUpdate, isOpen, onOpenChange }: NutritionSettingsProps) {
  const [localProfile, setLocalProfile] = useState<UserProfile>(profile);
  const { toast } = useToast();

  const handleSave = () => {
    onProfileUpdate(localProfile);
    onOpenChange(false);
    toast({
      title: "Settings Saved",
      description: "Your nutrition preferences have been updated",
    });
  };

  const updateProfile = (field: keyof UserProfile, value: any) => {
    setLocalProfile(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => onOpenChange(true)}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Settings className="h-4 w-4" />
        Settings
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium text-sage flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Nutrition Settings
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Personal Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <User className="h-4 w-4 text-sage" />
            Personal Information
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Gender</Label>
              <Select value={localProfile.gender} onValueChange={(value: any) => updateProfile('gender', value)}>
                <SelectTrigger className="h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-xs">Age</Label>
              <Input
                type="number"
                value={localProfile.age}
                onChange={(e) => updateProfile('age', parseInt(e.target.value) || 0)}
                className="h-8"
                min="18"
                max="100"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Height (cm)</Label>
              <Input
                type="number"
                value={localProfile.height}
                onChange={(e) => updateProfile('height', parseInt(e.target.value) || 0)}
                className="h-8"
                min="100"
                max="250"
              />
            </div>
            
            <div>
              <Label className="text-xs">Weight (kg)</Label>
              <Input
                type="number"
                value={localProfile.weight}
                onChange={(e) => updateProfile('weight', parseFloat(e.target.value) || 0)}
                className="h-8"
                min="30"
                max="200"
                step="0.1"
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Goals & Activity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Target className="h-4 w-4 text-sage" />
            Goals & Activity
          </div>
          
          <div>
            <Label className="text-xs">Goal</Label>
            <Select value={localProfile.goal} onValueChange={(value: any) => updateProfile('goal', value)}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lose">Lose Weight</SelectItem>
                <SelectItem value="maintain">Maintain Weight</SelectItem>
                <SelectItem value="gain">Gain Weight</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-xs">Activity Level</Label>
            <Select value={localProfile.activityLevel} onValueChange={(value: any) => updateProfile('activityLevel', value)}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (Little/no exercise)</SelectItem>
                <SelectItem value="light">Light (Light exercise 1-3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderate (Moderate exercise 3-5 days/week)</SelectItem>
                <SelectItem value="active">Active (Hard exercise 6-7 days/week)</SelectItem>
                <SelectItem value="very-active">Very Active (Very hard exercise/physical job)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        {/* Dietary Preferences */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Utensils className="h-4 w-4 text-sage" />
            Dietary Preferences
          </div>
          
          <div>
            <Label className="text-xs">Dietary Type</Label>
            <Select value={localProfile.dietaryType} onValueChange={(value: any) => updateProfile('dietaryType', value)}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="balanced">Balanced</SelectItem>
                <SelectItem value="low-carb">Low Carb</SelectItem>
                <SelectItem value="high-protein">High Protein</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="keto">Keto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-xs">Preferred Cuisine</Label>
            <Select value={localProfile.cuisineType} onValueChange={(value: any) => updateProfile('cuisineType', value)}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="middle-eastern">Middle Eastern</SelectItem>
                <SelectItem value="western">Western</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={handleSave}
            className="flex-1 bg-sage hover:bg-sage/90 h-8"
          >
            <Save className="h-3 w-3 mr-2" />
            Save
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
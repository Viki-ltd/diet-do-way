import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Pill, Zap } from "lucide-react";

interface MicronutrientData {
  vitaminA: number;
  vitaminC: number;
  vitaminD: number;
  vitaminE: number;
  vitaminK: number;
  vitaminB1: number;
  vitaminB2: number;
  vitaminB3: number;
  vitaminB6: number;
  vitaminB12: number;
  folate: number;
  calcium: number;
  iron: number;
  magnesium: number;
  phosphorus: number;
  potassium: number;
  zinc: number;
}

interface MicronutrientPanelProps {
  currentIntake: MicronutrientData;
}

const micronutrientTargets = {
  vitaminA: 900, // mcg
  vitaminC: 90, // mg
  vitaminD: 20, // mcg
  vitaminE: 15, // mg
  vitaminK: 120, // mcg
  vitaminB1: 1.2, // mg
  vitaminB2: 1.3, // mg
  vitaminB3: 16, // mg
  vitaminB6: 1.7, // mg
  vitaminB12: 2.4, // mcg
  folate: 400, // mcg
  calcium: 1000, // mg
  iron: 18, // mg
  magnesium: 400, // mg
  phosphorus: 700, // mg
  potassium: 4700, // mg
  zinc: 11 // mg
};

const micronutrientUnits = {
  vitaminA: 'mcg',
  vitaminC: 'mg',
  vitaminD: 'mcg',
  vitaminE: 'mg',
  vitaminK: 'mcg',
  vitaminB1: 'mg',
  vitaminB2: 'mg',
  vitaminB3: 'mg',
  vitaminB6: 'mg',
  vitaminB12: 'mcg',
  folate: 'mcg',
  calcium: 'mg',
  iron: 'mg',
  magnesium: 'mg',
  phosphorus: 'mg',
  potassium: 'mg',
  zinc: 'mg'
};

export function MicronutrientPanel({ currentIntake }: MicronutrientPanelProps) {
  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage < 50) return "bg-red-500";
    if (percentage < 80) return "bg-orange-500";
    if (percentage > 150) return "bg-purple-500";
    return "bg-sage";
  };

  const getStatusBadge = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage < 50) return <Badge variant="destructive" className="text-xs">Low</Badge>;
    if (percentage < 80) return <Badge variant="secondary" className="text-xs">Below</Badge>;
    if (percentage > 150) return <Badge variant="outline" className="text-xs">High</Badge>;
    return <Badge className="bg-sage text-xs">Good</Badge>;
  };

  const vitamins = [
    { key: 'vitaminA', name: 'Vitamin A' },
    { key: 'vitaminC', name: 'Vitamin C' },
    { key: 'vitaminD', name: 'Vitamin D' },
    { key: 'vitaminE', name: 'Vitamin E' },
    { key: 'vitaminK', name: 'Vitamin K' },
    { key: 'vitaminB1', name: 'Thiamine (B1)' },
    { key: 'vitaminB2', name: 'Riboflavin (B2)' },
    { key: 'vitaminB3', name: 'Niacin (B3)' },
    { key: 'vitaminB6', name: 'Vitamin B6' },
    { key: 'vitaminB12', name: 'Vitamin B12' },
    { key: 'folate', name: 'Folate' }
  ];

  const minerals = [
    { key: 'calcium', name: 'Calcium' },
    { key: 'iron', name: 'Iron' },
    { key: 'magnesium', name: 'Magnesium' },
    { key: 'phosphorus', name: 'Phosphorus' },
    { key: 'potassium', name: 'Potassium' },
    { key: 'zinc', name: 'Zinc' }
  ];

  const renderNutrientRow = (nutrient: { key: string; name: string }) => {
    const current = currentIntake[nutrient.key as keyof MicronutrientData] || 0;
    const target = micronutrientTargets[nutrient.key as keyof typeof micronutrientTargets];
    const unit = micronutrientUnits[nutrient.key as keyof typeof micronutrientUnits];
    const percentage = (current / target) * 100;

    return (
      <div key={nutrient.key} className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium">{nutrient.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {current.toFixed(1)} / {target} {unit}
            </span>
            {getStatusBadge(current, target)}
          </div>
        </div>
        <Progress 
          value={Math.min(percentage, 200)} 
          className="h-1.5"
        />
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-sage flex items-center gap-2">
          <Pill className="h-4 w-4" />
          Micronutrients & Vitamins
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Vitamins Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-3 w-3 text-sage" />
            <span className="text-xs font-medium">Vitamins</span>
          </div>
          <div className="space-y-3">
            {vitamins.map(renderNutrientRow)}
          </div>
        </div>

        <Separator />

        {/* Minerals Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Pill className="h-3 w-3 text-sage" />
            <span className="text-xs font-medium">Minerals</span>
          </div>
          <div className="space-y-3">
            {minerals.map(renderNutrientRow)}
          </div>
        </div>

        <Separator />

        {/* Quick Summary */}
        <div className="text-xs">
          <div className="font-medium mb-2">Daily Summary</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between">
              <span>On Target:</span>
              <span className="text-sage">
                {[...vitamins, ...minerals].filter(n => {
                  const current = currentIntake[n.key as keyof MicronutrientData] || 0;
                  const target = micronutrientTargets[n.key as keyof typeof micronutrientTargets];
                  const percentage = (current / target) * 100;
                  return percentage >= 80 && percentage <= 150;
                }).length}/{vitamins.length + minerals.length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Deficient:</span>
              <span className="text-orange-500">
                {[...vitamins, ...minerals].filter(n => {
                  const current = currentIntake[n.key as keyof MicronutrientData] || 0;
                  const target = micronutrientTargets[n.key as keyof typeof micronutrientTargets];
                  return (current / target) * 100 < 50;
                }).length}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
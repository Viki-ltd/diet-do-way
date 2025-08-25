
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Info, TrendingUp, TrendingDown } from "lucide-react";

interface HealthVerdictProps {
  currentIntake: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
    sodium: number;
  };
  goals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
    sodium: number;
  };
  userProfile: {
    age: number;
    gender: string;
    activityLevel: string;
    goal: string;
  };
}

export function HealthVerdict({ currentIntake, goals, userProfile }: HealthVerdictProps) {
  const generateVerdict = () => {
    const verdicts = [];
    
    // Protein analysis
    const proteinRatio = currentIntake.protein / goals.protein;
    if (proteinRatio >= 0.8) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Muscle Retention Strong',
        description: 'Good protein intake supports muscle maintenance and growth'
      });
    } else if (proteinRatio < 0.6) {
      verdicts.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Low Protein Alert',
        description: 'Insufficient protein may lead to muscle loss and fatigue'
      });
    }

    // Fiber analysis
    const fiberRatio = currentIntake.fiber / goals.fiber;
    if (fiberRatio < 0.5) {
      verdicts.push({
        type: 'warning',
        icon: TrendingDown,
        title: 'Digestive Health Risk',
        description: 'Low fiber intake may cause digestive issues and poor gut health'
      });
    }

    // Sodium analysis
    const sodiumRatio = currentIntake.sodium / goals.sodium;
    if (sodiumRatio > 1.2) {
      verdicts.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'High Sodium Intake',
        description: 'Excess sodium may cause bloating and water retention'
      });
    }

    // Sugar analysis
    const sugarRatio = currentIntake.sugar / goals.sugar;
    if (sugarRatio > 1.5) {
      verdicts.push({
        type: 'warning',
        icon: TrendingDown,
        title: 'Sugar Overload',
        description: 'High sugar may cause energy crashes and skin issues'
      });
    }

    // Calorie analysis
    const calorieRatio = currentIntake.calories / goals.calories;
    if (calorieRatio < 0.7) {
      verdicts.push({
        type: 'info',
        icon: Info,
        title: 'Low Energy Intake',
        description: 'Very low calories may slow metabolism and cause fatigue'
      });
    } else if (calorieRatio > 1.3) {
      verdicts.push({
        type: 'warning',
        icon: TrendingUp,
        title: 'Calorie Surplus',
        description: 'High calorie intake may lead to unwanted weight gain'
      });
    }

    // Age-specific recommendations
    if (userProfile.age > 40) {
      if (currentIntake.calories < goals.calories * 0.8) {
        verdicts.push({
          type: 'info',
          icon: Info,
          title: 'Metabolism Support Needed',
          description: 'Adequate calories important for maintaining metabolism after 40'
        });
      }
    }

    // Default positive message if no issues
    if (verdicts.length === 0) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Balanced Nutrition',
        description: 'Your nutrient intake looks well-balanced today!'
      });
    }

    return verdicts;
  };

  const verdicts = generateVerdict();

  const getVerdictColor = (type: string) => {
    switch (type) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Health Verdict</CardTitle>
        <p className="text-xs text-muted-foreground">
          ⚠️ AI-powered analysis - Please consult your doctor for medical advice
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {verdicts.map((verdict, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border ${getVerdictColor(verdict.type)}`}
          >
            <div className="flex items-start gap-2">
              <verdict.icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-xs">{verdict.title}</div>
                <div className="text-xs mt-1">{verdict.description}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

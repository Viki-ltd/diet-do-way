
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
    
    // Protein analysis - more encouraging
    const proteinRatio = currentIntake.protein / goals.protein;
    if (proteinRatio >= 0.8) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Muscle Building On Track! 💪',
        description: 'Great protein intake - your muscles are getting the fuel they need for growth and recovery'
      });
    } else if (proteinRatio < 0.6) {
      verdicts.push({
        type: 'info',
        icon: TrendingUp,
        title: 'Protein Boost Opportunity',
        description: 'Add some protein-rich foods to maximize muscle preservation and energy'
      });
    }

    // Fiber analysis - positive spin
    const fiberRatio = currentIntake.fiber / goals.fiber;
    if (fiberRatio >= 0.8) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Digestive Health Champion! 🌱',
        description: 'Excellent fiber intake supports gut health and nutrient absorption'
      });
    } else if (fiberRatio < 0.5) {
      verdicts.push({
        type: 'info',
        icon: Info,
        title: 'Fiber Focus Area',
        description: 'Consider adding fruits, vegetables, or whole grains for better digestive wellness'
      });
    }

    // Hydration and energy insights
    const calorieRatio = currentIntake.calories / goals.calories;
    if (calorieRatio >= 0.9 && calorieRatio <= 1.1) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Energy Balance Perfect! ⚡',
        description: 'Your calorie intake is spot-on for your goals - great work!'
      });
    } else if (calorieRatio < 0.7) {
      verdicts.push({
        type: 'info',
        icon: TrendingUp,
        title: 'Energy Boost Needed',
        description: 'Consider adding nutrient-dense calories to fuel your metabolism optimally'
      });
    }

    // Positive micronutrient insights
    if (currentIntake.protein > 0 && currentIntake.fiber > 0) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Skin & Hair Glow Potential! ✨',
        description: 'Good protein and fiber intake support healthy skin, hair, and nail growth'
      });
    }

    // Sodium - constructive approach
    const sodiumRatio = currentIntake.sodium / goals.sodium;
    if (sodiumRatio <= 0.8) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Heart Health Champion! ❤️',
        description: 'Moderate sodium intake supports cardiovascular wellness and reduces bloating'
      });
    }

    // Age-specific positive reinforcement
    if (userProfile.age > 40 && proteinRatio >= 0.8) {
      verdicts.push({
        type: 'positive',
        icon: TrendingUp,
        title: 'Aging Gracefully! 🌟',
        description: 'Excellent protein intake helps maintain muscle mass and metabolic health after 40'
      });
    }

    // Default encouraging message
    if (verdicts.length === 0) {
      verdicts.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Great Foundation! 🎯',
        description: 'You\'re building healthy eating habits - every nutritious choice counts!'
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

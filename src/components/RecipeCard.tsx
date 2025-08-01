import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink } from "lucide-react";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  dietaryTags: string[];
  steps: string[];
  ingredients: {
    name: string;
    amount: string;
    affiliateUrl?: string;
  }[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-200 hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {recipe.dietaryTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-background/90 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardContent className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground line-clamp-2">
            {recipe.title}
          </h3>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Quick Steps:</h4>
          <ol className="text-sm text-muted-foreground space-y-1">
            {recipe.steps.slice(0, 3).map((step, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-fresh-green font-medium">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
            {recipe.steps.length > 3 && (
              <li className="text-xs italic">...and {recipe.steps.length - 3} more steps</li>
            )}
          </ol>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Shop Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => ingredient.affiliateUrl && window.open(ingredient.affiliateUrl, '_blank')}
                disabled={!ingredient.affiliateUrl}
              >
                {ingredient.name}
                {ingredient.affiliateUrl && <ExternalLink className="h-3 w-3 ml-1" />}
              </Button>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="text-xs text-muted-foreground self-center">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <Button variant="fresh" className="w-full">
          View Full Recipe
        </Button>
      </CardContent>
    </Card>
  );
};
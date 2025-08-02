import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  category: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  // Legacy fields for compatibility
  prepTime?: string;
  dietaryTags?: string[];
  steps?: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <Card className="group cursor-pointer h-full overflow-hidden transition-all duration-300 hover:shadow-luxury-lg hover:scale-[1.02] bg-gradient-to-br from-card to-luxury-cream border-luxury-gold/20" onClick={handleClick}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${recipe.image}?w=400&h=300&fit=crop&auto=format`}
            alt={recipe.title} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 right-3 bg-luxury-gold text-luxury-navy font-semibold">
            {recipe.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
          {recipe.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-2">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-luxury-gold" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-luxury-gold" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4 text-luxury-gold" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-luxury-gold/10 text-luxury-navy border-luxury-gold/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
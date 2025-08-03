import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "@/hooks/useWishlist";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  category: string;
  ingredients: { name: string; amount: string }[];
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
  const { isInWishlist, toggleWishlist } = useWishlist();

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(recipe.id, recipe.title);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.origin + `/recipes/${recipe.id}`,
      });
    }
  };

  return (
    <Card className="group cursor-pointer h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br from-card to-cream border-sage/20" onClick={handleClick}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 left-3 bg-warm-orange text-white font-semibold">
            {recipe.category}
          </Badge>
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-colors ${
                isInWishlist(recipe.id) ? 'text-red-500' : 'text-muted-foreground'
              }`}
              onClick={handleWishlistToggle}
            >
              <Heart className={`h-4 w-4 ${isInWishlist(recipe.id) ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-colors text-muted-foreground"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
          {recipe.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-2">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-warm-orange" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-warm-orange" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4 text-warm-orange" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-fresh-green/10 text-fresh-green border-fresh-green/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
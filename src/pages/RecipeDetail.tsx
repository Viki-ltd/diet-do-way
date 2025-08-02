import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowLeft, Star } from "lucide-react";
import { mockRecipes } from "@/data/mockData";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = mockRecipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Header showFilters={false} onToggleFilters={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
            <Link to="/recipes">
              <Button>Back to Recipes</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div className="min-h-screen bg-background">
        <Header showFilters={false} onToggleFilters={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <Link to="/recipes" className="inline-flex items-center mb-6 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Recipes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-muted-foreground" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-muted-foreground" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-1 fill-yellow-400 text-yellow-400" />
                <span>4.8 (127 reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.dietaryTags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              A delicious recipe that brings together authentic flavors from around the world. 
              Perfect for any occasion and guaranteed to impress your guests!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{ingredient.name}</span>
                      <span className="text-muted-foreground">{ingredient.amount}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
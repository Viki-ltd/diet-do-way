import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { FilterSidebar, Filters } from "@/components/FilterSidebar";
import { Plus, Minus, Upload, Clock, Users, ChefHat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitRecipe = () => {
  const [filters, setFilters] = useState<Filters>({ categories: [], dietaryTags: [] });
  const [ingredients, setIngredients] = useState([{ name: "", amount: "" }]);
  const [instructions, setInstructions] = useState([""]);
  const [dietaryTags, setDietaryTags] = useState<string[]>([]);
  const { toast } = useToast();

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index));
    }
  };

  const updateIngredient = (index: number, field: "name" | "amount", value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    if (instructions.length > 1) {
      setInstructions(instructions.filter((_, i) => i !== index));
    }
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const toggleDietaryTag = (tag: string) => {
    setDietaryTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Recipe Submitted!",
      description: "Thank you for sharing your recipe. It will be reviewed and published soon.",
    });
  };

  const availableTags = [
    "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Keto", 
    "Paleo", "Low-Carb", "High-Protein", "Spicy", "Sweet", "Quick & Easy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/20 via-background to-earth/10">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <AdvertisingBanner />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-earth mb-2">Submit Your Recipe</h1>
          <p className="text-lg text-sage">Share your culinary creations with the ImporTrade community</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {/* Basic Information */}
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <ChefHat className="h-5 w-5" />
                  Recipe Details
                </CardTitle>
                <CardDescription>Basic information about your recipe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="recipe-title">Recipe Title *</Label>
                  <Input id="recipe-title" placeholder="Enter a catchy title for your recipe" required />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Brief description of your recipe and what makes it special"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="prep-time">Prep Time (minutes)</Label>
                    <Input id="prep-time" type="number" placeholder="15" />
                  </div>
                  <div>
                    <Label htmlFor="cook-time">Cook Time (minutes)</Label>
                    <Input id="cook-time" type="number" placeholder="30" />
                  </div>
                  <div>
                    <Label htmlFor="servings">Servings</Label>
                    <Input id="servings" type="number" placeholder="4" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cuisine">Cuisine Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cuisine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="asian">Asian</SelectItem>
                        <SelectItem value="mexican">Mexican</SelectItem>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Ingredients</CardTitle>
                <CardDescription>List all ingredients with their amounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="flex-1">
                      <Input
                        placeholder="Ingredient name"
                        value={ingredient.name}
                        onChange={(e) => updateIngredient(index, "name", e.target.value)}
                      />
                    </div>
                    <div className="w-32">
                      <Input
                        placeholder="Amount"
                        value={ingredient.amount}
                        onChange={(e) => updateIngredient(index, "amount", e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                      disabled={ingredients.length === 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addIngredient} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Ingredient
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Instructions</CardTitle>
                <CardDescription>Step-by-step cooking instructions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="bg-sage text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Textarea
                        placeholder={`Step ${index + 1}: Describe this cooking step in detail`}
                        value={instruction}
                        onChange={(e) => updateInstruction(index, e.target.value)}
                        rows={2}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeInstruction(index)}
                      disabled={instructions.length === 1}
                      className="mt-1"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addInstruction} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </CardContent>
            </Card>

            {/* Dietary Tags & Photo */}
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Additional Details</CardTitle>
                <CardDescription>Dietary information and recipe photo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Dietary Tags</Label>
                  <p className="text-sm text-muted-foreground mb-3">Select all that apply to your recipe</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={dietaryTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          dietaryTags.includes(tag) 
                            ? "bg-sage hover:bg-sage/80" 
                            : "hover:bg-sage/10 border-sage/30"
                        }`}
                        onClick={() => toggleDietaryTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="recipe-photo">Recipe Photo</Label>
                  <div className="border-2 border-dashed border-sage/30 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-sage mx-auto mb-4" />
                    <p className="text-sage font-medium mb-2">Upload a photo of your finished dish</p>
                    <p className="text-sm text-muted-foreground mb-4">PNG, JPG up to 10MB</p>
                    <Button type="button" variant="outline">Choose File</Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="chef-notes">Chef's Notes (Optional)</Label>
                  <Textarea 
                    id="chef-notes" 
                    placeholder="Share any tips, variations, or personal touches that make this recipe special"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    By submitting this recipe, you agree to share it with the ImporTrade community. 
                    All recipes are reviewed before publication.
                  </p>
                  <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                    Submit Recipe for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitRecipe;
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";

export interface Filters {
  categories: string[];
  dietaryTags: string[];
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  className?: string;
}

const categories = [
  "Snacks",
  "Flours & Baking",
  "Dairy Alternatives", 
  "Pantry Staples",
  "Beverages",
  "Frozen Foods",
  "Fresh Produce"
];

const dietaryTags = [
  "Gluten-Free",
  "Dairy-Free",
  "Low-Carb",
  "Organic",
  "Non-GMO",
  "Vegan",
  "Keto"
];

export const FilterSidebar = ({ filters, onFiltersChange, className }: FilterSidebarProps) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    });
  };

  const handleDietaryTagChange = (tag: string, checked: boolean) => {
    const newTags = checked
      ? [...filters.dietaryTags, tag]
      : filters.dietaryTags.filter(t => t !== tag);
    
    onFiltersChange({
      ...filters,
      dietaryTags: newTags
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Filter className="h-5 w-5 text-fresh-green" />
          Filters
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category, !!checked)
                  }
                />
                <Label 
                  htmlFor={`category-${category}`}
                  className="text-sm font-normal"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-3">Dietary Needs</h3>
          <div className="space-y-2">
            {dietaryTags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={filters.dietaryTags.includes(tag)}
                  onCheckedChange={(checked) => 
                    handleDietaryTagChange(tag, !!checked)
                  }
                />
                <Label 
                  htmlFor={`tag-${tag}`}
                  className="text-sm font-normal"
                >
                  {tag}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
import { useState } from "react";
import { OnboardingForm, DietaryPreferences } from "@/components/OnboardingForm";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import ProductCard from "@/components/ProductCard";
import RecipeCard from "@/components/RecipeCard";
import { FilterSidebar, Filters } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Filter, Search, Star, Mail } from "lucide-react";
import { mockProducts, mockRecipes } from "@/data/mockData";

const Index = () => {
  const [userPreferences, setUserPreferences] = useState<DietaryPreferences | null>(null);
  const [filters, setFilters] = useState<Filters>({ categories: [], dietaryTags: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // If user hasn't completed onboarding, show the form
  if (!userPreferences) {
    return <OnboardingForm onComplete={setUserPreferences} />;
  }

  // Filter products based on search and filters
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filters.categories.length === 0 || 
                           filters.categories.includes(product.category);
    
    const matchesDietary = filters.dietaryTags.length === 0 ||
                          filters.dietaryTags.some(tag => product.dietaryTags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesDietary;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to ImporTrade, {userPreferences.name}!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover sustainable, premium ingredients and connect with local businesses for a greener, healthier lifestyle
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
          
            {/* User Type and Preferences Display */}
          <div className="flex justify-center gap-3 mt-6">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              {userPreferences.userType === 'business' ? '🏢 Business Account' : '👤 Customer Account'}
            </span>
            {userPreferences.glutenFree && (
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                Gluten-Free
              </span>
            )}
            {userPreferences.dairyFree && (
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                Dairy-Free
              </span>
            )}
            {userPreferences.lowCarb && (
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                Low-Carb
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdvertisingBanner className="mb-8" />
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        <div className="flex gap-8">
          {showFilters && (
            <div className="w-72 flex-shrink-0">
              <FilterSidebar 
                filters={filters}
                onFiltersChange={setFilters}
                className="sticky top-4"
              />
            </div>
          )}
          
          <div className="flex-1">
            {/* Featured Products */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Curated for You</h2>
                <span className="text-muted-foreground">
                  {filteredProducts.length} products
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <p className="text-muted-foreground">
                      No products match your current filters. Try adjusting your search or filters.
                    </p>
                  </CardContent>
                </Card>
              )}
            </section>

            {/* Featured Recipes */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Recipe Inspiration</h2>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">Editor's Choice</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockRecipes.slice(0, 6).map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>

            {/* Partner with Us - Only show for customers */}
            {userPreferences.userType === 'customer' && (
              <section className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Partner With ImporTrade</h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join our network of sustainable businesses and reach customers who care about quality and sustainability.
                </p>
                <div className="max-w-md mx-auto space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Company" />
                  <Input placeholder="Email" />
                  <Textarea 
                    placeholder="Tell us about your products..."
                    className="h-24"
                  />
                  <Button className="w-full" variant="fresh">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                </div>
              </section>
            )}

            {/* Business Dashboard - Only show for businesses */}
            {userPreferences.userType === 'business' && (
              <section className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Your Business Dashboard</h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Access your business tools, manage listings, and track performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col gap-2" variant="outline">
                    <span className="text-lg">📊</span>
                    Analytics
                  </Button>
                  <Button className="h-20 flex flex-col gap-2" variant="outline">
                    <span className="text-lg">📦</span>
                    Manage Products
                  </Button>
                  <Button className="h-20 flex flex-col gap-2" variant="outline">
                    <span className="text-lg">💼</span>
                    Business Profile
                  </Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
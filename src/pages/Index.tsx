import { useState } from "react";
import { Header } from "@/components/Header";
import { OnboardingForm, DietaryPreferences } from "@/components/OnboardingForm";
import ProductCard from "@/components/ProductCard";
import RecipeCard from "@/components/RecipeCard";
import { FilterSidebar, Filters } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockProducts, mockRecipes } from "@/data/mockData";
import heroImage from "@/assets/hero-grocery.jpg";
import { Search, Star, Mail } from "lucide-react";

const Index = () => {
  const [userPreferences, setUserPreferences] = useState<DietaryPreferences | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({ categories: [], dietaryTags: [] });
  const [searchQuery, setSearchQuery] = useState("");

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
      <Header showFilters={showFilters} onToggleFilters={() => setShowFilters(!showFilters)} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Fresh healthy groceries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold text-foreground">
                Welcome back, {userPreferences.name}!
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover curated products perfect for your dietary needs. 
                Fresh finds, delivered to your door.
              </p>
              <div className="flex flex-wrap gap-2">
                {userPreferences.glutenFree && (
                  <span className="bg-fresh-green-light text-fresh-green px-3 py-1 rounded-full text-sm font-medium">
                    Gluten-Free
                  </span>
                )}
                {userPreferences.dairyFree && (
                  <span className="bg-fresh-green-light text-fresh-green px-3 py-1 rounded-full text-sm font-medium">
                    Dairy-Free
                  </span>
                )}
                {userPreferences.lowCarb && (
                  <span className="bg-fresh-green-light text-fresh-green px-3 py-1 rounded-full text-sm font-medium">
                    Low-Carb
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              className="sticky top-24"
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Mobile Filter Toggle */}
            {showFilters && (
              <div className="md:hidden">
                <FilterSidebar
                  filters={filters}
                  onFiltersChange={setFilters}
                />
              </div>
            )}

            {/* Products Section */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Curated for You
                </h2>
                <span className="text-muted-foreground">
                  {filteredProducts.length} products
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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

            {/* Recipes Section */}
            <section id="recipes" className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Recipe Inspiration
                </h2>
                <div className="flex items-center gap-1 text-warm-orange">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">Editor's Choice</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>

            {/* Advertise Section */}
            <section id="advertise" className="mt-16">
              <Card className="bg-gradient-to-r from-fresh-green-light to-cream">
                <CardContent className="p-8">
                  <div className="max-w-2xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">
                      Partner with FreshFinds
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Reach health-conscious shoppers looking for quality products. 
                      Feature your brand in our curated collections.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                      <Input placeholder="Your Name" />
                      <Input placeholder="Company" />
                      <Input placeholder="Email" className="md:col-span-2" />
                      <Textarea 
                        placeholder="Tell us about your products..."
                        className="md:col-span-2 h-24"
                      />
                    </div>
                    
                    <Button variant="fresh" size="lg" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Get in Touch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
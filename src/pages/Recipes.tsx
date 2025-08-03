import { useState } from "react";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { mockRecipes } from "@/data/mockData";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Recipes() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 20;

  const filteredRecipes = mockRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, startIndex + recipesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream to-natural-beige">
      <div className="flex">
        <AppSidebar />
        <div className="flex-1">
          <PageHeader
            title="Culinary Inspiration"
            description="Discover delicious recipes using our premium ingredients from around the world"
            imageUrl="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200"
            badge="Recipe Collection"
            stats={[
              { label: "Recipes", value: mockRecipes.length.toString() },
              { label: "Cuisines", value: "12+" },
              { label: "Avg Time", value: "30min" }
            ]}
          />
          
          <div className="container mx-auto px-4 py-6">
            <Breadcrumb />
            
            <AdvertisingBanner />
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-nature bg-clip-text text-transparent">
                Recipes ({filteredRecipes.length})
              </h2>
              <div className="flex items-center gap-4">
                <SearchBar 
                  placeholder="Search recipes..."
                  onSearch={setSearchQuery}
                  className="w-64"
                />
                <Button 
                  onClick={() => navigate('/submit-recipe')}
                  className="bg-gradient-nature text-natural-beige"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Submit Recipe
                </Button>
              </div>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
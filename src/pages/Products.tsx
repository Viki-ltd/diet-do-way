import { useState } from "react";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { FilterSidebar } from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    dietaryTags: [] as string[],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const productsPerPage = 20;

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filters.categories.length === 0 || 
      filters.categories.includes(product.category);
    
    const matchesDietary = filters.dietaryTags.length === 0 || 
      filters.dietaryTags.some(tag => product.dietaryTags.includes(tag));

    return matchesSearch && matchesCategory && matchesDietary;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Products</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our collection of sustainable, high-quality ingredients and products
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{mockProducts.length}+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdvertisingBanner className="mb-8" />
        
        {/* Search, Filter and View Options */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar 
                placeholder="Search products..."
                onSearch={setSearchQuery}
                className="w-full"
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
            <CartDrawer />
          </div>
          
          {/* View Options */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Showing {currentProducts.length} of {filteredProducts.length} products
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Items per row:</span>
              {[2, 3, 4, 5, 6].map((num) => (
                <Button
                  key={num}
                  variant={itemsPerRow === num ? "default" : "outline"}
                  size="sm"
                  onClick={() => setItemsPerRow(num)}
                  className="w-8 h-8 p-0"
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>
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
            {/* Products Grid */}
            <div className={`grid gap-6 ${
              itemsPerRow === 2 ? 'grid-cols-1 md:grid-cols-2' :
              itemsPerRow === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
              itemsPerRow === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :
              itemsPerRow === 5 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6'
            }`}>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-8">
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
                    
                    {totalPages > 5 && <PaginationEllipsis />}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
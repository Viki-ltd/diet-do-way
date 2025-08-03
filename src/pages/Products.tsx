import { useState } from "react";
import { FilterSidebar } from "@/components/FilterSidebar";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import CartDrawer from "@/components/CartDrawer";
import SearchBar from "@/components/SearchBar";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-cream to-natural-beige">
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Premium Products"
            description="Discover carefully curated ingredients and specialty foods from around the world"
            imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
            badge="Global Marketplace"
            stats={[
              { label: "Products", value: mockProducts.length.toString() },
              { label: "Countries", value: "25+" },
              { label: "Avg Rating", value: "4.8" }
            ]}
          />
          
          <div className="w-full px-6 md:px-12 py-8">
            <Breadcrumb />

            <AdvertisingBanner />
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-nature bg-clip-text text-transparent">
                Products ({filteredProducts.length})
              </h2>
              <div className="flex items-center gap-4">
                <SearchBar 
                  placeholder="Search products..."
                  onSearch={setSearchQuery}
                  className="w-64"
                />
                <CartDrawer />
              </div>
            </div>

            <div className="flex gap-8">
              {/* Sidebar */}
              <div className={`${showFilters ? 'block' : 'hidden'} md:block w-80 shrink-0`}>
                <FilterSidebar filters={filters} onFiltersChange={setFilters} />
              </div>

              {/* Main Content */}
              <div className="flex-1">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
                  
                  {totalPages > 5 && <PaginationEllipsis />}
                  
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
      </div>
    </div>
  );
}
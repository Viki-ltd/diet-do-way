import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf, Filter } from "lucide-react";

interface HeaderProps {
  showFilters: boolean;
  onToggleFilters: () => void;
}

export const Header = ({ showFilters, onToggleFilters }: HeaderProps) => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-fresh-green" />
            <h1 className="text-2xl font-bold text-foreground">FreshFinds</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#recipes" className="text-muted-foreground hover:text-foreground transition-colors">
              Recipes
            </a>
            <a href="#advertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Advertise
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleFilters}
              className="md:hidden"
            >
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="fresh" size="sm">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
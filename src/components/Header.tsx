import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  showFilters: boolean;
  onToggleFilters: () => void;
}

export const Header = ({ showFilters, onToggleFilters }: HeaderProps) => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-trade-blue" />
            <h1 className="text-2xl font-bold text-foreground">ImporTrade</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/recipes" className="text-muted-foreground hover:text-foreground transition-colors">
              Recipes
            </Link>
            <Link to="/local-business" className="text-muted-foreground hover:text-foreground transition-colors">
              Local Partners
            </Link>
            <Link to="/gift-hampers" className="text-muted-foreground hover:text-foreground transition-colors">
              Gift Hampers
            </Link>
            <Link to="/advertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Advertise
            </Link>
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
            <Button variant="default" size="sm" className="bg-trade-blue hover:bg-trade-blue/90">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
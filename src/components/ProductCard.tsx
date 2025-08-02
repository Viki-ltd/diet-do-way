import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: number;
  reviewCount: number;
  category: string;
  dietaryTags: string[];
  affiliateUrl: string;
  description: string;
  brand?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleBuyNow = () => {
    window.open(product.affiliateUrl, '_blank');
  };

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-luxury-lg hover:scale-[1.02] bg-gradient-to-br from-card to-luxury-cream border-luxury-gold/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${product.image}?w=400&h=300&fit=crop&auto=format`}
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {product.brand && (
          <p className="text-xs font-medium text-luxury-gold-dark uppercase tracking-wider">{product.brand}</p>
        )}
        <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {product.dietaryTags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-luxury-gold/10 text-luxury-navy border-luxury-gold/30">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-luxury-navy bg-gradient-luxury bg-clip-text text-transparent">
            {product.price}
          </span>
          <Button 
            onClick={handleBuyNow}
            size="sm" 
            className="bg-gradient-luxury hover:bg-luxury-gold-dark text-luxury-navy font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Buy Now
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
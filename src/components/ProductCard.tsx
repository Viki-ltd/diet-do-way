import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: string;
  rating: number;
  reviewCount: number;
  category: string;
  dietaryTags: string[];
  affiliateUrl: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-200 hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {product.dietaryTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-background/90 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warm-orange text-warm-orange" />
            <span className="font-medium">{product.rating}</span>
          </div>
          <span className="text-muted-foreground">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{product.price}</span>
          <Button
            variant="fresh"
            size="sm"
            className="gap-1"
            onClick={() => window.open(product.affiliateUrl, '_blank')}
          >
            Buy Now
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
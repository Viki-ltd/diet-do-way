import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Heart, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";

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
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    window.open(product.affiliateUrl, '_blank');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id, product.name);
  };

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br from-card to-cream border-sage/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 left-3 bg-warm-orange text-white font-semibold">
            {product.category}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-colors ${
              isInWishlist(product.id) ? 'text-red-500' : 'text-muted-foreground'
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </Button>
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
            <Star className="w-4 h-4 fill-warm-orange text-warm-orange" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.dietaryTags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-fresh-green/10 text-fresh-green border-fresh-green/30">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleAddToCart}
            variant="fresh"
            className="flex-1"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            onClick={handleBuyNow}
            variant="warm"
            className="px-4"
          >
            {product.price}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
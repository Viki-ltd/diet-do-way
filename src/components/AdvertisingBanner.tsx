import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Crown } from "lucide-react";

interface AdvertisingBannerProps {
  variant?: "premium" | "featured" | "newsletter";
  className?: string;
}

export const AdvertisingBanner = ({ variant = "premium", className = "" }: AdvertisingBannerProps) => {
  if (variant === "premium") {
    return (
      <Card className={`bg-gradient-luxury border-luxury-gold/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Crown className="h-8 w-8 text-luxury-gold" />
              <div>
                <h3 className="text-xl font-bold text-luxury-cream">Upgrade to Premium</h3>
                <p className="text-luxury-cream/80">Unlock exclusive imports and premium benefits</p>
              </div>
            </div>
            <Button variant="luxury" className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className={`bg-gradient-to-r from-luxury-cream to-cream border-luxury-gold/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Star className="h-8 w-8 text-luxury-gold fill-current" />
              <div>
                <h3 className="text-xl font-bold text-luxury-navy">Featured Collections</h3>
                <p className="text-luxury-navy/70">Discover this month's curated premium selections</p>
              </div>
            </div>
            <Button variant="premium" className="gap-2">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-luxury-subtle border-luxury-gold/20 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-luxury-navy">Stay Updated</h3>
          <p className="text-luxury-navy/70 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and premium collections
          </p>
          <Button variant="luxury" size="lg" className="gap-2">
            Subscribe to Newsletter <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
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
      <Card className={`bg-gradient-to-r from-fresh-green to-sage-green border-sage/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Crown className="h-8 w-8 text-warm-orange" />
              <div>
                <h3 className="text-xl font-bold text-white">Upgrade to Premium</h3>
                <p className="text-white/90">Unlock exclusive imports and sustainable benefits</p>
              </div>
            </div>
            <Button variant="warm" className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className={`bg-gradient-to-r from-cream to-natural-beige border-sage/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Star className="h-8 w-8 text-warm-orange fill-current" />
              <div>
                <h3 className="text-xl font-bold text-earth-brown">Featured Collections</h3>
                <p className="text-earth-brown/70">Discover this month's curated sustainable selections</p>
              </div>
            </div>
            <Button variant="fresh" className="gap-2">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-r from-natural-beige to-cream border-sage/20 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-earth-brown">Stay Updated</h3>
          <p className="text-earth-brown/70 max-w-md mx-auto">
            Be the first to know about new arrivals, sustainable offers, and eco-friendly collections
          </p>
          <Button variant="fresh" size="lg" className="gap-2">
            Subscribe to Newsletter <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
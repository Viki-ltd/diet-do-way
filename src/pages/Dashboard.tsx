import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { ShoppingCart, Package, Calendar, Leaf, TrendingUp, Crown, CheckCircle, Star } from "lucide-react";

const Dashboard = () => {
  const mockStats = {
    totalOrders: 24,
    monthlyBox: true,
    savedItems: 12,
    carbonOffset: "45 kg CO2"
  };

  const subscriptionTiers = [
    {
      name: "Starter",
      price: "$29/month",
      icon: Package,
      features: ["5 products per box", "Basic selection", "Monthly delivery", "Standard support"],
      popular: false
    },
    {
      name: "Explorer",
      price: "$49/month", 
      icon: Star,
      features: ["8 products per box", "Curated selection", "Bi-weekly delivery", "Priority support", "Recipe cards"],
      popular: true
    },
    {
      name: "Premium",
      price: "$79/month",
      icon: Crown,
      features: ["12 products per box", "Premium selection", "Weekly delivery", "24/7 support", "Recipe cards", "Exclusive products"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Monthly Subscriptions"
        description="Choose your perfect sustainable import box subscription"
        imageUrl="/api/placeholder/1200/400"
        badge="Monthly Plans"
      />
      
      <AdvertisingBanner variant="featured" className="mx-6 my-8" />

      <div className="px-6 py-8">
        {/* Subscription Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Subscription Tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-sage shadow-lg' : 'border-gray-200'}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sage text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <tier.icon className="w-12 h-12 text-sage mx-auto mb-4" />
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-sage">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-sage mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                    {tier.popular ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <ShoppingCart className="w-8 h-8 text-sage mx-auto mb-2" />
              <div className="text-2xl font-bold text-sage">{mockStats.totalOrders}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <Package className="w-8 h-8 text-sage mx-auto mb-2" />
              <div className="text-2xl font-bold text-sage">Active</div>
              <div className="text-sm text-muted-foreground">Monthly Box</div>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-sage mx-auto mb-2" />
              <div className="text-2xl font-bold text-sage">{mockStats.savedItems}</div>
              <div className="text-sm text-muted-foreground">Saved Items</div>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <Leaf className="w-8 h-8 text-sage mx-auto mb-2" />
              <div className="text-2xl font-bold text-sage">{mockStats.carbonOffset}</div>
              <div className="text-sm text-muted-foreground">Carbon Offset</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-sage/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-sage" />
                Monthly Nature Box
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Next delivery:</span>
                  <Badge variant="secondary">March 15, 2024</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Manage Subscription</Button>
                  <Button className="flex-1">Customize Box</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sage/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sage" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Himalayan Pink Salt ordered</span>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Monthly box customized</span>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Recipe saved</span>
                  <span className="text-xs text-muted-foreground">2 weeks ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
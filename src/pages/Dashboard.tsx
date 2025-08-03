import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { ShoppingCart, Package, Calendar, Leaf, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const mockStats = {
    totalOrders: 24,
    monthlyBox: true,
    savedItems: 12,
    carbonOffset: "45 kg CO2"
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header showFilters={false} onToggleFilters={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-fresh-green mb-2">Welcome back, Nature Lover! 🌱</h1>
          <p className="text-muted-foreground">Your sustainable import journey continues</p>
        </div>

        <AdvertisingBanner variant="featured" className="mb-8" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-fresh-green/20">
            <CardContent className="p-6 text-center">
              <ShoppingCart className="w-8 h-8 text-fresh-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-fresh-green">{mockStats.totalOrders}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          
          <Card className="border-fresh-green/20">
            <CardContent className="p-6 text-center">
              <Package className="w-8 h-8 text-sage-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-sage-green">Active</div>
              <div className="text-sm text-muted-foreground">Monthly Box</div>
            </CardContent>
          </Card>
          
          <Card className="border-fresh-green/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-warm-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-warm-orange">{mockStats.savedItems}</div>
              <div className="text-sm text-muted-foreground">Saved Items</div>
            </CardContent>
          </Card>
          
          <Card className="border-fresh-green/20">
            <CardContent className="p-6 text-center">
              <Leaf className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-forest-green">{mockStats.carbonOffset}</div>
              <div className="text-sm text-muted-foreground">Carbon Offset</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-fresh-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-fresh-green" />
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
                  <Button className="bg-gradient-fresh text-white">Customize Box</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-fresh-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sage-green" />
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
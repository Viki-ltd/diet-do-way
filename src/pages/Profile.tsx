import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { User, ShoppingBag, Heart, Clock, Settings, Bell, Shield } from "lucide-react";

const Profile = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });

  const mockOrders = [
    { id: "ORD-001", date: "2024-01-15", status: "Delivered", total: "$89.99", items: 4 },
    { id: "ORD-002", date: "2024-01-10", status: "Shipped", total: "$56.50", items: 2 },
    { id: "ORD-003", date: "2024-01-05", status: "Processing", total: "$123.75", items: 6 },
  ];

  const mockSavedItems = [
    { id: "1", name: "Authentic Japanese Miso Paste", price: "$12.99", image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300" },
    { id: "2", name: "Premium Italian Truffle Oil", price: "$24.99", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300" },
    { id: "3", name: "Organic Himalayan Pink Salt", price: "$8.99", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=300" },
  ];

  const mockRecentlyViewed = [
    { id: "1", name: "Thai Green Curry Recipe", type: "Recipe", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300" },
    { id: "2", name: "French Brie Cheese", type: "Product", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300" },
    { id: "3", name: "Mediterranean Quinoa Salad", type: "Recipe", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showFilters={false} onToggleFilters={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-muted-foreground mb-4">john.doe@example.com</p>
            <div className="flex gap-4">
              <Badge variant="secondary">Premium Member</Badge>
              <Badge variant="outline">Food Enthusiast</Badge>
            </div>
          </div>
          <Button variant="luxury">Edit Profile</Button>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{order.total}</p>
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockSavedItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-3" />
                      <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">{item.price}</span>
                        <Button size="sm" variant="luxury">Add to Cart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recently Viewed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentlyViewed.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <Button variant="luxury">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                    </div>
                    <Switch 
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                    </div>
                    <Switch 
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-notifications">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive updates about new products and offers</p>
                    </div>
                    <Switch 
                      id="marketing-notifications"
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">Change Password</Button>
                  <Button variant="outline" className="w-full">Two-Factor Authentication</Button>
                  <Button variant="destructive" className="w-full">Delete Account</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
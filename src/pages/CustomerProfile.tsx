import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Heart, Package, Clock, Settings, Bell, CreditCard, MapPin, Phone, Mail } from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";
import PageHeader from "@/components/PageHeader";

const CustomerProfile = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const mockOrders = [
    { id: "ORD-001", date: "2024-01-15", status: "Delivered", total: "$89.50", items: "Organic Vegetables Bundle" },
    { id: "ORD-002", date: "2024-01-08", status: "Processing", total: "$156.30", items: "Premium Spice Collection" },
    { id: "ORD-003", date: "2024-01-01", status: "Shipped", total: "$245.80", items: "Monthly Import Box" },
  ];

  const savedItems = [
    { id: 1, name: "Himalayan Pink Salt", price: "$12.99", image: "/placeholder.svg" },
    { id: 2, name: "Ethiopian Coffee Beans", price: "$24.99", image: "/placeholder.svg" },
    { id: 3, name: "Moroccan Argan Oil", price: "$39.99", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream to-natural-beige">
      <div className="flex">
        <AppSidebar />
        <div className="flex-1">
          <PageHeader
            title="My Profile"
            description="Manage your account settings, orders, and preferences"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200"
            badge="Member Account"
          />
          
          <div className="container mx-auto px-4 py-6">
            <Breadcrumb />
            <AdvertisingBanner />
        
        {/* Profile Header */}
        <Card className="mb-8 border-earth/20 bg-white/90 backdrop-blur">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-sage text-white text-xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-earth">John Doe</h1>
                <p className="text-sage">john.doe@email.com</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="bg-sage/10 text-sage">Premium Member</Badge>
                  <Badge variant="secondary" className="bg-earth/10 text-earth">Eco Champion</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Recent Orders</CardTitle>
                <CardDescription>Track your recent purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-sage/20 rounded-lg bg-white/50">
                      <div>
                        <p className="font-medium text-earth">{order.id}</p>
                        <p className="text-sm text-sage">{order.items}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-earth">{order.total}</p>
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"} className="mt-1">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Saved Items</CardTitle>
                <CardDescription>Your wishlist and favorites</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedItems.map((item) => (
                    <div key={item.id} className="border border-sage/20 rounded-lg p-4 bg-white/50">
                      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                      <h3 className="font-medium text-earth">{item.name}</h3>
                      <p className="text-sage font-bold">{item.price}</p>
                      <Button className="w-full mt-2" size="sm">Add to Cart</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Order History</CardTitle>
                <CardDescription>View all your past orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sage">Your complete order history will appear here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid gap-6">
              <Card className="border-earth/20 bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-earth">
                    <Settings className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                    <Input id="email" type="email" defaultValue="john.doe@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-earth/20 bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-earth">
                    <Bell className="h-5 w-5" />
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
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive delivery alerts via SMS</p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive app notifications</p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
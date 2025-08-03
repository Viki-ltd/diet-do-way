import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Bell, Shield, CreditCard, Palette, Globe, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false,
  });

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    dietaryPreferences: ["Vegetarian", "Gluten-Free"],
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `Your ${section} settings have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/5 via-background to-earth/5">
      <PageHeader
        title="Account Settings"
        description="Manage your ImporTrade account preferences and settings"
        imageUrl="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=400&fit=crop"
        badge="Account Management"
        stats={[
          { label: "Account Level", value: "Premium" },
          { label: "Member Since", value: "2023" },
          { label: "Orders", value: "47" },
        ]}
      />

      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/80 backdrop-blur">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-2 border-sage/20 shadow-lg bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <User className="w-5 h-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Dietary Preferences</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Vegetarian", "Vegan", "Gluten-Free", "Keto", "Halal", "Kosher"].map((pref) => (
                      <Badge
                        key={pref}
                        variant={profile.dietaryPreferences.includes(pref) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          setProfile(prev => ({
                            ...prev,
                            dietaryPreferences: prev.dietaryPreferences.includes(pref)
                              ? prev.dietaryPreferences.filter(p => p !== pref)
                              : [...prev.dietaryPreferences, pref]
                          }));
                        }}
                      >
                        {pref}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button onClick={() => handleSave("profile")} className="bg-gradient-to-r from-sage to-earth text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-2 border-sage/20 shadow-lg bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive order updates and promotions via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Get notified about new recipes and deals</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Delivery updates and urgent alerts</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Marketing Communications</Label>
                      <p className="text-sm text-muted-foreground">Special offers and promotional content</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave("notifications")} className="bg-gradient-to-r from-sage to-earth text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="border-2 border-sage/20 shadow-lg bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <Shield className="w-5 h-5" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="Enter current password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Login Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Button onClick={() => handleSave("security")} className="bg-gradient-to-r from-sage to-earth text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Update Security
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Settings */}
          <TabsContent value="billing" className="space-y-6">
            <Card className="border-2 border-sage/20 shadow-lg bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <CreditCard className="w-5 h-5" />
                  Billing & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-sage/10 to-earth/10">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Current Plan</h3>
                      <p className="text-2xl font-bold text-earth">Premium</p>
                      <p className="text-sm text-muted-foreground">$29.99/month</p>
                      <Button variant="outline" className="mt-4">Change Plan</Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-sage/10 to-earth/10">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <p className="text-lg">•••• •••• •••• 4532</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      <Button variant="outline" className="mt-4">Update Card</Button>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Billing History</h3>
                  <div className="space-y-2">
                    {[
                      { date: "Dec 1, 2023", amount: "$29.99", status: "Paid" },
                      { date: "Nov 1, 2023", amount: "$29.99", status: "Paid" },
                      { date: "Oct 1, 2023", amount: "$29.99", status: "Paid" },
                    ].map((bill, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded">
                        <span>{bill.date}</span>
                        <span className="font-medium">{bill.amount}</span>
                        <Badge variant="secondary">{bill.status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences" className="space-y-6">
            <Card className="border-2 border-sage/20 shadow-lg bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth">
                  <Palette className="w-5 h-5" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                        <SelectItem value="cad">CAD ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-save Recipes</Label>
                      <p className="text-sm text-muted-foreground">Automatically save recipes you view</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Location Services</Label>
                      <p className="text-sm text-muted-foreground">Find local businesses and delivery options</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Button onClick={() => handleSave("preferences")} className="bg-gradient-to-r from-sage to-earth text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Globe, Plus, Utensils, ChefHat } from "lucide-react";
import { mockBusinesses } from "@/data/businessData";

const LocalBusiness = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("restaurants");

  const restaurants = mockBusinesses.filter(business => 
    business.type.toLowerCase().includes('restaurant') || 
    business.type.toLowerCase().includes('cafe') ||
    business.type.toLowerCase().includes('bistro')
  );

  const mealProviders = mockBusinesses.filter(business => 
    business.type.toLowerCase().includes('meal') || 
    business.type.toLowerCase().includes('catering') ||
    business.type.toLowerCase().includes('delivery')
  );

  const getFilteredBusinesses = () => {
    const businesses = activeTab === "restaurants" ? restaurants : mealProviders;
    return businesses.filter(business =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Local Trade Partners"
        description="Discover amazing restaurants and meal plan providers using ImporTrade products in your area"
        imageUrl="/api/placeholder/1200/400"
        badge="Partner Network"
        stats={[
          { label: "Partner Businesses", value: "150+" },
          { label: "Cities", value: "25" },
          { label: "Average Rating", value: "4.9★" }
        ]}
      />
      
      <AdvertisingBanner variant="featured" className="mx-6 my-8" />

      <div className="px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="restaurants" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              Restaurants & Cafes
            </TabsTrigger>
            <TabsTrigger value="meal-providers" className="flex items-center gap-2">
              <ChefHat className="w-4 h-4" />
              Meal Plan Providers
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search by business name, cuisine, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Partner With Us
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Apply for Partnership</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Business Name" />
                <Input placeholder="Contact Email" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Address" />
                <Input placeholder="Website (optional)" />
                <Button className="w-full">Submit Application</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredBusinesses().map((business) => (
            <Card key={business.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-sage text-white">
                  {business.type}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {business.name}
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{business.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {business.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="text-muted-foreground">Price: {business.priceRange}</span>
                  </div>

                  <p className="text-sm">{business.description}</p>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">ImporTrade Products Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.imporTradeProducts.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Visit
                    </Button>
                    {business.website && (
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Globe className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getFilteredBusinesses().length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No businesses found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalBusiness;
import { useState } from "react";
import { Header } from "@/components/Header";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Globe, Plus } from "lucide-react";
import { mockBusinesses } from "@/data/businessData";

const LocalBusiness = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBusinesses = mockBusinesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/5 via-background to-earth/5">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Local Trade Partners</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover amazing restaurants and cafes using ImporTrade products in your area
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Partner Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdvertisingBanner variant="featured" className="mb-8" />
        
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
              <Button variant="luxury" className="flex items-center gap-2">
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
                <Button variant="luxury" className="w-full">Submit Application</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <Card key={business.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-primary">
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
                    <Button size="sm" variant="luxury" className="flex-1">
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

        {filteredBusinesses.length === 0 && (
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
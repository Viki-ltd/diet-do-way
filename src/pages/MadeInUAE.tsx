import PageHeader from "@/components/PageHeader";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award, Factory, Sprout } from "lucide-react";

const MadeInUAE = () => {
  const manufacturers = [
    {
      id: 1,
      name: "Al Rawabi Dairy Company",
      category: "Dairy & Beverages",
      location: "Dubai",
      rating: 4.8,
      products: ["Fresh Milk", "Yogurt", "Cheese", "Juices"],
      image: "/api/placeholder/300/200",
      description: "Premium dairy products from local farms",
      certifications: ["Organic", "Halal", "ISO 22000"]
    },
    {
      id: 2,
      name: "Emirates Dates",
      category: "Fruits & Nuts",
      location: "Al Ain",
      rating: 4.9,
      products: ["Medjool Dates", "Ajwa Dates", "Date Syrup"],
      image: "/api/placeholder/300/200",
      description: "Finest quality dates from Liwa Oasis",
      certifications: ["Organic", "Fair Trade"]
    },
    {
      id: 3,
      name: "Desert Bloom Herbs",
      category: "Herbs & Spices",
      location: "Ras Al Khaimah",
      rating: 4.7,
      products: ["Za'atar", "Sumac", "Dried Herbs"],
      image: "/api/placeholder/300/200",
      description: "Traditional herbs and spices grown in UAE",
      certifications: ["Organic", "UAE Good"]
    }
  ];

  const farmers = [
    {
      id: 1,
      name: "Green Valley Farm",
      category: "Vegetables",
      location: "Abu Dhabi",
      rating: 4.6,
      products: ["Tomatoes", "Cucumbers", "Lettuce", "Peppers"],
      image: "/api/placeholder/300/200",
      description: "Hydroponic farming with sustainable practices",
      certifications: ["Organic", "Hydroponic"]
    },
    {
      id: 2,
      name: "Al Dhafra Fish Farm",
      category: "Seafood",
      location: "Abu Dhabi",
      rating: 4.8,
      products: ["Sea Bass", "Sea Bream", "Shrimp"],
      image: "/api/placeholder/300/200",
      description: "Sustainable aquaculture in UAE waters",
      certifications: ["Sustainable", "Fresh"]
    },
    {
      id: 3,
      name: "Oasis Honey Farm",
      category: "Natural Products",
      location: "Fujairah",
      rating: 4.9,
      products: ["Sidr Honey", "Acacia Honey", "Bee Pollen"],
      image: "/api/placeholder/300/200",
      description: "Pure honey from UAE desert flowers",
      certifications: ["Pure", "Natural"]
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full">
      <PageHeader 
        title="Made in UAE"
        description="Discover premium products direct from local UAE manufacturers and farmers"
        imageUrl="/api/placeholder/1200/400"
        badge="Local Excellence"
        stats={[
          { label: "UAE Manufacturers", value: "50+" },
          { label: "Local Farmers", value: "75+" },
          { label: "Quality Certified", value: "100%" }
        ]}
      />
      
      <AdvertisingBanner variant="featured" className="mx-6 my-8" />

      <div className="px-6 py-8">
        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Buy Made in UAE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Support Local</h3>
                <p className="text-sm text-muted-foreground">Support UAE economy and local businesses</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Highest quality standards and certifications</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Sprout className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fresh & Sustainable</h3>
                <p className="text-sm text-muted-foreground">Locally sourced, reduced carbon footprint</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Factory className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Direct Supply</h3>
                <p className="text-sm text-muted-foreground">Direct from manufacturer to you</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Manufacturers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">UAE Manufacturers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manufacturers.map((manufacturer) => (
              <Card key={manufacturer.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={manufacturer.image} 
                    alt={manufacturer.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-sage text-white">
                    {manufacturer.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{manufacturer.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{manufacturer.location}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{manufacturer.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{manufacturer.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.products.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.certifications.map((cert, index) => (
                        <Badge key={index} className="bg-sage/10 text-sage text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    View Products
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Farmers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">UAE Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmers.map((farmer) => (
              <Card key={farmer.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-sage text-white">
                    {farmer.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{farmer.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{farmer.location}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{farmer.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{farmer.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {farmer.products.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {farmer.certifications.map((cert, index) => (
                        <Badge key={index} className="bg-sage/10 text-sage text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    Contact Farmer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-sage/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Become a Partner</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a UAE manufacturer or farmer? Join our platform and reach customers who value local quality.
          </p>
          <div className="text-center">
            <Button size="lg">
              Apply to Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeInUAE;
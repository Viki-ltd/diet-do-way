import PageHeader from "@/components/PageHeader";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Package, Truck, Gift } from "lucide-react";

const PreOrder = () => {
  const preOrderItems = [
    {
      id: 1,
      name: "Premium Himalayan Pink Salt Collection",
      originalPrice: "$89.99",
      preOrderPrice: "$62.99",
      discount: "30%",
      availableDate: "April 15, 2024",
      image: "/api/placeholder/300/200",
      description: "Exclusive collection of finest Himalayan pink salts from Pakistan's highest peaks.",
      features: ["5 different grain sizes", "Premium packaging", "Recipe booklet included"]
    },
    {
      id: 2,
      name: "Organic Saffron Premium Grade",
      originalPrice: "$129.99",
      preOrderPrice: "$90.99",
      discount: "30%",
      availableDate: "March 30, 2024",
      image: "/api/placeholder/300/200",
      description: "Grade A saffron directly from Kashmir valley farms.",
      features: ["Certified organic", "Lab tested", "Gift packaging"]
    },
    {
      id: 3,
      name: "Artisan Spice Blend Collection",
      originalPrice: "$149.99",
      preOrderPrice: "$104.99",
      discount: "30%",
      availableDate: "May 10, 2024",
      image: "/api/placeholder/300/200",
      description: "12 unique spice blends created by master spice artisans.",
      features: ["12 unique blends", "Artisan crafted", "Storage containers included"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Pre-Order & Save 30%"
        description="Reserve upcoming premium imports and save big on exclusive products"
        imageUrl="/api/placeholder/1200/400"
        badge="Early Access"
        stats={[
          { label: "Average Savings", value: "30%" },
          { label: "Pre-Order Items", value: "15+" },
          { label: "Next Arrival", value: "March 30" }
        ]}
      />
      
      <AdvertisingBanner variant="featured" className="mx-6 my-8" />

      <div className="px-6 py-8">
        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Pre-Order with ImporTrade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Gift className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">30% Discount</h3>
                <p className="text-sm text-muted-foreground">Save significantly on premium imports</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground">Get first access to rare products</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Priority Delivery</h3>
                <p className="text-sm text-muted-foreground">Receive items as soon as they arrive</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CalendarDays className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flexible Payment</h3>
                <p className="text-sm text-muted-foreground">Pay now or pay later options</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pre-Order Items */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Available for Pre-Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preOrderItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-sage text-white">
                    {item.discount} OFF
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-sage">{item.preOrderPrice}</span>
                    <span className="text-lg text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm space-y-1">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-sage rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Available: {item.availableDate}
                  </div>

                  <Button className="w-full">
                    Pre-Order Now - Save {item.discount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-sage/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">How Pre-Ordering Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Select & Reserve</h3>
              <p className="text-sm text-muted-foreground">Choose your items and secure your pre-order with 30% savings</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">We Import</h3>
              <p className="text-sm text-muted-foreground">We handle the importing process and keep you updated</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Priority Delivery</h3>
              <p className="text-sm text-muted-foreground">Get your items delivered as soon as they arrive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
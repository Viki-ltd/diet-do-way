import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { FilterSidebar, Filters } from "@/components/FilterSidebar";
import { Calendar, Package, Plus, Truck, Clock, ShoppingCart } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const ProcurementCenter = () => {
  const [filters, setFilters] = useState<Filters>({ categories: [], dietaryTags: [] });
  const [orderType, setOrderType] = useState("weekly");

  const bulkProducts = [
    { id: 1, name: "Organic Quinoa", unit: "25kg bags", price: "$156.00", category: "Grains" },
    { id: 2, name: "Premium Olive Oil", unit: "5L containers", price: "$89.99", category: "Oils" },
    { id: 3, name: "Himalayan Salt", unit: "10kg sacks", price: "$45.50", category: "Seasonings" },
    { id: 4, name: "Basmati Rice", unit: "20kg bags", price: "$78.00", category: "Grains" },
  ];

  const activeOrders = [
    { id: "PO-2024-001", restaurant: "Bella Vista", frequency: "Weekly", nextDelivery: "Jan 25, 2024", status: "Active" },
    { id: "PO-2024-002", restaurant: "Green Garden Cafe", frequency: "Bi-weekly", nextDelivery: "Jan 30, 2024", status: "Processing" },
    { id: "PO-2024-003", restaurant: "Ocean Breeze", frequency: "Monthly", nextDelivery: "Feb 05, 2024", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Procurement Center"
        description="Streamline your restaurant's bulk ordering and supply chain management"
        imageUrl="https://images.unsplash.com/photo-1586999134784-45600d9b7c80?w=1200"
        badge="Business Solutions"
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <AdvertisingBanner />

        <Tabs defaultValue="place-order" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur">
            <TabsTrigger value="place-order" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Place Order
            </TabsTrigger>
            <TabsTrigger value="active-orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Active Orders
            </TabsTrigger>
            <TabsTrigger value="pre-orders" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Pre-Orders
            </TabsTrigger>
            <TabsTrigger value="bulk-catalog" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Bulk Catalog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="place-order" className="space-y-6">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">New Bulk Order</CardTitle>
                <CardDescription>Set up weekly, bi-weekly, or monthly orders for your restaurant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="restaurant-name">Restaurant Name</Label>
                    <Input id="restaurant-name" placeholder="Enter your restaurant name" />
                  </div>
                  <div>
                    <Label htmlFor="contact-person">Contact Person</Label>
                    <Input id="contact-person" placeholder="Primary contact name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="order-frequency">Order Frequency</Label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="delivery-day">Preferred Delivery Day</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">Monday</SelectItem>
                        <SelectItem value="tuesday">Tuesday</SelectItem>
                        <SelectItem value="wednesday">Wednesday</SelectItem>
                        <SelectItem value="thursday">Thursday</SelectItem>
                        <SelectItem value="friday">Friday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="delivery-address">Delivery Address</Label>
                  <Textarea id="delivery-address" placeholder="Enter complete delivery address" />
                </div>

                <div>
                  <Label className="text-base font-medium text-earth">Select Products</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {bulkProducts.map((product) => (
                      <div key={product.id} className="border border-sage/20 rounded-lg p-4 bg-white/50">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-earth">{product.name}</h3>
                          <Badge variant="outline" className="text-sage border-sage/30">{product.category}</Badge>
                        </div>
                        <p className="text-sm text-sage mb-2">{product.unit}</p>
                        <p className="font-bold text-earth mb-3">{product.price}</p>
                        <div className="flex items-center gap-2">
                          <Input type="number" placeholder="Qty" className="w-20" min="1" />
                          <Button size="sm" className="flex-1">Add to Order</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="special-requirements">Special Requirements</Label>
                  <Textarea id="special-requirements" placeholder="Any special handling, packaging, or delivery instructions" />
                </div>

                <Button size="lg" className="w-full">
                  Submit Bulk Order Request
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active-orders" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Active Procurement Orders</CardTitle>
                <CardDescription>Manage your ongoing bulk orders and subscriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="border border-sage/20 rounded-lg p-4 bg-white/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-earth">{order.id}</h3>
                          <p className="text-sage">{order.restaurant}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            {order.frequency} • Next: {order.nextDelivery}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === "Active" ? "default" : "secondary"} className="mb-2">
                            {order.status}
                          </Badge>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline">Modify</Button>
                            <Button size="sm">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pre-orders" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Pre-Orders</CardTitle>
                <CardDescription>Schedule future orders for seasonal items and special events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-sage mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-earth mb-2">No Pre-Orders Yet</h3>
                  <p className="text-sage mb-4">Schedule orders for seasonal ingredients and special events</p>
                  <Button>Create Pre-Order</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk-catalog" className="space-y-4">
            <Card className="border-earth/20 bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-earth">Bulk Product Catalog</CardTitle>
                <CardDescription>Browse our wholesale products available for bulk ordering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bulkProducts.map((product) => (
                    <div key={product.id} className="border border-sage/20 rounded-lg p-4 bg-white/50">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-earth">{product.name}</h3>
                        <Badge variant="outline" className="text-sage border-sage/30">{product.category}</Badge>
                      </div>
                      <p className="text-sm text-sage mb-2">{product.unit}</p>
                      <p className="font-bold text-earth mb-3">{product.price}</p>
                      <Button size="sm" className="w-full">Request Quote</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProcurementCenter;
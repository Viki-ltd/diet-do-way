import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Gift, Calendar as CalendarIcon, Truck } from "lucide-react";
import { format } from "date-fns";
import { mockProducts } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const giftBoxOptions = [
  { id: "small", name: "Petite Gourmet Box", price: 15, capacity: 6, image: "photo-1513475382585-d06e58bcb0e0" },
  { id: "medium", name: "Classic Trade Box", price: 25, capacity: 10, image: "photo-1549298916-b41d501d3772" },
  { id: "large", name: "Premium Explorer Box", price: 35, capacity: 15, image: "photo-1607081692251-61d3e1b5136c" },
  { id: "deluxe", name: "Luxury Curator's Collection", price: 50, capacity: 20, image: "photo-1606107557195-0e29a4b5b4aa" },
];

const GiftHampers = () => {
  const { toast } = useToast();
  const [selectedBox, setSelectedBox] = useState<typeof giftBoxOptions[0] | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>({});
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [recipientName, setRecipientName] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [giftMessage, setGiftMessage] = useState("");

  const availableProducts = mockProducts.slice(0, 20); // Use first 20 products for gift options

  const addProduct = (productId: string) => {
    if (!selectedBox) return;
    
    const currentCount = getTotalItems();
    if (currentCount >= selectedBox.capacity) {
      toast({
        title: "Box is full!",
        description: `The ${selectedBox.name} can only hold ${selectedBox.capacity} items.`,
        variant: "destructive"
      });
      return;
    }

    setSelectedProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(prev => {
      const newCount = (prev[productId] || 0) - 1;
      if (newCount <= 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newCount };
    });
  };

  const getTotalItems = () => {
    return Object.values(selectedProducts).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    const productsTotal = Object.entries(selectedProducts).reduce((sum, [productId, count]) => {
      const product = availableProducts.find(p => p.id === productId);
      if (product) {
        const price = parseFloat(product.price.replace('$', ''));
        return sum + (price * count);
      }
      return sum;
    }, 0);

    const boxPrice = selectedBox ? selectedBox.price : 0;
    return productsTotal + boxPrice;
  };

  const handleCreateHamper = () => {
    if (!selectedBox || !deliveryDate || !recipientName || !recipientAddress) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (getTotalItems() === 0) {
      toast({
        title: "Empty Hamper",
        description: "Please add at least one product to your hamper.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Gift Hamper Created! 🎁",
      description: `Your luxury hamper will be delivered on ${format(deliveryDate, 'MMM dd, yyyy')}. Total: $${getTotalPrice().toFixed(2)} (COD)`,
    });

    // Reset form
    setSelectedBox(null);
    setSelectedProducts({});
    setDeliveryDate(undefined);
    setRecipientName("");
    setRecipientAddress("");
    setGiftMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Header showFilters={false} onToggleFilters={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-luxury-gold" />
            <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              Luxury Gift Hampers
            </h1>
            <Gift className="w-8 h-8 text-luxury-gold" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create bespoke gift hampers with our finest imported delicacies. Perfect for connoisseurs who appreciate the extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Choose Box */}
          <div className="space-y-6">
            <Card className="border-luxury-gold/30 shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-gradient-luxury text-luxury-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  Choose Your Box
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {giftBoxOptions.map((box) => (
                  <Card 
                    key={box.id} 
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedBox?.id === box.id 
                        ? 'ring-2 ring-luxury-gold bg-luxury-gold/5' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedBox(box)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://images.unsplash.com/${box.image}?w=80&h=80&fit=crop`}
                          alt={box.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{box.name}</h3>
                          <p className="text-sm text-muted-foreground">Holds up to {box.capacity} items</p>
                          <p className="font-bold text-luxury-gold">${box.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Step 2: Select Products */}
          <div className="space-y-6">
            <Card className="border-luxury-gold/30 shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-gradient-luxury text-luxury-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  Select Products
                  {selectedBox && (
                    <Badge variant="secondary" className="ml-auto">
                      {getTotalItems()}/{selectedBox.capacity} items
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {!selectedBox ? (
                  <p className="text-muted-foreground text-center py-4">Please select a box first</p>
                ) : (
                  availableProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img 
                        src={`https://images.unsplash.com/${product.image}?w=60&h=60&fit=crop`}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{product.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedProducts[product.id] > 0 && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeProduct(product.id)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-6 text-center font-medium">
                              {selectedProducts[product.id]}
                            </span>
                          </>
                        )}
                        <Button
                          size="sm"
                          onClick={() => addProduct(product.id)}
                          className="w-8 h-8 p-0 bg-gradient-luxury hover:bg-luxury-gold-dark"
                          disabled={getTotalItems() >= selectedBox.capacity}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Step 3: Delivery & Summary */}
          <div className="space-y-6">
            <Card className="border-luxury-gold/30 shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-gradient-luxury text-luxury-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="recipient-name">Recipient Name *</Label>
                  <Input
                    id="recipient-name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="Who's receiving this luxury hamper?"
                  />
                </div>

                <div>
                  <Label htmlFor="recipient-address">Delivery Address *</Label>
                  <Input
                    id="recipient-address"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    placeholder="Where should we deliver the magic?"
                  />
                </div>

                <div>
                  <Label>Delivery Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {deliveryDate ? format(deliveryDate, "PPP") : "Pick a delivery date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={deliveryDate}
                        onSelect={setDeliveryDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="gift-message">Gift Message (Optional)</Label>
                  <Input
                    id="gift-message"
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Add a personal touch..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-luxury-gold/30 shadow-luxury bg-gradient-to-br from-luxury-cream to-card">
              <CardHeader>
                <CardTitle className="text-luxury-navy">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedBox && (
                  <>
                    <div className="flex justify-between">
                      <span>{selectedBox.name}</span>
                      <span className="font-medium">${selectedBox.price}</span>
                    </div>
                    <Separator />
                  </>
                )}
                
                {Object.entries(selectedProducts).map(([productId, count]) => {
                  const product = availableProducts.find(p => p.id === productId);
                  if (!product) return null;
                  const price = parseFloat(product.price.replace('$', ''));
                  return (
                    <div key={productId} className="flex justify-between text-sm">
                      <span>{product.name} x{count}</span>
                      <span>${(price * count).toFixed(2)}</span>
                    </div>
                  );
                })}
                
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total (COD)</span>
                  <span className="text-luxury-gold">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                  <Truck className="w-4 h-4" />
                  <span>Cash on Delivery Only</span>
                </div>

                <Button 
                  onClick={handleCreateHamper}
                  className="w-full bg-gradient-luxury hover:bg-luxury-gold-dark text-luxury-navy font-semibold text-lg py-6 shadow-luxury"
                  disabled={!selectedBox || getTotalItems() === 0}
                >
                  Create Luxury Hamper 🎁
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftHampers;
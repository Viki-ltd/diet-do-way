import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Globe } from "lucide-react";

const Advertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header showFilters={false} onToggleFilters={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Advertise with ImporTrade</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reach thousands of food enthusiasts and international cuisine lovers. 
            Partner with us to showcase your products to our growing community.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Monthly Visitors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Partner Brands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>

        {/* Advertising Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Advertising Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Featured Product Placement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get your products featured prominently on our homepage and category pages.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Homepage banner placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Category page highlights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Search result priority</span>
                  </li>
                </ul>
                <Badge className="mb-4">Starting at $299/month</Badge>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Recipe Sponsorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sponsor popular recipes and cooking content to reach engaged food enthusiasts.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Recipe ingredient highlighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cooking video integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Social media promotion</span>
                  </li>
                </ul>
                <Badge className="mb-4">Starting at $199/month</Badge>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Brand Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Become an official ImporTrade partner with exclusive benefits and exposure.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated brand page</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Newsletter features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Event collaboration</span>
                  </li>
                </ul>
                <Badge className="mb-4">Custom Pricing</Badge>
                <Button className="w-full">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <Card>
              <CardHeader>
                <CardTitle>Ready to Advertise with ImporTrade?</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Company Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" />
                  <Textarea 
                    placeholder="Tell us about your advertising goals and how we can help..."
                    rows={4}
                  />
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Advertise;
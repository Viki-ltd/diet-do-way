import { AdvertisingBanner } from "@/components/AdvertisingBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, TrendingUp, Gift, DollarSign } from "lucide-react";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-earth">Join Our Affiliate Program</h1>
          <p className="text-xl text-earth/70 mb-8 max-w-2xl mx-auto">
            Earn 10% commission on every sale you refer. Help us spread sustainable imports while building your income.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sage">10%</div>
              <div className="text-sm text-earth/70">Commission</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage">$50</div>
              <div className="text-sm text-earth/70">Avg. Per Sale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage">24/7</div>
              <div className="text-sm text-earth/70">Support</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdvertisingBanner variant="featured" className="mb-8" />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-sage mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-earth">High Commissions</h3>
              <p className="text-sm text-earth/70">Earn 10% on every successful referral</p>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-sage mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-earth">Quality Audience</h3>
              <p className="text-sm text-earth/70">High-converting sustainable product enthusiasts</p>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-sage mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-earth">Real-time Tracking</h3>
              <p className="text-sm text-earth/70">Monitor your performance with detailed analytics</p>
            </CardContent>
          </Card>
          
          <Card className="border-sage/20">
            <CardContent className="p-6 text-center">
              <Gift className="w-8 h-8 text-sage mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-earth">Bonus Rewards</h3>
              <p className="text-sm text-earth/70">Extra incentives for top performers</p>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-sage/20">
            <CardHeader>
              <CardTitle className="text-center text-earth">Affiliate Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-earth">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-earth">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-earth">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <Label htmlFor="website" className="text-earth">Website/Social Media</Label>
                <Input id="website" placeholder="https://your-website.com" />
              </div>
              
              <div>
                <Label htmlFor="audience" className="text-earth">Tell us about your audience</Label>
                <Textarea 
                  id="audience" 
                  placeholder="Describe your audience size, demographics, and why you'd be a great affiliate partner..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="experience" className="text-earth">Previous affiliate experience</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Share any relevant experience with affiliate marketing or promoting sustainable products..."
                  rows={3}
                />
              </div>
              
              <Button className="w-full bg-sage hover:bg-sage/90 text-white">
                Submit Application
              </Button>
              
              <p className="text-xs text-earth/60 text-center">
                Applications are typically reviewed within 48 hours. We'll contact you with next steps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
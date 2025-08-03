import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import LocalBusiness from "./pages/LocalBusiness";
import Advertise from "./pages/Advertise";
import Profile from "./pages/Profile";
import CustomerProfile from "./pages/CustomerProfile";
import ProcurementCenter from "./pages/ProcurementCenter";
import SubmitRecipe from "./pages/SubmitRecipe";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GiftHampers from "./pages/GiftHampers";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-gradient-to-br from-sage/5 via-background to-earth/5">
            <AppSidebar />
            
            <div className="flex-1 flex flex-col">
              {/* Global Header with Sidebar Trigger */}
              <header className="h-12 flex items-center border-b border-earth/20 bg-white/90 backdrop-blur px-4">
                <SidebarTrigger className="mr-2" />
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-sage to-earth flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IT</span>
                  </div>
                  <span className="font-semibold text-earth">ImporTrade</span>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/recipes/:id" element={<RecipeDetail />} />
                  <Route path="/recipes/submit" element={<SubmitRecipe />} />
                  <Route path="/local-business" element={<LocalBusiness />} />
                  <Route path="/advertise" element={<Advertise />} />
                  <Route path="/procurement" element={<ProcurementCenter />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/gift-hampers" element={<GiftHampers />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/customer-profile" element={<CustomerProfile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

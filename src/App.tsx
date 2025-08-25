import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { HeaderActions } from "@/components/HeaderActions";
import { AppSidebar } from "@/components/AppSidebar";
import { NutritionTracker as NutritionWidget } from "@/components/NutritionTracker";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import LocalBusiness from "./pages/LocalBusiness";
import Advertise from "./pages/Advertise";
import Affiliate from "./pages/Affiliate";
import Profile from "./pages/Profile";
import CustomerProfile from "./pages/CustomerProfile";
import ProcurementCenter from "./pages/ProcurementCenter";
import SubmitRecipe from "./pages/SubmitRecipe";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GiftHampers from "./pages/GiftHampers";
import PreOrder from "./pages/PreOrder";
import MadeInUAE from "./pages/MadeInUAE";
import Settings from "./pages/Settings";
import NutritionTracker from "./pages/NutritionTracker";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            
            <div className="flex-1 flex flex-col w-0 min-w-0">
              {/* Global Header with Sidebar Trigger */}
              <header className="h-12 flex items-center justify-between border-b border-earth/20 bg-white/90 backdrop-blur px-4">
                <div className="flex items-center space-x-2">
                  <SidebarTrigger className="mr-2" />
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-sage to-earth flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IT</span>
                  </div>
                  <span className="font-semibold text-earth">ImporTrade</span>
                </div>
                <HeaderActions />
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
                  <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
                  <Route path="/recipes" element={<ProtectedRoute><Recipes /></ProtectedRoute>} />
                  <Route path="/recipes/:id" element={<ProtectedRoute><RecipeDetail /></ProtectedRoute>} />
                  <Route path="/recipes/submit" element={<ProtectedRoute><SubmitRecipe /></ProtectedRoute>} />
                  <Route path="/local-business" element={<ProtectedRoute><LocalBusiness /></ProtectedRoute>} />
                  <Route path="/advertise" element={<ProtectedRoute><Advertise /></ProtectedRoute>} />
                  <Route path="/affiliate" element={<ProtectedRoute><Affiliate /></ProtectedRoute>} />
                  <Route path="/procurement" element={<ProtectedRoute><ProcurementCenter /></ProtectedRoute>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/gift-hampers" element={<ProtectedRoute><GiftHampers /></ProtectedRoute>} />
                  <Route path="/pre-order" element={<ProtectedRoute><PreOrder /></ProtectedRoute>} />
                  <Route path="/made-in-uae" element={<ProtectedRoute><MadeInUAE /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/customer-profile" element={<ProtectedRoute><CustomerProfile /></ProtectedRoute>} />
                  <Route path="/nutrition" element={<ProtectedRoute><NutritionTracker /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </main>
            </div>
            
            {/* Sticky Nutrition Tracker */}
            <NutritionWidget />
          </div>
        </SidebarProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

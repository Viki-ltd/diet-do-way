import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

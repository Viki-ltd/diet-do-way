import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Package,
  ChefHat,
  Building2,
  Gift,
  Store,
  Megaphone,
  User,
  BarChart3,
  FileText,
  Settings,
  LogIn,
  Utensils,
  Users,
  Calendar,
  Activity
} from "lucide-react";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Products", url: "/products", icon: Package },
  { title: "Recipes", url: "/recipes", icon: ChefHat },
  { title: "Local Partners", url: "/local-business", icon: Building2 },
  { title: "Gift Hampers", url: "/gift-hampers", icon: Gift },
  { title: "Made in UAE", url: "/made-in-uae", icon: Building2 },
];

const businessItems = [
  { title: "Procurement Center", url: "/procurement", icon: Store },
  { title: "Pre-Order (30% Off)", url: "/pre-order", icon: Calendar },
  { title: "Affiliate Program", url: "/affiliate", icon: Users },
  { title: "Advertise", url: "/advertise", icon: Megaphone },
];

const userItems = [
  { title: "Profile", url: "/customer-profile", icon: User },
  { title: "Nutrition Tracker", url: "/nutrition", icon: Activity },
  { title: "Monthly Subscriptions", url: "/dashboard", icon: Calendar },
  { title: "Submit Recipe", url: "/recipes/submit", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive: active }: { isActive: boolean }) =>
    active 
      ? "bg-sage/10 text-sage font-medium border-r-2 border-sage" 
      : "hover:bg-sage/5 text-sage";

  return (
    <Sidebar className="border-r border-earth/20 bg-white/90 backdrop-blur">
      <SidebarContent className="bg-transparent">{/* fallback trigger inside the sidebar (visible in mini state) */}
        <SidebarTrigger className="m-2 self-end" />
        {/* Logo Section */}
        <div className="p-4 border-b border-earth/20">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sage to-earth flex items-center justify-center">
              <span className="text-white font-bold text-sm">IT</span>
            </div>
            <span className="font-bold text-lg text-sage">ImporTrade</span>
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sage font-medium">
            Marketplace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Business Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sage font-medium">
            Business
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {businessItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sage font-medium">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Login/Logout */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/login" className={getNavCls}>
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
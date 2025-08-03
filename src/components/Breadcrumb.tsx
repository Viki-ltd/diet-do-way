import { useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    'products': 'Products',
    'recipes': 'Recipes',
    'submit': 'Submit Recipe',
    'local-business': 'Local Partners',
    'gift-hampers': 'Gift Hampers',
    'procurement': 'Procurement Center',
    'advertise': 'Advertise',
    'customer-profile': 'My Profile',
    'dashboard': 'Dashboard',
    'login': 'Sign In',
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-1 text-sm text-sage mb-4">
      <Link 
        to="/" 
        className="flex items-center hover:text-earth transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const name = breadcrumbNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <div key={to} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 text-earth/60" />
            {isLast ? (
              <span className="text-earth font-medium">{name}</span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-earth transition-colors"
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
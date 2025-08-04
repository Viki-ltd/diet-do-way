import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-earth/5 border-t border-earth/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sage to-earth flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="font-bold text-lg text-earth">ImporTrade</span>
            </div>
            <p className="text-earth/70 text-sm">
              Connecting you with sustainable, high-quality imported products from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-earth">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/products" className="text-earth/70 hover:text-sage transition-colors">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes" className="text-earth/70 hover:text-sage transition-colors">
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/local-business" className="text-earth/70 hover:text-sage transition-colors">
                  Local Partners
                </NavLink>
              </li>
              <li>
                <NavLink to="/affiliate" className="text-earth/70 hover:text-sage transition-colors">
                  Affiliate Program
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="space-y-4">
            <h3 className="font-semibold text-earth">Business</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/procurement" className="text-earth/70 hover:text-sage transition-colors">
                  Procurement Center
                </NavLink>
              </li>
              <li>
                <NavLink to="/advertise" className="text-earth/70 hover:text-sage transition-colors">
                  Advertise
                </NavLink>
              </li>
              <li>
                <NavLink to="/gift-hampers" className="text-earth/70 hover:text-sage transition-colors">
                  Gift Hampers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-earth">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="text-earth/70 hover:text-sage transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-earth/70 hover:text-sage transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund" className="text-earth/70 hover:text-sage transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-earth/70 hover:text-sage transition-colors">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth/20 mt-8 pt-6 text-center text-sm text-earth/60">
          <p>&copy; 2024 ImporTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
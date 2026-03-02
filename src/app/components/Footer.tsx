import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">ShopHub</h3>
            <p className="text-gray-400 text-sm">
              Your trusted online shopping destination for quality products at great prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/catalog" className="hover:text-white">All Products</Link></li>
              <li><Link to="/catalog?sale=true" className="hover:text-white">Flash Sale</Link></li>
              <li><Link to="/catalog?new=true" className="hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/orders" className="hover:text-white">Track Order</Link></li>
              <li><Link to="/account" className="hover:text-white">My Account</Link></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

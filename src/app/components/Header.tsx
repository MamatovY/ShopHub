import { Link, useLocation } from "react-router";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopHub!
          </Link>

          <nav className="flex gap-8">
            <Link
              to="/"
              className={`hover:text-blue-600 transition ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""
                }`}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={`hover:text-blue-600 transition ${location.pathname === "/catalog" ? "text-blue-600 font-semibold" : ""
                }`}
            >
              Catalog
            </Link>
            <Link
              to="/orders"
              className={`hover:text-blue-600 transition ${location.pathname === "/orders" ? "text-blue-600 font-semibold" : ""
                }`}
            >
              Orders
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/search" className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full relative">
              <Heart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between py-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-xl font-bold text-blue-600">
            ShopHub
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/wishlist" className="p-2 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/cart" className="p-2 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <Link
            to="/search"
            className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 text-gray-500"
          >
            <Search className="w-4 h-4" />
            <span>Search Product</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col">
            <Link
              to="/"
              className="px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className="px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link
              to="/orders"
              className="px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Orders
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

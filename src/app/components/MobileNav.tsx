import { Link, useLocation } from "react-router";
import { Home, Search, ShoppingCart, Tag, User } from "lucide-react";

export function MobileNav() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Explore" },
    { path: "/cart", icon: ShoppingCart, label: "Cart" },
    { path: "/wishlist", icon: Tag, label: "Offer" },
    { path: "/account", icon: User, label: "Account" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-2 px-4 ${
                isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
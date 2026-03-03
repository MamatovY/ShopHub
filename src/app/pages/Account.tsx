import { Link } from "react-router";
import {
  User,
  ShoppingBag,
  MapPin,
  CreditCard,
  ChevronRight,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";

export function Account() {
  const menuItems = [
    {
      icon: User,
      label: "Profile",
      path: "/profile",
      description: "Edit your personal information",
    },
    {
      icon: ShoppingBag,
      label: "Order",
      path: "/orders",
      description: "View your order history",
    },
    {
      icon: MapPin,
      label: "Address",
      path: "/address",
      description: "Manage shipping addresses",
    },
    {
      icon: CreditCard,
      label: "Payment",
      path: "/payment",
      description: "Manage payment methods",
    },
  ];

  const settingsItems = [
    {
      icon: Settings,
      label: "Settings",
      path: "#",
    },
    {
      icon: Bell,
      label: "Notifications",
      path: "#",
    },
    {
      icon: HelpCircle,
      label: "Help Center",
      path: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">Account</h1>

      {/* User Info Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Ahmad Khaidir</h2>
            <p className="text-blue-100">ahmad.khaidir@example.com</p>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition ${
                index !== menuItems.length - 1 ? "border-b dark:border-gray-700" : ""
              }`}
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="font-semibold dark:text-gray-100">{item.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </Link>
          );
        })}
      </div>

      {/* Settings Menu */}
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-6">
        {settingsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition ${
                index !== settingsItems.length - 1 ? "border-b dark:border-gray-700" : ""
              }`}
            >
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="flex-1 font-medium dark:text-gray-100">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </Link>
          );
        })}
      </div>

      {/* Logout Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 py-4 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-gray-700 transition">
        <LogOut className="w-5 h-5" />
        Log Out
      </button>
    </div>
  );
}
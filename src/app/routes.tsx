import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Orders } from "./pages/Orders";
import { Wishlist } from "./pages/Wishlist";
import { Account } from "./pages/Account";
import { Address } from "./pages/Address";
import { AddAddress } from "./pages/AddAddress";
import { Payment } from "./pages/Payment";
import { AddCard } from "./pages/AddCard";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "orders", Component: Orders },
      { path: "wishlist", Component: Wishlist },
      { path: "account", Component: Account },
      { path: "address", Component: Address },
      { path: "add-address", Component: AddAddress },
      { path: "payment", Component: Payment },
      { path: "add-card", Component: AddCard },
      { path: "profile", Component: Profile },
      { path: "search", Component: Search },
      { path: "*", Component: NotFound },
    ],
  },
]);

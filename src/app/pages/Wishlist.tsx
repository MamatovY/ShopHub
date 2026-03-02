import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router";

export function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 6));

  const removeFromWishlist = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <div className="flex items-center gap-2 text-red-500">
          <Heart className="w-5 h-5 fill-red-500" />
          <span className="font-semibold">{wishlistItems.length} items</span>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link
            to="/catalog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {wishlistItems.length > 0 && (
        <div className="mt-8 text-center">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Add All to Cart
          </Link>
        </div>
      )}
    </div>
  );
}

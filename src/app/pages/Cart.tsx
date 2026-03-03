import { useState } from "react";
import { Link } from "react-router";
import { Heart, Trash2, Minus, Plus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getUnsplashImageUrl } from "../utils/unsplash";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isFavorite?: boolean;
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "nike zoom pegasus sneakers",
      isFavorite: true,
    },
    {
      id: "2",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "nike air max sneakers",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      setCouponError(true);
    } else {
      setCouponError(false);
      // Handle coupon application
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 40.0;
  const importCharges = 128.0;
  const total = subtotal + shipping + importCharges;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty</p>
          <Link
            to="/catalog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 flex gap-4">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={getUnsplashImageUrl(item.image)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold dark:text-gray-100">{item.name}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            item.isFavorite
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        <Trash2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium w-6 text-center dark:text-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="font-semibold mb-4 dark:text-gray-100">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      setCouponError(false);
                    }}
                    placeholder="Enter Coupon Code"
                    className={`flex-1 px-3 lg:px-4 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 ${
                      couponError ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 whitespace-nowrap shrink-0"
                  >
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-red-500 text-sm mt-2">
                    * Your Coupon Is Not Correct
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Items ({cartItems.length})
                  </span>
                  <span className="font-medium dark:text-gray-200">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-medium dark:text-gray-200">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Import charges</span>
                  <span className="font-medium dark:text-gray-200">${importCharges.toFixed(2)}</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-3 flex justify-between text-lg">
                  <span className="font-semibold dark:text-gray-100">Total Price</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium mt-6 hover:bg-blue-700 transition"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
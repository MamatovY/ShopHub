import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, MapPin, CreditCard } from "lucide-react";

export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePlaceOrder = () => {
    // Simulate order placement
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="space-y-6">
        {/* Shipping Address */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Shipping Address</h2>
            <Link to="/address" className="text-blue-600 text-sm">
              Change
            </Link>
          </div>
          
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-1">Priscekila</p>
              <p className="text-sm text-gray-600">
                3711 Spring Hill Rd undefined Tallahassee,
                <br />
                Nevada 52874 United States
              </p>
              <p className="text-sm text-gray-600 mt-2">+99 1234567890</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <Link to="/payment" className="text-blue-600 text-sm">
              Change
            </Link>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5"
              />
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium">Credit Card</p>
                <p className="text-sm text-gray-600">**** **** **** 1231</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5"
              />
              <div className="w-5 h-5 text-gray-400">💳</div>
              <div className="flex-1">
                <p className="font-medium">PayPal</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5"
              />
              <div className="w-5 h-5 text-gray-400">🏦</div>
              <div className="flex-1">
                <p className="font-medium">Bank Transfer</p>
              </div>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Items (2)</span>
              <span className="font-medium">$598.86</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">$40.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Import charges</span>
              <span className="font-medium">$128.00</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg">
              <span className="font-semibold">Total Price</span>
              <span className="font-bold text-blue-600">$766.86</span>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

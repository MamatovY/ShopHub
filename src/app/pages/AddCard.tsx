import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, AlertCircle } from "lucide-react";

export function AddCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardHolder: "",
  });
  const [securityCodeError, setSecurityCodeError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.securityCode !== "1219") {
      setSecurityCodeError(true);
      return;
    }

    alert("Card added successfully!");
    navigate("/payment");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "securityCode") {
      setSecurityCodeError(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" - ") : cleaned;
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/payment" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Add Card</h1>
      </div>

      {securityCodeError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-600">Security Code Is Wrong</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card Number */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={formatCardNumber(formData.cardNumber)}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, "");
              if (cleaned.length <= 16) {
                handleChange("cardNumber", cleaned);
              }
            }}
            placeholder="1231 - 2312 - 3123 - 1231"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Expiration Date and Security Code */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              value={formData.expirationDate}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length >= 2) {
                  value = value.slice(0, 2) + "/" + value.slice(2, 4);
                }
                if (value.length <= 5) {
                  handleChange("expirationDate", value);
                }
              }}
              placeholder="12/12"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Security Code
            </label>
            <input
              type="text"
              value={formData.securityCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 4) {
                  handleChange("securityCode", value);
                }
              }}
              placeholder="1219"
              className={`w-full px-4 py-3 border-2 rounded-lg ${
                securityCodeError ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
        </div>

        {/* Card Holder */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Card Holder
          </label>
          <input
            type="text"
            value={formData.cardHolder}
            onChange={(e) => handleChange("cardHolder", e.target.value)}
            placeholder="Lailyfa Febrina"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Card
        </button>
      </form>
    </div>
  );
}

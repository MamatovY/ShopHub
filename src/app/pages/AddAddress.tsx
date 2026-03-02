import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronDown } from "lucide-react";

export function AddAddress() {
  const navigate = useNavigate();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const countries = [
    "United States",
    "United Kingdom",
    "Afghanistan",
    "Albania",
    "American Samoa",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, boolean> = {};
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.streetAddress) newErrors.streetAddress = true;
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    alert("Address saved successfully!");
    navigate("/address");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/address" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Add Address</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country Dropdown */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Country or region
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="w-full px-4 py-3 border-2 border-blue-600 rounded-lg flex items-center justify-between bg-white"
            >
              <span>{formData.country}</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            
            {showCountryDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country}
                    type="button"
                    onClick={() => {
                      handleChange("country", country);
                      setShowCountryDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                      country === formData.country
                        ? "text-blue-600 font-medium"
                        : ""
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Ahmad"
            className={`w-full px-4 py-3 border-2 rounded-lg ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">Please Fill The Form</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Khaidir"
            className={`w-full px-4 py-3 border-2 rounded-lg ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Street Address
          </label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={(e) => handleChange("streetAddress", e.target.value)}
            placeholder="7021 Parker Rd undefined"
            className={`w-full px-4 py-3 border-2 rounded-lg ${
              errors.streetAddress ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Street Address 2 */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Street Address 2 (Optional)
          </label>
          <input
            type="text"
            value={formData.streetAddress2}
            onChange={(e) => handleChange("streetAddress2", e.target.value)}
            placeholder="4333 Edwards Rd undefined"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold mb-2">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Richardson"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            State/Province/Region
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="Oregon"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-semibold mb-2">Zip Code</label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            placeholder="57793"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="(316) 555-0116"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Address
        </button>
      </form>
    </div>
  );
}

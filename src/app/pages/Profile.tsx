import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, Calendar, Upload } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getUnsplashImageUrl } from "../utils/unsplash";

export function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "Ahmad",
    lastName: "Khaidir",
    email: "ahmad.khaidir@example.com",
    phone: "+99 1234567890",
    birthday: "12/12/2020",
    gender: "male",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    navigate("/account");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            <ImageWithFallback
              src={getUnsplashImageUrl("person portrait male")}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-blue-600 font-medium"
          >
            <Upload className="w-4 h-4" />
            Change Photo
          </button>
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
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
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Birthday */}
        <div>
          <label className="block text-sm font-semibold mb-2">Birthday</label>
          <div className="relative">
            <input
              type="text"
              value={formData.birthday}
              onChange={(e) => handleChange("birthday", e.target.value)}
              placeholder="12/12/2020"
              className="w-full px-4 py-3 border-2 border-blue-600 rounded-lg pr-12"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold mb-2">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-5 h-5"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-5 h-5"
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
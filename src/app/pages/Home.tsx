import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";

export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 34,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = products.filter((p) => p.discount);
  const recommendedProducts = products;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-6 h-[200px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=400&fit=crop"
            alt="Sale Banner"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 p-6 md:p-12 h-full flex flex-col justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-2 md:mb-4">
            Super Flash Sale
            <br />
            50% Off
          </h1>
          <div className="flex gap-2 md:gap-4">
            <div className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3">
              <div className="text-lg md:text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
            </div>
            <div className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3">
              <div className="text-lg md:text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
            </div>
            <div className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3">
              <div className="text-lg md:text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold">Category</h2>
          <Link to="/catalog" className="text-blue-600 text-sm flex items-center gap-1">
            More Category
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center text-2xl md:text-3xl hover:bg-blue-100 transition">
                {category.icon}
              </div>
              <span className="text-xs md:text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold">Flash Sale</h2>
          <Link to="/catalog?sale=true" className="text-blue-600 text-sm flex items-center gap-1">
            See More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {flashSaleProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Mega Sale Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold">Mega Sale</h2>
          <Link to="/catalog" className="text-blue-600 text-sm flex items-center gap-1">
            See More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="bg-gradient-to-b from-gray-300 to-gray-100 rounded-2xl p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Recommended Product</h2>
        <p className="text-gray-600 text-sm mb-6">We recommend the best for you</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

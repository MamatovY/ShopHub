import { useState } from "react";
import { useParams, Link } from "react-router";
import { ChevronLeft, Heart, Share2, Star, ShoppingCart } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getUnsplashImageUrl } from "../utils/unsplash";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/catalog" className="text-blue-600">
          Back to catalog
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const colorMap: Record<string, string> = {
    yellow: "bg-yellow-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
    navy: "bg-blue-900",
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 z-40 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/catalog" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <ChevronLeft className="w-6 h-6 dark:text-gray-300" />
          </Link>
          <h1 className="text-lg font-semibold flex-1 mx-4 truncate dark:text-gray-100">{product.name}</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Share2 className="w-5 h-5 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4">
              <ImageWithFallback
                src={getUnsplashImageUrl(product.image, 800, 800)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-medium">
                  {product.discount}% OFF
                </div>
              )}
              <button className="absolute top-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-red-50 dark:hover:bg-red-900">
                <Heart className="w-6 h-6 dark:text-gray-300" />
              </button>
            </div>
            
            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 cursor-pointer">
                  <ImageWithFallback
                    src={getUnsplashImageUrl(product.image)}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-gray-100">{product.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} Review)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 dark:text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-red-500 font-medium">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 dark:text-gray-200">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border-2 font-medium transition ${
                        selectedSize === size
                          ? "border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "border-gray-300 dark:border-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 dark:text-gray-200">Select Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        selectedColor === color
                          ? "border-blue-600 dark:border-blue-400 scale-110"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      <div className={`w-full h-full rounded-full ${colorMap[color]}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specification */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 dark:text-gray-200">Specification</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shown:</span>
                  <span className="font-medium dark:text-gray-200">Blue/Anthracite/Watermelon/White</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Style:</span>
                  <span className="font-medium dark:text-gray-200">CD0113-400</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                The Nike Air Max 270 React ENG combines a full-length React foam midsole
                with a 270 Max Air unit for unrivaled comfort and a striking visual
                experience.
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300"
                >
                  -
                </button>
                <span className="px-6 py-3 font-medium dark:text-gray-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add To Cart
              </button>
            </div>

            {/* Reviews */}
            <div className="border-t dark:border-gray-800 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold dark:text-gray-100">Review Product</h3>
                <Link to="#" className="text-blue-600 dark:text-blue-400 text-sm">
                  See More
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shrink-0">
                    <ImageWithFallback
                      src="person portrait"
                      alt="James Lawson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium mb-1 dark:text-gray-200">James Lawson</div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      air max are always very comfortable fit, clean and just perfect in
                      every way. just the box was too small and scrunched the sneakers up
                      a little bit, not sure if the box was always this small but the 90s
                      are and will always be one of my favorites.
                    </p>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">December 10, 2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 dark:text-gray-100">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.slice(0, 5).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
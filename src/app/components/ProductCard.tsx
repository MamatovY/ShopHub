import { Link } from "react-router";
import { Heart, Star } from "lucide-react";
import { Product } from "../data/products";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getUnsplashImageUrl } from "../utils/unsplash";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/product/${product.id}`} className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
        <ImageWithFallback
          src={getUnsplashImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        <button 
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition ${
            isFavorite 
              ? "bg-red-50 dark:bg-red-900/50 hover:bg-red-100 dark:hover:bg-red-900/70" 
              : "bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/50"
          }`}
        >
          <Heart 
            className={`w-4 h-4 transition ${
              isFavorite 
                ? "fill-red-500 text-red-500" 
                : "text-gray-400 dark:text-gray-300"
            }`} 
          />
        </button>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-semibold mb-1 truncate dark:text-gray-100">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400 font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 dark:text-gray-500 text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
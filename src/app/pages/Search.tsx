import { useState } from "react";
import { Link } from "react-router";
import { Search as SearchIcon, Clock, TrendingUp, X } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Nike Air Max",
    "Leather Bag",
    "Running Shoes",
  ]);

  const trendingSearches = [
    "Summer Collection 2026",
    "Nike Sneakers",
    "Designer Bags",
    "Casual Wear",
  ];

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const removeRecentSearch = (index: number) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Product"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
            autoFocus
          />
        </div>
      </div>

      {searchQuery ? (
        // Search Results
        <div>
          <div className="mb-4">
            <p className="text-gray-600">
              Found {filteredProducts.length} results for "{searchQuery}"
            </p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No products found</p>
              <p className="text-sm text-gray-400 mt-2">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      ) : (
        // Search Suggestions
        <div className="space-y-8">
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Searches</h2>
                <button
                  onClick={() => setRecentSearches([])}
                  className="text-sm text-blue-600"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    <button
                      onClick={() => setSearchQuery(search)}
                      className="flex items-center gap-3 flex-1"
                    >
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{search}</span>
                    </button>
                    <button
                      onClick={() => removeRecentSearch(index)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Trending Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Popular Products */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Popular Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

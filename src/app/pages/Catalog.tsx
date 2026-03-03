import { useState } from "react";
import { useSearchParams } from "react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");

  const categoryParam = searchParams.get("category");
  const saleParam = searchParams.get("sale");

  let filteredProducts = [...products];

  // Filter by category
  if (categoryParam) {
    filteredProducts = filteredProducts.filter((p) => p.category === categoryParam);
  }
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedCategories.includes(p.category)
    );
  }

  // Filter by sale
  if (saleParam) {
    filteredProducts = filteredProducts.filter((p) => p.discount);
  }

  // Filter by price
  filteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  // Sort
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold dark:text-gray-100">Catalog</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-100"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sticky top-24">
            <h3 className="font-semibold mb-4 dark:text-gray-100">Filters</h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="rounded"
                    />
                    <span className="text-sm dark:text-gray-300">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Price Range</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded text-sm"
                  placeholder="Min"
                />
                <span className="dark:text-gray-400">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded text-sm"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} products
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold dark:text-gray-100">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6 dark:text-gray-300" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="rounded"
                    />
                    <span className="text-sm dark:text-gray-300">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mobile Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Price Range</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded text-sm"
                  placeholder="Min"
                />
                <span className="dark:text-gray-400">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded text-sm"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Mobile Sort By */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 dark:text-gray-200">Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "FS - Nike Air Max 270 React...",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    image: "nike sneakers colorful",
    rating: 4,
    reviews: 5,
    category: "shoes",
    colors: ["yellow", "blue", "red", "green", "purple", "navy"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5"],
  },
  {
    id: "2",
    name: "FS - QUILTED MAXI CROS...",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    image: "black leather bag luxury",
    rating: 4,
    reviews: 5,
    category: "bags",
  },
  {
    id: "3",
    name: "MS - Nike Air Max 270 React...",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    image: "nike air max sneakers",
    rating: 4,
    reviews: 5,
    category: "shoes",
  },
  {
    id: "4",
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 299.43,
    rating: 4,
    reviews: 5,
    category: "shoes",
    image: "nike zoom pegasus running",
  },
  {
    id: "5",
    name: "MS - Nike Air Max 270 React ENG",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    image: "red leather bag luxury",
    rating: 4.5,
    reviews: 10,
    category: "bags",
  },
  {
    id: "6",
    name: "Women Fashion Handbag",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    image: "women handbag designer",
    rating: 5,
    reviews: 8,
    category: "bags",
  },
  {
    id: "7",
    name: "Casual T-Shirt Collection",
    price: 199.43,
    originalPrice: 299.33,
    discount: 33,
    image: "casual tshirt men",
    rating: 4,
    reviews: 12,
    category: "shirts",
  },
  {
    id: "8",
    name: "Summer Dress Collection",
    price: 399.43,
    originalPrice: 599.33,
    discount: 33,
    image: "summer dress women",
    rating: 4.5,
    reviews: 15,
    category: "dress",
  },
];

export const categories = [
  { id: "shirts", name: "Man Shirt", icon: "👔" },
  { id: "dress", name: "Dress", icon: "👗" },
  { id: "work", name: "Man Work Equipment", icon: "💼" },
  { id: "bags", name: "Woman Bag", icon: "👜" },
  { id: "shoes", name: "Man Shoes", icon: "👟" },
  { id: "gadgets", name: "Gadgets", icon: "📱" },
];

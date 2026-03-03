import { Link } from "react-router";
import { Package, Truck, CheckCircle, Clock, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getUnsplashImageUrl } from "../utils/unsplash";

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "processing" | "shipped" | "delivered";
  total: number;
  items: {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
  }[];
}

export function Orders() {
  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "ORD-2026-001234",
      date: "March 1, 2026",
      status: "delivered",
      total: 766.86,
      items: [
        {
          id: "1",
          name: "Nike Air Zoom Pegasus 36 Miami",
          image: "nike zoom pegasus",
          quantity: 1,
          price: 299.43,
        },
        {
          id: "2",
          name: "Nike Air Max 270 React",
          image: "nike air max",
          quantity: 1,
          price: 299.43,
        },
      ],
    },
    {
      id: "2",
      orderNumber: "ORD-2026-001233",
      date: "February 28, 2026",
      status: "shipped",
      total: 299.43,
      items: [
        {
          id: "3",
          name: "QUILTED MAXI CROSSBODY BAG",
          image: "black leather bag",
          quantity: 1,
          price: 299.43,
        },
      ],
    },
    {
      id: "3",
      orderNumber: "ORD-2026-001232",
      date: "February 25, 2026",
      status: "processing",
      total: 199.43,
      items: [
        {
          id: "4",
          name: "Casual T-Shirt Collection",
          image: "casual tshirt",
          quantity: 1,
          price: 199.43,
        },
      ],
    },
  ];

  const statusConfig = {
    processing: {
      icon: Clock,
      text: "Processing",
      color: "text-yellow-600 bg-yellow-50",
    },
    shipped: {
      icon: Truck,
      text: "Shipped",
      color: "text-blue-600 bg-blue-50",
    },
    delivered: {
      icon: CheckCircle,
      text: "Delivered",
      color: "text-green-600 bg-green-50",
    },
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/account" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <ChevronLeft className="w-6 h-6 dark:text-gray-100" />
        </Link>
        <h1 className="text-2xl font-bold dark:text-gray-100">My Orders</h1>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">No orders yet</p>
          <Link
            to="/catalog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const StatusIcon = statusConfig[order.status].icon;
            
            return (
              <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <div>
                    <h3 className="font-semibold text-lg dark:text-gray-100">{order.orderNumber}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                        statusConfig[order.status].color
                      }`}
                    >
                      <StatusIcon className="w-4 h-4" />
                      {statusConfig[order.status].text}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shrink-0">
                        <ImageWithFallback
                          src={getUnsplashImageUrl(item.image)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1 dark:text-gray-100">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                      Track Order
                    </button>
                    <Link
                      to={`/product/${order.items[0].id}`}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Buy Again
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
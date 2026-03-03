import { Link } from "react-router";
import { ChevronLeft, Trash2 } from "lucide-react";

interface AddressType {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export function Address() {
  const addresses: AddressType[] = [
    {
      id: "1",
      name: "Priscekila",
      address: "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      phone: "+99 1234567890",
    },
    {
      id: "2",
      name: "Ahmad Khaidir",
      address: "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      phone: "+99 1234567890",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/account" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <ChevronLeft className="w-6 h-6 dark:text-gray-100" />
        </Link>
        <h1 className="text-2xl font-bold dark:text-gray-100">Address</h1>
      </div>

      <div className="space-y-4 mb-6">
        {addresses.map((address, index) => (
          <div
            key={address.id}
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 border-2 ${
              index === 0 ? "border-blue-600 dark:border-blue-500" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg dark:text-gray-100">{address.name}</h3>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Trash2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-3">{address.address}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{address.phone}</p>

            <Link
              to={`/add-address?edit=${address.id}`}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/add-address"
        className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Address
      </Link>
    </div>
  );
}
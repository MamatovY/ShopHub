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
        <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Address</h1>
      </div>

      <div className="space-y-4 mb-6">
        {addresses.map((address, index) => (
          <div
            key={address.id}
            className={`bg-white rounded-lg p-6 border-2 ${
              index === 0 ? "border-blue-600" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg">{address.name}</h3>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Trash2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-3">{address.address}</p>
            <p className="text-gray-600 mb-4">{address.phone}</p>

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

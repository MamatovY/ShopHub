import { Link } from "react-router";
import { ChevronLeft, CreditCard, Trash2 } from "lucide-react";

interface PaymentCard {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  type: string;
}

export function Payment() {
  const cards: PaymentCard[] = [
    {
      id: "1",
      cardNumber: "**** **** **** 1231",
      cardHolder: "Lailyfa Febrina",
      expirationDate: "12/12",
      type: "Visa",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Payment Method</h1>
      </div>

      <div className="space-y-4 mb-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg p-6 border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-lg">{card.type}</p>
                    <p className="text-gray-600">{card.cardNumber}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Trash2 className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Card Holder</p>
                    <p className="font-medium">{card.cardHolder}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expiry Date</p>
                    <p className="font-medium">{card.expirationDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/add-card"
        className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add New Card
      </Link>
    </div>
  );
}

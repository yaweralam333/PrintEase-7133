import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function Orders() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Your Orders</h2>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">
                  Placed on {format(new Date(order.date), 'MMM dd, yyyy')}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                statusStyles[order.status]
              }`}>
                {order.status}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center border-t border-gray-200 pt-4">
              <div className="text-gray-600">
                Total: <span className="font-bold">${order.total}</span>
              </div>
              <button className="text-primary hover:text-primary/90">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const statusStyles = {
  'Processing': 'bg-yellow-100 text-yellow-800',
  'Shipped': 'bg-blue-100 text-blue-800',
  'Delivered': 'bg-green-100 text-green-800'
};

const orders = [
  {
    id: "ORD001",
    date: "2024-03-15",
    status: "Processing",
    total: 49.98,
    items: [
      {
        name: "Custom T-Shirt",
        quantity: 2,
        price: 24.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "ORD002",
    date: "2024-03-10",
    status: "Shipped",
    total: 39.98,
    items: [
      {
        name: "Business Cards",
        quantity: 2,
        price: 19.99,
        image: "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];
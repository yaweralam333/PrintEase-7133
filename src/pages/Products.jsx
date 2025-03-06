import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Select a Product to Customize</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">
                  ${product.price}
                </span>
                <Link
                  to={`/customize/${product.id}`}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                >
                  Customize
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Custom T-Shirt",
    description: "100% cotton t-shirts with your design",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Business Cards",
    description: "Premium business cards, various finishes",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Custom Mugs",
    description: "Ceramic mugs with your artwork",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
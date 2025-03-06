import { Link } from 'react-router-dom';
import { FaPrint, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaPrint className="text-primary text-2xl" />
            <span className="font-bold text-xl">PrintHub</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-primary">Products</Link>
            <Link to="/orders" className="text-gray-600 hover:text-primary">Orders</Link>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <FaShoppingCart />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
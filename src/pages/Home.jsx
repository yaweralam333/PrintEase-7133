import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Custom Printing Made Easy
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Design, order, and receive high-quality printed products delivered to your doorstep
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Start Creating
          <FaArrowRight className="ml-2" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <feature.icon className="text-3xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    icon: FaPrint,
    title: "Quality Printing",
    description: "High-resolution prints using premium materials and advanced technology"
  },
  {
    icon: FaPrint,
    title: "Custom Design",
    description: "Easy-to-use design tools to create your perfect product"
  },
  {
    icon: FaPrint,
    title: "Fast Delivery",
    description: "Quick turnaround times and reliable shipping to your location"
  }
];
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUpload, FaUndo, FaRedo, FaSave } from 'react-icons/fa';

export default function CustomizeProduct() {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [quantity, setQuantity] = useState(1);

  const handleSaveDesign = () => {
    // Implementation for saving design
    console.log('Design saved');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">Design Canvas</h2>
        <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">Preview Area</span>
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            <FaUndo />
          </button>
          <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            <FaRedo />
          </button>
          <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            <FaUpload />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">Customization Options</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Color</label>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full h-10 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={handleSaveDesign}
          className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
        >
          <FaSave />
          <span>Save Design</span>
        </button>
      </motion.div>
    </div>
  );
}
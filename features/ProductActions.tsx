// components/ProductActions.tsx
"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ProductActions({ packSizes, product }: { packSizes: string[]; product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(packSizes[0]);

  const handleAddToCart = () => {
    // Logic to update your global cart state/context/API
    console.log(`Added ${quantity} of ${selectedSize} to cart.`);
    alert(`Added ${quantity} of ${selectedSize} to cart.`);
  };

  return (
    <div className="space-y-4">
      {/* Pack Size Selector */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">Pack Size</h3>
        <div className="flex flex-wrap gap-3">
          {packSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-2 rounded border font-medium transition-colors ${
                selectedSize === size
                  ? "bg-[#E4B34A] text-white border-[#E4B34A]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <h3 className="font-semibold text-gray-900">Quantity:</h3>
        <div className="flex items-center border border-gray-300 rounded">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 text-gray-500 hover:bg-gray-100"
          >
            <FiMinus />
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
          />
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 text-gray-500 hover:bg-gray-100"
          >
            <FiPlus />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex-1 bg-[#548235] hover:bg-green-800 text-white font-bold py-3 rounded" onClick={handleAddToCart}>
          Add To Cart
        </button>
        <button className="flex-1 bg-[#FFB800] hover:bg-yellow-600 text-white font-bold py-3 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}
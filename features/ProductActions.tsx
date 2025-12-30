"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Slices/cartSlice"; // Import the action
import { toast } from "sonner";

export default function ProductActions({ packSizes, product }: { packSizes: string[]; product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(packSizes[0]);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // We dispatch the product data PLUS the local quantity state
    dispatch(addToCart({ 
      ...product, 
      selectedSize, 
      quantity 
    }));
    
    toast.success(`${product.name} added to cart!`, {
      description: `${quantity} items added to your checkout.`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      {/* ... Pack Size Selector stays the same ... */}

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

      <div className="flex gap-4 mt-4">
        <button 
          className="flex-1 bg-[#548235] hover:bg-green-800 text-white font-bold py-3 rounded cursor-pointer transition-colors" 
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <button className="flex-1 bg-[#FFB800] hover:bg-yellow-600 text-white font-bold py-3 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import Image from "next/image"; // REQUIRED for Next.js Image component
import { Heart } from 'lucide-react'; // For the Wishlist icon
import Link from "next/link";
import { Product } from '@/types/product';


const ProductCard = ({ product }: { product: any }) => {
     const slug = product.name.toLowerCase().replace(/\s+/g, "-"); 
    
    const isSoldOut = product.is_sold_out || false; 
    const currentPrice = product.discount_price; 
    const mrpPrice = product.orignal_price; 
    const discountPercent = Math.round(((mrpPrice - currentPrice) / mrpPrice) * 100);
    const savedAmount = product.orignal_price - product.discount_price; 
    const brand = product.brand || "";
    const size = product.size || "";

    return (
         <Link href={`/product/${slug}`} passHref>
        <div 
            key={product.id} 
            className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm relative 
                       transition-all duration-300 ease-in-out cursor-pointer 
                       hover:scale-[1.02] hover:shadow-lg hover:bg-gray-50" 
           
        >
            
           
            
           
            {isSoldOut ? (
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Sold Out
                </div>
            ) : discountPercent > 0 ? (
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {discountPercent}% off
                </div>
            ) : null}

            {/* Top Right Wishlist Icon */}
            <button className="absolute top-3 right-3 p-1 rounded-full bg-white transition-colors duration-200 hover:bg-red-50">
                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
            </button>

            {/* --- Product Image --- */}
            {/* Keeping the image static on hover ensures it doesn't move relative to the card border */}
            <div className="w-full h-48 flex items-center justify-center pt-5 pb-2">
                <Image
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.name}
                    className={`max-w-full max-h-full object-contain ${isSoldOut ? 'opacity-50' : ''}`}
                />
            </div>
            
            {/* --- Product Details --- */}
            <div className="mt-2">
                <h2 className="text-base font-semibold text-gray-800 truncate" title={product.name}>
                    {product.name}
                </h2>

                {/* Brand and Size */}
                <p className="text-sm text-gray-500 mt-0.5">
                    {brand} 
                    {size && <span className="ml-1"> | Size: {size}</span>}
                </p>

                {/* --- Price and Saved Amount --- */}
                <div className="mt-2">
                    {/* Current/Discounted Price (Large Green) */}
                    <span className="text-lg font-bold text-green-700">
                        ₹{currentPrice}
                    </span>
                    
                    {/* Original Price (Small Strikethrough) */}
                    <span className="text-sm text-gray-400 line-through ml-2">
                        ₹{mrpPrice}
                    </span>

                    {/* Saved Price */}
                    {savedAmount > 0 && (
                        <p className="flex items-center text-sm text-green-600 font-medium mt-1">
                            {/* Star icon used in the reference images */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 fill-green-600" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            Saved Price ₹{savedAmount}
                        </p>
                    )}
                </div>
            </div>
        </div>
        </Link>
    );

};

export default ProductCard;
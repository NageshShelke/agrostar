"use client";

import Image from "next/image";
import { ProductCategory, CategoryType } from "@/utils/ProductCategory";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/features/products/useProducts";
import { Fullscreen } from "lucide-react";

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <div className="mt-10">
      {/* Banner Section */}
      <div className="flex gap-5 items-center justify-center w-full">
        <Image src="/Banners/banner1.jpg" width={1000} height={300} alt="Banner1" className="w-full md:w-4/6 h-120 rounded-2xl object-fit" />
        <Image src="/Banners/banner2.png" width={1000} height={300} alt="Banner2" className="hidden lg:block w-full md:w-2/6 h-120 rounded-2xl object-fit" />
      </div>

      {/* Category Section */}
      <h3 className="text-center mt-10 text-2xl font-bold">Shop By Categories</h3>
      <div className="flex flex-wrap mt-10 gap-5 justify-center items-center w-full">
        {ProductCategory.map((item: CategoryType) => (
          <div key={item.name} className="h-60 border rounded-lg w-40">
            <Image src={item.image} width={200} height={200} alt={item.name} className="w-full h-[85%] rounded-t-lg object-cover" />
            <h2 className="flex justify-center items-center h-[15%] font-bold">{item.name}</h2>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h3 className="mt-10 text-2xl font-bold">Best Selling Products</h3>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : error ? (
          <p className="text-center col-span-full text-red-500">{error}</p>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>

      <div className="mt-10 w-full">
        <Image
          src="/Banners/freeshippingbannner.png"
          width={2000}
          height={100}
          alt="Banner1"
          className="w-full h-50 rounded-2xl object-fit"
        />
      </div>

       {/* Products Section */}
      <h3 className="mt-10 text-2xl font-bold">All Products</h3>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : error ? (
          <p className="text-center col-span-full text-red-500">{error}</p>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>

    </div>
  );
}

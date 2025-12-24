import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/utils/api";  // create this

interface Product {
  id: number;
  name: string;
  slug: string;
  orignal_price: number;
  discount_price: number;
  image: string;
  category: string;
  brand: string;
  ingredients: string;
  discription: string;
  is_sold_out?: boolean;
  size?: string;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
console.log("Slug:", slug);

  const products = await getProductsByCategory(slug);
  

  return (
    <div className="mt-6">
      <div className="w-full">
        <Image
          src="/Banners/freeshippingbannner.png"
          width={2000}
          height={100}
          alt="Free Shipping"
          className="w-full object-fit"
        />
      </div>
      <h1 className="text-xl font-bold capitalize mt-8">{slug} Products</h1>
      <div className="flex gap-2"></div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          products.map((product:Product) => (
            <ProductCard key={product.id} product={product} />  
          ))
        )}
      </div>

      
    </div>
  );
}

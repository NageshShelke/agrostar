import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { ProductCategory, CategoryType } from "@/utils/ProductCategory";
import { getProductsByCategory } from "@/utils/api";  // create this
import Link from "next/link"
import { FaHome } from "react-icons/fa";
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

      <div className="flex gap-4">
        <div className="grid mt-5 gap-2 border-r pr-4 w-2/6">
        <h1 className="text-white bg-green-900 text-xl font-medium cursor-pointer w-full p-2 rounded-md">Categories</h1>
          {ProductCategory.map((item: CategoryType) => {
            const pathname = item.name.toLowerCase().replace(/\s+/g, "-");
            const isActive = slug === pathname;
            console.log(isActive, "isActive");

            return (
              <Link href={`/category/${pathname}`} key={item.name}>
                <button
                  className={`
                text-left text-green-900 text-xl font-medium cursor-pointer w-full p-2 rounded-md
                ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}
              `}
                >
                  {item.name}
                </button>
              </Link>
            );
          })}
        </div>

        <div className="">
          <div className="flex items-center gap-2 mt-6 text-gray-700 text-sm">
            <FaHome className="text-lg text-gray-600" />

            <span className="text-gray-500">›</span>
            <span className="font-medium">Category</span>

            <span className="text-gray-500">›</span>
            <span className="font-semibold capitalize">{slug}</span>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

            {products.length === 0 ? (
              <p>No products found in this category.</p>
            ) : (
              products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>



    </div>
  );
}

// app/product/[slug]/page.tsx
import Image from "next/image";
import { fetchProductBySlug } from "@/utils/api";

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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1️⃣ Unwrap params (Next.js 16 App Router requirement)
  const { slug } = await params;

  // 2️⃣ Fetch the product using slug
  const product: Product | null = await fetchProductBySlug(slug);

  // 3️⃣ If product not found
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  // 4️⃣ Render product details
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold text-green-700">
            ₹{product.discount_price}{" "}
            <span className="line-through text-gray-500">
              ₹{product.orignal_price}
            </span>
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Add To Cart
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="font-bold text-xl mb-2">Description:</h2>
            <p>{product.discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// app/product/[slug]/page.tsx
import Image from "next/image";
import { fetchProductBySlug } from "@/utils/api";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

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
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

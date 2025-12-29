// app/product/[slug]/page.tsx
import Image from "next/image";
import { fetchProductBySlug } from "@/utils/api";
import { featchReleteedProducts } from "@/utils/api";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaShippingFast, FaShieldAlt, FaCheckCircle, FaBoxOpen } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/features/ProductActions";
import { Product } from "@/types/product";


const MOCK_DATA = {

  packSizes: ["25ml", "50ml", "100ml"],
  seller: {
    name: "Farme.in",
    logo: "/placeholder-seller-logo.png", // Replace with actual logo path if you have it, otherwise it's a gray box
    rating: 4,
    reviews: 36,
    description:
      'Farme is a data-driven agritech startup that provides an online marketplace for the farmers of India. A "one-stop-shop" for the farming community, our aim is to bridge the gap between farmers and quality agro-input products to increase yield, reduce costs, and manage crops more efficiently. We provide ethically sourced and 100% authentic quality agri-input products',
    address:
      "3rd Floor Shreeman Yogi Complex, Beside Khare Town Post Office, Dharampeth-440010.",
    phone: "(+91) 8441844135",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Product | null = await fetchProductBySlug(slug);

  console.log("slug:", slug);

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  const res = await featchReleteedProducts(product.category);
  const releted_products = res.filter((p: any) => p.id !== product.id);



  const savedPrice = product.orignal_price - product.discount_price;


  return (
    <>
      <div className="relative  min-h-screen">
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto pt-10 p-4 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-xl">

          {/* --- COLUMN 1: Product Image (Left) --- */}
          <div className="lg:col-span-4 flex justify-center items-start">
            <div className="p-4 rounded-lg w-full">
              <Image
                src={product.image}
                width={500}
                height={500}
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* --- COLUMN 2: Product Details (Middle) --- */}
          <div className="lg:col-span-5 flex flex-col gap-2 px-2">
            {/* Header & Wishlist */}
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <button className="text-gray-400 hover:text-red-500 transition">
                <FiHeart size={24} />
              </button>
            </div>

            {/* Price Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 mt-2">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.discount_price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.orignal_price}
                </span>
                <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-2 py-1 rounded">
                  {Math.round(((product.orignal_price - product.discount_price) / product.orignal_price) * 100)}% off
                </span>
              </div>
              <p className="text-green-700 text-sm font-medium mt-2 flex items-center gap-1">
                <FaCheckCircle size={12} /> Saved Price ₹{savedPrice}
              </p>
            </div>

            {/* Meta Information */}
            <div className="space-y-2 text-sm text-gray-700 mt-2">
              <p>
                <span className="font-semibold text-gray-900">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Brand:</span>{" "}
                {product.brand}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Ingredients:</span>{" "}
                {product.ingredients}
              </p>
            </div>

            {/* Pack Size Selector */}
           

            {/* QuantitySelector (Static UI for server component) */}
            <ProductActions packSizes={MOCK_DATA.packSizes} product={product} />

            {/* Action Buttons */}
            {/* <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-[#548235] hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition-colors uppercase text-sm tracking-wider">
                Add To Cart
              </button>
              <button className="flex-1 bg-[#FFB800] hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition-colors uppercase text-sm tracking-wider">
                Buy Now
              </button>
            </div> */}

            {/* --- TRUST BADGES SECTION --- */}
            {/* REPLACE THE REACT ICONS BELOW WITH YOUR ACTUAL PNG IMAGES using Next/Image */}
            <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200 text-center">
              <div className="flex flex-col items-center gap-2">
                {/* REPLACE WITH YOUR "Home Delivery" PNG */}
                <FaShippingFast size={32} className="text-[#548235]" />
                <span className="text-xs font-semibold text-gray-700 leading-tight">Home<br />Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* REPLACE WITH YOUR "Trusted Brand" PNG */}
                <FaShieldAlt size={32} className="text-[#548235]" />
                <span className="text-xs font-semibold text-gray-700 leading-tight">Trusted<br />Brand</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* REPLACE WITH YOUR "Cash on Delivery" PNG */}
                <FaBoxOpen size={32} className="text-[#548235]" />
                <span className="text-xs font-semibold text-gray-700 leading-tight">Cash on<br />Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* REPLACE WITH YOUR "Original Product" PNG */}
                <FaCheckCircle size={32} className="text-[#548235]" />
                <span className="text-xs font-semibold text-gray-700 leading-tight">Orignal<br />Product</span>
              </div>
            </div>
          </div>

          {/* --- COLUMN 3: Seller Sidebar (Right) --- */}
          <div className="lg:col-span-3 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
            {/* Seller Header */}
            <div className="flex flex-col gap-2 mb-4">
              {/* Placeholder for Seller Logo if you have one */}
              {/* <Image src={MOCK_DATA.seller.logo} width={100} height={50} alt="Seller Logo" /> */}
              <h2 className="text-xl font-bold text-[#548235]">{MOCK_DATA.seller.name}</h2>

              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < MOCK_DATA.seller.rating ? "text-yellow-400" : "text-gray-300"}
                    size={14}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({MOCK_DATA.seller.reviews} Reviews)</span>
              </div>
            </div>

            {/* Seller Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-200">
              {MOCK_DATA.seller.description}
            </p>

            {/* Address */}
            <div className="flex gap-3 mb-4">
              <FaMapMarkerAlt className="text-gray-400 shrink-0 mt-1" size={16} />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">Address:</h4>
                <p className="text-sm text-gray-600">{MOCK_DATA.seller.address}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-3">
              <FaPhoneAlt className="text-gray-400 shrink-0 mt-1" size={14} />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">Contact Seller:</h4>
                <p className="text-sm text-gray-600">{MOCK_DATA.seller.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Call Button (Bottom Right corner as seen in screenshot) */}
        <div className="fixed bottom-6 right-6 bg-[#7FA659] text-white p-2 rounded-full shadow-lg flex flex-col items-center cursor-pointer hover:bg-[#548235] transition z-50">
          <IoMdCall size={20} />
          <span className="text-[8px] uppercase font-bold">Call Us</span>
        </div>

      </div>
      <div className="bg-white p-6 rounded-b-xl border-t border-gray-200 mt-10">
        <h2 className="text-md font-bold text-gray-900 ">Description:</h2>
        <div className="text-gray-600  text-sm whitespace-pre-line text-justify mt-4">
          {product.discription}
        </div>
      </div>

      <h3 className="mt-10 text-2xl font-bold">Related Products</h3>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        { 
        releted_products.length === 0 ? 
        <div className="text-center mt-10">No related products found</div> 
        : releted_products.map((product) => <ProductCard key={product.id} product={product} />)  }
      </div>
    </>
  );
}
import Image from "next/image";
import { ProductCategory, CategoryType } from "@/utils/ProductCategory";

export default function Home() {
  return (
    <div className="mx-10 mt-10">
      
      {/* Banner Section */}
      <div className="flex gap-5 items-center justify-center">
        <Image
          src="/Banners/banner1.jpg"
          width={200}
          height={200}
          alt="Banner1"
          className="w-170 h-100 rounded-2xl"
        />
        <Image
          src="/Banners/banner2.png"
          width={200}
          height={200}
          alt="Banner2"
          className="hidden lg:block w-80 h-100 rounded-2xl"
        />
      </div>

      
      <div className="flex flex-wrap mt-10 mx-10 gap-5 justify-center items-center">
        <h1 className="flex items-center justify-center w-full font-extrabold text-2xl my-5">Shop By Categories</h1>
        {ProductCategory.map((item: CategoryType) => (
          <div key={item.name} className="h-60 border rounded-lg w-40">
            <Image
              src={item.image}
              width={200}
              height={200}
              alt={item.name}
              className="w-full h-[85%] rounded-t-lg object-cover"
            />
            <h2 className="flex justify-center items-center h-[15%] font-bold">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-20 mx-10">
         <Image
          src="/Banners/freeshippingbannner.png"
          width={200}
          height={200}
          alt="Banner1"
          className="w-full h-40"
        />

      </div>
      <div className="h-10"></div>
    </div>
  );
}

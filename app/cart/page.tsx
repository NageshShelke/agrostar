import OrderSummary from "@/components/OrderSummery";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import logo from '@/public/header_logo.png';

export default function CartPage() {
  return (
      <div className="min-h-screen  text-[#111827] antialiased">
        <div className="w-full">
                <Image
                    src="/Banners/freeshippingbannner.png"
                    width={2000}
                    height={100}
                    alt="Free Shipping"
                    className="w-full object-fit"
                />
            </div>
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 mt-8">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            
            <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
              <span className="text-black">Cart</span>
              <ChevronRight className="w-4 h-4" />
              <span>Checkout</span> 
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6">
          <OrderSummary />
        </main>
      </div>
  );
}
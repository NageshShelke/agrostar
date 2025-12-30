"use client";

import React from "react";
import {
    X, Info, Lock, ChevronDown, Plus,
    Smartphone, Globe, CreditCard as CardIcon
} from "lucide-react";
import { FaAmazonPay, FaGooglePay, FaPaypal  } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/Slices/cartSlice";
import { Product } from "@/types/product";

export default function OrderSummary() {

    const cartItems = useSelector((store: any) => store.cart.items);

    const dispatch = useDispatch();
    const subtotal = cartItems.reduce(
        (acc: number, item: any) => acc + item.discount_price * (item.quantity || 1),
        0
    );

    const tax = 10.00;
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] selection:bg-blue-100">
            {/* Main Container - Responsive Padding */}
            <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    <div className="space-y-4 order-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold tracking-tight">Order Summary</h1>
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-[12px] font-bold text-gray-500 uppercase tracking-tight">{cartItems.length} items</span>
                        </div>

                        {/* Cart Items List */}
                        {cartItems.map((item: Product) => (
                            <div className="space-y-4" key={item.id}>
                                {/* Product Item 1 */}
                                <div className="relative border border-gray-100 rounded-xl p-4 bg-white flex gap-4 shadow-sm group">
                                    <button className="absolute top-3 right-3 text-gray-300 hover:text-black transition-colors"  onClick={() => dispatch(removeFromCart(item.id))}>
                                        <X className="w-5 h-5" />
                                    </button>
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-lg shrink-0 relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-base md:text-lg leading-snug">{item.name}</h3>
                                        <p className="text-gray-400 text-xs mt-0.5">{item.category}</p>

                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center gap-1.5 text-xs font-bold">
                                                Qty <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded flex items-center gap-1 cursor-pointer">{item.quantity}<ChevronDown className="w-3 h-3 text-gray-400" /></span>
                                            </div>
                                            <span className="font-bold text-base flex   items-center md:text-lg"><MdCurrencyRupee />  {((item.discount_price) * (item.quantity ?? 1)).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}

                        {/* Discount Code Section */}
                        <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm border-dashed border-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600">
                                    <Info className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Discount code</p>
                                    <p className="text-[11px] text-blue-600 font-semibold">Save 20% with code</p>
                                </div>
                            </div>
                            <Button variant="outline" className="text-xs font-bold border-gray-200 h-9 rounded-lg hover:bg-gray-50">
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add code
                            </Button>
                        </div>

                        {/* Price Totals */}
                        <div className="space-y-3 pt-2">
                            <div className="flex justify-between text-gray-500 font-medium text-sm">
                                <span>Subtotal</span>
                                <span className="text-black font-bold flex items-center"><MdCurrencyRupee />{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium text-sm">
                                <span>Shipping</span>
                                <span className="text-black font-bold">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium text-sm">
                                <div className="flex items-center gap-1">Tax <Info className="w-3 h-3 cursor-help" /></div>

                                <span className="text-black font-bold flex items-center"><MdCurrencyRupee />{tax.toFixed(2)}</span>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">Total</span>
                                <span className="text-2xl font-bold tracking-tight flex items-center"><MdCurrencyRupee />{total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Recommendation Card */}
                        <div className="pt-10">
                            <h4 className="font-bold text-sm mb-4">Recommended for you</h4>
                            <div className="border border-gray-100 rounded-2xl p-4 bg-white flex gap-4 shadow-sm relative overflow-hidden">
                                <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 relative">
                                    <img src="https://m.media-amazon.com/images/I/61N7V8Gk9TL.jpg" alt="VR2" className="w-full h-full object-contain p-2" />
                                    <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h5 className="font-bold text-sm truncate">Sony PlayStation VR2</h5>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-[11px] text-gray-400 line-through">$599.99</p>
                                            <p className="text-sm font-bold text-red-500">$320.99</p>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                        Dive into a world of unrivaled gaming experiences with PlayStation VR2.
                                    </p>
                                    <button className="text-blue-600 text-[11px] font-bold mt-2 flex items-center gap-1 hover:underline">
                                        <Plus className="w-3 h-3" /> Add to your order
                                    </button>
                                </div>
                                <button className="absolute right-0 top-0 bottom-0 px-2 bg-gray-50 flex items-center text-gray-300">
                                    <ChevronDown className="w-4 h-4 -rotate-90" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Payment Details */}
                    <div className="space-y-6 order-2 lg:sticky lg:top-12">
                        {/* Tab Toggle */}
                        <div className="grid grid-cols-2 bg-white rounded-xl border p-1.5 border-gray-100 shadow-sm">
                            <Button variant="ghost" className="bg-white shadow-sm font-bold text-sm h-10 rounded-lg">Pay Online</Button>
                            <Button variant="ghost" className="text-gray-400 font-bold text-sm h-10 hover:bg-transparent">Cash On Delivery</Button>
                        </div>

                        {/* Payment Method Icons */}
                        <div className="grid grid-cols-4 gap-3">
                            <div className="border-2 border-blue-600 rounded-xl p-3 flex flex-col items-center gap-2 bg-white">
                                <CardIcon className="w-5 h-5 text-blue-600" />
                                <span className="text-[10px] font-bold text-blue-600">Card</span>
                            </div>
                            <div className="border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-2 bg-white opacity-40 grayscale">
                                <FaAmazonPay className="w-5 h-5" />
                                <span className="text-[10px] font-bold">Amazon Pay</span>
                            </div>
                            <div className="border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-2 bg-white opacity-40 grayscale">
                                <FaGooglePay className="w-5 h-5"/>
                                <span className="text-[10px] font-bold">Google Pay</span>
                            </div>
                            <div className="border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-2 bg-white opacity-40 grayscale">
                                <FaPaypal className="w-5 h-5" />
                                <span className="text-[10px] font-bold">PayPal</span>
                            </div>
                        </div>

                        {/* Secure Link Row */}
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                            <Lock className="w-3.5 h-3.5" />
                            Secure payment link <ChevronDown className="w-3 h-3 ml-0.5" />
                            <span className="ml-auto text-blue-600 capitalize cursor-pointer font-bold">Learn more</span>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-bold text-gray-600">Email address</Label>
                                <Input defaultValue="jenny@examle.com" className="h-11 border-gray-200 rounded-xl focus-visible:ring-blue-500" />
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-bold text-gray-600">Card number</Label>
                                <div className="relative">
                                    <Input defaultValue="1234 1234 1234 1234" className="h-11 border-gray-200 rounded-xl" />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                                        <div className="w-7 h-4 bg-[#1A1F71] rounded-sm"></div> {/* Visa Color */}
                                        <div className="w-7 h-4 bg-[#EB001B] rounded-sm"></div> {/* MC Color */}
                                        <div className="w-7 h-4 bg-[#0070BA] rounded-sm"></div> {/* PP Color */}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label className="text-[13px] font-bold text-gray-600">Expiration date</Label>
                                    <Input defaultValue="10 / 2024" className="h-11 border-gray-200 rounded-xl" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[13px] font-bold text-gray-600">Security code</Label>
                                    <div className="relative">
                                        <Input defaultValue="135" className="h-11 border-gray-200 rounded-xl" />
                                        <CardIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-bold text-gray-600">Cardholder name</Label>
                                <Input defaultValue="Jenny Rosen" className="h-11 border-gray-200 rounded-xl" />
                            </div>

                            {/* Address Group (Nested Inputs Style) */}
                            <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                                <div className="p-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">🇺🇸</span>
                                        <span className="text-sm font-semibold">United States</span>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                    <span className="text-sm font-medium">27 Fredrick Ave Brothers</span>
                                    <span className="text-[10px] font-bold text-gray-400 cursor-pointer uppercase tracking-widest">Clear</span>
                                </div>
                                <div className="p-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                                    <span className="text-sm font-medium">California</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-100">
                                    <div className="p-3 text-sm font-medium">Los Angeles</div>
                                    <div className="p-3 text-sm font-medium">94025</div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-bold text-gray-600">Tax ID number (optional)</Label>
                                <Input defaultValue="15978046" className="h-11 border-gray-200 rounded-xl" />
                            </div>
                        </div>

                        {/* Checkout Totals Summary */}
                        <div className="space-y-2 pt-4">
                            <div className="flex justify-between text-[13px] text-gray-400 font-bold">
                                <span>Subtotal</span>
                                <span className="text-black font-bold">$609.98</span>
                            </div>
                            <div className="flex justify-between text-base font-black">
                                <span>Total</span>
                                <span>$609.98</span>
                            </div>
                        </div>

                        {/* Pay Button */}
                        <Button className="w-full h-14 bg-[#2D60FF] hover:bg-[#1E4DDB] text-white font-bold text-base rounded-xl shadow-xl shadow-blue-200 transition-all flex justify-center items-center gap-2 relative">
                            Pay $609.98
                            <Lock className="w-4 h-4 opacity-40 absolute right-6" />
                        </Button>

                        {/* Footer Links */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
                            <span className="cursor-pointer hover:text-gray-600">Powered by Supplier</span>
                            <span>•</span>
                            <span className="cursor-pointer hover:text-gray-600">Terms</span>
                            <span>•</span>
                            <span className="cursor-pointer hover:text-gray-600">Privacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
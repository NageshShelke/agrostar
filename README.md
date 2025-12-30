This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



make my componant exactly like the screenshot it has to perfectly match
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/Slices/cartSlice";
import {
    Lock, ChevronRight, CreditCard, Apple,
    Trash2, Plus, Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";


export default function OrderSummary() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);
    const [promo, setPromo] = useState("");

    const subtotal = cartItems.reduce(
        (acc: number, item: any) => acc + item.discount_price * (item.quantity || 1),
        0
    );



    return cartItems.length === 0 ? <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="rounded-full">
            <Lock className="w-10 h-10 text-neutral-400"/>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Your cart is empty</h2>
        <Button variant="outline" className="rounded-full" onClick={() => window.location.href = "/"}>
            Back to Shop
        </Button>
    </div> : (
        <div className="max-w-1200px mx-auto px-4 py-12">            
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
                {/* LEFT COLUMN: Items & Payment Details */}
                <div className="lg:col-span-7 space-y-12">
                    <section>
                        <h1 className="text-2xl font-bold tracking-tight mb-8">Order Summary <span className="text-[12px] font-normal ml-2 bg-neutral-100 rounded-md p-1 px-2">{cartItems.length} items</span></h1>
                        <div className="space-y-6">
                            {cartItems.map((item: any) => (
                                <div key={item.id} className="group relative flex items-center gap-6 pb-6 border-b border-neutral-100 last:border-0">
                                    <div className="relative w-24 h-24 bg-neutral-50 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-100">
                                        <Image
                                            src={item.image}
                                            fill
                                            alt={item.name}
                                            className="object-cover p-2"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between h-24">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg text-neutral-900 leading-tight">{item.name}</h3>
                                                <p className="text-sm text-neutral-500 mt-1 tracking-wider font-semibold">Category: {item.category}</p>
                                            </div>
                                            <p className="font-bold text-lg">${(item.discount_price * item.quantity).toFixed(2)}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto mt-2">
                                            <div className="flex items-center bg-neutral-50 rounded-full px-3 py-1 border border-neutral-100">
                                                <button className="p-1 hover:text-black text-neutral-400 transition-colors"><Minus className="w-3 h-3" /></button>
                                                <span className="px-4 text-sm font-bold">{item.quantity}</span>
                                                <button className="p-1 hover:text-black text-neutral-400 transition-colors"><Plus className="w-3 h-3" /></button>
                                            </div>
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-neutral-300 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Shipping Form Placeholder */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Shipping details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase text-neutral-400 tracking-widest">Email Address</Label>
                                <Input className="h-14 rounded-2xl bg-neutral-50 border-none focus-visible:ring-1 focus-visible:ring-neutral-200" placeholder="you@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase text-neutral-400 tracking-widest">Phone Number</Label>
                                <Input className="h-14 rounded-2xl bg-neutral-50 border-none focus-visible:ring-1 focus-visible:ring-neutral-200" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN: Payment Sticky Card */}
                <div className="lg:col-span-5">
                    <div className="sticky top-8">
                        <Card className="border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] bg-white rounded-[2.5rem] p-4">
                            <CardContent className="p-6 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight mb-6">Payment</h2>
                                    <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                            <Label htmlFor="card" className="flex flex-col items-center justify-center h-24 rounded-3xl border-2 border-neutral-50 bg-neutral-50 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-white cursor-pointer transition-all duration-300">
                                                <CreditCard className="w-6 h-6 mb-2" />
                                                <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
                                            </Label>
                                        </div>
                                        <div className="relative">
                                            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                                            <Label htmlFor="apple" className="flex flex-col items-center justify-center h-24 rounded-3xl border-2 border-neutral-50 bg-neutral-50 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-white cursor-pointer transition-all duration-300">
                                                <Apple className="w-6 h-6 mb-2" />
                                                <span className="text-xs font-bold uppercase tracking-widest">Apple Pay</span>
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Discount code"
                                            className="bg-neutral-50 border-none h-14 rounded-2xl px-6"
                                            value={promo}
                                            onChange={(e) => setPromo(e.target.value)}
                                        />
                                        <Button variant="secondary" className="h-14 px-8 rounded-2xl bg-neutral-100 hover:bg-neutral-200 font-bold">Apply</Button>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex justify-between text-neutral-500 font-medium">
                                        <span>Subtotal</span>
                                        <span className="text-black font-bold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-500 font-medium">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Calculated at next step</span>
                                    </div>
                                    <Separator className="bg-neutral-100" />
                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-lg font-bold">Total amount</span>
                                        <span className="text-3xl font-black tracking-tighter">${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button className="w-full h-16 rounded-[2rem] bg-black text-white text-lg font-bold hover:bg-neutral-800 transition-all shadow-xl shadow-black/10 group">
                                    Confirm and Pay
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <p className="text-center text-[10px] text-neutral-400 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                    <Lock className="w-3 h-3" /> 256-bit Secure Encryption
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

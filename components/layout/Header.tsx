"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, LogIn } from "lucide-react";
import logo from '@/public/header_logo.png';
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white">
      {/* Reduced py-3 to py-1 to minimize height */}
      <div className="max-w-7xl mx-auto px-16 flex items-center justify-between h-20">

        {/* Logo - Kept size consistent by wrapping in a fixed-width container */}
        <div className="flex items-center ">
          <div className="w-32 lg:w-40"> {/* Adjust this width to match your exact logo preference */}
            <Image
              src={logo}
              width={120} // Lowered source width for optimization, actual size controlled by parent
              height={50}
              alt="Agrostar"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="hidden lg:flex w-full max-w-lg items-center border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden mx-4">
            <input
              type="text"
              placeholder="Search for product..."
              className="flex-1 px-4 py-1.5 text-sm text-gray-700 outline-none border-none"
              aria-label="Search"
            />
            <button
              className="px-3 py-1.5 text-gray-500 hover:text-green-700 border-l border-gray-200"
              aria-label="Search button"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>


        {/* Language + Login - Standardized heights */}
        <div className="hidden lg:flex items-center gap-3 ">
          <div className="relative p-2">
            <IoCartOutline className="text-2xl" />
            <p className="absolute top-0 right-0 text-[10px] text-white bg-green-800 rounded-full px-1">1</p>
          </div>

          <select id="language-select" className="hover:cursor-pointer border rounded px-2 py-1 text-xs bg-transparent">
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>

          <button className="hover:cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-1 rounded-md shadow-sm flex items-center gap-2 h-8">
            <LogIn className="w-4 h-4" />
            <span className="text-sm">Login</span>
          </button>

        </div>

        <div className="lg:hidden flex gap-2">
          <div className="relative p-2">
            <IoCartOutline className="text-2xl" />
            <p className="absolute top-0 right-0 text-[10px] text-white bg-green-800 rounded-full px-1">1</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-1 rounded"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-3 border-t border-gray-100 mt-1 pt-3">
          <div className="w-full flex items-center border rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-sm text-gray-700"
            />
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex gap-2">
            <select className="border rounded px-2 py-2 w-1/2 text-sm">
              <option>Language</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="bg-orange-500 text-white w-1/2 rounded-md flex items-center justify-center gap-2 py-2">
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
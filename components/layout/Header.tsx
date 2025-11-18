"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <Image
              src="/logo1.png"
              alt="Agrostar"
              width={95}
              height={95}
              className="w-11 h-11 object-contain"
            />

        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="w-full max-w-xl flex items-center border rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search for product, delivered to your door..."
              className="w-full outline-none text-gray-700"
              aria-label="Search products"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Language + Login */}
        <div className="hidden md:flex items-center gap-4">
          <label className="sr-only" htmlFor="language-select">
            Select language
          </label>
          <select id="language-select" className="border rounded px-2 py-1 text-sm">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg flex items-center gap-1">
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {/* Mobile Search */}
          <div className="w-full flex items-center border rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search for product..."
              className="w-full outline-none text-gray-700"
              aria-label="Mobile search"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>

          {/* Language */}
          <label className="sr-only" htmlFor="mobile-language">
            Select language
          </label>
          <select id="mobile-language" className="border rounded px-2 py-2 w-full text-sm">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>

          {/* Login */}
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

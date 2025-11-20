"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, LogIn } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="w-11 h-11 flex items-center justify-center bg-green-50 rounded">
            <span className="text-green-800 font-semibold">A</span>
          </div>
          <div className="flex flex-col leading-4">
            <span className="text-lg font-semibold text-green-700">Agrostar</span>
            <span className="text-xs text-green-700">Putting Farmers First</span>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex w-full max-w-lg  items-center border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden">
          <input
            type="text"
            placeholder="Search for product, delivered to your door..."
            className="flex-1 px-4 py-2 text-base text-gray-700 outline-none border-none"
            aria-label="Search"
          />
          {/* Search Icon (inside the input container) */}
          <button
            className="p-3 text-gray-500 hover:text-green-700"
            aria-label="Search button"
          >
            <Search className="w-5 h-5 hover:cursor-pointer" />
          </button>
        </div>

        {/* Language + Login */}
        <div className="hidden lg:flex items-center gap-4 ">
          <label className="sr-only" htmlFor="language-select">
            Select language
          </label>
          <select id="language-select" className="hover:cursor-pointer border rounded px-2 py-1 text-sm">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>

          <button className="hover:cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-md shadow-md flex items-center gap-2 h-8 w-25">
            <LogIn className="w-4 h-4" /> {/* Using LogIn icon for visual match */}
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-3 rounded-md shadow-md flex items-center gap-2">
            <LogIn className="w-5 h-5" /> {/* Using LogIn icon for visual match */}
            <span>Login</span>
          </button>
        </div>
      )}
    </header>
  );
}

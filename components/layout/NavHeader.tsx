import Link from "next/link";
import React from "react";
import { CategoryType, ProductCategory } from "@/utils/ProductCategory";

const navitem = [
  { name: "All Category", href: "/", dropdown: ["Cat 1", "Cat 2", "Cat 3"] },
  { name: "Home", href: "/" },
  { name: "Shop by Brand", href: "/brand" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavHeader = () => {
  return (
    <div>
      <div className="hidden lg:flex items-center justify-start px-22 h-20 w-full">
        <ul className="flex gap-12 relative">
          {navitem.map((item) =>
            item.dropdown ? (
              /* Dropdown Wrapper */
              <li key={item.name} className="group relative cursor-pointer">
                <span className="hover:text-blue-600">{item.name}</span>

              
                <div
                  className=" absolute left-0 top-full  hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 z-50"
                >
                  {ProductCategory.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-600">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;

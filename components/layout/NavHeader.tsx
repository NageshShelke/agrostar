import Link from "next/link";
import React from "react";

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
      <div className="flex items-center justify-start py-5 px-5 h-20 w-full">
        <ul className="flex gap-12 relative">
          {navitem.map((item) =>
            item.dropdown ? (
              /* Dropdown Wrapper */
              <li key={item.name} className="group relative cursor-pointer">
                <span className="hover:text-blue-600">{item.name}</span>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 z-50">
                  {item.dropdown.map((opt) => (
                    <Link
                      key={opt}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {opt}
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

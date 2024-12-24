"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 font-serif">
        <div className="text-3xl font-extrabold font-serif">
          <span className="text-[#f6bf38] hover:text-black">DATA FE</span>
          <span className="hover:text-[#f6bf38]">TCHING</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          {!isOpen ? (
            <FiMenu
              className="text-3xl text-black cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FiX
              className="text-3xl text-black cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link
              href={"/"}
              className="underline font-serif text-lg font-semibold hover:text-[#f6bf38]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/client"}
              className="rounded-3xl font-serif font-bold py-3 px-6 bg-[#f6bf38] hover:bg-black hover:text-[#f6bf38]"
            >
              CLIENT FETCH
            </Link>
          </li>
          <li>
            <Link
              href={"/server"}
              className="rounded-3xl font-serif font-bold py-3 px-6 bg-black text-[#f6bf38] hover:bg-[#f6bf38] hover:text-black"
            >
              SERVER FETCH
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden absolute top-16 left-0 w-full bg-white`}
        >
          <li>
            <Link
              href={"/"}
              className="block text-lg font-semibold text-center py-3 underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/client"}
              className="block text-lg font-semibold text-center py-3 bg-[#f6bf38] hover:bg-black hover:text-[#f6bf38]"
            >
              CLIENT FETCH
            </Link>
          </li>
          <li>
            <Link
              href={"/server"}
              className="block text-lg font-semibold text-center py-3 bg-black text-[#f6bf38] hover:bg-[#f6bf38] hover:text-black"
            >
              SERVER FETCH
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full border border-[#f6bf38] hover:border-black"></div>
    </div>
  );
};

export default Navbar;

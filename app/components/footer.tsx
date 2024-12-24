import React from "react";
import Link from "next/link";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="w-full border border-[#f6bf38] hover:border-black"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 font-serif">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold hover:text-[#f6bf38]">About</h3>
            <p className="text-gray-600">
              This Data Fetching project demonstrates how to fetch data from
              both client-side and server-side in Next.js. The project includes
              features like a responsive navbar, dynamic content display, and a
              professional layout.
            </p>
          </div>

          <div className="space-y-4 lg:ml-24">
            <h3 className="text-2xl font-bold hover:text-[#f6bf38]">Links</h3>
            <ul className="text-gray-600 hover:text-[#f6bf38]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="my-2">
                <Link href="/client">Client Fetch</Link>
              </li>
              <li>
                <Link href="/server">Server Fetch</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:ml-4">
            <h3 className="text-2xl font-bold hover:text-[#f6bf38]">
              Follow Me!
            </h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.linkedin.com/in/amna-shafiq-0a76b0312/"
                  target="_blank"
                  className="text-2xl hover:text-[#f6bf38] text-gray-600"
                >
                  <FiLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/amnashafiq1659"
                  target="_blank"
                  className="text-2xl hover:text-[#f6bf38] text-gray-600"
                >
                  <FiGithub />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold hover:text-[#f6bf38]">Contact</h3>
            <p className="text-gray-600">Email: amnashafiq1659@gmail.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#f6bf38] pt-6 text-center hover:text-[#f6bf38]">
          <p>
            &copy; {new Date().getFullYear()} Data Fetching. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
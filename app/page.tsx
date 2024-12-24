import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-2xl p-6">
      <h1 className="text-5xl font-bold mb-4 font-serif text-[#f6bf38] hover:text-black">
          Assignment#7
        </h1>
        <h2 className="text-5xl font-bold mb-4 font-serif hover:text-[#f6bf38]">
          DATA FETCHING
        </h2>
        <p className="text-2xl mb-6 hover:text-[#f6bf38] text-gray-600">
          Explore how data is fetched using both client-side and server-side
          approaches in Next.js. Navigate to the respective pages to view the
          implementations.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href={"/client"}
            className="rounded-3xl font-serif font-bold py-3 px-6 bg-black text-[#f6bf38] hover:bg-[#f6bf38] hover:text-black"
          >
            CLIENT FETCH
          </Link>
          <Link
            href={"/server"}
            className="rounded-3xl font-serif font-bold py-3 px-6 bg-[#f6bf38] hover:bg-black hover:text-[#f6bf38]"
          >
            SERVER FETCH
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

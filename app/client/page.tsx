"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clientFetch = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Products[] = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Fetching failed!", error);
      } finally {
        setLoading(false);
      }
    };
    clientFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gray-100 pb-7">
      <div className="min-h-screen w-full container flex flex-col items-center justify-center mx-auto p-4 font-serif">
        <h1 className="text-xl md:text-3xl font-bold py-4 md:font-extrabold hover:text-[#f6bf38]">
          CLIENT-SIDE DATA FETCHING
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-6">
          {data.map((product: Products) => (
            <div
              key={product.id}
              className="border-2 border-[#f6bf38] shadow-xl hover:shadow-3xl rounded-lg p-4 hover:border-black max-w-md overflow-hidden bg-white"
            >
              <div className="h-[180px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mx-auto size-[180px]"
                />
              </div>
              <p className="text-gray-600 mt-6">{product.category}</p>
              <h2 className="text-lg font-semibold hover:text-[#f6bf38]">
                {product.title.slice(0, 20)}
              </h2>
              <p className="text-gray-600">
                ${product.description.slice(0, 50)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold hover:text-[#f6bf38]">
                  ${product.price}
                </span>
                <div className="flex items-center text-yellow-500">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </div>
              </div>
              <button className="w-full bg-[#f6bf38] hover:bg-black hover:text-[#f6bf38] font-bold py-2 mt-2 rounded-lg">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

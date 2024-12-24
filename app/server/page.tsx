import React from "react";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const books: Book[] = await response.json();
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen w-full container flex flex-col items-center justify-center mx-auto p-4 font-serif">
        <h1 className="text-xl md:text-3xl font-bold py-4 mb-6 md:font-extrabold hover:text-[#f6bf38]">
          SERVER-SIDE DATA FETCHING
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6 ">
          {books.map((book: Book) => (
            <div
              key={book.id}
              className="border-2 border-[#f6bf38] shadow-xl hover:shadow-3xl rounded-lg p-4 hover:border-black max-w-md overflow-hidden bg-white"
            >
              <h2 className="text-xl text-center font-semibold text-[#f6bf38]">
                {book.name}
              </h2>
              <p className="text-gray-600 text-center my-2">
                <strong>Type:</strong> {book.type}
              </p>
              <p
                className={`font-semibold text-center ${
                  book.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {book.available ? "Available" : "Unavailable"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

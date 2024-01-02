// components/Book.tsx
import React from "react";
import Image from "next/image";

interface BookProps {
  book: {
    title: string;
    author: string;
    genre: string;
    published: string;
    downloadLink: string;
    imageLink: string;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="border rounded p-4 shadow-xl">
      <Image src={book.imageLink} alt={book.title} width={472} height={735} />
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-gray-700">{book.author}</p>
      <p className="text-gray-600">Genre: {book.genre[0]}, {book.genre[1]}, {book.genre[2]}</p>
      <p className="text-gray-500">{book.published}</p>
      <a href={book.downloadLink} className="text-blue-500 hover:text-blue-700">
        Download
      </a>
    </div>
  );
};

export default Book;

"use client";
import React, { useState, useEffect } from "react";
import Styles from "../page.module.css";
import Link from "next/link";
import booksData from "../books.json";
import Book from "../../components/Book";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookListPagination from '../../components/BookListPagination';
import { useDisclosure } from '@mantine/hooks';



const books: Book[] = booksData as Book[];
const scienceBooks = books.filter((book) => book.genre.includes("Science"));

export default function IndexPage() {
  const [opened, { toggle }] = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Set your desired items per page
  const totalBooks = booksData.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

//function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(scienceBooks);

  useEffect(() => {
    console.log("searchTerm:", searchTerm);
    const filtered = scienceBooks.filter((book) => {
      const isInSearch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return isInSearch;
    });

    console.log("filteredBooks:", filtered);
    setFilteredBooks(filtered);
  }, [searchTerm]);

  return (
    <main className=" flex bg-gray-20 min-h-screen min-w-0 px-10 py-10 md:px-20 lg:px-40">
      <section className= "flex flex-col w-full">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1>Science</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <BookListPagination
        totalItems={totalBooks}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <Footer />
      </section>
    </main>
  );
}

//export default page;

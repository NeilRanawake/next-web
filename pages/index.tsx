"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./page.module.css";
import Link from "next/link";

import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import booksData from './books.json';
import BookListPagination from '../components/BookListPagination';

import Book from "../components/Book";
import Header from "../components/Header";
import Footer from "../components/Footer";



interface Book {
  title: string;
  author: string;
  genre: string;
  published: string; // assuming published is a string, change if it's a different type
  downloadLink: string;
  imageLink: string;
}

export default function IndexPage() {
  const [opened, { toggle }] = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Set your desired items per page
  const totalBooks = booksData.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  const displayedBooks = booksData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const books: Book[] = booksData as Book[];

//export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm]);


  return (
    <main className=" flex bg-gray-20 min-h-screen min-w-0 px-10 py-10 md:px-20 lg:px-40">
      <section>
      
      {/* Use the Header component here */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Grid Container for Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <div>
      <BookListPagination
        totalItems={totalBooks}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      </div>
        {/* footer*/}
         <Footer/>  
      </section>
    </main>
  );
}
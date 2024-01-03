// components/Header.tsx
import React from "react";
import Link from "next/link";
import Styles from "/pages/page.module.css";

import { useDisclosure } from "@mantine/hooks";
import { ImSearch } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [opened, { toggle }] = useDisclosure();
  
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <p className="text-xs">Generated by SRF</p>
      <nav className="flex justify-between items-center">
        <h1 className="text-md md:text-xl">Sooriya Publishers</h1>
        <ul className="flex items-center gap-1 lg:gap-3">

          {/* Search Bar */}
          <li className="relative">
          <Input
            type="search"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            rightSectionPointerEvents="all"

            leftSection={<ImSearch style={{ cursor: "pointer" }} />}
            
          rightSection={
            <CloseButton
            aria-label="Clear input"
            onClick={() => setSearchTerm('')}
            style={{ display: searchTerm ? undefined : 'none' }}
          />
          }

          />
          </li>
          
          <li>
            <Link href="/" className={Styles.link}>
             Home
            </Link>
          </li>
          {/* Add other navigation links as needed */}
          <li>
              <Link href="/Religion/page" className={Styles.link}>
                Religion
              </Link>
            </li>
            <li>
              <Link href="/History/page" className={Styles.link}>
                History
              </Link>
            </li>
            <li>
              <Link href="/Politics/page" className={Styles.link}>
                Politics
              </Link>
            </li>
            <li>
              <Link href="/Science/page" className={Styles.link}>
                Science
              </Link>
            </li>
            <li>
              <Link href="/Economy/page" className={Styles.link}>
                Economy
              </Link>
            </li>
            <li>
              <Link href="/Other/page" className={Styles.link}>
                Other
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

"use client";
import { menu } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActivePath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex items-center justify-end mx-auto p-5">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-12 right-0 w-full md:w-auto md:static md:flex`}
          id="navbar-default"
        >
          <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((list, index) => {
              return (
                <li>
                  <Link
                    href={list.href}
                    className={`block py-2 pl-3 pr-4 rounded hover:font-bold hover:underline duration-200  ${
                      isActivePath == list.href
                        ? "text-blue-500 font-bold"
                        : "text-white"
                    } md:p-0`}
                  >
                    {list.menuName}
                  </Link>
                </li>
              );
            })}
            <a
              href={"/Steven's Resume.pdf"}
              className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-xs"
              download={true}
            >
              Download My Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

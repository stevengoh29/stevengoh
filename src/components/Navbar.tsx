"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeSwitcher } from "./common/ThemeToggle";

type NavbarProps = {
  activeSection: string
}

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const { activeSection } = props

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrolling, setScrolling] = useState(false);
  const [color, setColor] = useState('#f1f5f9');

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme == 'dark') setColor('#0f172a')
    if (theme == 'light') setColor('#f1f5f9')
  }, [theme])

  if (theme == undefined) return null

  return (
    <>
      <nav className={`p-2 fixed w-full duration-500 z-50 ${scrolling ? 'glassmorphism dark:lg:bg-slate-900/60' : ''}`}>
        <div className=" flex items-center justify-end py-2 px-5">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            className={`${isMenuOpen ? "block" : "hidden"
              } absolute top-12 right-0 w-full md:w-auto md:static md:flex `}
            id="navbar-default"
          >
            <ul className="font-medium flex items-center flex-col p-4 lg:p-0 mt-4 bg-slate-100 dark:bg-slate-900 lg:bg-transparent dark:lg:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <Link href="#home">
                Home
              </Link>
              <Link href="#about">
                About
              </Link>
              <Link href="#skill">
                Skill
              </Link>
              <Link href="#work">
                Work
              </Link>
              <ThemeSwitcher />
              {/* <a
                href={"/Steven's Resume.pdf"}
                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-xs lg:mt-0 mt-5"
                download={true}
              >
                Download My Resume
              </a> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./common/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

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
    if(theme == 'dark') setColor('#0f172a')
    if(theme == 'light') setColor('#f1f5f9')
  }, [theme])

  if(theme == undefined) return null

  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -z-10"><path fill={color} fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,96C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
      <nav className={`fixed w-full duration-500 z-50 ${scrolling ? 'lg:bg-slate-100 dark:lg:bg-slate-900' : ''}`}>

        <div className=" flex items-center justify-end p-5">
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
            className={`${isMenuOpen ? "block" : "hidden"
              } absolute top-12 right-0 w-full md:w-auto md:static md:flex`}
            id="navbar-default"
          >
            <ul className="font-medium flex items-center flex-col p-4 lg:p-0 mt-4 bg-slate-100 dark:bg-slate-900 lg:bg-transparent dark:lg:bg-transparent rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              {/* {menu.map((list, index) => {
                return (
                  <li>
                    <Link
                      href={list.href}
                      className={`block py-2 pl-3 pr-4 rounded hover:font-bold hover:underline duration-200  ${isActivePath == list.href
                          ? "text-blue-500 font-bold"
                          : "text-black dark:text-white"
                        } md:p-0`}
                    >
                      {list.menuName}
                    </Link>
                  </li>
                );
              })} */}
              <ThemeSwitcher />
              <a
                href={"/Steven's Resume.pdf"}
                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-xs lg:mt-0 mt-5"
                download={true}
              >
                Download My Resume
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    theme === 'light'
      ? <IoSunny size={20} className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
      : <IoMoon size={20} className="cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
  );
};
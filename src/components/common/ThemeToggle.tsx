"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


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
    <button
      className={` p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-900 dark:bg-slate-100 text-white dark:text-black text-xs uppercase py-3 px-5 font-bold`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
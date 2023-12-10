import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { ThemeSwitcher } from "@/components/common/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steven's Portfolio",
  description: "Built by Steven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "max-h-screen h-screen flex flex-col"
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex-1 items-center">{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

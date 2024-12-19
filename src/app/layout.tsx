import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] })

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
          poppins.className,
          "max-h-screen h-screen flex flex-col"
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-1 items-center">{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

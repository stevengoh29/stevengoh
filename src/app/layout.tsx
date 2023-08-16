import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

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
          montserrat.className,
          "max-h-screen h-screen flex flex-col bg-slate-900"
        )}
      >
        <Navbar />
        <div className="flex-1 items-center">{children}</div>
      </body>
    </html>
  );
}

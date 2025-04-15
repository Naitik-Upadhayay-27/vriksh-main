import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vriksh",
  description: "Real Estate Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading />
        {children}
      </body>
    </html>
  );
}

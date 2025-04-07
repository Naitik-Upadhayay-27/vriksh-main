import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { ReactNode } from "react"; // Import React and ReactNode

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mindsestate - Your Trusted Real Estate Partner in Ahmedabad",
  description: "Find your perfect home in Ahmedabad with personalized assistance and expert market insights",
};

type RootLayoutProps = {
  children: ReactNode; // Explicitly typing children as ReactNode
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16"> {/* Adjust pt-16 based on Navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


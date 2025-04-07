'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full transition-all duration-300 py-4 px-6 z-50 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative w-12 h-12 mr-3 overflow-hidden rounded-full bg-white shadow-sm p-1 transition duration-300 group-hover:shadow-md">
                        <Image src="/logo.png" alt="Mindsestate Logo" fill className="object-contain p-1" />
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="font-bold text-xl transition duration-300 text-gray-800 group-hover:text-blue-600">
                            Mindsestate
                        </span>
                        <span className="text-xs font-medium transition duration-300 text-gray-500">
                            Premium Real Estate
                        </span>
                    </div>
                </Link>

                {/* Main Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {["Home", "Properties", "About", "Blog"].map((item, index) => (
                        <Link
                            key={index}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="relative font-medium transition-all duration-300 hover:text-blue-600 after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full text-gray-800"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
                    >
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute top-0 left-0 w-0 h-full bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={`block w-5 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`}>
                        <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "mb-0" : "mb-1.5"}`}></span>
                        <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "-rotate-90 -translate-y-1" : "mt-1.5"}`}></span>
                    </span>
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <div className="bg-white rounded-xl p-8 w-4/5 max-w-md transform transition-all duration-500">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Menu</h3>
                        <nav className="flex flex-col space-y-4">
                            {["Home", "Properties", "About", "Blog"].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center mt-2 hover:bg-blue-700 transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

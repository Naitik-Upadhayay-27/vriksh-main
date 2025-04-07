"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Footer() {
    const [showScrollButton, setShowScrollButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true)
            } else {
                setShowScrollButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="w-full bg-white py-8 px-4 md:py-12 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div>
                            <Link href="/">
                                <div className="flex items-center">
                                    <Image
                                        src="/logo.png"
                                        alt="Mindestate Logo"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                    />
                                    <span className="ml-2 text-xl md:text-2xl font-bold text-[#000000]">Mindestate</span>
                                </div>
                            </Link>

                            <div className="mt-4 space-y-3 text-[#1d1d1f] text-sm md:text-base">
                                <div className="flex items-start">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                                    <span className="text-sm md:text-base">1889 NW 73rd St, Asheville, NC 28726</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0 text-gray-400" />
                                    <span className="text-sm md:text-base">(800) 543 5432</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0 text-gray-400" />
                                    <span className="text-sm md:text-base">inquiry@realhomes.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-2 sm:mt-0">
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-4 text-[#1d1d1f] text-sm md:text-base">
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    Properties Listing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Other Pages */}
                    <div className="mt-2 sm:mt-0">
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">Other Pages</h3>
                        <ul className="space-y-2 md:space-y-4 text-[#1d1d1f] text-sm md:text-base">
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    Agents
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0196ff] transition-colors">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Talk To An Expert */}
                    <div className="mt-4 sm:mt-0">
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">Talk To An Expert</h3>
                        <p className="mb-4 md:mb-6 text-[#1d1d1f] text-sm md:text-base">Get expert consultation regarding you Real Estate needs.</p>
                        <Button
                            variant="outline"
                            className="rounded-full border-[#0196ff] text-[#0196ff] hover:bg-[#0196ff] hover:text-white transition-colors text-sm"
                        >
                            Make an Inquiry
                        </Button>

                        <div className="mt-8 md:mt-12">
                            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#000000]">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors">
                                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                                </Link>
                                <Link href="#" className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors">
                                    <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                                </Link>
                                <Link href="#" className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors">
                                    <Youtube className="h-4 w-4 md:h-5 md:w-5" />
                                </Link>
                                <Link href="#" className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors">
                                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500">
                        <p>© 2024 RealHomes. All Rights Reserved</p>
                        <p className="mt-2 md:mt-0">Designed by Manas Agrawal</p>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#0196ff] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#01d6ff] transition-colors"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
                </button>
            )}
        </footer>
    )
}
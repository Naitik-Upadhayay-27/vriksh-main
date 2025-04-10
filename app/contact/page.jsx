"use client";
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form";
import { ContactHero } from "@/components/contact-hero";
import { ContactInfo } from "@/components/contact-info";
import { Newsletter } from "@/components/newsletter";
import Lenis from "lenis";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        autoRaf: true,
      });

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

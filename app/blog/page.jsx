"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import BlogHero from "@/components/blog-hero";
import BlogList from "@/components/blog-list";

export default function BlogPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 0.5,
        smoothWheel: true,
        wheelMultiplier: 1.2,
        smoothTouch: true,
        touchMultiplier: 1.2,
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
        <BlogHero />
        <BlogList />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

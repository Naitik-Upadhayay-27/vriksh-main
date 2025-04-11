"use client";
import { ProductSection } from "@/components/product";
import PropertiesListFullwidth from "@/components/properties-list-fullwidth";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
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
      <main className="flex-1">
        <ProductSection />
        <PropertiesListFullwidth />
      </main>
    </div>
  );
}

"use client";
import React from "react";
import BlogPostDetail from "@/components/blog-post-detail"; // Changed to default import
import { Newsletter } from "@/components/newsletter";
import Lenis from "lenis";
import { useEffect } from "react";

export default function BlogPostPage({ params }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <BlogPostDetail slug={params.slug} />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

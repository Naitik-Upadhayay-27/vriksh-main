// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <Header /> */}
            <main className="flex-1">
                <BlogHero />
                <BlogList />
            </main>
            {/* <Footer /> */}
        </div>
    )
}


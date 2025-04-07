import Link from "next/link"
import Image from "next/image"
import { Clock, User, ArrowUpRight } from "lucide-react"

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Devicethread Announces Strategic Partnership With Cloudbeds",
        excerpt:
            "Accelerates 'contactless Check-In' For Hotel And Short-Term Rentals With Its Innovative Smart Access Solution",
        author: "Devicethread",
        date: "APRIL 02, 2024, 11:00 GMT",
        slug: "devicethread-announces-strategic-partnership-with-cloudbeds",
        image: "/building1.png",
        category: "Partnerships"
    },
    {
        id: 2,
        title: "5 Tips for First-Time Home Buyers in 2024",
        excerpt:
            "Navigate the challenging real estate market with these expert tips for first-time buyers looking to make their dream purchase this year.",
        author: "Sarah Johnson",
        date: "MARCH 15, 2024, 09:30 GMT",
        slug: "5-tips-for-first-time-home-buyers-2024",
        image: "/building1.png",
        category: "Buyers Guide"
    },
    {
        id: 3,
        title: "The Rise of Smart Homes: What Buyers Are Looking For",
        excerpt:
            "Discover the smart home features that today's buyers are prioritizing and how these technologies are reshaping the real estate market.",
        author: "Michael Chen",
        date: "FEBRUARY 28, 2024, 14:45 GMT",
        slug: "rise-of-smart-homes-what-buyers-are-looking-for",
        image: "/building1.png",
        category: "Technology"
    },
    {
        id: 4,
        title: "Commercial Real Estate Trends to Watch in 2024",
        excerpt:
            "From hybrid work models to sustainable buildings, these are the top commercial real estate trends that investors should keep an eye on.",
        author: "Robert Williams",
        date: "FEBRUARY 10, 2024, 10:15 GMT",
        slug: "commercial-real-estate-trends-2024",
        image: "/building1.png",
        category: "Market Trends"
    },
]

export function BlogList() {
    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200">
                            <div className="relative h-52 w-full overflow-hidden">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 z-20">
                                    <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-md">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-xs text-gray-600 mb-3 space-x-4">
                                    <div className="flex items-center">
                                        <User className="w-3 h-3 mr-1 text-gray-600" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1 text-gray-600" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">{post.title}</h3>
                                <p className="text-gray-700 text-sm mb-5 leading-relaxed line-clamp-3">{post.excerpt}</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="inline-flex items-center text-gray-900 font-medium text-sm">
                                        Read More
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-900 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    )
}
import Link from "next/link";
import { Clock, User, Facebook, Twitter, Linkedin } from "lucide-react";

// Sample blog post data
const blogPost = {
    id: 1,
    title: "Devicethread Announces Strategic Partnership With Cloudbeds",
    subtitle:
        "Accelerates 'contactless Check-In' For Hotel And Short-Term Rentals With Its Innovative Smart Access Solution",
    author: "Devicethread",
    date: "APRIL 02, 2024, 11:00 GMT",
    slug: "devicethread-announces-strategic-partnership-with-cloudbeds",
    image: "/t1.png",
    content: `
    <p>PALO ALTO, CALIFORNIA, UNITED STATES, April 2, 2024 /EINPresswire.com/ -- <strong>Devicethread</strong>, A Leading Provider Of Smart IoT Infrastructure Management For The Hospitality Industry Today Announced A Strategic Partnership With <strong>Cloudbeds</strong>, A Global Leader In Hospitality Management Software.</p>
    
    <p>This Collaboration Brings Together Devicethread's Industry-Leading Smart Hospitality Capabilities And Cloudbeds' Award-Winning Hospitality (PMS) Platform To Provide An Easy-To-Deploy Solution To Customers For Contactless Check-In Use Cases In Hotels And Short-Term Rental Properties. Customers Can Now Take Advantage Of Devicethread's Capabilities That Are Natively Integrated With The Cloudbeds Platform To Deliver This Capability.</p>
    
    <p>At Devicethread, We Foresee A Near-Term Future, Where Each Hotel, Across Economy To Luxury Segments Alike, Offers Its Guests Instant Smart Access To Room And Property Amenities Eliminating Long Waiting Lines At The Front Desk - A Distant Memory Of Bygone Era. Furthermore, Devicethread's Smart Access Capabilities Deliver Innovative Operational Capabilities That Allow Properties To Personalize Guest Experiences At Scale While Adding New Services & Revenue Streams To The Topline.</p>
    
    <p>Rowned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers Andey Melty Little Puddles Of Chocolate Y First Favorite Dolor Sit Amet, Consectetuer Adipiscing Elitter Aenean Commodo Ligula Eget Dolor Aenean Massa.</p>
    
    <h3>Key Highlights Of This Strategic Partnership Include:</h3>
    
    <ul>
      <li>An End-To-End Enterprise-Grade Solution To Deliver Contactless Self Check-In With The Best Business Value In The Industry.</li>
      <li>Tighter Integration Between Devicethread And Cloudbeds Platform Unlock Newer Use Cases Across Guest Experiences, Operational Task Automations And Connected Hospitality Services.</li>
      <li>Enable An Easy Path To Other Smart Hospitality Use Cases Beyond Smart Access With A Common Underlying Platform.</li>
    </ul>
    
    <p>Sebastian Leitner, Vice President Of Partnerships At Cloudbeds, Said, "Cloudbeds Is Dedicated To Providing Our Hoteliers With Seamless, Easy-To-Deploy Solutions That Improve And Enhance The Guest Experience. We Are Excited To Partner With Devicethread And Bring Their Contactless Self-Check-In Capabilities To Our Hoteliers.</p>
    
    <p><strong>Such Sentiment Has Been Validated By Several Devicethread Partners, Hotel Chains And Short-Term Rental Property Owners.</strong></p>
    
    <p>Swamy Viswanathan, CEO And Co-Founder At Devicethread, Said, "Over Time, The Devicethread Platform Will Furnish A Layer Of Functionality To Unify The Entire Smart IoT Ecosystem, Including Locks, Thermostats, Smart Displays, Televisions, And Additional Sensors To Enhance Guest Experiences, Streamline Operational Efficiencies And Boost Staff Productivity".</p>
    
    <h3>About Cloudbeds</h3>
    
    <p>Cloudbeds Is The Leading Platform Redefining The Concept Of PMS For The Hospitality Industry, Serving Tens Of Thousands Of Properties In More Than 150 Countries Worldwide. Built From The Ground Up To Be Masterfully Unified And Scalable, The Award-Winning Cloudbeds Platform Brings Together Built-In And Integrated Solutions That Modernize Hotel Operations, Distribution, Guest Experience, And Data & Analytics. Founded In 2012, Cloudbeds Has Been Named A Top PMS, Hotel Management System And Channel Manager (2021-2024) By Hotel Tech Report, World's Best Hotel PMS Solutions Provider (2022) By World Travel Awards, And Recognized In Deloitte's Technology Fast 500 In 2023.</p>
    
    <h3>About DevicethreadTM</h3>
    
    <p>Devicethread's Vision Is To Revolutionize And Standardize How The Hospitality Industry Leverages Its Investment(S) In Smart IoT Infrastructure. It Enables Hotels And Short-Term Rentals To Leverage Their Investment In Smart IoT Assets And Turn Them Into A Competitive Advantage. We Integrate Existing Investments In Smart Technologies Into Daily Operations To Personalize The Experience For Guests, Protect And Provide Proactive, Real-Time Control Of Infrastructure For Staff, And Improve Operating Margins For Owners.</p>
    
    <p><strong>Arun Bhattacharya<br>Devicethread, Marketing & Alliances<br>+1 408-406-4856</strong></p>
  `,
};

const BlogPostDetail = ({ slug }) => {
    return (
        <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto bg-white">
            {/* Hero section with background image */}
            <div className="relative w-full h-[400px] overflow-hidden mb-10 rounded-lg shadow-md">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
                        filter: "brightness(0.85)",
                    }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{blogPost.title}</h1>
                </div>
            </div>

            {/* Blog post header */}
            <div className="mb-10">
                <Link href="/blog" className="text-blue-700 hover:underline text-sm mb-4 inline-flex items-center font-medium">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Blog
                </Link>

                <h2 className="text-xl md:text-2xl font-medium text-gray-800 mt-4">{blogPost.subtitle}</h2>

                <div className="flex items-center text-sm text-black mt-4 border-b border-gray-200 pb-4">
                    <div className="flex items-center mr-6">
                        <User className="w-4 h-4 mr-2" />
                        <span className="font-medium">By {blogPost.author}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{blogPost.date}</span>
                    </div>
                </div>
            </div>

            {/* Blog post content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
                <div className="md:col-span-8">
                    {/* Main content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-strong:text-black prose-li:text-black prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4"
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />

                    {/* Share buttons */}
                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Share this article</h3>
                        <div className="flex space-x-3">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                aria-label="Share on Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:col-span-4">
                    <div className="sticky top-8 bg-gray-50 rounded-lg p-6 shadow-sm">
                        {/* Recent Posts Section */}
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">Recent Posts</h3>
                        <div className="space-y-4">
                            <Link href="#" className="block group">
                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                    5 Tips for First-Time Home Buyers in 2024
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">MARCH 15, 2024</p>
                            </Link>
                            <Link href="#" className="block group">
                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                    The Rise of Smart Homes: What Buyers Are Looking For
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">FEBRUARY 28, 2024</p>
                            </Link>
                            <Link href="#" className="block group">
                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                    Commercial Real Estate Trends to Watch in 2024
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">FEBRUARY 10, 2024</p>
                            </Link>
                        </div>

                        {/* Categories Section */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">Categories</h3>
                            <div className="space-y-2">
                                <Link href="#" className="block text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                                    Real Estate News
                                </Link>
                                <Link href="#" className="block text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                                    Market Trends
                                </Link>
                                <Link href="#" className="block text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                                    Home Buying Tips
                                </Link>
                                <Link href="#" className="block text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                                    Investment Strategies
                                </Link>
                                <Link href="#" className="block text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                                    Property Management
                                </Link>
                            </div>
                        </div>

                        {/* Subscribe Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-gray-900">Subscribe</h3>
                            <p className="text-sm text-gray-700 mb-4">Get the latest updates directly to your inbox</p>
                            <form className="flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    aria-label="Email address"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-blue-700 text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-blue-800 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostDetail;
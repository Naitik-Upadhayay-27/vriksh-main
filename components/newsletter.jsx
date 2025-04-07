export function Newsletter() {
    return (
        <section className="py-8 md:py-16 px-4 md:px-8 bg-[rgb(74,58,255)] text-white min-h-[300px] md:h-[400px] flex items-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 rounded-full bg-white transform translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Subscribe to our <span className="underline decoration-2 decoration-white/60">Newsletter</span>
                        </h2>
                        <p className="text-white/80 max-w-md text-base md:text-lg">
                            Subscribe for Updates: Stay informed about the latest investor updates, financial results, and
                            announcements by subscribing to our newsletter.
                        </p>
                    </div>

                    <div className="flex items-center mt-6 md:mt-0">
                        <form className="w-full flex flex-col sm:flex-row gap-3 md:gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent shadow-lg text-sm md:text-base"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[rgb(74,58,255)] font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg hover:scale-105 duration-200 text-sm md:text-base whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
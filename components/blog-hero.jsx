import Image from "next/image";

export function BlogHero() {
    return (
        <div className="pt-6 px-4 md:px-6 lg:px-8">
            <section className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg mx-auto">
                {/* Image Background with Glossy Effect */}
                <div className="absolute inset-0">
                    <Image
                        src="/contact.png" // path relative to the public folder
                        alt="Blog background"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        className="filter brightness-85 contrast-105 saturate-110"
                    />
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Blog</h1>
                </div>
                
                {/* Light reflection for glossy effect */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1/6 bg-white/10 blur-md rounded-full transform -translate-y-1/2"></div>
            </section>
        </div>
    );
}
export function ContactHero() {
    return (
        <section className="relative w-full h-[300px] bg-gray-200 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/contact.png')",
                    filter: "brightness(0.8)",
                }}
            ></div>
            <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            </div>
        </section>
    )
}


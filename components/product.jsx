import { Search } from "lucide-react";

export function ProductSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative w-full h-[400px] bg-gray-200 overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/product.png')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Thaltej / Ahmedabad</h1>
          
          <div className="w-full max-w-5xl bg-white/10 backdrop-blur-sm p-2 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="relative">
                <select className="w-full p-3 rounded-md bg-white text-black appearance-none pr-10">
                  <option>All Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="w-full p-3 rounded-md bg-white text-black appearance-none pr-10">
                  <option>All Main Locations</option>
                  <option>Thaltej</option>
                  <option>Ahmedabad</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="w-full p-3 rounded-md bg-white text-black appearance-none pr-10">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              <button className="bg-accent hover:bg-accent/90 text-white p-3 rounded-md flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
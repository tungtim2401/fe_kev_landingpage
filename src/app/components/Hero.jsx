"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#2f66b3] text-white overflow-hidden">
      {/* Background shape */}
      {/* <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-yellow-400 clip-triangle z-0"></div> */}

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">7 Studio</h1>

          <div className="w-10 h-1 bg-yellow-400 mb-4"></div>

          <p className="text-lg text-gray-200 mb-6 max-w-md">
            We create modern spaces to appeal, inspire, and preserve the best in
            architecture.
          </p>

          <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            VIEW PORTFOLIO
            <span>+</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/building.png"
            alt="building"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* BOTTOM INFO BAR */}
      <div className="bg-[#1f5fa8] py-10 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div
            className="bg-[#2f66b3] p-6 rounded-lg 
  transition-all duration-300 ease-in-out
  hover:-translate-y-3 hover:shadow-2xl hover:bg-[#3b73c0] cursor-pointer"
          >
            <h3 className="font-semibold mb-2">Urban Design Award</h3>
            <p className="text-gray-300">
              Furniture, Structure, Infrastructure: Making and Using the Urban
              Environment, 2020
            </p>
          </div>

          <div
            className="bg-[#2f66b3] p-6 rounded-lg 
  transition-all duration-300 ease-in-out
  hover:-translate-y-3 hover:shadow-2xl hover:bg-[#3b73c0] cursor-pointer"
          >
            <h3 className="font-semibold mb-2">Bates Smart Award</h3>
            <p className="text-gray-300">
              Box Hill Gardens Multi-Purpose Area, 2021
            </p>
          </div>

          <div
            className="bg-[#2f66b3] p-6 rounded-lg 
  transition-all duration-300 ease-in-out
  hover:-translate-y-3 hover:shadow-2xl hover:bg-[#3b73c0] cursor-pointer"
          >
            <h3 className="font-semibold mb-2">AILA Victoria Award</h3>
            <p className="text-gray-300">
              Australian Institute of Landscape Architects, 2022
            </p>
          </div>

          <div className="flex items-center justify-center bg-[#2f66b3] p-6 rounded-lg">
            <div className="text-center">
              <div className="text-xl mb-2">📞</div>
              <p className="font-semibold">+1 (234) 567 89 00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

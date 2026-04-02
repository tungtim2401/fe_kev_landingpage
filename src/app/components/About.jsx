"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGES */}
        <div className="relative w-full h-[400px]">
          
          {/* Image nhỏ phía trên */}
          <div className="absolute top-0 left-10 w-[320px] h-[240px] ">
            {/* <div className="absolute -top-3 -right-3 w-full h-full border-8 border-yellow-400 z-0"></div> */}
            <Image
              src="/images/image1.jfif"
              alt="about-1"
              fill
              className="object-cover relative z-1"
            />
          </div>

          {/* Image lớn phía dưới */}
          <div className="absolute bottom-0 left-0 w-[320px] h-[240px] z-2 bg-white">
            <Image
              src="/images/image2.jfif"
              alt="about-2"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About 7 Studio
          </h2>

          <div className="w-10 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-600 mb-4">
            7 Studio is a well-established, full-service architecture company
            working with private and public organizations.
          </p>

          <p className="text-gray-500 mb-4">
            Our company was founded in 1997 by two like-minded brothers, Tom
            and Jeremy Wilson, who have a shared passion for creating new
            modern spaces for the local community.
          </p>

          <p className="text-gray-500 mb-6">
            We have more than 20 years of experience in designing award-winning
            projects throughout the country. We use the local environmentally
            friendly materials of the highest quality while creating spaces for
            educational, healthcare, commercial, industrial, government,
            entertainment, and other facilities.
          </p>

          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
            MORE ABOUT US
          </button>
        </div>

      </div>
    </section>
  );
}
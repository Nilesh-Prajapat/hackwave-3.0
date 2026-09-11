import React from "react";
import TextReveal from "@/components/landing/about";

const MobileHero = () => {
  return (
    <>
      <section className="hero host-grotesk relative w-screen min-h-screen p-4 sm:p-6 flex flex-col items-center justify-center text-[#141414] overflow-hidden border-[12px] sm:border-[20px] border-[#141414]">
        {/* HERO HEADER - Vertically and Horizontally Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-4 sm:px-6 flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* Logo and Tagline Image */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <img
              className="hackwave-img w-48 sm:w-64 max-w-[85vw] h-auto object-contain"
              src="/logo/hackwave title.webp"
              alt="Hackwave Logo"
            />
            <img
              className="hackwave-img w-48 sm:w-60 max-w-[80vw] h-auto object-contain"
              src="/assets/bella-kawaii-edition.png"
              alt="Hackwave Bella Kawaii Edition"
            />
          </div>

          {/* Dates & Info Bar */}
          <div className="flex items-center w-full justify-between gap-4 pt-2">
            {/* Left - Dates */}
            <div className="flex flex-col items-start text-left">
              <p className="text-sm sm:text-lg font-medium text-[#141414]">
                36 Hours Hackathon
              </p>
              <p className="text-xs sm:text-sm font-normal text-gray-600">
                from
              </p>
              <p className="text-lg sm:text-2xl font-bold font-jansina tracking-wider text-[#141414]">
                10-12 Oct 2026
              </p>
            </div>

            {/* Right - Info */}
            <div className="flex flex-col items-end text-right">
              <p className="text-sm sm:text-lg font-medium text-[#141414]">
                Join 500+
              </p>
              <p className="text-xs sm:text-sm font-normal text-gray-600">
                developers
              </p>
              <p className="text-lg sm:text-2xl font-bold font-jansina tracking-wider text-[#F52222]">
                ₹1 Lakh+ Prizes
              </p>
            </div>
          </div>
        </div>
      </section>
      <TextReveal />
    </>
  );
};

export default MobileHero;

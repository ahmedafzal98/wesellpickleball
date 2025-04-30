import React from "react";

const Banner = () => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black px-4 pt-10 pb-8 text-center">
      {/* Banner with slanted text */}
      <div className="transform -rotate-6 space-y-2 sm:space-y-4">
        <h1 className="text-lime-400 text-3xl sm:text-4xl md:text-6xl font-extrabold">
          AloooooHAAAA,
        </h1>
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold">
          PICKLEBALL FANATICS!
        </h2>
      </div>

      {/* Paragraph with controlled spacing */}
      <p className="mt-8 text-[#B7D92D] font-medium max-w-xl text-base sm:text-lg md:text-xl px-2 leading-relaxed">
        Welcome to WeSellPickleball.com, the most all-inclusive online
        pickleball store in the world!
      </p>
    </div>
  );
};

export default Banner;

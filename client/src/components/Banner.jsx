import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 text-center">
      {/* Banner with slanted text */}
      <div className="text-center transform -rotate-6">
        <h1 className="text-[#9AE600] font-altoneBold text-4xl sm:text-5xl md:text-6xl font-bold">
          AloooooHAAAA,
        </h1>
        <h2 className="text-white font-altoneBold text-xl sm:text-3xl md:text-5xl whitespace-nowrap">
          PICKLEBALL FANATICS!
        </h2>
      </div>

      {/* Add space between the paragraphs below */}
    </div>
  );
};

export default Banner;

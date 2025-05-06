import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-12 sm:py-16 text-center">
      {/* Banner with slanted text */}
      <div className="text-center transform -rotate-6 space-y-4 sm:space-y-6">
        <h1 className="text-lime-400 text-4xl sm:text-5xl md:text-6xl font-extrabold">
          AloooooHAAAA,
        </h1>
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold whitespace-nowrap">
          PICKLEBALL FANATICS!
        </h2>
      </div>

      {/* Add space between the paragraphs below */}
      <p className="text-center font-bold max-w-2xl px-4 text-lime-400 text-xl sm:text-2xl md:text-2xl mt-10 leading-relaxed">
        Welcome to WeSellPickleball.com, the most all-inclusive online
        pickleball store in the world!
      </p>
    </div>
  );
};

export default Banner;

import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-12 sm:py-16 text-center">
      {/* Banner with slanted text */}
      <div className="text-center transform -rotate-6 space-y-6">
        <h1 className="text-lime-400 text-4xl sm:text-5xl md:text-7xl font-extrabold">
          AloooooHAAAA,
        </h1>
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold">
          PICKLEBALL FANATICS!
        </h2>
      </div>

      {/* Add space between the paragraphs below */}
      <p
        className="text-center font-semibold max-w-2xl px-4 text-lg sm:text-xl md:text-2xl mt-20"
        style={{ color: "#B7D92D" }}
      >
        Welcome to WeSellPickleball.com, the most all-inclusive online
        pickleball store in the world!
      </p>
    </div>
  );
};

export default Banner;

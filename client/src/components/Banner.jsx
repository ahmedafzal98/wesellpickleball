import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-16 space-y-20 md:space-y-48">
      {/* Banner with slanted text */}
      <div className="text-center transform -rotate-6 space-y-4">
        <h1 className="text-lime-400 text-4xl sm:text-6xl md:text-8xl font-extrabold">
          AloooooHAAAA,
        </h1>
        <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold">
          PICKLEBALL FANATICS!
        </h2>
      </div>

      <p
        className="text-center font-semibold max-w-2xl px-4 text-xl sm:text-2xl md:text-3xl"
        style={{ color: "#B7D92D" }}
      >
        Welcome to WeSellPickleball.com, the most all-inclusive online
        pickleball store in the world!
      </p>
    </div>
  );
};

export default Banner;

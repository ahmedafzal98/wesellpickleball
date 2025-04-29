import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-48 px-4">
      {/* Banner with slanted text */}
      <div className="text-center transform -rotate-6">
        <h1 className="text-lime-400 text-8xl font-extrabold">AloooooHAAAA,</h1>
        <h2 className="text-white text-7xl font-extrabold mt-6">
          PICKLEBALL FANATICS!
        </h2>
      </div>
      <p
        className="text-center font-semibold max-w-2xl"
        style={{ color: "#B7D92D", fontSize: "30px" }}
      >
        Welcome to WeSellPickleball.com, the most all-inclusive online
        pickleball store in the world!
      </p>
    </div>
  );
};

export default Banner;

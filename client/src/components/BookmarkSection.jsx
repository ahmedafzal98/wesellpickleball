import React from "react";
import pickleballCourt from "../assets/picleball_court.webp";

const BookmarkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black py-12 px-6">
      <div
        className="max-w-3xl text-center space-y-16"
        style={{ fontSize: "30px" }}
      >
        <p className="text-[#B7D92D] font-semibold">Bookmark this page.</p>

        <p className="text-white font-normal">
          When we go live very soon, we will create a pickleball tsunami and
          your pickleball life will never be the same.
        </p>

        <p className="text-white font-normal">
          With pickles in our pockets and smiles on our faces,
        </p>

        <p className="text-[#B7D92D] font-semibold">
          Your Pickleball Overlords
        </p>
      </div>
      <div className="mt-12">
        <img
          src={pickleballCourt}
          alt="Pickleball Court"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BookmarkSection;

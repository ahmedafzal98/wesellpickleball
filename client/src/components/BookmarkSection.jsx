import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import pickleballCourt from "../assets/picleball_court.webp";

const BookmarkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black py-8 sm:py-12 px-6">
      <div
        className="max-w-3xl text-center space-y-6 sm:space-y-8"
        style={{ fontSize: "20px", lineHeight: "1.6" }}
      >
        <p className="text-[#B7D92D] font-semibold text-2xl sm:text-3xl">
          Bookmark this page.
        </p>

        <p className="text-white font-normal text-lg sm:text-xl">
          When we go live very soon, we will create a pickleball tsunami and
          your pickleball life will never be the same.
        </p>

        {/* New paragraph with icons */}
        <div className="text-white font-normal space-y-4 sm:space-y-6">
          <p className="text-lg sm:text-xl">
            We are currently adopting followers. Join our online family via
            Facebook, Instagram, and TikTok.
          </p>
          <div className="flex justify-center items-center gap-6 pt-2 text-3xl sm:text-4xl">
            <a
              href="https://facebook.com/yourbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
              style={{ color: "#1877F2" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@yourbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
              style={{ color: "#25F4EE" }}
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <p className="text-white font-normal text-lg sm:text-xl">
          With pickles in our pockets and smiles on our faces,
        </p>

        <p className="text-[#B7D92D] font-semibold text-2xl sm:text-3xl">
          Your Pickleball Overlords
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
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

import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import pplIcon from "../assets/ppl.png";

import pickleballCourt from "../assets/picleball_court.webp";
import { MdEmail } from "react-icons/md";

const BookmarkSection = () => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black py-8 px-4 sm:py-12 sm:px-6">
      <div className="w-full max-w-2xl text-center space-y-6 sm:space-y-8 text-white text-lg sm:text-xl leading-relaxed">
        <p className="text-lime-400 font-semibold text-2xl sm:text-3xl">
          Bookmark this page.
        </p>

        <p>
          When we go live very soon, we will create a pickleball tsunami and
          your pickleball life will never be the same.
        </p>

        <img
          src={pplIcon}
          alt="Affiliate Icon"
          className="w-14 h-14 sm:w-16 sm:h-16 mx-auto my-2"
        />

        <p className="text-base sm:text-lg font-semibold text-lime-400">
          Join Our Family
        </p>
        <p>
          We are currently adopting followers. Join our online family via
          Facebook, Instagram, and TikTok by clicking on the icons below…
        </p>

        <div className="flex justify-center items-center gap-6 pt-2 text-2xl sm:text-3xl">
          <a
            href="https://www.facebook.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            style={{ color: "#1877F2" }}
          >
            <FaFacebook />
          </a>
          <a
            href=" https://www.instagram.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            style={{ color: "#E1306C" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            style={{ color: "#25F4EE" }}
          >
            <FaTiktok />
          </a>
        </div>

        {/* New paragraph with mailto link */}
        <p className="text-white text-base sm:text-lg leading-relaxed text-center">
          To showcase your product(s) on our website and receive worldwide
          exposure, email your product info, product pictures, pricing, and our
          specific affiliate link so we can adopt you as part of our pickleball
          family.
        </p>

        <div className="flex flex-col items-center justify-center space-y-2">
          <a
            href="mailto:info@wesellpickleball.com?subject=Product%20Suggestion/Feedback"
            className="text-lime-400 flex items-center hover:underline transition-transform hover:scale-105"
          >
            <MdEmail className="text-2xl" />
          </a>
          <p className="text-white text-base sm:text-lg">Connect With Us</p>
        </div>

        <p>
          Our mantra is fostering the pickleball community so we are all ears.
          If you have any ideas or suggestions, email us as well. We take your
          feedback very seriously because this is the pickleball community’s
          website not just ours.
        </p>

        <p>With pickles in our pockets and smiles on our faces,</p>

        <p className="text-lime-400 font-semibold text-2xl sm:text-3xl">
          Your Pickleball Overlords
        </p>
      </div>

      <div className="mt-6 sm:mt-10">
        <img
          src={pickleballCourt}
          alt="Pickleball Court"
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BookmarkSection;

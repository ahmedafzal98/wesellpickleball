import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pplIcon from "../assets/ppl.png";
import pickleballCourt from "../assets/picleball_court.webp";

const BookmarkSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBookmark = (e) => {
    e.preventDefault();
    const url = "https://www.wesellpickleball.com";
    const title = "We Sell Pickleball";

    if (window.external && "AddFavorite" in window.external) {
      // For Internet Explorer
      window.external.AddFavorite(url, title);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black px-4 sm:px-6 mt-7">
      <div className="w-full max-w-2xl text-white text-lg sm:text-xl leading-relaxed text-center space-y-7 sm:space-y-9">
        <a
          href="#"
          onClick={handleBookmark}
          className="text-lime-400 font-bold text-3xl sm:text-4xl hover:underline hover:scale-105 transition-transform inline-block mb-4"
        >
          Bookmark this page.
        </a>

        <p className="text-lg sm:text-xl leading-relaxed">
          When we go live very soon, we will create a pickleball tsunami and
          your pickleball life will never be the same.
        </p>

        <img
          src={pplIcon}
          alt="Affiliate Icon"
          className="w-20 h-20 mx-auto my-4"
        />

        <p className="text-lime-400 font-bold text-xl leading-relaxed">
          Join Our Family
        </p>

        <p className="text-lg sm:text-xl leading-relaxed">
          We are currently adopting followers. Join our online family via
          Facebook, Instagram, and TikTok by clicking on the icons below…
        </p>

        <div className="flex justify-center items-center gap-6 text-3xl pt-3 flex-wrap">
          <a
            href="https://www.facebook.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#1877F2" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#E1306C" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#25F4EE" }}
          >
            <FaTiktok />
          </a>
        </div>

        <p className="text-lg sm:text-xl leading-relaxed">
          To showcase your product(s) on our website and receive worldwide
          exposure, email your product info, product pictures, pricing, and our
          specific affiliate link so we can adopt you as part of our pickleball
          family.
        </p>

        <div className="flex flex-col items-center space-y-2">
          <a
            href="mailto:info@wesellpickleball.com?subject=Product%20Suggestion/Feedback"
            className="text-white flex items-center hover:underline hover:scale-105 transition-transform"
          >
            <MdEmail className="w-8 h-8 mr-2" />
          </a>
          <p className="text-lime-400 font-bold text-xl leading-relaxed">
            Connect With Us
          </p>
        </div>

        <p className="text-lg sm:text-xl leading-relaxed">
          Our mantra is fostering the pickleball community so we are all ears.
          If you have any ideas or suggestions, email us as well. We take your
          feedback very seriously because this is the pickleball community’s
          website — not just ours.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed">
          With pickles in our pockets and smiles on our faces,
        </p>

        <p className="text-lime-400 font-bold text-2xl sm:text-3xl leading-relaxed">
          Your Pickleball Overlords
        </p>
      </div>

      <div className="mt-10">
        <img
          src={pickleballCourt}
          alt="Pickleball Court"
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Bookmark Us!
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Press <strong>Ctrl + D</strong> (or <strong>Cmd + D</strong> on
              Mac) to bookmark our site.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-lg transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkSection;

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
      window.external.AddFavorite(url, title);
    } else {
      setShowModal(true);
    }
  };

  // Reusable heading section
  const SectionHeading = ({ text }) => (
    <div className="flex items-center justify-center mt-14 mb-6">
      <div className="w-1/5 h-1 bg-lime-400 rounded-full" />
      <h2 className="text-lime-400 font-bold text-3xl sm:text-4xl px-4 text-center whitespace-nowrap">
        {text}
      </h2>
      <div className="w-1/5 h-1 bg-lime-400 rounded-full" />
    </div>
  );

  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black px-4 sm:px-6 mt-7">
      <div className="w-full max-w-2xl text-white text-lg sm:text-xl leading-relaxed text-center space-y-7 sm:space-y-9">
        {/* Decorative "Bookmark this page." */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-1/5 h-1 bg-lime-400 rounded-full" />
          <a
            href="#"
            onClick={handleBookmark}
            className="text-lime-400 font-bold text-3xl sm:text-4xl hover:underline hover:scale-105 transition-transform px-4 whitespace-nowrap"
          >
            Bookmark this page
          </a>
          <div className="w-1/5 h-1 bg-lime-400 rounded-full" />
        </div>

        <p>
          When we go live very soon, we will create a pickleball tsunami and
          your pickleball life will never be the same.
        </p>

        <img
          src={pplIcon}
          alt="Affiliate Icon"
          className="w-20 h-20 mx-auto my-4"
        />

        <SectionHeading text="Join Our Family" />

        <p>
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

        <p>
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
            <MdEmail className="mt-3 mb-4 w-8 h-8 mr-2" />
          </a>
        </div>

        {/* Decorative "Connect With Us" heading */}
        <SectionHeading text="Connect With Us" />

        <p>
          Our mantra is fostering the pickleball community so we are all ears.
          If you have any ideas or suggestions, email us as well. We take your
          feedback very seriously because this is the pickleball community’s
          website, not just ours.
        </p>

        <p>With pickles in our pockets and smiles on our faces,</p>

        <p className="text-lime-400 font-bold text-3xl sm:text-4xl leading-relaxed">
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
              To bookmark WeSellPickleball.com,
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Press <strong>Ctrl + D</strong> (Windows) <br />
              or <br />
              <strong>Cmd + D</strong> (Mac)
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-lg transition"
            >
              Exit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkSection;

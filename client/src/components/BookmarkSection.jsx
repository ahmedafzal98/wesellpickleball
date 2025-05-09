import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pplIcon from "../assets/ppl.png";
import pickleballCourt from "../assets/picleball_court.webp";
import affiliateIcon from "../assets/affiliateIcon.png";
import socialIcon from "../assets/social.png";
import emailIcon from "../assets/EmailIcon.png";
import AffiliateForm from "./AffiliateForm";
import signature from "../assets/Your Pickleball Overlords.png";

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
    <div className="flex items-center justify-center mb-6">
      <div className="w-full h-0.5 bg-[#9AE600] rounded-full" />
      <h2 className="text-[#9AE600] font-altoneBold text-3xl sm:text-4xl md:text-4xl px-4 text-center whitespace-nowrap">
        {text}
      </h2>
      <div className="w-full h-0.5 bg-[#9AE600] rounded-full" />
    </div>
  );

  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 mt-7">
      <div className="w-full max-w-2xl text-white text-xl sm:text-2xl leading-relaxed text-center space-y-7 sm:space-y-9">
        {/* Decorative "Bookmark this page." */}
        <div className="flex items-center justify-center mb-6">
          {/* <div className="w-1/5 h-1 bg-[#9AE600] rounded-full" /> */}
          <a
            href="#"
            onClick={handleBookmark}
            className="text-[#9AE600] leading-relaxed mt-5 font-bold text-3xl sm:text-4xl hover:underline hover:scale-105 transition-transform"
          >
            Click here to bookmark this page.
          </a>

          {/* <div className="w-1/5 h-1 bg-[#9AE600] rounded-full" /> */}
        </div>

        <div className="h-10" />

        <img
          src={affiliateIcon}
          alt="affiliateIcon"
          className="w-[76px] h-[90px] mx-auto sm:w-[90px] sm:h-[110px] md:w-[110px] md:h-[130px]"
        />

        <SectionHeading text="AFFILIATE PROGRAM" />
        <div className="overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="w-full font-normal font-altoneRegular max-w-2xl text-white text-2xl sm:text-3xl leading-normal text-center space-y-4">
            <p>Do you have a megaphone 📢 mouth?</p>

            <p>Are you a social media influencer?</p>
            <p>
              Would you like to make some serious dough 💰 and spread some
              Pickleball Gospel?
            </p>
            <p>
              If so, we have a{" "}
              <span className="whitespace-nowrap">“dill”icious 🥒 </span>
              deal for you. Join our affiliate program—anytime someone uses your
              personalized link, you receive commission 💵 and can make more
              green than a leprechaun wears on St.Patty’s Day. ☘ Easy peasy!
            </p>

            <p>
              Take “002” seconds and complete the form below. When we launch our
              affiliate program, you will be the first to know.
            </p>
          </div>
        </div>

        <AffiliateForm />

        <img
          src={pplIcon}
          alt="Affiliate Icon"
          className="w-auto h-auto mx-auto sm:w-[90px] sm:h-[110px] md:w-[110px] md:h-[130px]"
        />

        <SectionHeading text="Join Our Family" />

        <p className="font-altoneRegular text-2xl sm:text-3xl md:text-3xl">
          We are currently adopting followers. Join our online family via
          Facebook, Instagram, and TikTok by clicking on the icons below:
        </p>

        <div className="flex justify-center items-center gap-6 mb-22 text-3xl flex-wrap">
          <a
            href="https://www.facebook.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#1877F2" }}
          >
            <FaFacebook className="h-10 w-10" />
          </a>
          <a
            href="https://www.instagram.com/wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#E1306C" }}
          >
            <FaInstagram className="h-10 w-10" />
          </a>
          <a
            href="https://www.tiktok.com/@wesellpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            style={{ color: "#25F4EE" }}
          >
            <FaTiktok className="h-10 w-10" />
          </a>
        </div>

        <img
          src={socialIcon}
          alt="socialIcon"
          className="w-[75px] h-[68px] mx-auto sm:w-[90px] sm:h-[110px] md:w-[110px] md:h-[130px]"
        />

        <SectionHeading text="Join Forces with Us" />

        <p className="font-altoneRegular text-2xl sm:text-3xl md:text-3xl mb-2">
          To showcase your product(s) on our website and receive worldwide 🌍
          exposure, email your product info, product pictures, pricing and our
          specific affiliate link so we can adopt you as part of our pickleball
          family:
        </p>

        <div className="flex flex-col items-center">
          <a
            href="mailto:info@wesellpickleball.com?subject=Product%20Suggestion/Feedback"
            className="text-[#9AE600] font-altoneRegular underline flex items-center text-2xl sm:text-3xl md:text-3xl hover:underline hover:scale-105 transition-transform"
          >
            <p>info@wesellpickleball.com</p>
          </a>
        </div>

        <div className="flex justify-center mt-23">
          <img
            src={emailIcon}
            alt="socialIcon"
            className="w-[66px] h-[53px] mx-auto sm:w-[90px] sm:h-[110px] md:w-[110px] md:h-[130px]"
          />
        </div>

        {/* Decorative "Connect With Us" heading */}

        <SectionHeading text="Connect With Us" />

        <div className="overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="w-full font-normal font-altoneRegular max-w-2xl text-white text-2xl sm:text-3xl leading-normal text-center space-y-4">
            <p>
              Our mantra is fostering the pickleball community so we are all
              ears. If you have any ideas or suggestions, email us as well. We
              take your feedback very seriously because this is the pickleball
              community’s website, not just ours.
            </p>

            <p>With pickles in our pockets and smiles on our faces,</p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={signature}
            alt="Your Pickleball Overlords"
            className="h-8 sm:h-10 md:h-12 lg:h-14"
          />
        </div>

        {/* <p className="text-[#9AE600] font-brushItalic text-3xl sm:text-4xl leading-normal">
          Your Pickleball Overlords
        </p> */}
      </div>

      <div className="mt-10">
        <img
          src={pickleballCourt}
          alt="Pickleball Court"
          className="w-full max-w-md h-auto rounded-lg shadow-lg mb-5"
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

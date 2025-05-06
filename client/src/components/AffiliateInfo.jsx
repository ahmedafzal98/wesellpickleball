import React from "react";

import affiliateIcon from "../assets/Affiliate.png";

const AffiliateInfo = () => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black px-4 sm:px-6 ">
      <div className="w-full max-w-2xl text-white text-lg sm:text-xl leading-relaxed text-center space-y-7 sm:space-y-9">
        <p>
          Think one-stop shop for all things pickleball. 🏓 We will have more
          pickleball paraphernalia than there are grains of sand on a really big
          beach. 🏝
        </p>
        <p>
          We’re talking EVERYTHING pickleball, from glow-in-the-dark pickleball
          socks that play “Eye of the Tiger” when you sweat, to a personal
          pickleball-fetching drone named, “Dinky.”
        </p>
        <p>
          We’re the Amazon for pickleball, so if you can dream it, we will have
          it.
        </p>
        <p>
          We’re about to unleash pickleball pandemonium upon the world and{" "}
          <span className="text-lime-400 font-bold">YOU’RE INVITED!!!</span>
        </p>

        <img
          src={affiliateIcon}
          alt="Affiliate Icon"
          className="w-16 h-16 mx-auto my-2"
        />

        <p className="text-lg sm:text-xl text-lime-400 font-bold">
          Affiliate Program
        </p>

        <p>Do you have a megaphone mouth?</p>
        <p>Are you a social media influencer?</p>
        <p>
          Would you like to make some serious dough 💰 and spread some
          Pickleball Gospel?
        </p>
        <p>
          If so, we have a “dill”icious deal for you. Join our affiliate
          program—anytime someone uses your personalized link, you receive
          commission and can make more green than a leprechaun wears on St.
          Patty’s Day. ☘ Easy peasy!
        </p>

        <p>
          Take “002” seconds and complete the form below. When we launch our
          affiliate program, you will be the first to know.
        </p>
      </div>
    </div>
  );
};

export default AffiliateInfo;

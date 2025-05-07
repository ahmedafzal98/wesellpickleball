import pickleball_logo from "../assets/pickleball_logo.webp";

const Navbar = () => {
  return (
    <>
      <nav className="overflow-x-hidden text-white flex flex-col items-center justify-center h-auto">
        <div className="w-full sm:w-4/5 flex justify-center sm:justify-start">
          <img
            src={pickleball_logo}
            alt="Pickleball Logo"
            className="h-32 sm:h-36 md:h-36 lg:h-32 xl:h-32 w-auto bg-transparent"
          />
        </div>
        {/* Horizontal Line with added margin */}
        <div className="h-0.5 w-full bg-[#B7D92D] mt-7"></div>
      </nav>
    </>
  );
};

export default Navbar;

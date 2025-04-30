import pickleball_logo from "../assets/pickleball_logo.webp";

const Navbar = () => {
  return (
    <>
      <nav className="overflow-x-hidden text-white flex flex-col items-center justify-center h-auto">
        <div className="w-4/5 h-22 flex justify-center xl:justify-start ">
          <img
            src={pickleball_logo}
            alt="Pickleball Logo"
            className="h-full w-auto bg-transparent"
          />
        </div>
        <div className="h-0.5 w-full bg-[#B7D92D] mt-2"></div>
      </nav>
    </>
  );
};

export default Navbar;

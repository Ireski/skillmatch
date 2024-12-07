import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Skill Match" },
    { id: 2, text: "Services" },
    { id: 3, text: "Find a Talent" },
    { id: 4, text: "Blog" },
    { id: 5, text: "Become a Freelancer" },
  ];
  const meas = "1px";
  const meas2 = "5px";
  return (
    <div
      style={{ borderWidth: meas }}
      className="fixed top-0 left-0 w-[90px] z-50 bg-white flex justify-between items-center h-20 w-full mx-auto lg:px-16 px-6 text-black border-b border-b-gray-300"
    >
      {/* Logo */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <img className="h-6" src="images/logo1.png" alt="hey" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex relative left-24">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-2 rounded-xl m-2 font-medium cursor-pointer duration-300 hover:text-orange-600"
          >
            {item.text}
            <span>
              {item.id == 1 || item.id == 2 ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i></i>
              )}
            </span>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <button
          className="border-orange-600 rounded-lg px-4 py-0 mx-2"
          style={{ paddingTop: meas2, paddingBottom: meas2 }}
        >
          Log In
        </button>
        <button
          className="border-orange-600 bg-orange-600 text-white rounded-lg px-4 mx-2"
          style={{ paddingTop: meas2, paddingBottom: meas2 }}
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="text-orange-600" />
        ) : (
          <AiOutlineMenu size={30} className="text-orange-600" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-16 w-[100%] z-50 pt-6 pb-6 pl-3 scroll-m-80 bg-[#ffffff] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed z-50 top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        {/* <img className="h-6" src="images/logo1.png" alt="hey" /> */}

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 duration-300 hover:text-orange-600 cursor-pointer"
          >
            {item.text}
          </li>
        ))}

        <div className="flex flex-col">
          <button className="border-orange-600 rounded-lg px-4 py-2 mx-2 my-2 lg:my-0">
            Log In
          </button>
          <button className="border-orange-600 bg-orange-600 text-white rounded-lg px-4 py-2 mx-2 my-2 lg:my-0">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;

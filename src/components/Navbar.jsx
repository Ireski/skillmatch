const Navbar = () => {
  return (
    <div className="nav flex flex-row items-center justify-between py-4 lg:px-20 px-4">
      <img className="h-6" src="images/logo1.png" alt="hey" />
      <div className="-mr-44 hidden lg:block">
        <a className="mx-3 text-base" href="#">
          Skill Match <i className="bx bx-chevron-down"></i>
        </a>
        <a className="mx-3 text-base" href="#">
          Services <i className="bx bx-chevron-down"></i>
        </a>
        <a className="mx-3 text-base" href="#">
          Find Talent
        </a>
        <a className="mx-3 text-base" href="#">
          Blog
        </a>
        <a className="mx-3 text-base" href="#">
          Become a freelancer
        </a>
      </div>
      <div className="hidden lg:block">
        <button className="border-orange-600 rounded-lg px-4 py-2 mx-2">
          Log In
        </button>
        <button className="border-orange-600 bg-orange-600 text-white rounded-lg px-4 py-2 mx-2">
          Sign Up
        </button>
      </div>
      <i className="bx bx-menu text-orange-600 text-4xl lg:hidden block"></i>
    </div>
  );
};

export default Navbar;

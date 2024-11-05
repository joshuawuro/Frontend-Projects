import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Close the mobile menu if the screen width is greater than or equal to 768px
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="flex justify-between items-center h-24 max-w-[1240px] m-auto">
        <Link to="/">
          <img className="w-10" src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link
              to="/"
              className="px-3 text-[--Grayish-blue] hover:text-[--Soft-red]"
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/new"
              className="px-3 text-[--Grayish-blue] hover:text-[--Soft-red]"
            >
              New
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/popular"
              className="px-3 text-[--Grayish-blue] hover:text-[--Soft-red]"
            >
              Popular
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/trending"
              className="px-3 text-[--Grayish-blue] hover:text-[--Soft-red]"
            >
              Trending
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              to="/categories"
              className="pl-3 text-[--Grayish-blue] hover:text-[--Soft-red]"
            >
              Categories
            </Link>
          </li>
        </ul>

        {/* TOOGLE MENU AND CLOSE HUMBURGER MENU */}
        <div onClick={handleNav} className="md:hidden z-20 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Overlay */}

        {nav && (
          <div
            onClick={handleNav}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          ></div>
        )}

        {/* MOBILE MODE */}

        <section
          className={`fixed top-0 right-0 w-[75%] h-full bg-[--off-white] z-10 transition-transform duration-300 ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="mt-[6rem]">
            <li className="py-4">
              <Link
                to="/"
                className="text-[--very-dark-blue] text-xl  hover:text-[--Soft-red] pl-10   pr-96 py-2"
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/new"
                className="text-[--very-dark-blue] text-xl hover:text-[--Soft-red] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                New
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/popular"
                className="text-[--very-dark-blue] text-xl hover:text-[--Soft-red] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                Popular
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/trending"
                className="text-[--very-dark-blue] text-xl hover:text-[--Soft-red] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                Trending
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/categories"
                className="text-[--very-dark-blue] text-xl hover:text-[--Soft-red] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                Categories
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Navbar;

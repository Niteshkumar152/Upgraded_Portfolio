import { Link } from "react-router-dom";
import { FaAlignJustify, FaHome } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <nav
      className={`
      fixed
      top-0
      z-50
          font-mono
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          ${menuActive ? "slideDown" : ""}
        `}
    >
      <div className="fade-in">
        <Link to="/" className="cursor-pointer">
          <FaHome className="h-6 w-6 hover:text-primary" />
        </Link>
      </div>

      <FaAlignJustify
        className="h-6 w-6 cursor-pointer md:hidden block hover:text-primary"
        onClick={() => setMenuState(!menuActive)}
      />

      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          !menuActive ? "hidden" : ""
        }`}
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <Link
              to="/"
              className="md:p-4 py-2 block hover:text-primary slide-left-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="md:p-4 py-2 block hover:text-primary slide-left-3"
            >
              Experience
              <div className="border-auto border-black fade-in w-20"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="md:p-4 py-2 block hover:text-primary slide-left-4"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="md:p-4 py-2 block hover:text-primary slide-left-5"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

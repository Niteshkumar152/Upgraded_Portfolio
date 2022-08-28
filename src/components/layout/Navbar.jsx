import { FaAlignJustify, FaHome } from "react-icons/fa";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

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
        <a href="/" className="cursor-pointer">
          <FaHome className="h-6 w-6 hover:text-primary" />
        </a>
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
        {window.location.pathname === "/custom-github-page" ? (
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {" "}
            <li>
              <Scroll
                to="about-section-github-page"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-2 cursor-pointer"
              >
                About
              </Scroll>
            </li>{" "}
            <li>
              <Scroll
                to="github-page-respositories"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-3 cursor-pointer"
              >
                Respositories
              </Scroll>
            </li>
          </ul>
        ) : window.location.pathname === "/all-projects-page" ? (
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {" "}
            <li>
              <Scroll
                to="all-projects-page"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-2 cursor-pointer"
              >
                Projects
              </Scroll>
            </li>
          </ul>
        ) : (
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Scroll
                to="about-section"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-2 cursor-pointer"
              >
                About
              </Scroll>
            </li>
            <li>
              <Scroll
                to="experience-section"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-3 cursor-pointer"
              >
                Experience
              </Scroll>
            </li>
            <li>
              <Scroll
                to="projects-section"
                smooth={true}
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-4 cursor-pointer"
              >
                Projects
              </Scroll>
            </li>
            <li>
              <label
                htmlFor="my-modal-3"
                onClick={() => setMenuState(false)}
                className="md:p-4 py-2 block hover:text-primary slide-left-5 cursor-pointer"
              >
                Contact
              </label>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

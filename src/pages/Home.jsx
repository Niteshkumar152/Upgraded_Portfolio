import Typewriter from "typewriter-effect";
import heroImg from "../components/layout/assets/hero_image.png";
import heroMobileImg from "../components/layout/assets/hero_mobile_image.png";
import { FaAddressBook, FaDownload } from "react-icons/fa";
import Contact from "../components/Contact";
import { About } from "../components/About";
import Delayed from "../components/Delayed";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-8 mt-14 slideDown">
        <div className="col-span-8 md:col-span-5 m-auto">
          <div className="p-2">
            <div className="mobile-hero-image md:hidden">
              <img src={heroMobileImg} alt="hero-mobile-img" />
            </div>
            <h2 className="text-center text-xl md:text-3xl cursor-default">
              Hey There <span className="wave">👋</span>
            </h2>
            <h1 className="text-center text-5xl md:text-6xl cursor-default">
              I'm Nitesh
            </h1>

            <div className="text-center text-xl md:text-2xl cursor-default font-sans italic">
              <Typewriter
                options={{
                  strings: ["Welcome to my Portfolio ..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="px-2 py-2 md:mx-0 flex">
            <label
              for="my-modal-3"
              className="btn modal-button text-xs md:text-sm hover:bg-primary"
            >
              <FaAddressBook className="mr-2" />
              contact me
            </label>
            <button className="btn text-xs text-black hover:text-white ml-2 md:text-sm bg-white hover:bg-primary">
              <FaDownload className="mr-2" />
              <a href="https://drive.google.com/file/d/1cJXkfB6IXMLtIwtR4xioM4KftnsoXCla/view?usp=sharing">
                download cv
              </a>
            </button>
          </div>
          <Contact />
        </div>

        <div className="mt-0 col-span-3 hidden md:block">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
      <Delayed waitBeforeShow={1300} showSpinner={false}>
        <About />
      </Delayed>
      <Delayed waitBeforeShow={1500} showSpinner={false}>
        <Footer />
      </Delayed>
    </div>
  );
}

export default Home;

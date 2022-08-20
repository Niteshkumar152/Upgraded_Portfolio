import Typewriter from "typewriter-effect";
//import socialLinks from "../constants/social_links";
import heroImg from "../components/layout/assets/98636-coding.gif";

function Home() {
  return (
    <div className="grid grid-cols-8 py-14 md:mt-0 bg-purple">
      <div className="col-span-8 md:col-span-5 m-auto">
        <div className="p-2">
          <h2 className="text-xl md:text-3xl cursor-default">
            Hey There <span className="wave">👋</span>
          </h2>
          <h1 className="text-5xl md:text-6xl cursor-default">I'm Nitesh</h1>

          <Typewriter
            options={{
              strings: ["Welcome to my Portfolio ..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/*<div className="px-2 py-2 md:mx-0">
          <button
            to="/contact"
            className="btn text-xs md:text-sm hover:bg-purple-400"
          >
            contact me
          </button>
        </div>
        <div>
          <div className="px-2 py-2 flex">
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  className="mr-4 hover:text-purple-400 hover:bg-white"
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
          */}
      </div>

      <div className="mt-0 col-span-3 hidden md:block bg-white">
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
}

export default Home;

import Typewriter from "typewriter-effect";
import socialLinks from "../constants/social_links";
import heroImg from "../components/layout/assets/98636-coding.gif";

function Home() {
  return (
    <div className="grid grid-cols-8 mt-14 md:mt-0">
      <div className="col-span-8 md:col-span-5 m-auto">
        <div className="p-2">
          <h2 className="text-xl md:text-3xl">
            Hey There <span className="wave">👋</span>
          </h2>
          <h1 className="text-5xl md:text-6xl">I'm Nitesh</h1>
          <h4 className="text-sm md:text-sm">
            Software Developer at{" "}
            <span className="text-red-500 font-bold">ORACLE</span> Corporation
          </h4>
          <Typewriter
            options={{
              strings: ["Welcome to my Portfolio ..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="px-2 py-2 md:mx-0">
          <button to="/contact" className="btn text-xs md:text-sm">
            contact me
          </button>
        </div>
        <div>
          <div className="px-2 py-2 flex">
            {socialLinks.map((link) => {
              return (
                <a href={link.url} key={link.id} className="mr-4">
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-0 col-span-3 hidden md:block bg-white">
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
}

export default Home;

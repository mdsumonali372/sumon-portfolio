import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resume from "../../../../assets/resume.pdf";
import sumonImg from "../../../../assets/sumon1.png";
import NavBar from "../../../Shared/NavBar/NavBar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/mdsumonali372", "_blank");
  };
  const handleFaceBookClick = () => {
    window.open("https://www.facebook.com/mdsumonalii372", "_blank");
  };
  const handleFaInstagramClick = () => {
    window.open("https://www.instagram.com/mdsumonali372/", "_blank");
  };
  return (
    <>
      <div className="hero-image overflow-hidden">
        <NavBar></NavBar>
        <div className="container mx-auto h-full px-5 md:px-0">
          <div className="flex justify-between items-center h-full">
            <div className="md:w-2/3" data-aos="zoom-in" data-aos-duration="5000">
              <h1 className="font-bold text-[#050E6B] text-3xl md:text-6xl">
                I'm Sumon
              </h1>
              <TypeAnimation
                className="text-[#3B82F6] text-2xl md:text-6xl font-bold"
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Web Developer",
                  1000,
                  "React Developer",
                  1000,
                  "Mern Stack Developer",
                  1000,
                  "Front End Developer",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <p className="mt-3 font-medium">
                I'm a MERN stack developer. I'm currently working react,
                express, next js. Clean hand code my power. I'm building modern
                and stylish website.
              </p>
              <div className="mt-3 flex gap-4">
                <FaGithub
                  className="cursor-pointer text-3xl text-[#050E6B] hover:scale-150 transition-all"
                  onClick={handleGithubClick}
                ></FaGithub>
                <FaFacebook
                  className="cursor-pointer text-3xl text-[#050E6B] hover:scale-150 transition-all"
                  onClick={handleFaceBookClick}
                ></FaFacebook>
                <FaInstagramSquare
                  className="cursor-pointer text-3xl text-[#050E6B] hover:scale-150 transition-all"
                  onClick={handleFaInstagramClick}
                ></FaInstagramSquare>
              </div>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="btn bg-[#050E6B] text-white hover:text-black"
                >
                  Get Started
                </a>
                <a
                  href={resume}
                  download
                  className="btn bg-[#3B82F6] text-white hover:text-black ml-5"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-4/12 shadow-lg rounded-[50px] hidden md:block" data-aos="flip-up" data-aos-duration="5000">
              <img className="w-full" src={sumonImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* about me */}
      <div>
        <About></About>
      </div>
      {/* services */}
      <div className="bg-[#F6F6FD]">
        <Services></Services>
      </div>
      {/* projects */}
      <div>
        <Projects></Projects>
      </div>
      {/* contact */}
      <div className="bg-[#F6F6FD]">
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;

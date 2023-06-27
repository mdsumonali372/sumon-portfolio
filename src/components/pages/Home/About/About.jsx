import bootstrapIcon from "../../../../assets/bootstrap.svg";
import expressIcon from "../../../../assets/express.svg";
import firebaseIcon from "../../../../assets/firebase-icon.svg";
import gitIcon from "../../../../assets/git-plain.svg";
import htmlIcon from "../../../../assets/html5.svg";
import wordpressIcon from "../../../../assets/icons8-wordpress.svg";
import javaScriptIcon from "../../../../assets/javascript.svg";
import mongodbIcon from "../../../../assets/mongodb-plain.svg";
import nodejsIcon from "../../../../assets/nodjes.svg";
import reactIcon from "../../../../assets/react-icon.svg";
import tailwindIcon from "../../../../assets/tailwindcss.svg";
import SectionSubTitle from "../../../Shared/SectionSubTitle/SectionSubTitle";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
const About = () => {
  const icons = [
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Express", icon: expressIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Git", icon: gitIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "WordPress", icon: wordpressIcon },
    { name: "JavaScript", icon: javaScriptIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
  ];
  return (
    <div id="about" className="py-24 container mx-auto px-5 md:px-0">
      <SectionTitle title="About Me"></SectionTitle>
      <div>
        <SectionSubTitle subTitle="About Of Sumon"></SectionSubTitle>
        <p className="text-[20px] text-[#6b7280] mt-3">
          I'm a MERN stack developer skilled in building web applications using
          MongoDB, Express.js, React, and Node.js. With expertise in both
          front-end and back-end development, I excel at creating dynamic and
          interactive web solutions.
        </p>
        <SectionSubTitle subTitle="Technologies and Tools"></SectionSubTitle>
        <p className="text-[20px] text-[#6b7280] mt-3">
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant websites for
          smartphones, tablets, and desktops.{" "}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {icons.map((icon, index) => (
            <div
              className="flex items-center justify-center gap-3 py-5 bg-[#F6F6FD] rounded-3xl" data-aos="fade-up"
              data-aos-duration="3000"
              key={index}
            >
              <img className="w-12" src={icon.icon} alt="" />
              <h4>{icon.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

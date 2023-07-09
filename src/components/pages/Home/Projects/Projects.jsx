import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import p2 from "../../../../assets/Banglar-Food.png";
import p1 from "../../../../assets/Dance-Learning-School.png";
import p3 from "../../../../assets/Home-Animal-Toys.png";
import SectionSubTitle from "../../../Shared/SectionSubTitle/SectionSubTitle";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Flip back to the front side
    } else {
      setActiveIndex(index); // Flip to the back side
    }
  };

  const projects = [
    {
      name: "Dance Learning School",
      features: [
        "Student can create an account and see the class",
        "Student can enrolled in their class after payment",
        "Admin can create an instructor here. Then instructors can add their classes.",
      ],
      technologies: "React JS, Express JS, firebase, vercel, tailwind",
      image: p1,
      githubClientPath:
        "https://github.com/mdsumonali372/summer-camp-school/tree/main/dance-learning-school-client",
      githubServerPath:
        "https://github.com/mdsumonali372/summer-camp-school/tree/main/dance-learning-school-server",
      path: "https://dance-learning-school.web.app/",
    },
    {
      name: "Food Receipe",
      features: [
        "All cheap their shot description",
        "A new user can be create an account login and logout sytem",
      ],
      technologies: "React JS, Express JS, firebase, vercel, tailwind",
      image: p2,
      githubClientPath:
        "https://github.com/mdsumonali372/Receipe-food/tree/main/banglar-food",
      githubServerPath:
        "https://github.com/mdsumonali372/Receipe-food/tree/main/banglar-food-server",
      path: "https://food-recipe-1f79b.web.app/",
    },
    {
      name: "Toy Marketplace",
      features: [
        "A new user create an account and add e toy",
        "After add the and see the only own toy how many he added my toys page",
        "any user can see the how many toy the website has",
      ],
      technologies: "React JS, Express JS, firebase, vercel, tailwind",
      image: p3,
      githubClientPath:
        "https://github.com/mdsumonali372/toy-marketplace/tree/main/toy-marketplace",
      githubServerPath:
        "https://github.com/mdsumonali372/toy-marketplace/tree/main/toy-marketplace-server",
      path: "https://toy-marketplace-78e88.web.app/",
    },
  ];

  return (
    <div id="projects" className="py-24 container mx-auto px-5 md:px-0">
      <SectionTitle title="Projects"></SectionTitle>
      <SectionSubTitle subTitle="Some of my personal projects"></SectionSubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-duration="3000">
            <ReactCardFlip
              isFlipped={activeIndex === index}
              flipDirection="vertical"
            >
              {/* front part flip */}
              <div className="bg-[#F6F6FD] rounded-2xl h-full">
                <div className="h-[300px] overflow-auto">
                  <Link to={project.path}>
                    <img className="rounded-2xl" src={project.image} alt="" />
                  </Link>
                </div>
                <div className="mt-2 p-5">
                  <Link to={project.path}>
                    <p className="font-bold text-[#050E6B] text-2xl">
                      {project.name}
                    </p>
                  </Link>
                  <div className="flex justify-between mt-4">
                    <div className="flex gap-3">
                      <Link to={project.githubClientPath}>
                        <FaGithub className="text-[#050E6B] text-2xl"></FaGithub>
                      </Link>
                      <Link to={project.githubServerPath}>
                        <FaLink className="text-[#050E6B] text-2xl"></FaLink>
                      </Link>
                      <Link to={project.path}>
                        <FaExternalLinkAlt className="text-[#050E6B] text-2xl"></FaExternalLinkAlt>
                      </Link>
                    </div>
                    <button
                      className="text-[#6b7280] font-medium"
                      onClick={() => handleClick(index)}
                    >
                      Click details
                    </button>
                  </div>
                </div>
              </div>
              {/* back part flip */}
              <div className="bg-[#F6F6FD] rounded-lg p-5 h-full">
                <div>
                  <p className="font-bold text-xl">
                    Projects Name:{" "}
                    <span className="text-[#050E6B] text-xl">
                      {project.name}
                    </span>
                  </p>
                  <p className="font-bold text-xl my-3">
                    Technolgies used:{" "}
                    <span className="text-[#050E6B] text-xl">
                      {project.technologies}
                    </span>
                  </p>
                  <p className="font-bold text-xl">Features:</p>
                  {project.features.map((feature, index) => (
                    <li className="text-xl text-[#050E6B] mt-2" key={index}>
                      {feature}
                    </li>
                  ))}
                </div>
                <div className="text-right mt-2">
                  <button className="btn" onClick={() => handleClick(index)}>
                    <FaArrowLeft></FaArrowLeft> Back
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

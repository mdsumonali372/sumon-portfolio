import apiIcons from "../../../../assets/api.png";
import codingIcons from "../../../../assets/coding.png";
import responsiveIcons from "../../../../assets/responsive.png";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Services = () => {
  const services = [
    {
      title: "Web Application Development",
      description:
        "Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. A web application (web app) does not need to be downloaded and is instead accessed through a network.",
      image: codingIcons,
    },
    {
      title: "Responsive Design",
      description:
        "Responsive web design, or RWD, is a design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch. Responsive web design isn't a separate technology — it is an approach.",
      image: responsiveIcons,
    },
    {
      title: "Back End Development",
      description:
        "What is back-end development? Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.",
      image: apiIcons,
    },
  ];
  return (
    <div id="services" className="py-24 container mx-auto px-5 md:px-0">
      <SectionTitle title="Services"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-lg bg-white p-10 text-center rounded-2xl hover:scale-90 transition-all" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <img
                className="block mx-auto"
                src={service.image}
                alt={service.title}
              ></img>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-[#6b7280] mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

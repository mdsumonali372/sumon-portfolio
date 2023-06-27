import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Contact = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/mdsumonali372", "_blank");
  };
  const handleFaceBookClick = () => {
    window.open("https://www.facebook.com/mdsumonalii372", "_blank");
  };
  const handleFaInstagramClick = () => {
    window.open("https://www.instagram.com/mdsumonali372/", "_blank");
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9z4jis",
        "template_xh5o6p8",
        form.current,
        "YiPaIw4EhC_dcrm2v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="py-24 container mx-auto px-5 md:px-0">
      <SectionTitle title="Contact"></SectionTitle>
      <div className="md:flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/2">
          <p className="font-bold text-xl md:text-3xl">
            Email:
            <a
              className="text-[#050E6B] text-xl md:text-2xl"
              href="mailto:mdsumonali026@gmail.com"
            >
              mdsumonali026@gmail.com
            </a>
          </p>
          <p className="font-bold text-xl md:text-3xl my-3">
            Phone:
            <a
              className="text-[#050E6B] text-xl md:text-2xl"
              href="tel:01750565256"
            >
              8801750565256
            </a>
          </p>
          <p className="font-bold text-xl md:text-3xl">
            Address:
            <span className="text-[#050E6B] text-xl md:text-2xl">
              Natore, Bangladesh
            </span>
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
        </div>
        <div className="md:w-1/2 mx-auto mt-10 md:mt-0">
          <h4 className="text-center text-[#050E6B] text-2xl font-bold">
            Connect with me
          </h4>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label className="text-[#050E6B] block mb-2">Name</label>
              <input
                className="w-full pl-2 h-10 rounded-lg"
                type="text"
                name="from_name"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label className="text-[#050E6B] block mb-2 mt-2">Email</label>
              <input
                className="w-full pl-2 h-10 rounded-lg"
                type="email"
                name="from_email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label className="text-[#050E6B] block mb-2 mt-2">Message</label>
              <textarea
                className="w-full pl-2 h-28 pt-2 rounded-lg"
                name="message"
                placeholder="Enter Message"
              />
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-between items-center">
              <a
                className="font-bold underline"
                href="mailto:mdsumonali026@gmail.com"
              >
                Send Me Directly Email
              </a>
              <input
                className="btn bg-[#3B82F6] text-white hover:text-black w-64 mb-5 md:mb-0"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

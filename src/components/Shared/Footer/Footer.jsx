const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#050E6B] py-5 text-center text-white">
     <p>Design by Sumon &copy; {currentYear}</p>
    </div>
  );
};

export default Footer;

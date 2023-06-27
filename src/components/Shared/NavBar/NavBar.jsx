import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "Projects", path: "#projects" },
    { label: "Contact", path: "#contact" },
  ];
  return (
    <nav className="fixed w-full bg-[#F6F6FD] h-20 flex items-center z-30">
      <div className="container mx-auto flex justify-between items-center px-5 md:px-0 relative">
        <div className="text-[#050E6B] text-5xl font-bold">
          <Link to="/">Sumon</Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu} >
        <span>
          {
            open === true ? <FaTimes className="text-2xl"></FaTimes>: <FaBars className="text-2xl"></FaBars>
          }
        </span>
        </div>
       <div className={`absolute md:static md:bg-transparent transition-all bg-white rounded-lg md:rounded-none p-5 md:p-0 top-full -right-3/4 ${open === true ? 'right-0': ''}`}>
       <div className="flex md:flex-row flex-col gap-4 font-bold text-[#050E6B]">
          {links.map((link, index) => (
            <a key={index} href={link.path} onClick={handleMenuItemClick}>
              {link.label}
            </a>
          ))}
        </div>
       </div>
      </div>
    </nav>
  );
};

export default NavBar;

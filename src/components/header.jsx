import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-slate-900 h-20 px-6 md:px-12 lg:px-24 fixed top-0 z-50">
        <img src="images/Logo.png" alt="logo" className="h-16 w-auto object-contain rounded-xl" />
        <div className="hidden md:flex gap-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400"> Home </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400"> About </Link>
          <Link to="/properties" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400"> Properties </Link>
          <Link to="/Team" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400"> Our Team </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400"> Contact </Link>
        </div>
        <Link to="/Login" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl hidden md:flex lg:flex" >  Get Quote </Link>
        

        <button
          className="lg:hidden md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6 mt-16">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">About</Link>
          <Link to="/Properties" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">Properties</Link>
          <Link to="/Team" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">Our Team</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">Contact</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-black px-6 py-3 rounded-2xl" > Contact Us </Link>
        </div>
      )}
    </div>
  );
}
export default Header;

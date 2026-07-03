import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t">
      <div className="w-full px-6 md:px-12 lg:px-24 py-12 grid gap-14 md:grid-cols-2 lg:grid-cols-4"> 
        <div>
          <h2 className="text-3xl font-bold text-white mb-4"> Prime Property </h2>
          <p className="text-sm leading-6 text-slate-400"> Prime Properties is dedicated to helping you find the perfect home, apartment, or investment property. With trusted agents, premium listings, and personalized support, we make buying, selling, and renting real estate simple, secure, and stress-free. </p>
        </div> 
        <div className="lg:ml-16">
          <h3 className="text-white text-xl font-semibold mb-4"> Quick Links </h3>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-slate-400 hover:text-amber-500"> Home </Link>
            <Link to="/about" className="text-slate-400 hover:text-amber-500"> About </Link>
            <Link to="/properties" className="text-slate-400 hover:text-amber-500"> Properties </Link>
            <Link to="/Team" className="text-slate-400 hover:text-amber-500"> Our Team </Link>
            <Link to="/contact" className="text-slate-400 hover:text-amber-500"> Contact </Link>
          </div>
        </div>
        <div className="lg:ml-12">
          <h3 className="text-white text-xl font-semibold mb-4"> Contact Us </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-400" />
              <p className="text-slate-400">123 Main Street, Karachi</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <p className="text-slate-400">+92 300 1234567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <p className="text-slate-400">info@primeproperties.com</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-white text-xl font-semibold mb-4"> Follow Us </h3>
          <div className="flex gap-4">
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 transition"> <FaFacebookF /> </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 transition" > <FaInstagram /> </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 transition" > <FaTwitter /> </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm">
        <span className="text-amber-400">© 2026 Prime Properties.</span> All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
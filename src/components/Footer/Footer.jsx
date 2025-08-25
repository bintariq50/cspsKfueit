import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section: Logo + Links */}
      <div className="max-w-7xl mx-auto  px-6 py-8 flex flex-col md:flex-row   justify-between md:items-start items-center gap-8">
        {/* Logo */}
        <div className="flex items-center justify-start md:justify-center bg-white">
          <Logo  />
        </div>

        {/* Links */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-lg font-bold text-[#F2C200] mb-2">Quick Links</h2>
          <ul className="flex flex-col md:flex-col md:items-start items-center space-y-2">
            <li>
              <Link to="/about" className="hover:text-[#F2C200]">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-[#F2C200]">
                Events
              </Link>
            </li>
            <li>
              <Link to="/members" className="hover:text-[#F2C200]">
                Members
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F2C200]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section: Socials + Developed */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center space-y-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-5 h-5 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 hover:text-sky-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Developed With Love */}
        <p className="text-sm text-gray-400 text-center">
          Developed with ❤️ by{" "}
          <span className="text-white">
            <Link to="/members/10">Hamza Naeem</Link>
          </span>{" "}
          and{" "}
          <span className="text-white">
            <Link to="/members/13">Muhammad Bin Tariq</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

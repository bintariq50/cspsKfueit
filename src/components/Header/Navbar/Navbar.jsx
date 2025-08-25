import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="relative">
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className="text-black hover:text-[#F2C200] transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden text-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-[#1D2D5F] shadow-lg rounded-lg flex flex-col p-4 gap-3 z-50">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className="hover:text-[#F2C200] transition block"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

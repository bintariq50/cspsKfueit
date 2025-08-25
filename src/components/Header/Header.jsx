import Navbar from "./Navbar/Navbar";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 text-white px-6 py-3 flex justify-between items-center z-50 shadow-md">
      <Logo />
      {/* Navbar Links */}
      <Navbar />
    </header>
  );
}

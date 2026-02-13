import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowLeftRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B1C2D] border-b border-white/5 px-6 md:px-10 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="text-[#9B4D5E]" size={22} />
          <span className="text-xl font-bold text-[#E5E7EB]">
            SkillSwap
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#CBD5E1] font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-[#9B4D5E] pb-1"
                : "hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink to="/browse" className="hover:text-white transition">
            Browse Skills
          </NavLink>

          <NavLink to="/dashboard" className="hover:text-white transition">
            Dashboard
          </NavLink>

          <NavLink to="/messages" className="hover:text-white transition">
            Messages
          </NavLink>

          <Link to="/login" className="hover:text-white transition">
            Log in
          </Link>

          <Link
            to="/register"
            className="bg-[#9B4D5E] text-white px-4 py-2 rounded-lg
                       hover:bg-[#B35F73] transition shadow-md"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[#CBD5E1] font-medium">

          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/browse" onClick={() => setIsOpen(false)}>
            Browse Skills
          </NavLink>

          <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/messages" onClick={() => setIsOpen(false)}>
            Messages
          </NavLink>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            Log in
          </Link>

          <Link
            to="/register"
            className="bg-[#9B4D5E] text-white px-4 py-2 rounded-lg text-center
                       hover:bg-[#B35F73] transition"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}

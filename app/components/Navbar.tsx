"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5  left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl  backdrop-blur-md border border-[#81289D]/20 rounded-full px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/final-logo.png" alt="logo" className="w-44" />
        
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
        <li className="cursor-pointer hover:text-purple-400">Home</li>
        <li className="cursor-pointer hover:text-purple-400">About</li>
        <li className="cursor-pointer hover:text-purple-400">Services</li>
        <li className="cursor-pointer hover:text-purple-400">Blog</li>
        <li className="cursor-pointer hover:text-purple-400">Pages</li>
        <li className="cursor-pointer hover:text-purple-400">Pricing</li>
        <li className="font-semibold text-white hover:text-white">
          <button className="bg-white/10 hover:bg-[#81289D] hover:border-[#81289D] transition-all border border-[#ba68d3]  px-4 py-2 rounded-full">
            Try Free Trial
          </button>
        </li>
        <li>
          <button className="relative px-6 py-2 font-semibold text-white rounded-full overflow-hidden group bg-purple-600 shadow-lg">
  {/* Animated Gradient Shine */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a600ff] via-[#ee34ff] to-[#703192] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left blur-sm opacity-80 z-0" />

  {/* Glitter Stars on Hover */}
  <span className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 group-hover:animate-glitterStars" />

  {/* Text */}
  <span className="relative z-20">Contact Us</span>
</button>



        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden text-white">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

     {/* Mobile Menu Panel */}
<div
  className={`fixed top-0 -left-32 h-full w-3/4 max-w-xs rounded-full text-white z-50 transform ${
    menuOpen ? "translate-x-32" : "-translate-x-full"
  } transition-transform duration-500 ease-in-out shadow-2xl lg:hidden`} 
>
  <div className="flex items-center justify-between px-4 py-4 bg-[#3C1046] text-white border-b border-white/10">
    <button onClick={() => setMenuOpen(false)}>
      <X size={28} />
    </button>
  </div>

  <ul className="flex flex-col p-4 gap-4 text-lg bg-[#72258C]/90 font-medium">
    <li className="hover:text-purple-400">Home</li>
    <li className="hover:text-purple-400">About</li>
    <li className="hover:text-purple-400">Services</li>
    <li className="hover:text-purple-400">Blog</li>
    <li className="hover:text-purple-400">Pages</li>
    <li className="hover:text-purple-400">Pricing</li>
    <li>
      <button className="bg-purple-600 w-full mt-4 px-4 py-2 rounded-full font-semibold hover:bg-purple-700">
        Try Free Trial
      </button>
    </li>
    <li>
      <button className="bg-gradient-to-r from-purple-500 to-purple-700 w-full px-4 py-2 rounded-full font-semibold hover:opacity-90">
        Contact Us
      </button>
    </li>
  </ul>
</div>


      {/* Backdrop when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

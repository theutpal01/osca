'use client'

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-black/[0.04] border-b border-white/[0.08]">
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight italic text-[#F0FFF2] font-serif">
          osca
        </div>

        <div className="hidden lg:flex items-center gap-20 text-[13px] font-normal text-[#F0FFF2]">
          <a href="#home" className="text-white transition-colors duration-200">Home</a>
          <a href="#how-it-works" className="hover:text-white transition-colors duration-200 whitespace-nowrap">How it works</a>
          <a href="#" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#benefits" className="hover:text-white transition-colors duration-200">Features</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/dashboard" className="bg-[#3CAE6B] text-[#F0FFF2] font-medium px-4 md:px-6 py-2 rounded-full text-xs md:text-sm hover:bg-emerald-600 transition-all duration-200">
            Sign up
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden text-[#F0FFF2] focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/[0.08] px-6 py-5 flex flex-col gap-4">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="text-white text-[13px] font-normal transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setIsOpen(false)}
            className="text-[#F0FFF2] hover:text-white text-[13px] font-normal transition-colors duration-200 whitespace-nowrap"
          >
            How it works
          </a>
          <a 
            href="#" 
            onClick={() => setIsOpen(false)}
            className="text-[#F0FFF2] hover:text-white text-[13px] font-normal transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#benefits" 
            onClick={() => setIsOpen(false)}
            className="text-[#F0FFF2] hover:text-white text-[13px] font-normal transition-colors duration-200"
          >
            Features
          </a>
        </div>
      )}
    </div>
  );
}
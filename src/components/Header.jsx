import React, { useState } from "react";
import { MapPin, Clock, HeartHandshake, Menu, X } from "lucide-react";

export default function Header({ onOpenGiving, onOpenDeaconate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-blue-950 text-slate-200 text-xs py-2.5 px-4 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-blue-950 font-black px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
              OKBC IGBOHO
            </span>
            <span className="font-medium text-slate-100">
              Welcome to Okegboho Baptist Church, Igboho (Cathedral of Mercy)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Igboho, Oyo State, Nigeria
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-yellow-400" /> Sun: 8:00 AM
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-blue-900 border-b border-yellow-400/40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <img 
              src="/OKBC LOGO_2.jpg" 
              alt="Okegboho Baptist Church Logo" 
              className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover shadow-md group-hover:scale-105 transition-transform" 
            />
            <div>
              <h1 className="font-black text-white text-base sm:text-lg tracking-tight group-hover:text-yellow-400 transition-colors">
                OKEGBOHO BAPTIST CHURCH
              </h1>
              <p className="text-xs text-yellow-300/90 font-medium tracking-wide">Igboho, Oyo State • Est. 1943</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-100">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About OKBC</a>
            <a href="#leadership" className="hover:text-yellow-400 transition-colors">Pastors</a>
            {/* Deaconate Trigger Link */}
            <button 
              onClick={onOpenDeaconate}
              className="hover:text-yellow-400 transition-colors font-semibold"
            >
              Deaconate
            </button>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="#auxiliaries" className="hover:text-yellow-400 transition-colors">Auxiliaries</a>
            <a href="#sermons" className="hover:text-yellow-400 transition-colors">Sermons</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors">Media Gallery</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGiving}
              className="px-4 py-2.5 rounded-xl bg-blue-950 text-yellow-400 font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition border border-yellow-400/40 flex items-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4 text-yellow-400" />
              <span>Give / Tithe</span>
            </button>
            <a 
              href="#services" 
              className="px-4 py-2.5 rounded-xl bg-yellow-400 text-blue-950 font-black text-xs uppercase tracking-wider hover:bg-yellow-300 transition shadow-md shadow-yellow-400/20 border border-yellow-300"
            >
              Worship With Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-blue-800 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-yellow-400/30 bg-blue-950 px-4 pt-2 pb-6 space-y-3 text-sm font-semibold text-slate-100">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">About OKBC</a>
            <a href="#leadership" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Pastors</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDeaconate(); }} 
              className="block py-2 hover:text-yellow-400 text-left w-full font-semibold"
            >
              Deaconate
            </button>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Services</a>
            <a href="#auxiliaries" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Auxiliaries</a>
            <a href="#sermons" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Sermons</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Media Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-yellow-400">Contact</a>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenGiving(); }}
              className="w-full text-center py-2.5 bg-yellow-400 text-blue-950 font-black rounded-xl text-xs uppercase"
            >
              Online Giving / Tithe
            </button>
          </div>
        )}
      </header>
    </>
  );
}
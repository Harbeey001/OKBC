import React, { useState } from "react";
import {
  Menu,
  X,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import okbcLogo from "../public/okbc-logo.png";

export default function Navbar({ onOpenGiving }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Pastor", href: "#pastor" },
    { name: "Leadership", href: "#leadership" },
    { name: "Services", href: "#services" },
    { name: "Sermons", href: "#sermons" },
    { name: "Auxiliaries", href: "#auxiliaries" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleGiving = () => {
    closeMenu();

    if (typeof onOpenGiving === "function") {
      onOpenGiving();
    }
  };

  const handleLogoClick = () => {
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          FIXED NAVBAR
      ====================================================== */}

      <header className="fixed top-0 left-0 right-0 z-[100]">

        <div className="bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="h-20 flex items-center justify-between gap-4">

              {/* =================================================
                  LOGO / BRAND
              ================================================== */}

              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center gap-3 group shrink-0 text-left"
                aria-label="Go to homepage"
              >

                <div className="relative">

                  {/* Glow */}

                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-400/30 transition-all duration-300" />

                  {/* Logo */}

                  <img
                    src={okbcLogo}
                    alt="Okegboho Baptist Church Logo"
                    className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-yellow-400/70 object-contain bg-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />

                </div>

                {/* Church Name */}

                <div className="hidden sm:flex flex-col">

                  <span className="text-white font-extrabold text-sm tracking-wide leading-tight">
                    OKEGBOHO BAPTIST CHURCH
                  </span>

                  <span className="text-yellow-400 text-[9px] font-semibold uppercase tracking-[0.2em] mt-1">
                    Cathedral of Mercy • Igboho
                  </span>

                </div>

              </button>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <nav
                className="hidden xl:flex items-center gap-0.5"
                aria-label="Main navigation"
              >

                {navLinks.map((link) => (

                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-2.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-300 hover:text-white transition-colors duration-200 group"
                  >

                    {link.name}

                    {/* Hover underline */}

                    <span className="absolute left-2.5 right-2.5 bottom-0 h-px bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                  </a>

                ))}

              </nav>

              {/* =================================================
                  RIGHT SIDE
              ================================================== */}

              <div className="flex items-center gap-2 sm:gap-3">

                {/* Give Button */}

                <button
                  type="button"
                  onClick={handleGiving}
                  className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-[10px] uppercase tracking-[0.1em] shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all duration-200 hover:-translate-y-0.5"
                >

                  <HeartHandshake className="w-4 h-4" />

                  Give

                </button>

                {/* Mobile Menu Button */}

                <button
                  type="button"
                  onClick={() =>
                    setIsMobileMenuOpen((previous) => !previous)
                  }
                  className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-200"
                  aria-label={
                    isMobileMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation"
                >

                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          id="mobile-navigation"
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="bg-slate-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

              <nav
                className="space-y-1"
                aria-label="Mobile navigation"
              >

                {navLinks.map((link, index) => (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-yellow-400 transition-all duration-200"
                  >

                    <div className="flex items-center gap-3">

                      <span className="text-[9px] font-black text-slate-600 group-hover:text-yellow-400/70 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {link.name}
                      </span>

                    </div>

                    <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />

                  </a>

                ))}

              </nav>

              {/* =================================================
                  MOBILE GIVING
              ================================================== */}

              <button
                type="button"
                onClick={handleGiving}
                className="sm:hidden mt-3 w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm transition-all duration-200"
              >

                <HeartHandshake className="w-4 h-4" />

                Give / Tithe

              </button>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}
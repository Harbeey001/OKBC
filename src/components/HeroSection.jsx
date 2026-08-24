import React from "react";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Play,
  MapPin,
  Church,
  ChevronDown,
} from "lucide-react";

import buildingImage from "../public/Building.jpg";
import { CHURCH_INFO } from "../data/churchData";

export default function HeroSection({ onOpenGiving }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src={buildingImage}
          alt="Okegboho Baptist Church - Cathedral of Mercy"
          className="w-full h-full object-cover object-center scale-[1.03] animate-[pulse_12s_ease-in-out_infinite]"
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />

        {/* Cinematic left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-slate-950/20 sm:bg-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-950/90 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* =====================================================
          DECORATIVE LIGHT
      ====================================================== */}

      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28">
        <div className="max-w-5xl">

          {/* =================================================
              HERITAGE BADGES
          ================================================== */}

          <div className="flex flex-wrap items-center gap-3 mb-7">

            {/* Church badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60 animate-ping" />

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
              </span>

              <span className="text-yellow-300 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase">
                {CHURCH_INFO.name}
              </span>
            </div>

            {/* Founded badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950/60 backdrop-blur-xl border border-white/10">
              <Church className="w-3.5 h-3.5 text-yellow-400" />

              <span className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Serving Since {CHURCH_INFO.foundedYear}
              </span>
            </div>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.88] tracking-[-0.04em]">
            CATHEDRAL

            <span className="block text-yellow-400 mt-3">
              OF MERCY
            </span>
          </h1>

          {/* =================================================
              SUBTITLE
          ================================================== */}

          <div className="mt-7 flex items-center gap-3">
            <div className="w-12 sm:w-16 h-px bg-yellow-400" />

            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/80">
              A Place of Grace • Faith • Hope
            </p>
          </div>

          {/* =================================================
              WELCOME MESSAGE
          ================================================== */}

          <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed">
            Welcome to a church family where Christ is exalted,
            lives are transformed, and every generation is encouraged
            to walk in faith, serve with love, and live for God's glory.
          </p>

          {/* =================================================
              2026 THEME CARD
          ================================================== */}

          <div className="mt-8 max-w-2xl">
            <div className="group relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-slate-950/55 backdrop-blur-xl border border-yellow-400/20 shadow-2xl">

              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400" />

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20">
                  <HeartHandshake className="w-5 h-5 text-slate-950" />
                </div>

                <div className="min-w-0">

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-yellow-400 font-black">
                      2026 Church Theme
                    </p>

                    <span className="w-1 h-1 rounded-full bg-yellow-400/50" />

                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                      {CHURCH_INFO.theme2026.watchword}
                    </span>
                  </div>

                  <p className="mt-1 text-base sm:text-lg font-black text-white">
                    {CHURCH_INFO.theme2026.title}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    "{CHURCH_INFO.theme2026.verseText}"
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CALL TO ACTION
          ================================================== */}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9">

            {/* Plan Visit */}
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-yellow-400/20"
            >
              Plan Your Visit

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sermons */}
            <button
              type="button"
              onClick={() => scrollTo("sermons")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-colors">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>

              Watch Sermons
            </button>

            {/* Give */}
            <button
              type="button"
              onClick={onOpenGiving}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-yellow-400/10 backdrop-blur-md border border-yellow-400/30 text-yellow-400 font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-4 h-4" />

              Give
            </button>
          </div>

          {/* =================================================
              QUICK INFORMATION
          ================================================== */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">

            {/* Sunday Worship */}
            <div className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.09] hover:border-yellow-400/20 transition-all duration-300">

              <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-yellow-400/10 border border-yellow-400/10">
                <CalendarDays className="w-5 h-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black">
                  Sunday Worship
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  7:00 AM – 10:00 AM
                </p>

                <p className="text-[10px] text-slate-500 mt-0.5">
                  English • Sunday School • Main Service
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.09] hover:border-yellow-400/20 transition-all duration-300">

              <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-yellow-400/10 border border-yellow-400/10">
                <MapPin className="w-5 h-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black">
                  Location
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  Igboho, Oyo State
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.09] hover:border-yellow-400/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">

              <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-yellow-400/10 border border-yellow-400/10">
                <HeartHandshake className="w-5 h-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black">
                  Our Mission
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  Worship • Serve • Transform
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM HERITAGE STRIP
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">

          <div className="flex items-center justify-between">

            <div className="hidden sm:flex items-center gap-3">
              <div className="w-8 h-px bg-yellow-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40">
                {CHURCH_INFO.tagline}
              </span>
            </div>

            {/* Scroll indicator */}
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="mx-auto sm:mx-0 sm:ml-auto flex items-center gap-2 text-white/40 hover:text-yellow-400 transition-colors duration-300"
              aria-label="Scroll to learn more"
            >
              <span className="text-[8px] uppercase tracking-[0.35em] font-bold">
                Explore
              </span>

              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
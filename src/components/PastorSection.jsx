import React from "react";
import {
  Quote,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  Cross,
} from "lucide-react";

import PastorImage from "../public/092103e2d22144dd80325082e2c7fb47.jpg";

export default function PastorSection() {
  const pastorData = {
    name: "Rev'd Dr. Matthew Ade' Eniola, JP",
    title: "Lead Pastor / Under-Shepherd",

    verse:
      "Feed the flock of God which is among you, taking the oversight thereof, not by constraint, but willingly; not for filthy lucre, but of a ready mind.",

    reference: "1 Peter 5:2 (KJV)",

    welcomeMessage: [
      `Peace be unto you in the precious name of our Lord and Savior, Jesus Christ. It is my utmost joy to welcome you to the official online portal of Okegboho Baptist Church, Igboho — the Cathedral of Mercy.`,

      `Whether you are seeking a church home, searching for spiritual guidance, or desiring to know more about Jesus Christ, our doors and hearts are wide open to you. We invite you to join us in vibrant worship as we grow together in faith, love, and divine impact.`,
    ],

    // =====================================================
    // OFFICIAL CHURCH CONTACT DETAILS
    // =====================================================

    phone: "08118677610",
    whatsapp: "2348118677610",
    email: "okegbohobaptistchurch.official@gmail.com",
  };

  return (
    <section
      id="pastor"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-950/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="max-w-3xl mb-14 lg:mb-16">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-yellow-400" />

            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-yellow-400">
              Pastoral Office
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.02] tracking-tight">
            Meet our

            <span className="block text-yellow-400 mt-2">
              Lead Pastor.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            A shepherd committed to faithfully teaching God's Word,
            nurturing God's people, and advancing the mission of the
            Cathedral of Mercy.
          </p>

        </div>

        {/* =====================================================
            MAIN PASTOR AREA
        ====================================================== */}

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

          {/* =================================================
              PASTOR IMAGE
          ================================================== */}

          <div className="lg:col-span-2">

            <div className="group relative h-[560px] sm:h-[650px] lg:h-full lg:min-h-[680px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">

              {/* =================================================
                  PASTOR IMAGE
              ================================================== */}

              <img
                src={PastorImage}
                alt={pastorData.name}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-[center_18%]
                  sm:object-[center_16%]
                  lg:object-[center_15%]
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* =================================================
                  IMAGE OVERLAY
              ================================================== */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-blue-950/30 opacity-60 pointer-events-none" />

              {/* =================================================
                  TOP BADGE
              ================================================== */}

              <div className="absolute top-6 left-6 z-10">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-xl">

                  <span className="relative flex w-2.5 h-2.5">

                    <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-50 animate-ping" />

                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />

                  </span>

                  <span className="text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.18em]">
                    Lead Pastor
                  </span>

                </div>

              </div>

              {/* =================================================
                  CROSS
              ================================================== */}

              <div className="absolute top-6 right-6 z-10">

                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-xl shadow-yellow-400/20">

                  <Cross className="w-5 h-5 text-blue-950" />

                </div>

              </div>

              {/* =================================================
                  IMAGE BOTTOM CONTENT
              ================================================== */}

              <div className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-9">

                <p className="text-yellow-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em]">
                  Okegboho Baptist Church
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {pastorData.name}
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  {pastorData.title}
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              PASTOR INFORMATION
          ================================================== */}

          <div className="lg:col-span-3 flex flex-col justify-center">

            {/* =================================================
                CALLING BADGE
            ================================================== */}

            <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-black uppercase tracking-[0.18em]">

              <HeartHandshake className="w-3.5 h-3.5" />

              Called to Serve

            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight">

              Shepherding with

              <span className="text-yellow-400">
                {" "}faith, wisdom{" "}
              </span>

              and compassion.

            </h3>

            {/* =================================================
                WELCOME MESSAGE
            ================================================== */}

            <div className="mt-7 space-y-5">

              {pastorData.welcomeMessage.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-400 text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

            </div>

            {/* =================================================
                MINISTRY HIGHLIGHTS
            ================================================== */}

            <div className="grid grid-cols-3 gap-3 mt-8">

              {/* Faith */}

              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.07] hover:border-yellow-400/20 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-3">

                  <ShieldCheck className="w-4 h-4 text-yellow-400" />

                </div>

                <p className="text-[10px] uppercase tracking-wider font-black text-white">
                  Faith
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Biblical Teaching
                </p>

              </div>

              {/* People */}

              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.07] hover:border-yellow-400/20 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">

                  <Users className="w-4 h-4 text-blue-400" />

                </div>

                <p className="text-[10px] uppercase tracking-wider font-black text-white">
                  People
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Pastoral Care
                </p>

              </div>

              {/* Service */}

              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.07] hover:border-yellow-400/20 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">

                  <HeartHandshake className="w-4 h-4 text-emerald-400" />

                </div>

                <p className="text-[10px] uppercase tracking-wider font-black text-white">
                  Service
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Kingdom Impact
                </p>

              </div>

            </div>

            {/* =================================================
                SCRIPTURE CARD
            ================================================== */}

            <div className="relative mt-8 rounded-[1.5rem] bg-gradient-to-br from-white/[0.07] to-white/[0.025] border border-white/10 p-6 sm:p-7 overflow-hidden">

              <Quote className="absolute -right-3 -top-3 w-24 h-24 text-yellow-400/[0.04]" />

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400" />

              <div className="flex items-center gap-2 text-yellow-400">

                <BookOpen className="w-4 h-4" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Pastoral Scripture
                </span>

              </div>

              <p className="mt-4 text-white text-base sm:text-lg font-serif italic leading-relaxed">
                "{pastorData.verse}"
              </p>

              <p className="mt-4 text-right text-xs font-black text-yellow-400 uppercase tracking-wider">
                — {pastorData.reference}
              </p>

            </div>

            {/* =================================================
                CONTACT OPTIONS
            ================================================== */}

            <div className="grid sm:grid-cols-3 gap-3 mt-8">

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${pastorData.whatsapp}?text=${encodeURIComponent(
                  "Peace be unto you Pastor. I am reaching out through the Okegboho Baptist Church website."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/20 transition-all duration-300"
              >

                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center">

                  <MessageCircle className="w-4 h-4 text-emerald-400" />

                </div>

                <div>

                  <p className="text-xs font-bold text-white">
                    WhatsApp
                  </p>

                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Send a message
                  </p>

                </div>

              </a>

              {/* Phone */}

              <a
                href={`tel:${pastorData.phone}`}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-400/20 transition-all duration-300"
              >

                <div className="w-10 h-10 shrink-0 rounded-xl bg-yellow-400/10 flex items-center justify-center">

                  <Phone className="w-4 h-4 text-yellow-400" />

                </div>

                <div>

                  <p className="text-xs font-bold text-white">
                    Call Pastor
                  </p>

                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Speak with the office
                  </p>

                </div>

              </a>

              {/* Email */}

              <a
                href={`mailto:${pastorData.email}`}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-400/20 transition-all duration-300"
              >

                <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center">

                  <Mail className="w-4 h-4 text-blue-400" />

                </div>

                <div>

                  <p className="text-xs font-bold text-white">
                    Email
                  </p>

                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Contact the office
                  </p>

                </div>

              </a>

            </div>

            {/* =================================================
                COUNSELING CTA
            ================================================== */}

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div>

                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Need Prayer or Guidance?
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Reach out to the pastoral office.
                </p>

              </div>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-blue-950 text-xs font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-yellow-400/10"
              >

                Request Prayer / Counseling

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
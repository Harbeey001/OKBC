import React from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  HeartHandshake,
  ArrowUp,
  Facebook,
  Youtube,
  Instagram,
  Music2,
} from "lucide-react";

import { CHURCH_INFO } from "../data/churchData";

// ======================================================
// OFFICIAL SOCIAL MEDIA LINKS
// ======================================================

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Okegbohobaptistchurch",
  youtube: "https://www.youtube.com/@OKEGBOHOBAPTISTCHURCH",
  tiktok: "https://www.tiktok.com/@okegboho.baptist",
  instagram: "https://www.instagram.com/okbcigboho1943",
};

// ======================================================
// OFFICIAL CONTACT INFORMATION
// ======================================================

const CONTACT_INFO = {
  phone1: "0811 867 7610",
  phone2: "0904 050 7962",

  phone1Link: "+2348118677610",
  phone2Link: "+2349040507962",

  whatsapp: "2348118677610",

  email: "okegbohobaptistchurch.official@gmail.com",
};

// ======================================================
// FLOATING WHATSAPP
// ======================================================

export function FloatingWhatsApp() {
  const defaultMessage = encodeURIComponent(
    "Peace be unto you. I am reaching out from the Okegboho Baptist Church website with a prayer request / inquiry."
  );

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Okegboho Baptist Church on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl group-hover:bg-green-500/50 transition" />

        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1">

          <MessageCircle className="w-5 h-5 fill-current" />

          <span className="hidden sm:block text-xs font-black uppercase tracking-wide">
            Prayer & Chat
          </span>

        </div>

      </div>
    </a>
  );
}

// ======================================================
// FOOTER
// ======================================================

export function Footer({ onOpenGiving }) {

  // ====================================================
  // BACK TO TOP
  // ====================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">

      {/* ==================================================
          DECORATIVE BACKGROUND
      ================================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Gold top border */}

      <div className="h-1 w-full bg-gradient-to-r from-blue-950 via-yellow-400 to-blue-950" />


      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ==================================================
            TOP GRID
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* ==================================================
              COLUMN 1 — CHURCH BRANDING
          ================================================== */}

          <div className="space-y-5">

            {/* Logo + Church Name */}

            <div className="flex items-center gap-4">

              {/* Church Logo */}

              <div className="relative shrink-0">

                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />

                <img
                  src="/okbc-logo.png"
                  alt="Okegboho Baptist Church Logo"
                  className="relative block w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full object-cover bg-white border-2 border-yellow-400 shadow-xl"
                />

              </div>


              {/* Church Name */}

              <div className="min-w-0">

                <h3 className="font-black text-white text-base leading-tight">
                  {CHURCH_INFO.name}
                </h3>

                <p className="mt-1 text-xs font-bold text-yellow-400 uppercase tracking-widest">
                  {CHURCH_INFO.tagline}
                </p>

              </div>

            </div>


            {/* Description */}

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Founded in {CHURCH_INFO.foundedYear}. Proclaiming the Gospel
              of Christ, nurturing believers, and serving the Igboho
              community with divine mercy.
            </p>


            {/* Motto */}

            <p className="text-xs text-yellow-300 font-serif italic leading-relaxed">
              "{CHURCH_INFO.motto}"
            </p>


            {/* ==================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="pt-2">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                Connect With Us
              </p>

              <div className="flex items-center gap-2">

                {/* Facebook */}

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Okegboho Baptist Church on Facebook"
                  title="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <Facebook className="w-4 h-4" />
                </a>


                {/* YouTube */}

                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Okegboho Baptist Church on YouTube"
                  title="YouTube"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <Youtube className="w-4 h-4" />
                </a>


                {/* TikTok */}

                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Okegboho Baptist Church on TikTok"
                  title="TikTok"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <Music2 className="w-4 h-4" />
                </a>


                {/* Instagram */}

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Okegboho Baptist Church on Instagram"
                  title="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram className="w-4 h-4" />
                </a>

              </div>

            </div>

          </div>


          {/* ==================================================
              COLUMN 2 — NAVIGATION
          ================================================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-black text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Navigation
            </h4>

            <ul className="space-y-3 text-xs font-semibold">

              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  About OKBC
                </a>
              </li>

              <li>
                <a href="#pastor" className="hover:text-yellow-400 transition">
                  Lead Pastor
                </a>
              </li>

              <li>
                <a href="#leadership" className="hover:text-yellow-400 transition">
                  Leadership Board
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-yellow-400 transition">
                  Worship Services
                </a>
              </li>

              <li>
                <a href="#auxiliaries" className="hover:text-yellow-400 transition">
                  Auxiliaries & Ministries
                </a>
              </li>

              <li>
                <a href="#sermons" className="hover:text-yellow-400 transition">
                  Sermon Archive
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-400 transition">
                  Photo Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* ==================================================
              COLUMN 3 — CONTACT
          ================================================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-black text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Contact & Location
            </h4>

            <ul className="space-y-4 text-xs text-slate-400">

              {/* Address */}

              <li className="flex items-start gap-3">

                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />

                <span>
                  Okegboho, Igboho, Oorelope Local Government,
                  Oyo State, Nigeria.
                </span>

              </li>


              {/* Phone 1 */}

              <li className="flex items-center gap-3">

                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />

                <a
                  href={`tel:${CONTACT_INFO.phone1Link}`}
                  className="hover:text-yellow-400 transition"
                >
                  {CONTACT_INFO.phone1}
                </a>

              </li>


              {/* Phone 2 */}

              <li className="flex items-center gap-3">

                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />

                <a
                  href={`tel:${CONTACT_INFO.phone2Link}`}
                  className="hover:text-yellow-400 transition"
                >
                  {CONTACT_INFO.phone2}
                </a>

              </li>


              {/* WhatsApp */}

              <li className="flex items-center gap-3">

                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  WhatsApp: {CONTACT_INFO.phone1}
                </a>

              </li>


              {/* Official Email */}

              <li className="flex items-start gap-3">

                <Mail className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-yellow-400 transition break-all"
                >
                  {CONTACT_INFO.email}
                </a>

              </li>

            </ul>


            {/* Social text links */}

            <div className="pt-2 space-y-2">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                Follow us online
              </p>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-blue-400 transition"
              >
                Facebook: Okegboho Baptist Church
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-red-400 transition"
              >
                YouTube: Okegboho Baptist Church
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-white transition"
              >
                TikTok: @okegboho.baptist
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-pink-400 transition"
              >
                Instagram: @okbcigboho1943
              </a>

            </div>

          </div>


          {/* ==================================================
              COLUMN 4 — ONLINE GIVING
          ================================================== */}

          <div className="space-y-4 bg-blue-950/60 p-6 rounded-2xl border border-blue-900">

            <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center">

              <HeartHandshake className="w-5 h-5 text-blue-950" />

            </div>


            <h4 className="text-sm font-black text-yellow-400 uppercase tracking-wider">
              Online Giving
            </h4>


            <p className="text-xs text-slate-300 leading-relaxed">
              Support God's work, missions, and building developments
              at Okegboho Baptist Church.
            </p>


            <button
              type="button"
              onClick={onOpenGiving}
              className="w-full py-3 bg-yellow-400 text-blue-950 font-black text-xs uppercase tracking-wider rounded-xl hover:bg-yellow-300 transition flex items-center justify-center gap-2"
            >

              <HeartHandshake className="w-4 h-4" />

              <span>
                Give Tithe & Offering
              </span>

            </button>

          </div>

        </div>


        {/* ==================================================
            SOCIAL MEDIA BAR
        ================================================== */}

        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                Stay Connected
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Follow Okegboho Baptist Church on social media.
              </p>

            </div>


            <div className="flex items-center gap-2">

              {/* Facebook */}

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition"
              >
                <Facebook className="w-4 h-4" />
              </a>


              {/* YouTube */}

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600 flex items-center justify-center text-slate-400 hover:text-white transition"
              >
                <Youtube className="w-4 h-4" />
              </a>


              {/* TikTok */}

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-black flex items-center justify-center text-slate-400 hover:text-white transition"
              >
                <Music2 className="w-4 h-4" />
              </a>


              {/* Instagram */}

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600 flex items-center justify-center text-slate-400 hover:text-white transition"
              >
                <Instagram className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="mt-8 pt-7 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {CHURCH_INFO.name}.
            All rights reserved.
          </p>


          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold transition"
          >

            <span>
              Back to top
            </span>

            <ArrowUp className="w-4 h-4" />

          </button>

        </div>

      </div>

    </footer>
  );
}

// ======================================================
// DEFAULT EXPORT
// ======================================================

export default Footer;
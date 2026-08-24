import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
  X,
  Crown,
} from "lucide-react";

import { LEADERSHIP } from "../data/churchData";

export default function LeadershipSection() {
  const [selectedDeacon, setSelectedDeacon] = useState(null);

  /* =========================================================
     HELPERS
  ========================================================= */

  const getInitials = (name = "") => {
    const cleanedName = name
      .replace(/^(Dn\.|Dns\.)\s*/i, "")
      .trim();

    const abbreviationMatch = cleanedName.match(
      /^([A-Z])\.?\s*([A-Z])\.?/
    );

    if (abbreviationMatch) {
      return `${abbreviationMatch[1]}${abbreviationMatch[2]}`;
    }

    const parts = cleanedName.split(/\s+/).filter(Boolean);

    if (parts.length === 0) return "OK";

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  const getDisplayTitle = (title = "", name = "") => {
    const normalizedTitle = title.toLowerCase();
    const normalizedName = name.toLowerCase();

    if (normalizedTitle.includes("chairman")) {
      return "Chairman, Board of Deacons";
    }

    if (normalizedName.startsWith("dns.")) {
      return "Deaconess";
    }

    if (
      normalizedName.startsWith("dn.") ||
      normalizedTitle.includes("deacon")
    ) {
      return "Deacon";
    }

    return title;
  };

  const isChairman = (deacon) => {
    return deacon.title?.toLowerCase().includes("chairman");
  };

  const getAvatarStyle = (index) => {
    const styles = [
      "from-blue-950 via-blue-900 to-slate-800",
      "from-slate-900 via-blue-950 to-blue-800",
      "from-blue-900 via-slate-900 to-blue-950",
      "from-slate-800 via-blue-900 to-slate-950",
      "from-blue-950 via-slate-800 to-blue-900",
      "from-slate-900 via-blue-900 to-blue-950",
    ];

    return styles[index % styles.length];
  };

  const closeModal = () => {
    setSelectedDeacon(null);
  };

  /* =========================================================
     CLOSE MODAL WITH ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     PREVENT BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (selectedDeacon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDeacon]);

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="max-w-3xl mb-14 lg:mb-16">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-yellow-500" />

            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-yellow-600">
              Spiritual Leadership
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.02] tracking-tight">
            Serving the

            <span className="block text-blue-900 mt-2">
              Cathedral of Mercy.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Meet the dedicated servants entrusted with supporting the
            spiritual care, administration, welfare, and mission of
            Okegboho Baptist Church.
          </p>

        </div>

        {/* =================================================
            BOARD INTRODUCTION
        ================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 text-white p-7 sm:p-9 lg:p-10 mb-10 shadow-xl">

          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="absolute -left-20 -bottom-32 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg">

                <ShieldCheck className="w-6 h-6 text-blue-950" />

              </div>

              <div>

                <p className="text-yellow-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                  Board of Deacons
                </p>

                <h3 className="mt-1 text-xl sm:text-2xl font-black">
                  Faithful servants. Trusted leaders.
                </h3>

                <p className="mt-2 text-sm text-blue-100/80 max-w-2xl leading-relaxed">
                  Serving with humility, wisdom, compassion, and commitment
                  to the spiritual wellbeing of the church family.
                </p>

              </div>

            </div>

            <div className="shrink-0 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400">

              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              Cathedral of Mercy

            </div>

          </div>

        </div>

        {/* =================================================
            LEADERSHIP GRID
        ================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {LEADERSHIP.map((deacon, index) => {

            const initials = getInitials(deacon.name);
            const chairman = isChairman(deacon);

            return (
              <article
                key={deacon.id}
                className={`group relative overflow-hidden bg-white rounded-[1.75rem] border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                  chairman
                    ? "border-yellow-300 ring-1 ring-yellow-200/60"
                    : "border-slate-200 hover:border-yellow-300"
                }`}
              >

                {/* Top Accent */}

                <div
                  className={`h-1.5 w-full ${
                    chairman
                      ? "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"
                      : "bg-gradient-to-r from-blue-950 via-yellow-400 to-blue-950"
                  }`}
                />

                <div className="p-6 sm:p-7">

                  {/* =================================================
                      CHAIRMAN BADGE
                  ================================================== */}

                  {chairman && (
                    <div className="absolute top-5 right-5">

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 border border-yellow-200">

                        <Crown className="w-3 h-3 text-yellow-600" />

                        <span className="text-[8px] font-black uppercase tracking-wider text-yellow-700">
                          Chairman
                        </span>

                      </div>

                    </div>
                  )}

                  {/* =================================================
                      AVATAR + NAME
                  ================================================== */}

                  <div className="flex items-center gap-4">

                    <div
                      className={`relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${getAvatarStyle(
                        index
                      )} shadow-lg border-4 border-white ring-1 ring-slate-200`}
                    >

                      <div className="absolute inset-0 flex flex-col items-center justify-center">

                        <UserRound className="w-5 h-5 text-yellow-400 mb-1 opacity-80" />

                        <span className="text-xl font-black text-white tracking-tight">
                          {initials}
                        </span>

                      </div>

                    </div>

                    <div className="min-w-0 pr-8">

                      <h3 className="text-base sm:text-lg font-black text-slate-950 leading-snug group-hover:text-blue-900 transition-colors">
                        {deacon.name}
                      </h3>

                      <p className="mt-1 text-[9px] sm:text-[10px] font-black text-yellow-600 uppercase tracking-[0.14em]">
                        {getDisplayTitle(deacon.title, deacon.name)}
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      MINISTRY FOCUS
                  ================================================== */}

                  <div className="mt-6">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Ministry Focus
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-700 leading-relaxed">
                      {deacon.role}
                    </p>

                  </div>

                  {/* =================================================
                      BIO
                  ================================================== */}

                  <p className="mt-4 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {deacon.bio}
                  </p>

                  {/* =================================================
                      PROFILE BUTTON
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => setSelectedDeacon(deacon)}
                    className="group/button mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-950 hover:bg-yellow-400 text-white hover:text-blue-950 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
                  >
                    View Profile

                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

        {/* =================================================
            LEADERSHIP STATEMENT
        ================================================== */}

        <div className="mt-12 text-center">

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed">
            We thank God for the faithful service of our leaders and
            pray for wisdom, strength, and grace as they serve His church.
          </p>

        </div>

      </div>

      {/* =====================================================
          PROFILE MODAL
      ====================================================== */}

      {selectedDeacon && (

        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={closeModal}
        >

          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-lg transition"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* =================================================
                MODAL HEADER
            ================================================== */}

            <div className="relative overflow-hidden bg-blue-950 px-7 pt-10 pb-8 text-white">

              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">

                {/* Avatar */}

                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 border-4 border-yellow-400 shadow-2xl flex flex-col items-center justify-center">

                  <UserRound className="w-7 h-7 text-yellow-400 mb-1" />

                  <span className="text-3xl font-black text-white">
                    {getInitials(selectedDeacon.name)}
                  </span>

                </div>

                <p className="mt-5 text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  Board of Deacons
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl font-black">
                  {selectedDeacon.name}
                </h3>

                <p className="mt-2 text-xs font-bold text-blue-200 uppercase tracking-wider">
                  {getDisplayTitle(
                    selectedDeacon.title,
                    selectedDeacon.name
                  )}
                </p>

              </div>

            </div>

            {/* =================================================
                MODAL BODY
            ================================================== */}

            <div className="p-6 sm:p-8">

              {/* Ministry Focus */}

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">

                <p className="text-[9px] font-black text-blue-900 uppercase tracking-[0.18em]">
                  Ministry Focus
                </p>

                <p className="mt-2 text-sm font-bold text-slate-800">
                  {selectedDeacon.role}
                </p>

              </div>

              {/* About */}

              <div className="mt-7">

                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  About
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {selectedDeacon.bio}
                </p>

              </div>

              {/* Contact */}

              {(selectedDeacon.phone ||
                selectedDeacon.whatsapp ||
                selectedDeacon.email) && (

                <div className="mt-7 pt-6 border-t border-slate-100">

                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Contact
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    {/* Phone */}

                    {selectedDeacon.phone && (
                      <a
                        href={`tel:${selectedDeacon.phone}`}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition"
                      >
                        <Phone className="w-4 h-4 text-blue-900" />
                        Call
                      </a>
                    )}

                    {/* WhatsApp */}

                    {selectedDeacon.whatsapp && (
                      <a
                        href={`https://wa.me/${selectedDeacon.whatsapp.replace(
                          /\D/g,
                          ""
                        )}?text=${encodeURIComponent(
                          `Peace be unto you ${selectedDeacon.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    )}

                    {/* Email */}

                    {selectedDeacon.email && (
                      <a
                        href={`mailto:${selectedDeacon.email}`}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition"
                      >
                        <Mail className="w-4 h-4 text-blue-900" />
                        Email
                      </a>
                    )}

                  </div>

                </div>
              )}

            </div>

            {/* =================================================
                MODAL FOOTER
            ================================================== */}

            <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 text-center">

              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Okegboho Baptist Church • Cathedral of Mercy
              </span>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Users,
  X,
  Sparkles,
  CalendarDays,
  HeartHandshake,
} from "lucide-react";

import { AUXILIARIES } from "../data/churchData";

export default function AuxiliariesSection() {
  const [selectedAuxiliary, setSelectedAuxiliary] = useState(null);

  /* =========================================================
     MODAL HELPERS
  ========================================================= */

  const closeModal = () => {
    setSelectedAuxiliary(null);
  };

  /* =========================================================
     ESCAPE KEY
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
    if (selectedAuxiliary) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAuxiliary]);

  return (
    <>
      {/* =====================================================
          MAIN SECTION
      ====================================================== */}

      <section
        id="auxiliaries"
        className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ====================================================== */}

        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-3xl" />

        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950/20 blur-3xl" />

        {/* =====================================================
            CONTAINER
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-14 max-w-3xl lg:mb-16">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-yellow-400" />

              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-400 sm:text-xs">
                Church Auxiliaries
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find your place to

              <span className="mt-2 block text-yellow-400">
                serve &amp; belong.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Our auxiliaries provide opportunities for children, young people,
              men, and women to grow in faith, build meaningful relationships,
              serve others, and participate in the mission of the church.
            </p>
          </div>

          {/* =================================================
              INTRO STRIP
          ================================================== */}

          <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">

            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-yellow-400/5 blur-3xl" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg shadow-yellow-400/10">
                  <Users className="h-6 w-6 text-blue-950" />
                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">
                    Growing Together
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Everyone has a place in the body of Christ.
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
                    From children and teenagers to adults, our auxiliaries help
                    members discover community, develop spiritually, and serve
                    God with their gifts.
                  </p>

                </div>
              </div>

              <div className="hidden shrink-0 items-center gap-2 md:flex">

                <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                  Cathedral of Mercy
                </span>

              </div>
            </div>
          </div>

          {/* =================================================
              AUXILIARY GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {AUXILIARIES.map((auxiliary, index) => (

              <article
                key={auxiliary.id}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* TOP ACCENT */}

                <div className="h-1.5 bg-gradient-to-r from-blue-950 via-yellow-400 to-blue-950" />

                <div className="p-6 sm:p-7">

                  {/* =================================================
                      CARD HEADER
                  ================================================== */}

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex min-w-0 items-center gap-4">

                      {/* LOGO */}

                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-2 transition-transform duration-300 group-hover:scale-105">

                        {auxiliary.logo ? (
                          <img
                            src={auxiliary.logo}
                            alt={`${auxiliary.name} logo`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <Users className="h-7 w-7 text-blue-950" />
                        )}

                      </div>

                      {/* NAME */}

                      <div className="min-w-0">

                        {auxiliary.tag && (
                          <span className="inline-flex max-w-full rounded-full border border-yellow-100 bg-yellow-50 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-yellow-700">
                            {auxiliary.tag}
                          </span>
                        )}

                        <h3 className="mt-2 text-lg font-black leading-tight text-slate-950 sm:text-xl">
                          {auxiliary.name}
                        </h3>

                      </div>
                    </div>

                    <span className="shrink-0 text-[10px] font-black text-slate-200 transition-colors group-hover:text-yellow-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* =================================================
                      MOTTO
                  ================================================== */}

                  {auxiliary.motto && (
                    <div className="mt-6 border-l-2 border-yellow-400 pl-4">

                      <p className="text-sm font-semibold italic leading-relaxed text-slate-700">
                        “{auxiliary.motto}”
                      </p>

                    </div>
                  )}

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  {auxiliary.description && (
                    <p className="mt-5 text-sm leading-relaxed text-slate-500">
                      {auxiliary.description}
                    </p>
                  )}

                  {/* =================================================
                      QUICK INFORMATION
                  ================================================== */}

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">

                    {auxiliary.ageGroup && (
                      <div className="flex items-start gap-3">

                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Age / Group
                          </p>

                          <p className="mt-1 text-xs font-semibold text-slate-700">
                            {auxiliary.ageGroup}
                          </p>
                        </div>

                      </div>
                    )}

                    {auxiliary.schedule && (
                      <div className="flex items-start gap-3">

                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Meeting Schedule
                          </p>

                          <p className="mt-1 text-xs font-semibold text-slate-700">
                            {auxiliary.schedule}
                          </p>
                        </div>

                      </div>
                    )}

                  </div>

                  {/* =================================================
                      EXPLORE BUTTON
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => setSelectedAuxiliary(auxiliary)}
                    className="group/button mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 px-4 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-yellow-400 hover:text-blue-950"
                  >
                    Explore Ministry

                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </button>

                </div>
              </article>
            ))}
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================== */}

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">
                Serve With Us
              </p>

              <p className="mt-2 text-sm font-bold text-white sm:text-base">
                Discover where your gifts can make a difference.
              </p>

            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">

              <HeartHandshake className="h-4 w-4 text-yellow-400" />

              <span>
                One church. One family. One mission.
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          AUXILIARY PROFILE MODAL
      ====================================================== */}

      {selectedAuxiliary && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={closeModal}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close auxiliary profile"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* MODAL HEADER */}

            <div className="relative overflow-hidden bg-blue-950 px-7 pb-8 pt-10 text-white">

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">

                {/* LOGO */}

                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border-4 border-yellow-400 bg-white p-3 shadow-2xl">

                  {selectedAuxiliary.logo ? (
                    <img
                      src={selectedAuxiliary.logo}
                      alt={`${selectedAuxiliary.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Users className="h-10 w-10 text-blue-950" />
                  )}

                </div>

                <div className="mt-5 flex items-center gap-2 text-yellow-400">

                  <Sparkles className="h-4 w-4" />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Church Auxiliary
                  </span>

                </div>

                <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                  {selectedAuxiliary.name}
                </h3>

                {selectedAuxiliary.tag && (
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-blue-200">
                    {selectedAuxiliary.tag}
                  </p>
                )}

              </div>
            </div>

            {/* MODAL BODY */}

            <div className="p-6 sm:p-8">

              {/* MOTTO */}

              {selectedAuxiliary.motto && (
                <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-5">

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-700">
                    Motto
                  </p>

                  <p className="mt-2 font-serif text-sm italic leading-relaxed text-slate-700">
                    “{selectedAuxiliary.motto}”
                  </p>

                </div>
              )}

              {/* DESCRIPTION */}

              {selectedAuxiliary.description && (
                <div className="mt-7">

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    About This Ministry
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {selectedAuxiliary.description}
                  </p>

                </div>
              )}

              {/* INFORMATION */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {selectedAuxiliary.ageGroup && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                    <Users className="h-5 w-5 text-blue-900" />

                    <p className="mt-3 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Age / Group
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {selectedAuxiliary.ageGroup}
                    </p>

                  </div>
                )}

                {selectedAuxiliary.schedule && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                    <CalendarDays className="h-5 w-5 text-blue-900" />

                    <p className="mt-3 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Schedule
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {selectedAuxiliary.schedule}
                    </p>

                  </div>
                )}

              </div>

              {/* OBJECTIVES */}

              {selectedAuxiliary.objectives?.length > 0 && (
                <div className="mt-7">

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Ministry Objectives
                  </p>

                  <div className="mt-4 space-y-3">

                    {selectedAuxiliary.objectives.map((objective, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                      >

                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />

                        <p className="text-sm leading-relaxed text-slate-600">
                          {objective}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>
              )}

              {/* ACTIVITIES */}

              {selectedAuxiliary.activities?.length > 0 && (
                <div className="mt-7">

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Activities
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">

                    {selectedAuxiliary.activities.map((activity, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3"
                      >

                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />

                        <span className="text-xs font-semibold text-slate-700">
                          {activity}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>
              )}

            </div>

            {/* MODAL FOOTER */}

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-center sm:px-8">

              <div className="flex items-center justify-center gap-2">

                <Sparkles className="h-3.5 w-3.5 text-yellow-600" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Okegboho Baptist Church • Cathedral of Mercy
                </span>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
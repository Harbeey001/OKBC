import React from "react";
import {
  Play,
  BookOpen,
  Download,
  Clock3,
  CalendarDays,
  ArrowUpRight,
  Headphones,
  Sparkles,
  Youtube,
  Radio,
  ExternalLink,
} from "lucide-react";

import { RECENT_SERMONS } from "../data/churchData";

// ============================================================
// OFFICIAL OKEGBOHO BAPTIST CHURCH YOUTUBE
// ============================================================

const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/@OKEGBOHOBAPTISTCHURCH";

// ============================================================
// SERMON SECTION
// ============================================================

export default function SermonsSection() {
  // ============================================================
  // OPEN YOUTUBE CHANNEL
  // ============================================================

  const openYouTubeChannel = () => {
    window.open(
      YOUTUBE_CHANNEL_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ============================================================
  // GET SERMON URL
  //
  // If an individual sermon has a youtubeUrl in churchData.js,
  // use it. Otherwise, send the visitor to the official channel.
  // ============================================================

  const getSermonUrl = (sermon) => {
    return sermon.youtubeUrl || YOUTUBE_CHANNEL_URL;
  };
  const getAudioUrl = (sermon) => {
  return sermon.audioUrl || "";
};

  return (
    <section
      id="sermons"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-blue-950/5 blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-100/40 blur-3xl pointer-events-none" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-px bg-yellow-500" />

              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-blue-950">
                Messages & Sermons
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.02]">
              Feed your faith.

              <span className="block text-blue-950 mt-2">
                Strengthen your walk.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
              Listen to biblical teaching and messages from Okegboho
              Baptist Church — the Cathedral of Mercy — designed to
              encourage, challenge, and strengthen your relationship
              with Christ.
            </p>

          </div>

          {/* =================================================
              MEDIA BADGE
          ================================================== */}

          <button
            type="button"
            onClick={openYouTubeChannel}
            className="hidden lg:flex items-center gap-3 px-5 py-4 rounded-2xl bg-slate-950 text-white shadow-xl hover:-translate-y-1 hover:bg-blue-950 transition-all duration-300"
          >

            <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center">
              <Youtube className="w-5 h-5 text-blue-950" />
            </div>

            <div className="text-left">

              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">
                Cathedral Media
              </p>

              <p className="text-sm font-bold mt-1">
                Visit our YouTube Channel
              </p>

            </div>

            <ArrowUpRight className="w-4 h-4 text-yellow-400" />

          </button>

        </div>

        {/* =================================================
            LIVE / YOUTUBE AREA
        ================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl mb-10">

          {/* Decorative background */}

          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-red-500/10 blur-3xl" />

          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-5 gap-0">

            {/* =================================================
                LIVE VISUAL
            ================================================== */}

            <div className="lg:col-span-2 min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-blue-950 via-slate-950 to-black flex items-center justify-center p-8">

              <div className="text-center">

                {/* Live icon */}

                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">

                  <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />

                  <div className="relative w-20 h-20 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center">

                    <Radio className="w-9 h-9 text-red-400" />

                  </div>

                </div>

                <div className="mt-5">

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-400/20 text-red-400 text-[9px] font-black uppercase tracking-[0.18em]">

                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

                    Live on YouTube

                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                LIVE INFORMATION
            ================================================== */}

            <div className="lg:col-span-3 p-7 sm:p-9 lg:p-10 flex flex-col justify-center">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400">
                Church Live Stream
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Worship with us online.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                Join Okegboho Baptist Church online for worship services,
                special programs, sermons, teachings, and other church
                events through our official YouTube channel.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">

                {/* Watch Live */}

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-500 hover:bg-red-400 text-white text-[10px] font-black uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5"
                >

                  <Youtube className="w-4 h-4" />

                  Watch on YouTube

                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                </a>

                {/* Channel */}

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 text-white text-[10px] font-black uppercase tracking-[0.12em] transition-all duration-300"
                >

                  <Headphones className="w-4 h-4 text-yellow-400" />

                  Explore Channel

                  <ArrowUpRight className="w-3.5 h-3.5 text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                </a>

              </div>

              <p className="mt-5 text-[10px] text-slate-600">
                Live broadcasts will be available here whenever the
                church is streaming on YouTube.
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            FEATURED MESSAGE
        ================================================== */}

        {RECENT_SERMONS.length > 0 && (

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 text-white shadow-2xl mb-10">

            {/* Decorative background */}

            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="absolute right-10 bottom-0 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative p-7 sm:p-9 lg:p-10">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* Featured information */}

                <div className="max-w-3xl">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400 text-blue-950 text-[9px] font-black uppercase tracking-[0.15em]">

                      <Sparkles className="w-3.5 h-3.5" />

                      Latest Message

                    </span>

                    <span className="text-xs text-blue-200/50">
                      {RECENT_SERMONS[0].date}
                    </span>

                  </div>

                  <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                    {RECENT_SERMONS[0].title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-blue-100/70">
                    {RECENT_SERMONS[0].preacher}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-5">

                    <div className="flex items-center gap-2">

                      <BookOpen className="w-4 h-4 text-yellow-400" />

                      <span className="text-xs font-semibold text-blue-100">
                        {RECENT_SERMONS[0].scripture}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock3 className="w-4 h-4 text-yellow-400" />

                      <span className="text-xs font-semibold text-blue-100">
                        {RECENT_SERMONS[0].duration}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Featured button */}

                
<div className="shrink-0 flex flex-col sm:flex-row gap-3">

  {/* Watch on YouTube */}
  <a
    href={getSermonUrl(RECENT_SERMONS[0])}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white hover:bg-yellow-400 text-blue-950 font-black text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 shadow-xl"
  >
    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-950 text-white">
      <Play className="w-4 h-4 fill-current ml-0.5" />
    </span>

    Watch Message

    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </a>

  {/* Download Audio */}
  {getAudioUrl(RECENT_SERMONS[0]) && (
    <a
      href={getAudioUrl(RECENT_SERMONS[0])}
      download
      className="group inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 shadow-xl"
    >
      <Download className="w-4 h-4" />
      Download Audio
    </a>
  )}

</div>



              </div>

            </div>

          </div>

        )}

        {/* =================================================
            SECTION LABEL
        ================================================== */}

        <div className="flex items-center justify-between gap-4 mb-6">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-yellow-600">
              Recent Messages
            </p>

            <h3 className="mt-1 text-xl sm:text-2xl font-black text-slate-950">
              Grow through the Word
            </h3>

          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">

            <span className="w-2 h-2 rounded-full bg-yellow-400" />

            <span className="text-[9px] font-black uppercase tracking-[0.15em]">
              Cathedral Media
            </span>

          </div>

        </div>

        {/* =================================================
            SERMON GRID
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {RECENT_SERMONS.map((sermon, index) => (

            <article
              key={`${sermon.title}-${index}`}
              className="group relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >

              {/* Top accent */}

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-950 via-yellow-400 to-blue-950" />

              {/* Large background number */}

              <div className="absolute -right-5 -top-8 text-[160px] leading-none font-black text-white/[0.025] select-none pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative p-7 sm:p-8">

                {/* =================================================
                    META
                ================================================== */}

                <div className="flex flex-wrap items-center gap-2.5">

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400 text-blue-950 text-[9px] font-black uppercase tracking-[0.12em]">

                    <BookOpen className="w-3.5 h-3.5" />

                    {sermon.scripture}

                  </span>

                  <span className="text-[10px] text-slate-600">
                    •
                  </span>

                  <span className="text-xs font-semibold text-slate-400">
                    {sermon.date}
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3 className="mt-6 text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                  {sermon.title}
                </h3>

                {/* =================================================
                    PREACHER
                ================================================== */}

                <div className="mt-6 flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">

                    <span className="text-[10px] font-black text-yellow-400">
                      CM
                    </span>

                  </div>

                  <div>

                    <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-black">
                      Preacher
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-200">
                      {sermon.preacher}
                    </p>

                  </div>

                </div>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <div className="mt-8 pt-6 border-t border-white/10">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* Details */}

                    <div className="flex items-center gap-5">

                      <div className="flex items-center gap-2 text-slate-400">

                        <Clock3 className="w-4 h-4 text-yellow-400" />

                        <span className="text-xs font-semibold">
                          {sermon.duration}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-slate-400">

                        <CalendarDays className="w-4 h-4 text-yellow-400" />

                        <span className="text-xs font-semibold">
                          {sermon.date}
                        </span>

                      </div>

                    </div>
                    
{/* =================================================
    SERMON ACTIONS
================================================== */}

<div className="flex flex-wrap gap-2">

  {/* Watch YouTube */}
  <a
    href={getSermonUrl(sermon)}
    target="_blank"
    rel="noopener noreferrer"
    className="group/watch inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-blue-950 text-[10px] font-black uppercase tracking-[0.12em] hover:bg-yellow-400 transition-colors duration-300"
  >
    <Play className="w-4 h-4 fill-current" />

    Watch

    <ArrowUpRight className="w-3.5 h-3.5 group-hover/watch:translate-x-0.5 group-hover/watch:-translate-y-0.5 transition-transform" />
  </a>

  {/* Listen / Download */}
  {getAudioUrl(sermon) && (
    <>
      <a
        href={getAudioUrl(sermon)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-yellow-400 text-blue-950 text-[10px] font-black uppercase tracking-[0.12em] hover:bg-yellow-300 transition-colors duration-300"
      >
        <Headphones className="w-4 h-4" />
        Listen
      </a>

      <a
        href={getAudioUrl(sermon)}
        download
        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.12em] hover:bg-white/10 hover:border-yellow-400/30 transition-colors duration-300"
      >
        <Download className="w-4 h-4 text-yellow-400" />
        Download
      </a>
    </>
  )}

</div>



                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* =================================================
            YOUTUBE CHANNEL CTA
        ================================================== */}

        <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-200">

          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

          <div className="relative p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500 flex items-center justify-center">

                <Youtube className="w-6 h-6 text-white" />

              </div>

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                  Official YouTube Channel
                </p>

                <h3 className="mt-1 text-lg sm:text-xl font-black text-slate-950">
                  Okegboho Baptist Church
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Watch sermons, worship services, teachings and church
                  events.
                </p>

              </div>

            </div>

            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-950 text-white text-[10px] font-black uppercase tracking-[0.12em] hover:bg-red-500 transition-all duration-300"
            >

              Visit YouTube

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

            </a>

          </div>

        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-[2rem] bg-slate-50 border border-slate-200">

          <div className="text-center sm:text-left">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600">
              Cathedral Media
            </p>

            <p className="mt-1 text-sm text-slate-600">
              More sermons and teachings will be added to our media
              library as they become available.
            </p>

          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-950 text-white text-[10px] font-black uppercase tracking-[0.12em] hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300"
          >

            Explore Sermons

            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

          </a>

        </div>

      </div>

    </section>
  );
}
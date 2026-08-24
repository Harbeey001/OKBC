import React from "react";
import {
  ArrowRight,
  BookOpen,
  Church,
  HeartHandshake,
  Users,
  MapPin,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-700/5 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.05),transparent_35%)] pointer-events-none" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION INTRO
        ================================================== */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-yellow-500" />

            <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-600">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.05] tracking-tight">
            A church built on

            <span className="block text-yellow-500 mt-2">
              faith, family &amp; purpose.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Okegboho Baptist Church is a Christ-centered family committed
            to worshipping God, growing disciples, serving people, and
            proclaiming the Gospel of Jesus Christ.
          </p>

        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16 items-center">

          {/* =================================================
              LEFT — HERITAGE CARD
          ================================================== */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12 shadow-2xl">

              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-yellow-400/10" />

              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-yellow-400/10" />

              <div className="relative z-10">

                {/* Badge */}

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">

                  <Sparkles className="w-4 h-4 text-yellow-400" />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">
                    Our Heritage
                  </span>

                </div>

                {/* Year */}

                <div className="mt-8">

                  <p className="text-7xl sm:text-8xl font-black text-white tracking-tight">
                    1943
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] font-bold text-yellow-400">
                    Founded in Faith
                  </p>

                </div>

                {/* Description */}

                <p className="mt-7 text-slate-400 leading-relaxed text-sm sm:text-base">
                  For generations, Okegboho Baptist Church has stood as
                  a place of worship, fellowship, spiritual growth, and
                  service to the community of Igboho and beyond.
                </p>

                {/* Location */}

                <div className="mt-8 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">
                      Our Location
                    </p>

                    <p className="text-sm font-bold text-white mt-1">
                      Igboho, Oyo State, Nigeria
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT — STORY
          ================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                <Church className="w-5 h-5 text-yellow-600" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black">
                  Cathedral of Mercy
                </p>

                <p className="text-sm font-bold text-slate-950">
                  Our Story
                </p>
              </div>

            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
              More than a building.
              <span className="text-yellow-500">
                {" "}We are a family.
              </span>
            </h3>

            <div className="mt-6 space-y-5">

              <p className="text-slate-600 leading-relaxed">
                Okegboho Baptist Church — Cathedral of Mercy — exists
                to provide a spiritual home where people can encounter
                God, discover their purpose, and grow in their walk with
                Jesus Christ.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Through worship, discipleship, missions, evangelism,
                fellowship, and community service, we seek to demonstrate
                the love of Christ in practical ways.
              </p>

              <p className="text-slate-600 leading-relaxed">
                From children and young people to families and senior
                members, every generation has a place to belong, serve,
                and grow.
              </p>

            </div>

            {/* =================================================
                SCRIPTURE
            ================================================== */}

            <div className="relative mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-l-2xl" />

              <div className="flex items-center gap-2">

                <BookOpen className="w-4 h-4 text-yellow-600" />

                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-600">
                  Our Foundation
                </span>

              </div>

              <p className="mt-4 text-slate-800 font-serif italic leading-relaxed">
                "We are ambassadors for Christ."
              </p>

              <p className="mt-2 text-xs font-bold text-slate-500">
                2 Corinthians 5:20
              </p>

            </div>

            {/* CTA */}

            <button
              onClick={() => scrollTo("contact")}
              className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
            >
              Connect With Us

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

        {/* =================================================
            QUICK VALUES
        ================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">

          {/* Worship */}

          <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300">

            <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">

              <HeartHandshake className="w-5 h-5 text-yellow-600 group-hover:text-slate-950" />

            </div>

            <h4 className="mt-5 font-black text-slate-950">
              Worship
            </h4>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Honouring God through heartfelt worship and praise.
            </p>

          </div>

          {/* Discipleship */}

          <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300">

            <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">

              <BookOpen className="w-5 h-5 text-yellow-600 group-hover:text-slate-950" />

            </div>

            <h4 className="mt-5 font-black text-slate-950">
              Discipleship
            </h4>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Growing deeper in God's Word and becoming like Christ.
            </p>

          </div>

          {/* Fellowship */}

          <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300">

            <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">

              <Users className="w-5 h-5 text-yellow-600 group-hover:text-slate-950" />

            </div>

            <h4 className="mt-5 font-black text-slate-950">
              Fellowship
            </h4>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Building meaningful relationships as one church family.
            </p>

          </div>

          {/* Service */}

          <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300">

            <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">

              <CalendarDays className="w-5 h-5 text-yellow-600 group-hover:text-slate-950" />

            </div>

            <h4 className="mt-5 font-black text-slate-950">
              Service
            </h4>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Serving God and our community with love and excellence.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
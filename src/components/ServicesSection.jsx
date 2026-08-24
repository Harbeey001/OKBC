import React from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Church,
  Sparkles,
  Music,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Prayer Meeting",
      subtitle: "A House of Prayer",
      description:
        "Come together as a church family to seek God, intercede for others, and grow deeper in prayer and faith.",
      day: "Weekly",
      time: "Check Church Schedule",
      icon: Heart,
    },

    {
      id: 2,
      title: "Youth Fellowship",
      subtitle: "Raising Godly Leaders",
      description:
        "A vibrant environment where young people grow spiritually, build friendships, discover their purpose, and develop godly leadership.",
      day: "Weekly",
      time: "Check Youth Schedule",
      icon: Users,
    },

    {
      id: 3,
      title: "Children's Ministry",
      subtitle: "Growing Young Hearts",
      description:
        "Bible-centered activities helping children discover God's love and develop a strong foundation of faith.",
      day: "Every Sunday",
      time: "During Worship",
      icon: Sparkles,
    },

    {
      id: 4,
      title: "Praise & Worship",
      subtitle: "Celebrating God's Goodness",
      description:
        "A joyful expression of praise and worship as we lift our hearts and voices to God together.",
      day: "Selected Services",
      time: "See Church Programme",
      icon: Music,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_55%)] pointer-events-none" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-px bg-yellow-400" />

              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-yellow-400">
                Worship With Us
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.02] tracking-tight">
              Find your place.

              <span className="block text-yellow-400 mt-2">
                Join the family.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              There is a place for everyone at Okegboho Baptist Church. Come
              worship with us, grow in God's Word, build meaningful
              relationships, and serve with purpose.
            </p>
          </div>

          {/* LOCATION */}

          <div className="shrink-0">
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">
                  Worship With Us
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  Igboho, Oyo State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            SUNDAY WORSHIP FEATURE
        ================================================== */}

        <div className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-yellow-400 p-7 sm:p-9 lg:p-10 shadow-2xl">
            {/* Decorative circles */}

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-slate-950/10" />

            <div className="absolute right-10 bottom-[-100px] w-48 h-48 rounded-full border border-slate-950/10" />

            <div className="absolute -left-16 bottom-[-120px] w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              {/* Label */}

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/10">
                <Church className="w-3.5 h-3.5 text-slate-950" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">
                  Every Sunday at the Cathedral of Mercy
                </span>
              </div>

              {/* Heading */}

              <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight">
                Sunday Worship
              </h3>

              <p className="mt-3 max-w-3xl text-slate-800/80 leading-relaxed">
                Join us every Sunday for worship, Sunday School, biblical
                teaching, prayer, fellowship, and the celebration of God's
                goodness.
              </p>

              {/* =================================================
                  SERVICE SCHEDULE
              ================================================== */}

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {/* ENGLISH SERVICE */}

                <div className="group p-5 rounded-2xl bg-slate-950 text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Church className="w-4 h-4 text-yellow-400" />

                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-yellow-400">
                      English Service
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-black">
                    7:00 AM – 9:00 AM
                  </p>

                  <div className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Every Sunday except the last Sunday of the month.
                    </p>
                  </div>
                </div>

                {/* SUNDAY SCHOOL */}

                <div className="group p-5 rounded-2xl bg-white/60 border border-slate-950/10 hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-950" />

                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-950">
                      Sunday School
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-black text-slate-950">
                    9:00 AM – 10:00 AM
                  </p>

                  <div className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0 mt-0.5" />

                    <p className="text-xs text-slate-800/70 leading-relaxed">
                      Bible study and Christian teaching for all ages.
                    </p>
                  </div>
                </div>

                {/* MAIN SERVICE */}

                <div className="group p-5 rounded-2xl bg-blue-950 text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Church className="w-4 h-4 text-yellow-400" />

                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-yellow-400">
                      Main Worship Service
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-black">10:00 AM</p>

                  <div className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />

                    <p className="text-xs text-blue-200/80 leading-relaxed">
                      Our main Sunday worship gathering.
                    </p>
                  </div>
                </div>
              </div>

              {/* IMPORTANT NOTE */}

              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-slate-950/10 border border-slate-950/10">
                <Clock className="w-4 h-4 text-slate-950 shrink-0 mt-0.5" />

                <p className="text-xs sm:text-sm font-semibold text-slate-900/75 leading-relaxed">
                  Please note: The English Service does not hold on the last
                  Sunday of each month.
                </p>
              </div>

              {/* PLAN YOUR VISIT */}

              <div className="mt-8">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Plan Your Visit

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            OTHER MINISTRIES & SERVICES
        ================================================== */}

        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-yellow-400" />

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-400">
              Other Church Activities
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group relative overflow-hidden p-6 sm:p-7 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Top accent */}

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* ICON */}

                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-yellow-400 group-hover:text-slate-950 transition-colors duration-300" />
                  </div>

                  {/* SUBTITLE */}

                  <p className="mt-6 text-[9px] uppercase tracking-[0.2em] font-black text-yellow-400">
                    {service.subtitle}
                  </p>

                  {/* TITLE */}

                  <h3 className="mt-2 text-xl font-black text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* SCHEDULE */}

                  <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-3.5 h-3.5 text-yellow-400 shrink-0" />

                      <span className="text-xs font-semibold text-slate-300">
                        {service.day}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-yellow-400 shrink-0" />

                      <span className="text-xs font-semibold text-slate-300">
                        {service.time}
                      </span>
                    </div>
                  </div>

                  {/* HOVER ARROW */}

                  <div className="absolute right-6 bottom-6 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-yellow-400 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-yellow-400 group-hover:text-slate-950" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-black">
              New to Okegboho Baptist Church?
            </p>

            <p className="mt-2 text-sm sm:text-base font-bold text-white">
              We would love to welcome you into the Cathedral of Mercy.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-slate-950 hover:bg-yellow-400 text-xs font-black uppercase tracking-wider transition-all duration-300"
          >
            Contact Us

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
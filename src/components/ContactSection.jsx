import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  Send,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl mb-14 lg:mb-16">

          <div className="flex items-center gap-3 mb-5">

            <span className="w-12 h-px bg-yellow-500" />

            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-blue-950">
              Connect With Us
            </span>

          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.02] tracking-tight">

            We'd love to
            <span className="block text-blue-950 mt-2">
              hear from you.
            </span>

          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
            Whether you are visiting for the first time, looking for a church
            family, requesting prayer, or simply want to connect with us,
            the Cathedral of Mercy welcomes you.
          </p>

        </div>


        {/* =====================================================
            CONTACT + FORM
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div className="lg:col-span-2 rounded-[2rem] bg-blue-950 p-7 sm:p-9 text-white relative overflow-hidden">

            {/* Decorative circles */}

            <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-yellow-400/10 blur-2xl" />

            <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative">

              <span className="inline-flex px-3 py-1.5 rounded-full bg-yellow-400 text-blue-950 text-[9px] font-black uppercase tracking-[0.15em]">
                Visit Us
              </span>

              <h3 className="mt-5 text-2xl sm:text-3xl font-black leading-tight">
                Cathedral of Mercy
              </h3>

              <p className="mt-3 text-sm text-blue-100/70 leading-relaxed">
                Okegboho Baptist Church, Igboho, Oyo State, Nigeria.
              </p>


              {/* Contact items */}

              <div className="mt-8 space-y-4">

                {/* Address */}

                <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-950" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-blue-200/50 font-black">
                      Church Address
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white leading-relaxed">
                      Okegboho Area,
                      <br />
                      Igboho, Oyo State, Nigeria
                    </p>
                  </div>

                </div>


                {/* Phone */}

                <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-blue-200/50 font-black">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Contact church office
                    </p>
                  </div>

                </div>


                {/* Email */}

                <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-blue-200/50 font-black">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white break-all">
                      Church office email
                    </p>
                  </div>

                </div>

              </div>


              {/* Service information */}

              <div className="mt-6 pt-6 border-t border-white/10">

                <div className="flex items-center gap-3">

                  <Clock3 className="w-4 h-4 text-yellow-400" />

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.18em] text-blue-200/50 font-black">
                      Worship With Us
                    </p>

                    <p className="mt-1 text-xs font-semibold text-blue-100">
                      Sunday worship • Bible study • Prayer
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              MESSAGE / PRAYER FORM
          ================================================== */}

          <div className="lg:col-span-3 rounded-[2rem] bg-slate-50 border border-slate-200 p-7 sm:p-9">

            <div className="flex items-start justify-between gap-5">

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600">
                  Prayer & Contact
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-slate-950">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Share your prayer request, question, or message with us.
                </p>

              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-950 items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-yellow-400" />
              </div>

            </div>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                />

              </div>


              {/* Email / Phone */}

              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 mb-2">
                  Phone or Email
                </label>

                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="How can we reach you?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                />

              </div>


              {/* Message */}

              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="How can we pray with you or assist you?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                />

              </div>


              {/* Submit */}

              {submitted ? (

                <div className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold">

                  <CheckCircle2 className="w-5 h-5" />

                  Message ready to be connected

                </div>

              ) : (

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-950 hover:bg-yellow-400 text-white hover:text-blue-950 font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >

                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />

                  Send Message

                </button>

              )}

              <p className="text-[10px] text-slate-400 text-center">
                Your message will be treated with care and confidentiality.
              </p>

            </form>

          </div>

        </div>


        {/* =====================================================
            MAP
        ====================================================== */}

        <div className="mt-10">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-yellow-600" />
              </div>

              <div>

                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black">
                  Find Us
                </p>

                <h3 className="mt-1 text-lg font-black text-slate-950">
                  Our Location
                </h3>

              </div>

            </div>


            <a
              href="https://maps.google.com/?q=Igboho+Oyo+State+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-blue-950 hover:text-yellow-600 transition-colors"
            >

              Open in Google Maps

              <ExternalLink className="w-3.5 h-3.5" />

            </a>

          </div>


          <div className="relative w-full h-80 sm:h-96 lg:h-[430px] rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-100">

            <iframe
              title="Okegboho Baptist Church - Cathedral of Mercy Location"
              src="https://maps.google.com/maps?q=Igboho%2C%20Oyo%20State%2C%20Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>


        {/* =====================================================
            WHATSAPP / QUICK CONTACT
        ====================================================== */}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-[2rem] bg-yellow-400">

          <div className="text-center sm:text-left">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-950/60">
              Need Prayer?
            </p>

            <p className="mt-1 text-sm sm:text-base font-black text-blue-950">
              We would be glad to stand with you in prayer.
            </p>

          </div>


          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-950 text-white hover:bg-blue-900 text-xs font-black uppercase tracking-[0.12em] transition-all duration-300 shadow-lg"
          >

            <MessageCircle className="w-4 h-4" />

            Contact Us

          </button>

        </div>

      </div>
    </section>
  );
}
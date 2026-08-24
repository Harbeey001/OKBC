import React, { useState } from "react";
import {
  X,
  HeartHandshake,
  Copy,
  Check,
  ShieldCheck,
  Landmark,
  Sparkles,
} from "lucide-react";

import { BANK_DETAILS } from "../data/churchData";

export default function GivingModal({ isOpen, onClose }) {
  const [copiedAccount, setCopiedAccount] = useState(null);

  // Don't render the modal when it is closed
  if (!isOpen) return null;

  const handleCopyAccount = async (accountNumber) => {
    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopiedAccount(accountNumber);

      setTimeout(() => {
        setCopiedAccount(null);
      }, 2500);
    } catch (error) {
      console.error("Unable to copy account number:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="giving-modal-title"
    >
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close giving window"
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm cursor-default"
      />

      {/* =====================================================
          MODAL
      ====================================================== */}

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl border border-white/20">

        {/* =================================================
            TOP ACCENT
        ================================================== */}

        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-950 via-yellow-400 to-blue-950" />

        {/* =================================================
            CLOSE BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close giving window"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-yellow-400 text-slate-600 hover:text-blue-950 flex items-center justify-center transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="p-6 sm:p-8 lg:p-10">

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="text-center max-w-lg mx-auto">

            {/* Giving Icon */}

            <div className="relative mx-auto w-16 h-16">

              <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-md" />

              <div className="relative w-16 h-16 bg-yellow-400 text-blue-950 rounded-2xl flex items-center justify-center shadow-lg">
                <HeartHandshake className="w-7 h-7" />
              </div>

            </div>

            {/* Badge */}

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-950 text-[9px] font-black uppercase tracking-[0.18em]">

              <Sparkles className="w-3 h-3 text-yellow-600" />

              Give With Joy

            </div>

            {/* Title */}

            <h3
              id="giving-modal-title"
              className="mt-4 text-2xl sm:text-3xl font-black text-slate-950"
            >
              Giving & Tithes
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Your generosity helps support worship, missions, church
              ministries, welfare, and the advancement of God's kingdom.
            </p>

            {/* Scripture */}

            <div className="mt-5 px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200">

              <p className="text-sm italic font-medium text-slate-600 leading-relaxed">
                "Give, and it shall be given unto you..."
              </p>

              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-600">
                Luke 6:38
              </p>

            </div>

          </div>

          {/* =================================================
              BANK ACCOUNTS
          ================================================== */}

          <div className="mt-8 space-y-4">

            {BANK_DETAILS.map((item, index) => (
              <div
                key={`${item.bank}-${index}`}
                className="group relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
              >

                {/* Account Accent */}

                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-950 group-hover:bg-yellow-400 transition-colors duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pl-2">

                  {/* Account Information */}

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <div className="w-9 h-9 rounded-xl bg-blue-950 flex items-center justify-center shrink-0">

                        <Landmark className="w-4 h-4 text-yellow-400" />

                      </div>

                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-yellow-600">
                          {item.title}
                        </p>

                        <h4 className="mt-1 text-sm sm:text-base font-black text-slate-950">
                          {item.bank}
                        </h4>

                      </div>

                    </div>

                    {/* Account Number */}

                    <div className="mt-5">

                      <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                        Account Number
                      </p>

                      <p className="mt-1 text-xl sm:text-2xl font-black font-mono tracking-wider text-blue-950 break-all">
                        {item.accountNumber}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Account Name:{" "}
                        <span className="font-bold text-slate-700">
                          {item.name}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* Copy Button */}

                  <button
                    type="button"
                    onClick={() => handleCopyAccount(item.accountNumber)}
                    className={`shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                      copiedAccount === item.accountNumber
                        ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        : "bg-blue-950 text-white hover:bg-yellow-400 hover:text-blue-950"
                    }`}
                  >
                    {copiedAccount === item.accountNumber ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* =================================================
              SECURITY / VERIFICATION NOTICE
          ================================================== */}

          <div className="mt-6 flex gap-3 p-4 rounded-2xl bg-yellow-50 border border-yellow-200">

            <ShieldCheck className="w-5 h-5 shrink-0 text-yellow-700 mt-0.5" />

            <div>

              <p className="text-xs font-black text-slate-800">
                Please verify account details before transferring.
              </p>

              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                If you are unsure about any account information, please
                contact the church office before making a transfer.
              </p>

            </div>

          </div>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="mt-7 text-center">

            <p className="text-xs text-slate-400 leading-relaxed">
              Thank you for supporting the work of the church and the
              advancement of God's kingdom.
            </p>

            <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-blue-950">
              Okegboho Baptist Church
              <span className="mx-2 text-yellow-500">•</span>
              Cathedral of Mercy
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
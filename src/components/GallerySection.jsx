import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

import { GALLERY_ITEMS } from "../data/churchData";

// ============================================================
// GALLERY SECTION
// ============================================================

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ==========================================================
  // OPEN IMAGE
  // ==========================================================

  const openImage = (image) => {
    setSelectedImage(image);
  };

  // ==========================================================
  // CLOSE IMAGE
  // ==========================================================

  const closeImage = () => {
    setSelectedImage(null);
  };

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const showPrevious = () => {
    if (!selectedImage || GALLERY_ITEMS.length === 0) return;

    const currentIndex = GALLERY_ITEMS.findIndex(
      (item) => item.id === selectedImage.id
    );

    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? GALLERY_ITEMS.length - 1
        : currentIndex - 1;

    setSelectedImage(GALLERY_ITEMS[previousIndex]);
  };

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const showNext = () => {
    if (!selectedImage || GALLERY_ITEMS.length === 0) return;

    const currentIndex = GALLERY_ITEMS.findIndex(
      (item) => item.id === selectedImage.id
    );

    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === GALLERY_ITEMS.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // ==========================================================
  // PREVENT BODY SCROLL WHEN LIGHTBOX IS OPEN
  // ==========================================================

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      {/* ========================================================
          GALLERY SECTION
      ======================================================== */}

      <section
        id="gallery"
        className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
      >
        {/* ====================================================
            BACKGROUND DECORATION
        ==================================================== */}

        <div className="absolute -top-40 -right-40 w-[450px] h-[450px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-blue-950/5 blur-3xl pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl pointer-events-none" />

        {/* ====================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ====================================================
              SECTION HEADER
          ==================================================== */}

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 border border-yellow-400/20 shadow-sm">
                <Images className="h-7 w-7 text-yellow-600" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-yellow-500" />

              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-yellow-600">
                Our Memories
              </p>

              <span className="w-10 h-px bg-yellow-500" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.02]">
              Church Gallery
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
              A glimpse into the life, worship, fellowship, and activities
              of Okegboho Baptist Church, Cathedral of Mercy.
            </p>

          </div>

          {/* ====================================================
              GALLERY GRID
          ==================================================== */}

          {GALLERY_ITEMS.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {GALLERY_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openImage(item)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100 text-left shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-500/30"
                  aria-label={`View ${item.title}`}
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading={index < 4 ? "eager" : "lazy"}
                  />

                  {/* DARK OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* TOP NUMBER */}

                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-[9px] font-black text-yellow-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* IMAGE CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 translate-y-5 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                      Cathedral of Mercy
                    </p>

                    <p className="mt-2 text-sm sm:text-base font-black text-white">
                      {item.title}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <Images className="w-3.5 h-3.5 text-white/70" />

                      <p className="text-xs text-white/70">
                        Click to view full image
                      </p>
                    </div>

                  </div>

                </button>
              ))}

            </div>
          ) : (

            /* ==================================================
               EMPTY STATE
            ================================================== */

            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                <Images className="h-8 w-8 text-slate-400" />
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-700">
                No Gallery Images Yet
              </h3>

              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                Gallery images will appear here once they are added
                to the church gallery.
              </p>

            </div>
          )}

          {/* ====================================================
              GALLERY FOOTER
          ==================================================== */}

          {GALLERY_ITEMS.length > 0 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {GALLERY_ITEMS.length}{" "}
                  {GALLERY_ITEMS.length === 1 ? "Memory" : "Memories"}
                </p>
              </div>

              <p className="text-xs text-slate-400 text-center sm:text-right">
                Celebrating God's faithfulness through every season.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          LIGHTBOX
      ======================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-4 sm:p-6"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >

          {/* ====================================================
              CLOSE BUTTON
          ==================================================== */}

          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950 hover:scale-105"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* ====================================================
              PREVIOUS BUTTON
          ==================================================== */}

          {GALLERY_ITEMS.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 lg:left-10 top-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950 hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          )}

          {/* ====================================================
              IMAGE CONTAINER
          ==================================================== */}

          <div
            className="relative flex max-h-[92vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            {/* IMAGE */}

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[76vh] sm:max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
            />

            {/* IMAGE INFORMATION */}

            <div className="mt-4 sm:mt-5 text-center">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                Cathedral of Mercy
              </p>

              <h3 className="mt-2 text-base sm:text-lg font-black text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-xs text-white/50">
                Image{" "}
                {GALLERY_ITEMS.findIndex(
                  (item) => item.id === selectedImage.id
                ) + 1}{" "}
                of {GALLERY_ITEMS.length}
              </p>

              <p className="mt-2 hidden sm:block text-[10px] text-white/30">
                Use ← → to navigate • Press ESC to close
              </p>

            </div>

          </div>

          {/* ====================================================
              NEXT BUTTON
          ==================================================== */}

          {GALLERY_ITEMS.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 lg:right-10 top-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950 hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          )}

        </div>
      )}
    </>
  );
}
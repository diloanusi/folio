"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photos } from "@/data/photos";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function FilmsPage() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <PageHeader
        archiveId="[ARCH-002 / Films & Photography]"
        title="Films"
        description="An ongoing archive of photographs — objects, places, and the quality of light in between."
      />

      {/* Gallery grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setSelected(photo)}
          >
            {/* Placeholder image — in production replace with real next/image */}
            <div
              className={[
                "bg-[var(--border)] overflow-hidden relative",
                photo.aspectRatio === "portrait"
                  ? "aspect-[3/4]"
                  : photo.aspectRatio === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-[var(--fg)] opacity-0 group-hover:opacity-5 transition-opacity z-10" />
              {/* Swap for real image when available */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  [{photo.id.toUpperCase()}]
                </span>
              </div>
            </div>
            <figcaption className="mt-2 flex items-start justify-between gap-2">
              <span className="fig-label">[FIG {String(i + 1).padStart(2, "0")}]</span>
              <span className="font-mono text-[11px] text-[var(--muted)] text-right leading-snug">
                {photo.caption}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--fg)] bg-opacity-95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={[
                  "bg-[var(--border)] w-full relative",
                  selected.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : selected.aspectRatio === "landscape"
                      ? "aspect-[4/3]"
                      : "aspect-square",
                ].join(" ")}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-[11px] text-[var(--muted)]">
                    [{selected.id.toUpperCase()}]
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[var(--bg)] text-sm font-light">{selected.caption}</p>
                  {selected.location && (
                    <p className="fig-label mt-1 text-[var(--muted)]">
                      {selected.location} — {selected.year}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--bg)] transition-colors shrink-0"
                  aria-label="Close"
                >
                  [Close]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

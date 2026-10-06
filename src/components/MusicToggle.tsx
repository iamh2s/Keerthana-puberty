"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { ambientMusic } from "../lib/music";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(ambientMusic.playing);

  const toggle = async () => {
    await ambientMusic.toggle();
    setPlaying(ambientMusic.playing);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "இசையை நிறுத்து" : "இசையை இயக்கு"}
      className="music-fab group fixed z-[80] right-4 bottom-[96px] md:right-6 md:bottom-6 flex flex-col items-center gap-1.5"
    >
      <span
        className={`relative grid place-items-center w-12 h-12 md:w-13 md:h-13 rounded-full shadow-[0_10px_24px_-8px_rgba(123,30,47,0.6)] ring-1 transition-all active:scale-90 ${
          playing
            ? "bg-maroon text-cream ring-gold-2/80"
            : "bg-paper text-maroon ring-gold/60 hover:bg-cream"
        }`}
      >
        {playing ? (
          <>
            <Volume2 size={20} />

            {/* Equalizer */}
            <span
              className="absolute -top-1.5 -right-1.5 flex items-end gap-[2px] h-3.5 rounded-full bg-gold-2 px-1 py-[3px]"
              aria-hidden="true"
            >
              <span
                className="eq-bar w-[2.5px] bg-maroon rounded-full"
                style={{ animationDelay: "0s" }}
              />

              <span
                className="eq-bar w-[2.5px] bg-maroon rounded-full"
                style={{ animationDelay: "0.25s" }}
              />

              <span
                className="eq-bar w-[2.5px] bg-maroon rounded-full"
                style={{ animationDelay: "0.5s" }}
              />
            </span>
          </>
        ) : (
          <VolumeX size={20} />
        )}
      </span>

      <span className="text-[10px] font-bold tracking-wide text-maroon bg-paper/90 border border-gold/40 rounded-full px-2 py-0.5 shadow-sm">
        இசை
      </span>
    </button>
  );
}
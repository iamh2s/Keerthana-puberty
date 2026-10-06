import { useEffect, useState } from "react";
import { Hourglass } from "lucide-react";
import { Jasmine } from "./decor";

const TARGET = new Date("2026-04-26T09:30:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    mins: Math.floor(ms / 60000) % 60,
    secs: Math.floor(ms / 1000) % 60,
    done: ms <= 0,
  };
}

const LABELS = ["நாட்கள்", "மணி", "நிமிடம்", "வினாடி"];

export default function Countdown() {
  const [t, setT] = useState(diff);

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = [t.days, t.hours, t.mins, t.secs];

  return (
    <div className="mt-12 rounded-[1.8rem] bg-paper border border-gold/45 shadow-[0_18px_40px_-24px_rgba(123,30,47,0.35)] px-5 sm:px-8 py-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="kolamdots" width="34" height="34" patternUnits="userSpaceOnUse">
            <circle cx="17" cy="17" r="1.6" fill="#7b1e2f" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#kolamdots)" />
        </svg>
      </div>

      <div className="relative">
        <p className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wide">
          <Hourglass size={16} />
          <span className="font-serif-en italic uppercase tracking-[0.24em] text-xs">Countdown</span>
        </p>
        <h3 className="font-heading text-2xl sm:text-3xl text-maroon mt-1">விழாவிற்கு இன்னும்</h3>

        {t.done ? (
          <p className="mt-6 font-heading text-xl text-pink-deep">
            நன்றி! விழா மங்கலமாக நடைபெற்றது.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
            {values.map((v, i) => (
              <div
                key={LABELS[i]}
                className="rounded-2xl bg-gradient-to-b from-cream to-saffron-2 border border-gold/40 py-3 sm:py-4 shadow-inner"
              >
                <p
                  key={v}
                  className="num-pop font-heading text-2xl max-[359px]:text-xl sm:text-4xl text-maroon tabular-nums leading-none"
                >
                  {String(v).padStart(2, "0")}
                </p>
                <p className="text-[11px] sm:text-xs text-ink/70 mt-1.5 font-medium">{LABELS[i]}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
          <Jasmine size={16} />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <Jasmine size={16} />
        </div>
      </div>
    </div>
  );
}

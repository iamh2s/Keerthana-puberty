import { MapPin, Landmark, Navigation, CarFront } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader, KolamCorner } from "./decor";
import { LaceEdge } from "./ornaments";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Sri+Sakthi+Vinayagar+Thirumana+Mandapam,+Kumbakonam,+Tamil+Nadu";
const MAP_EMBED =
  "https://www.google.com/maps?q=Adi+Kumbeswarar+Temple,+Kumbakonam,+Tamil+Nadu&z=15&output=embed";

export default function Venue() {
  return (
    <section
      id="idam"
      className="relative scroll-mt-20 py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-cream via-[#eef2e1]/60 to-cream"
    >
      <KolamCorner className="absolute bottom-8 left-0 w-36 opacity-[0.08] rotate-180" stroke="#2e6b45" />

      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeader eyebrow="Venue" title="விழா நடைபெறும் இடம்" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[1.05fr_1fr] gap-7 items-stretch">
          {/* details card — from left */}
          <Reveal delay={120} variant="left">
            <div className="h-full rounded-[1.8rem] bg-paper border border-gold/45 shadow-[0_20px_44px_-24px_rgba(123,30,47,0.4)] p-7 sm:p-9 relative overflow-hidden">
              <span className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blush/70 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-maroon text-cream shadow-lg">
                  <MapPin size={26} />
                </span>
                <h3 className="font-heading text-2xl sm:text-[1.7rem] text-maroon leading-snug mt-5">
                  ஸ்ரீ சக்தி விநாயகர்
                  <br />
                  திருமண மண்டபம்
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink/80">
                  எண். 45, கோயில் தெரு,
                  <br />
                  கும்பகோணம், தஞ்சாவூர் மாவட்டம் — 612 001
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-saffron-2/80 border border-gold/40 px-4 py-3">
                  <Landmark size={17} className="text-maroon mt-0.5 shrink-0" />
                  <p className="text-sm leading-relaxed text-ink/80">
                    <span className="font-semibold text-maroon">அடையாளம்: </span>
                    ஆதி கும்பேஸ்வரர் கோயில் கிழக்கு கோபுரம் அருகில்
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2.5 text-[13.5px] text-ink/65">
                  <CarFront size={16} className="text-leaf" />
                  வாகன நிறுத்தும் இட வசதி உண்டு
                </div>

                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="sheen mt-7 inline-flex items-center gap-2.5 rounded-full bg-maroon hover:bg-maroon-2 text-cream font-heading text-lg px-8 py-3 shadow-[0_14px_28px_-10px_rgba(123,30,47,0.55)] ring-1 ring-gold-2/70 transition active:scale-95"
                >
                  <Navigation size={17} />
                  வழிகாட்டி <span className="font-serif-en italic text-sm opacity-90">· Get Directions</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* map — from right */}
          <Reveal delay={220} variant="right">
            <div className="relative h-full min-h-[320px] rounded-[1.8rem] bg-paper border-2 border-gold/50 p-2 shadow-[0_20px_44px_-24px_rgba(123,30,47,0.4)] overflow-hidden">
              <iframe
                title="விழா இடம் — கும்பகோணம் வரைபடம்"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[304px] rounded-[1.35rem] border border-gold/30"
              />
              <span className="absolute top-4 left-4 bg-cream/95 text-maroon text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gold/50 shadow pointer-events-none">
                கும்பகோணம், தமிழ்நாடு
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <LaceEdge className="mt-12 w-full h-4 opacity-60" />
        </Reveal>
      </div>
    </section>
  );
}

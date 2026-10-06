import { CalendarDays, Clock, MapPin, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { Thoranam, KolamCorner, Kuthuvilakku, Jasmine, MandalaFrame, Petals, Divider } from "./decor";
import { TextRing, Garland, Twinkles, LaceEdge } from "./ornaments";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-blush/60">
      {/* doorway garland */}
      <Thoranam className="relative z-10 w-full h-10 min-[400px]:h-12 sm:h-16 drop-shadow-sm" />

      {/* kolam corners */}
      <KolamCorner className="absolute top-12 left-0 min-[400px]:top-14 min-[400px]:left-1 sm:top-[70px] sm:left-3 w-14 min-[400px]:w-20 sm:w-32 lg:w-40 opacity-40 sm:opacity-60" />
      <KolamCorner className="absolute top-12 right-0 min-[400px]:top-14 min-[400px]:right-1 sm:top-[70px] sm:right-3 w-14 min-[400px]:w-20 sm:w-32 lg:w-40 opacity-40 sm:opacity-60 -scale-x-100" />

      <Petals />
      <Twinkles className="z-[1]" />

      {/* hanging garlands at the doorway edges */}
      <Garland className="hidden lg:block absolute left-[3%] xl:left-[7%] top-44 h-[300px] opacity-90 animate-sway" />
      <Garland className="hidden lg:block absolute right-[3%] xl:right-[7%] top-52 h-[280px] opacity-90 animate-sway-fast" />

      {/* content column: fluid padding, balanced wrapping, centered text */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 min-[400px]:px-5 sm:px-8 pt-4 sm:pt-8 pb-14 sm:pb-16 text-center">
        <Reveal variant="down">
          <p className="font-serif-en italic tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold text-[11px] sm:text-sm text-balance">
            With love &amp; blessings
          </p>
          <p className="font-heading text-maroon-2 text-base min-[400px]:text-lg sm:text-xl mt-1 text-balance">
            அன்புடன் அழைக்கிறோம்
          </p>
        </Reveal>

        <Reveal delay={120} variant="left">
          <h1 className="font-heading text-maroon text-[clamp(1.25rem,5.5vw,3rem)] w-full max-w-[92%] sm:max-w-[80%] lg:max-w-2xl mx-auto leading-snug mt-3 text-balance break-words">
            பூப்புனித நீராட்டு விழா
          </h1>
          <Divider className="mt-4" variant="lamp" />
        </Reveal>

        {/* portrait */}
        <Reveal delay={220} variant="grow">
          <div className="relative mt-8 sm:mt-10 inline-block">
            <div
              aria-hidden="true"
              className="absolute -z-20 w-[min(440px,120vw)] sm:w-[620px] max-w-none aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(237,163,28,0.18), rgba(213,78,119,0.06) 45%, rgba(237,163,28,0) 66%)",
              }}
            />
            <TextRing className="absolute -z-10 w-[min(480px,125vw)] sm:w-[640px] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-rev" />
            <MandalaFrame className="absolute -z-10 w-[min(420px,110vw)] sm:w-[560px] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 animate-spin-slower" />

            <div className="relative p-2 sm:p-2.5 rounded-t-[999px] rounded-b-[2.2rem] border-[3px] border-gold bg-paper shadow-[0_18px_45px_-18px_rgba(123,30,47,0.45)]">
              <div className="rounded-t-[999px] rounded-b-3xl overflow-hidden border-[3px] border-maroon/20">
                <img
                  src="/images/girl-hero.jpg"
                  alt="ஸ்ரீ கீர்த்தனா — பாரம்பரிய பட்டுப் பாவாடையில்"
                  className="img-soft w-48 min-[360px]:w-56 min-[400px]:w-60 sm:w-72 md:w-80 aspect-[3/4] object-cover"
                  fetchPriority="high"
                />
              </div>
              {/* jasmine blossoms tucked on the frame */}
              <Jasmine size={30} className="absolute -top-2 left-6 animate-floaty" />
              <Jasmine size={24} className="absolute top-8 -right-2 animate-floaty-slow" />
              <Jasmine size={20} className="absolute top-20 -left-2.5 animate-floaty" />
            </div>

            {/* flanking lamps */}
            <Kuthuvilakku className="hidden sm:block absolute -left-24 md:-left-28 bottom-2 w-14 md:w-16 animate-floaty-slow" />
            <span className="hidden sm:block absolute -right-24 md:-right-28 bottom-2 animate-floaty-slow" style={{ animationDelay: "1.4s" }}>
              <Kuthuvilakku className="w-14 md:w-16" />
            </span>
            <Kuthuvilakku className="sm:hidden absolute -left-9 min-[400px]:-left-12 bottom-0 w-8 min-[400px]:w-10" />
            <Kuthuvilakku className="sm:hidden absolute -right-9 min-[400px]:-right-12 bottom-0 w-8 min-[400px]:w-10" />
          </div>
        </Reveal>

        <Reveal delay={300} variant="right">
          <div className="mt-9">
            <p className="text-sm sm:text-base text-ink/70 tracking-wide">நமது அன்புச் செல்வி</p>
            <h2 className="font-heading font-medium shimmer text-[clamp(1.875rem,9vw,4.5rem)] leading-tight mt-1 text-balance break-words drop-shadow-[0_2px_10px_rgba(213,78,119,0.15)]">
              ஸ்ரீ கீர்த்தனா
            </h2>
            <p className="font-serif-en italic tracking-[0.22em] sm:tracking-[0.32em] uppercase text-gold text-[11px] sm:text-xs mt-2">
              Sree Keerthana
            </p>
            {/* small flourish under the name */}
            <svg viewBox="0 0 200 20" className="mx-auto mt-2 w-32 sm:w-40 text-gold" aria-hidden="true">
              <path d="M4 10 C 40 2 70 2 96 10 M104 10 C 130 18 160 18 196 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="100" cy="10" r="3" fill="currentColor" />
              <circle cx="88" cy="8.4" r="1.4" fill="currentColor" />
              <circle cx="112" cy="11.6" r="1.4" fill="currentColor" />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={380} variant="left">
          <p className="mt-6 text-base min-[400px]:text-[1.05rem] sm:text-lg leading-relaxed text-ink/85 max-w-xl mx-auto text-pretty">
            எங்கள் அன்பு மகளின் பூப்புனித நீராட்டு விழாவிற்கு தங்களை
            குடும்பத்துடன் அன்புடன் அழைக்கிறோம்.
          </p>
        </Reveal>

        {/* event chips: stacked full-width on phones, wrap inline from sm up */}
        <Reveal delay={460} variant="right">
          <div className="mt-7 flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center justify-center gap-2.5 sm:gap-3 max-w-sm sm:max-w-none mx-auto">
            {[
              { icon: CalendarDays, ta: "ஞாயிறு, 26 ஏப்ரல் 2026", en: "Sunday, 26 April" },
              { icon: Clock, ta: "காலை 9:30 மணி", en: "9:30 AM" },
              { icon: MapPin, ta: "கும்பகோணம்", en: "Kumbakonam" },
            ].map(({ icon: Icon, ta, en }) => (
              <span
                key={ta}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-paper border border-gold/45 pl-3 pr-4 py-2 shadow-sm"
              >
                <Icon size={17} className="text-maroon shrink-0" />
                <span className="text-maroon font-semibold text-sm sm:text-[15px] text-center">{ta}</span>
                <span className="hidden md:inline font-serif-en italic text-xs text-gold">{en}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={540} variant="grow">
          <a
            href="#azhaippu"
            className="sheen group mt-8 inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-maroon hover:bg-maroon-2 text-cream font-heading text-base min-[400px]:text-lg px-7 min-[400px]:px-9 py-3 sm:py-3.5 shadow-[0_14px_30px_-10px_rgba(123,30,47,0.55)] ring-1 ring-gold-2/70 transition-all active:scale-95"
          >
            <Jasmine size={20} />
            அழைப்பிதழை காண்க
            <ChevronDown size={18} className="animate-bob" />
          </a>
        </Reveal>
      </div>

      <KolamStripBottom />
      <LaceEdge className="relative z-10 w-full h-3 sm:h-4 opacity-70" />
    </section>
  );
}

function KolamStripBottom() {
  return (
    <div className="relative z-10 flex justify-center pb-3 animate-bob">
      <ChevronDown className="text-maroon/50" size={22} />
    </div>
  );
}
import { Share2, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { Thoranam, Jasmine, KolamCorner, KolamStrip, Divider } from "./decor";
import { DiyaRow, Garland, Twinkles } from "./ornaments";

export default function Finale() {
  const shareOnWhatsApp = () => {
    const message =
      "ஸ்ரீ கீர்த்தனா அவர்களின் பூப்புனித நீராட்டு விழா — ஞாயிறு, 26 ஏப்ரல் 2026, ஸ்ரீ சக்தி விநாயகர் திருமண மண்டபம், கும்பகோணம். அன்புடன் அழைக்கிறோம்: " +
      window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon via-[#6d1a2a] to-[#571320]">
        <Thoranam className="w-full h-12 sm:h-16" />
        <KolamCorner className="absolute top-20 left-2 w-24 sm:w-36 opacity-[0.16]" stroke="#fbf3e1" />
        <KolamCorner className="absolute top-20 right-2 w-24 sm:w-36 opacity-[0.16] -scale-x-100" stroke="#fbf3e1" />
        <KolamCorner className="absolute bottom-24 left-2 w-24 sm:w-36 opacity-[0.12] -scale-y-100" stroke="#fbf3e1" />
        <KolamCorner className="absolute bottom-24 right-2 w-24 sm:w-36 opacity-[0.12] -scale-x-100 -scale-y-100" stroke="#fbf3e1" />
        <Twinkles />
        <Garland className="hidden md:block absolute left-[4%] top-28 h-[260px] opacity-80 animate-sway" />
        <Garland className="hidden md:block absolute right-[4%] top-36 h-[240px] opacity-80 animate-sway-fast" />

        <div className="relative z-10 mx-auto max-w-2xl px-5 py-16 sm:py-24 text-center">
          <Reveal>
            <p className="font-serif-en italic tracking-[0.3em] uppercase text-gold-2 text-xs sm:text-sm">
              We await you
            </p>
          </Reveal>

          <Reveal delay={120} variant="left">
            <p className="font-heading text-2xl sm:text-[2rem] leading-relaxed sm:leading-[1.9] text-[#fdf1dd] mt-4">
              “தங்களின் வருகையும் வாழ்த்துகளும் எங்கள் குடும்பத்தின்
              மகிழ்ச்சியை மேலும் சிறப்பிக்கும்.”
            </p>
          </Reveal>

          <Reveal delay={220} variant="right">
            <DiyaRow className="mt-8 w-64 sm:w-80 mx-auto" />

            <p className="mt-8 text-[#f5d9c8]/85 text-[15px]">அன்புடன்,</p>
            <p className="font-heading text-4xl sm:text-6xl shimmer-gold leading-tight mt-2 drop-shadow-[0_3px_14px_rgba(0,0,0,0.3)]">
              ஸ்ரீ கீர்த்தனா
            </p>
            <div className="mt-3 flex items-center justify-center gap-2.5 text-[#f5d9c8]/80 text-sm">
              <Jasmine size={14} />
              <p>திரு. சுரேஷ்குமார் – திருமதி. மீனாட்சி அவர்களின் அன்பு மகள்</p>
              <Jasmine size={14} />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <p className="font-heading text-lg text-[#fdf1dd]">
                ஞாயிறு, 26 ஏப்ரல் 2026 — காலை 9:30 மணி
              </p>
              <button
                type="button"
                onClick={shareOnWhatsApp}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#fdf1dd] text-maroon hover:bg-white font-semibold px-7 py-3 shadow-lg transition active:scale-95"
              >
                <Share2 size={17} />
                WhatsApp-இல் இந்த அழைப்பைப் பகிர்க
              </button>
            </div>
          </Reveal>
        </div>

        <KolamStrip tone="cream" className="relative z-10 w-full h-5 opacity-60" />
      </section>

      <footer className="relative bg-[#4d1019] text-center px-5 pt-8 pb-24 md:pb-12 overflow-hidden">
        <div className="flex items-center justify-center gap-2.5">
          <Jasmine size={18} />
          <p className="font-heading text-[#f5d9c8] text-lg">வாழ்க வளமுடன்</p>
          <Jasmine size={18} />
        </div>
        <Divider tone="cream" className="mt-4 opacity-70" variant="lamp" />
        <p className="mt-4 text-[13px] text-[#e8c4b4]/75 leading-relaxed">
          பூப்புனித நீராட்டு விழா அழைப்பிதழ் • 26 ஏப்ரல் 2026 • கும்பகோணம்
        </p>
        <p className="mt-1.5 text-[11px] font-serif-en italic tracking-[0.22em] uppercase text-gold-2/60">
          Keerthana's Pooppunitha Neerattu Vizha
        </p>

        {/* developer credit */}
        <div className="mt-8 max-w-sm mx-auto rounded-3xl border border-gold-2/35 bg-[#571320]/75 px-6 py-7 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* faint kolam dots behind the credit */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%">
              <pattern id="devkolam" width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="13" cy="13" r="1.4" fill="#e2c478" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#devkolam)" />
            </svg>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-2.5" aria-hidden="true">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-2/60" />
              <Sparkles size={13} className="text-gold-2" />
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-2/60" />
            </div>
            <p className="mt-2.5 font-serif-en italic tracking-[0.28em] uppercase text-gold-2/85 text-[10.5px]">
              Website Crafted &amp; Developed By
            </p>
            <p className="shimmer-gold font-serif-en italic font-semibold text-[2.15rem] leading-tight mt-2">
              Hariharasudhan
            </p>
            <div className="mt-2.5 flex items-center justify-center gap-2" aria-hidden="true">
              <Jasmine size={13} />
              <span className="w-1 h-1 rotate-45 bg-gold-2/70 rounded-[1px]" />
              <Jasmine size={13} />
            </div>
            <p className="mt-2.5 text-[13px] italic leading-relaxed text-[#e8c4b4]/90">
              Designed with creativity, elegance, and love to
              celebrate this beautiful beginning.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href="https://hariharasudhan-portfolio-iota.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="sheen inline-flex items-center gap-1.5 rounded-full bg-gold-2 text-[#571320] text-[13px] font-bold px-5 py-2.5 shadow-md transition active:scale-95 hover:bg-[#edc96f]"
              >
                <ArrowUpRight size={15} />
                View Portfolio
              </a>
              <a
                href="tel:+917010458527"
                className="inline-flex items-center gap-2 rounded-full border border-gold-2/60 text-[#f5d9c8] hover:bg-[#6d1a2a] text-[13px] font-semibold px-5 py-2.5 transition active:scale-95"
              >
                <Phone size={14} />
                Call Developer · 70104 58527
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

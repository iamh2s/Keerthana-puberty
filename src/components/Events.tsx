import { CalendarDays, Clock, MapPin, Flower2, Soup, CalendarPlus } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader, KolamCorner, Thoranam } from "./decor";
import Countdown from "./Countdown";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sree+Keerthana+-+Pooppunitha+Neerattu+Vizha&dates=20260426T093000/20260426T120000&ctz=Asia/Kolkata&location=Sri+Sakthi+Vinayagar+Thirumana+Mandapam,+Kumbakonam";

function DetailRow({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="mt-0.5 grid place-items-center w-10 h-10 rounded-full bg-cream border border-gold/40 text-maroon shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-[13px] font-semibold tracking-wide text-gold">{label}</p>
        <p className="text-maroon font-heading text-lg sm:text-xl leading-snug mt-0.5">{value}</p>
        {sub && <p className="font-serif-en italic text-[13px] text-ink/55 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section
      id="vivarangal"
      className="relative scroll-mt-20 py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-cream via-saffron-2/45 to-cream"
    >
      <KolamCorner className="absolute top-10 right-0 w-36 opacity-[0.08] -scale-x-100" />

      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeader eyebrow="Event details" title="விழா விவரங்கள்" />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 sm:gap-7">
          {/* Main ceremony card — from left */}
          <Reveal delay={120} variant="left">
            <article className="relative h-full rounded-[1.8rem] bg-saffron-2/80 border-2 border-gold/50 shadow-[0_20px_44px_-22px_rgba(123,30,47,0.35)] overflow-hidden">
              <Thoranam className="w-full h-10 opacity-90" />
              <KolamCorner className="absolute bottom-3 right-3 w-16 opacity-30 -scale-x-100 -scale-y-100" />
              <div className="px-6 sm:px-7 pb-7 pt-2">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-maroon text-cream shadow-md shrink-0">
                    <Flower2 size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl text-maroon leading-tight">பூப்புனித நீராட்டு விழா</h3>
                    <p className="font-serif-en italic text-[13px] text-gold tracking-wide">The Ceremony</p>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  <DetailRow
                    icon={CalendarDays}
                    label="தேதி"
                    value="ஞாயிறு, 26 ஏப்ரல் 2026"
                    sub="Sunday, 26 April 2026"
                  />
                  <DetailRow
                    icon={Clock}
                    label="நேரம்"
                    value="காலை 9:30 மணி"
                    sub="சுப முகூர்த்த நேரம் • 9:30 AM"
                  />
                  <DetailRow
                    icon={MapPin}
                    label="இடம்"
                    value="ஸ்ரீ சக்தி விநாயகர் திருமண மண்டபம்"
                    sub="கோயில் தெரு, கும்பகோணம்"
                  />
                </div>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maroon-2 bg-paper/80 border border-gold/50 rounded-full px-4 py-2 hover:bg-paper transition active:scale-95"
                >
                  <CalendarPlus size={15} />
                  கேலெண்டரில் சேர்க்க
                </a>
              </div>
            </article>
          </Reveal>

          {/* Feast card — from right */}
          <Reveal delay={220} variant="right">
            <article className="relative h-full rounded-[1.8rem] bg-blush/85 border-2 border-pink-trad/40 shadow-[0_20px_44px_-22px_rgba(123,30,47,0.35)] overflow-hidden">
              <Thoranam className="w-full h-10 opacity-90" />
              <KolamCorner className="absolute bottom-3 right-3 w-16 opacity-30 -scale-x-100 -scale-y-100" stroke="#d54e77" />
              <div className="px-6 sm:px-7 pb-7 pt-2">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-pink-deep text-cream shadow-md shrink-0">
                    <Soup size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl text-maroon leading-tight">விருந்து</h3>
                    <p className="font-serif-en italic text-[13px] text-gold tracking-wide">The Feast</p>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  <DetailRow
                    icon={CalendarDays}
                    label="தேதி"
                    value="அதே நாள் — ஞாயிறு"
                    sub="26 ஏப்ரல் 2026"
                  />
                  <DetailRow
                    icon={Clock}
                    label="நேரம்"
                    value="மதியம் 12:30 மணி முதல்"
                    sub="From 12:30 PM"
                  />
                  <DetailRow
                    icon={MapPin}
                    label="இடம்"
                    value="மண்டப விருந்தரங்கம்"
                    sub="இலைச் சப்பாடு — Traditional banana leaf meal"
                  />
                </div>
                <p className="mt-6 text-[13.5px] leading-relaxed text-ink/70 bg-paper/70 border border-dashed border-pink-trad/40 rounded-2xl px-4 py-3">
                  எல்லோரும் விருந்து உண்டு செல்லுமாறு அன்புடன்
                  கேட்டுக்கொள்கிறோம்.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={260} variant="grow">
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}

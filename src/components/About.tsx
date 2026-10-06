import { Flower2, Sparkles, HeartHandshake, UtensilsCrossed } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader, KolamCorner, Jasmine } from "./decor";
import { KolamBloom, LaceEdge } from "./ornaments";

const NOTES = [
  { icon: Flower2, text: "நலங்கு மற்றும் பூவணைவு வைபவம்" },
  { icon: Sparkles, text: "பட்டுப் பாவாடை அலங்காரம்" },
  { icon: HeartHandshake, text: "உறவுகளின் ஆசிர்வாதம்" },
  { icon: UtensilsCrossed, text: "இலைச் சப்பாட்டு விருந்து" },
];

export default function About() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blush/50 via-cream to-cream overflow-hidden">
      <KolamCorner className="absolute top-8 left-0 w-36 opacity-[0.08] rotate-180" stroke="#2e6b45" />
      <KolamBloom className="hidden sm:block absolute right-[4%] top-20 w-44 lg:w-56 opacity-[0.13]" />

      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeader eyebrow="About the occasion" title="மலரும் தருணம்" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* photo slides in from the left */}
          <Reveal delay={120} variant="left">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 rounded-[2.4rem] border-2 border-dashed border-gold/50 rotate-[-1.5deg]" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden border-[5px] border-paper shadow-[0_24px_50px_-22px_rgba(123,30,47,0.4)] rotate-[1.5deg]">
                <img
                  src="/images/girl-about.jpg"
                  alt="கீர்த்தனா — ஊஞ்சலில் அமர்ந்த நிலையில்"
                  loading="lazy"
                  className="img-soft w-full aspect-[3/4] object-cover"
                />
              </div>
              <Jasmine size={30} className="absolute -top-3 -right-2 animate-floaty" />
              <Jasmine size={22} className="absolute -bottom-2 -left-2 animate-floaty-slow" />
              <span className="absolute -bottom-4 right-6 bg-maroon text-cream text-xs sm:text-sm font-heading px-4 py-1.5 rounded-full rotate-[-2deg] shadow-md">
                இனிய இளமைப் பருவம்
              </span>
            </div>
          </Reveal>

          {/* text slides in from the right */}
          <Reveal delay={220} variant="right">
            <p className="font-heading text-2xl sm:text-[1.7rem] leading-relaxed text-maroon">
              குழந்தைப் பருவத்தின் இனிய நினைவுகளுடன், நம் அன்பு மகள்
              இளமையின் வாசலில் அடியெடுத்து வைக்கிறாள்.
            </p>
            <p className="mt-5 text-[15.5px] sm:text-base leading-loose text-ink/80">
              தாய் மன்னைப் போல உயர்ந்து, முன்னோர் வழியில் நடக்கும் இந்த
              மங்கலத் தருணத்தை, குடும்பப் பாரம்பரிய முறைப்படி நலங்கு
              வைபவத்துடனும், பூ அலங்காரத்துடனும் கொண்டாடுகிறோம்.
              உறவுகளும் நண்பர்களும் ஒன்றுகூடி ஆசீர்வதிக்கும் இந்நாள்
              எங்கள் குடும்பத்திற்கு மறக்க முடியாத பொன்னாள்.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {NOTES.map(({ icon: Icon, text }, i) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-2xl bg-paper border border-gold/35 px-4 py-3 shadow-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-blush text-maroon shrink-0">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm sm:text-[15px] text-ink/85 font-medium leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <LaceEdge className="mt-14 w-full h-4 opacity-60" color="#bb3a62" dot="#c08f2c" />
        </Reveal>
      </div>
    </section>
  );
}

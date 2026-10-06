import Reveal from "./Reveal";
import { SectionHeader, Jasmine } from "./decor";
import { LaceEdge } from "./ornaments";

const PHOTOS = [
  { src: "/images/gallery-girl.jpg", caption: "எங்கள் செல்ல மகள்", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-decor.jpg", caption: "விழா அலங்காரம்", aspect: "aspect-[4/3]" },
  { src: "/images/gallery-family.jpg", caption: "நமது குடும்பம்", aspect: "aspect-[4/3]" },
  { src: "/images/gallery-jasmine.jpg", caption: "மல்லிகை மணம்", aspect: "aspect-square" },
  { src: "/images/gallery-kolam.jpg", caption: "வாசல் கோலம்", aspect: "aspect-[4/3]" },
  { src: "/images/gallery-feast.jpg", caption: "இலை விருந்து", aspect: "aspect-[4/3]" },
];

export default function Gallery() {
  return (
    <section id="padangal" className="relative scroll-mt-20 py-16 sm:py-24 bg-gradient-to-b from-cream to-blush/40 overflow-hidden">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeader eyebrow="Cherished moments" title="இனிய தருணங்கள்" />
          <p className="text-center text-[15px] text-ink/65 mt-3 max-w-md mx-auto">
            சிறிய நிகழ்வுகளிலும் பெரிய நினைவுகள் — எங்கள் நாளின் சிதையாத படங்கள்.
          </p>
        </Reveal>

        <div className="mt-10 columns-2 sm:columns-3 gap-3.5 sm:gap-4 [column-fill:balance]">
          {PHOTOS.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 3) * 90}
              variant={i % 2 === 0 ? "left" : "right"}
              className="break-inside-avoid mb-3.5 sm:mb-4"
            >
              <figure className="group relative rounded-2xl bg-paper border border-gold/35 p-1.5 shadow-[0_14px_30px_-18px_rgba(123,30,47,0.35)] hover:shadow-[0_20px_38px_-18px_rgba(123,30,47,0.45)] transition-shadow duration-300">
                <div className={`rounded-xl overflow-hidden ${p.aspect}`}>
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="img-soft w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>
                <figcaption className="flex items-center justify-center gap-1.5 py-2 text-[13px] sm:text-sm font-heading text-maroon">
                  <Jasmine size={14} />
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <LaceEdge className="mt-12 w-full h-4 opacity-60" color="#2e6b45" dot="#c08f2c" />
        </Reveal>
      </div>
    </section>
  );
}

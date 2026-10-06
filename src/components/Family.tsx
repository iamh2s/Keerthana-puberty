import { Heart} from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader, Jasmine, Kuthuvilakku, Divider } from "./decor";

export default function Family() {
  return (
    <section id="kudumbam" className="relative scroll-mt-20 py-16 sm:py-24 bg-gradient-to-b from-cream via-saffron-2/40 to-cream overflow-hidden">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <SectionHeader eyebrow="Our family" title="குடும்பம்" />
        </Reveal>

        <Reveal delay={140} variant="grow">
          <div className="mt-10 relative rounded-[2rem] bg-paper border border-gold/45 shadow-[0_22px_46px_-24px_rgba(123,30,47,0.35)] px-6 sm:px-10 py-11 overflow-hidden">
            <div className="absolute inset-2.5 rounded-[1.6rem] border border-dashed border-gold/40 pointer-events-none" />

            <div className="relative">
              <p className="font-heading text-2xl sm:text-3xl text-maroon">அன்புடன் அழைப்பவர்கள்</p>
              <p className="font-serif-en italic text-[13px] text-gold tracking-[0.2em] uppercase mt-1">
                Cordially inviting with family
              </p>

              {/* father — from left */}
              <div className="mt-8" data-aos="fade-right" data-aos-delay="620">
                <p className="text-[13px] tracking-[0.2em] uppercase text-gold font-semibold">தந்தை</p>
                <p className="font-heading text-[1.65rem] sm:text-3xl text-ink mt-1">
                  திரு. சு. சுரேஷ்குமார்
                </p>
              </div>

              <div className="my-5 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
                <Jasmine size={20} />
                <span className="font-heading text-pink-deep text-lg">மற்றும்</span>
                <Jasmine size={20} />
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
              </div>

              {/* mother — from right */}
              <div data-aos="fade-left" data-aos-delay="720">
                <p className="text-[13px] tracking-[0.2em] uppercase text-gold font-semibold">தாயார்</p>
                <p className="font-heading text-[1.65rem] sm:text-3xl text-ink mt-1">
                  திருமதி. மீனாட்சி சுரேஷ்
                </p>
              </div>

              <Divider className="mt-8" variant="lamp" />

              <p className="mt-7 text-[15.5px] sm:text-base leading-relaxed text-ink/75">
                உறவினர்கள் மற்றும் நண்பர்கள் அனைவருடன்
                <br />
                தங்கள் குடும்பத்தையும் அன்புடன் வரவேற்கிறோம்
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blush/80 border border-pink-trad/35 text-maroon px-5 py-2.5 text-sm font-semibold">
                  <Heart size={15} className="fill-current" />
                  உங்கள் அன்பான குடும்பம் — கும்பகோணம்
                </span>
              </div>

              <Kuthuvilakku className="mx-auto mt-8 w-9 opacity-90" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

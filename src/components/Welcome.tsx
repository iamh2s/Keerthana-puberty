import Reveal from "./Reveal";
import { KolamCorner, Kuthuvilakku, Jasmine, KolamStrip } from "./decor";

export default function Welcome() {
  return (
    <section
      id="azhaippu"
      className="relative scroll-mt-20 py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blush/50 via-cream to-cream"
    >
      {/* faint watermark kolam */}
      <KolamCorner className="absolute -bottom-6 -right-6 w-40 opacity-[0.07] rotate-90" stroke="#d54e77" />

      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="text-center font-serif-en italic tracking-[0.3em] uppercase text-gold text-xs sm:text-sm">
            The Invitation
          </p>
          <h2 className="text-center font-heading text-3xl sm:text-4xl text-maroon mt-1.5">
            அன்புடன் அழைக்கிறோம்
          </h2>
        </Reveal>

        <Reveal delay={140} variant="grow">
          <div className="relative mt-9 rounded-[2rem] bg-paper border border-gold/40 shadow-[0_20px_50px_-24px_rgba(123,30,47,0.35)] overflow-hidden">
            {/* inner double frame */}
            <div className="absolute inset-2.5 rounded-[1.6rem] border border-dashed border-pink-trad/40 pointer-events-none" />
            <KolamCorner className="absolute top-4 left-4 w-14 opacity-60" />
            <KolamCorner className="absolute top-4 right-4 w-14 opacity-60 -scale-x-100" />
            <KolamCorner className="absolute bottom-4 left-4 w-14 opacity-60 -scale-y-100" />
            <KolamCorner className="absolute bottom-4 right-4 w-14 opacity-60 -scale-x-100 -scale-y-100" />

            <div className="relative px-6 sm:px-12 py-11 sm:py-14 text-center">
              <span className="font-heading text-6xl text-pink-trad/30 leading-none block h-8 select-none" aria-hidden="true">
                “
              </span>
              <p className="font-heading text-xl sm:text-2xl leading-loose text-maroon">
                எங்கள் இல்லத்தின் மகிழ்ச்சியான இந்த நன்னாளில் தாங்கள்
                குடும்பத்துடன் கலந்து கொண்டு எங்கள் மகளை வாழ்த்தி
                சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்.
              </p>
              <div className="flex items-center justify-center gap-3 mt-7" aria-hidden="true">
                <Jasmine size={20} />
                <span className="w-1.5 h-1.5 rotate-45 bg-gold rounded-[1px]" />
                <Kuthuvilakku className="w-6" />
                <span className="w-1.5 h-1.5 rotate-45 bg-gold rounded-[1px]" />
                <Jasmine size={20} />
              </div>
              <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-ink/75">
                முன்னோர்கள் அருளும், உறவுகளின் ஆசிர்வாதமும் நம் மகளின்
                புதிய பயணத்திற்குச் சிறந்த வரப்பிரசாதம். தங்கள் வருகையே
                எங்களுக்குப் பெரும் மகிழ்ச்சி.
              </p>
              <p className="mt-6 font-serif-en italic tracking-[0.24em] uppercase text-gold text-xs">
                A warm welcome awaits your family
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <KolamStrip className="mt-10 w-full h-5 opacity-40" />
        </Reveal>
      </div>
    </section>
  );
}

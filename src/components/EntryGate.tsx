import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { gsap } from "gsap";
import { ambientMusic } from "../lib/music";
import { Thoranam, Kuthuvilakku, Jasmine, KolamCorner, Petals } from "./decor";

/**
 * THE OPENING — a sealed envelope.
 * Deep-maroon envelope on lamp-dark, wax seal with the girl's monogram.
 * One tap breaks the seal — flap lifts, ivory card rises, envelope
 * falls away, card dissolves into the invitation. The same tap
 * unlocks the music (browsers require a gesture first).
 */
export default function EntryGate({ onOpen }: { onOpen: () => void }) {
  const [ready, setReady] = useState(false);
  const [opened, setOpened] = useState(false);
  const [exited, setExited] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  /* lock scroll while sealed */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  /* preload the hero portrait behind the envelope */
  useEffect(() => {
    let done = false;
    const mark = () => {
      if (!done) {
        done = true;
        setReady(true);
      }
    };
    const im = new Image();
    im.src = "/images/girl-hero.jpg";
    im.onload = mark;
    im.onerror = mark;
    const timeout = window.setTimeout(mark, 6000); // never trap the guest
    return () => {
      window.clearTimeout(timeout);
      im.onload = null;
      im.onerror = null;
    };
  }, []);

  const launch = () => {
    if (!ready || opened) return;
    /* start the music right inside the gesture — autoplay-safe */
    ambientMusic.start();
    setOpened(true);
  };

  /* break the seal */
  useLayoutEffect(() => {
    if (!opened) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onOpen();
          setExited(true);
        },
      });

      if (reduced) {
        tl.to(root.current, { opacity: 0, duration: 0.5, ease: "power2.out" });
        return;
      }

      /* words bow out */
      tl.to(
        ".op-ui",
        { opacity: 0, y: -22, duration: 0.5, stagger: 0.06, ease: "power2.in" },
        0
      );

      /* the seal crumbles away */
      tl.to(".op-seal", { scale: 1.12, duration: 0.2, ease: "power2.out" }, 0)
        .to(".op-seal", { scale: 0, opacity: 0, duration: 0.38, ease: "power3.in" }, 0.2)
        .to(".op-sealfx", { opacity: 0, duration: 0.3 }, 0);

      /* the flap lifts */
      tl.to(".op-flap", { rotationX: -176, duration: 0.95, ease: "power2.inOut" }, 0.12);

      /* the card rises into the light */
      tl.set(".op-card", { zIndex: 8 }, 1.0)
        .to(".op-card", { yPercent: -108, rotation: -3, duration: 1.15, ease: "power2.inOut" }, 1.02)
        .to(".op-card", { rotation: 0, duration: 0.5, ease: "power2.out" }, 2.2);

      /* the envelope falls away */
      tl.to(".op-drop", { y: 140, opacity: 0, duration: 0.85, stagger: 0.05, ease: "power2.in" }, 1.3);

      /* lamp-light wells up behind the card */
      tl.to(".op-glow", { opacity: 0.9, scale: 1.35, duration: 0.85, ease: "power2.out" }, 1.4);

      /* the card dissolves into the invitation — doors of light */
      tl.to(".op-card", { scale: 1.6, opacity: 0, duration: 0.95, ease: "power2.in" }, 2.4)
        .to(".op-bg", { opacity: 0, duration: 1.0, ease: "power1.inOut" }, 2.45)
        .to(".op-glow", { opacity: 0, duration: 0.7 }, 2.6)
        .to(".op-side", { opacity: 0, duration: 0.6, ease: "power1.out" }, 2.5)
        .call(onOpen, [], 2.85);
    }, root);
    return () => ctx.revert();
  }, [opened, onOpen]);

  if (exited) return null;

  const brocade: CSSProperties = {
    backgroundImage: "radial-gradient(rgba(226,196,120,0.05) 1px, transparent 1.5px)",
    backgroundSize: "24px 24px",
  };

  return (
    <div
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label="அழைப்பிதழ் — திறக்கத் தொடவும்"
      className="fixed inset-0 z-[100] cursor-pointer select-none overflow-hidden"
      onClick={launch}
    >
      {/* lamp-dark atmosphere */}
      <div className="op-bg absolute inset-0 bg-gradient-to-b from-[#2a0d13] via-[#341017] to-[#1d080d]">
        <div className="absolute inset-0" style={brocade} aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(226,196,120,0.08), rgba(0,0,0,0) 60%), radial-gradient(ellipse 92% 90% at 50% 44%, transparent 55%, rgba(12,4,5,0.55) 100%)",
          }}
        />
      </div>

      {/* doorway garland + kolam corners + brass lamps */}
      <Thoranam className="op-side pointer-events-none absolute inset-x-0 top-0 z-20 h-10 sm:h-12 opacity-95" />
      <KolamCorner className="op-side absolute top-14 left-2 w-20 sm:w-28 opacity-[0.14]" stroke="#c6a15b" />
      <KolamCorner className="op-side absolute top-14 right-2 w-20 sm:w-28 opacity-[0.14] -scale-x-100" stroke="#c6a15b" />
      <Kuthuvilakku className="op-side absolute bottom-8 left-5 w-12 hidden sm:block animate-floaty-slow opacity-90" />
      <span className="op-side hidden sm:block absolute bottom-8 right-5 animate-floaty-slow" style={{ animationDelay: "1.3s" }}>
        <Kuthuvilakku className="w-12 opacity-90" />
      </span>
      <Kuthuvilakku className="op-side sm:hidden absolute bottom-6 left-4 w-9 opacity-80" />
      <Kuthuvilakku className="op-side sm:hidden absolute bottom-6 right-4 w-9 opacity-80" />

      <Petals />

      <div className="op-stage relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* heading */}
        <p className="op-ui op-short-hide font-heading text-lg text-[#c6a15b]/90 md:text-xl">ஸ்ரீ</p>
        <p className="op-ui mt-2.5 font-heading text-[clamp(1rem,0.6vw+0.85rem,1.35rem)] text-gold-2">
          எங்கள் இல்ல அழைப்பிதழ்…
        </p>
        <p className="op-ui mt-2.5 font-serif-en text-[8px] tracking-[0.55em] uppercase text-[#c6a15b]/60 md:text-[10px]">
          A special invitation awaits
        </p>

        {/* the envelope */}
        <div className="op-env relative mt-8 w-[min(21rem,84vw)] md:mt-12 md:w-[24rem]" style={{ perspective: "1400px" }}>
          {/* glow welling behind the card as it rises */}
          <div
            className="op-glow pointer-events-none absolute -inset-20 z-0 opacity-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(236,214,162,0.75), rgba(236,214,162,0) 62%)",
              filter: "blur(10px)",
            }}
          />

          <div className="relative aspect-[10/7] w-full">
            {/* back wall */}
            <div className="op-drop absolute inset-0 z-0 rounded-[3px] bg-gradient-to-br from-[#4a151c] via-[#3c1117] to-[#280c10] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.85)]">
              <div className="absolute inset-0" style={brocade} aria-hidden="true" />
            </div>

            {/* the invitation card inside */}
            <div className="op-card absolute inset-x-[7%] bottom-[10%] top-[5%] z-[1] bg-[#f7efdd] will-change-transform">
              <div className="absolute inset-1.5 border border-[#b98a2e]/45" aria-hidden="true" />
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="font-heading text-sm text-[#b98a2e] md:text-base">ஸ்ரீ</p>
                <p className="mt-1.5 font-heading text-[13px] font-semibold text-maroon md:text-sm">
                  பூப்புனித நீராட்டு விழா
                </p>
                <span className="mt-2 block h-px w-10 bg-[#b98a2e]/50" aria-hidden="true" />
                <p className="mt-2.5 font-heading text-[clamp(1.05rem,0.5vw+0.95rem,1.3rem)] leading-snug text-pink-deep">
                  ஸ்ரீ கீர்த்தனா
                </p>
                <div className="mt-1.5 flex items-center gap-2" aria-hidden="true">
                  <span className="block h-px w-5 bg-[#b98a2e]/60" />
                  <Jasmine size={12} />
                  <span className="block h-px w-5 bg-[#b98a2e]/60" />
                </div>
                <p className="mt-2 font-heading text-[11px] text-[#b98a2e] md:text-xs">
                  ஞாயிறு, 26 ஏப்ரல் 2026
                </p>
              </div>
            </div>

            {/* front pocket */}
            <div
              className="op-drop absolute inset-0 z-[2] rounded-b-[3px] bg-gradient-to-b from-[#4c161d] via-[#3e1218] to-[#2c0e12]"
              style={{ clipPath: "polygon(0 40%, 50% 66%, 100% 40%, 100% 100%, 0 100%)" }}
            />
            {/* gilded pocket seams */}
            <svg
              className="op-drop pointer-events-none absolute inset-0 z-[3] h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polyline
                points="0,40.5 50,66.5 100,40.5"
                fill="none"
                stroke="rgba(198,161,91,0.4)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* the flap */}
            <div
              className="op-drop op-flap absolute inset-x-0 top-0 z-[4] h-[64%] will-change-transform"
              style={{ transformOrigin: "top center" }}
            >
              <svg className="block h-full w-full" viewBox="0 0 100 64" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="flap-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#571a21" />
                    <stop offset="0.55" stopColor="#48141a" />
                    <stop offset="1" stopColor="#381216" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 100,0 50,61" fill="url(#flap-grad)" />
                <polyline
                  points="0,0.5 50,60.5 100,0.5"
                  fill="none"
                  stroke="rgba(198,161,91,0.35)"
                  strokeWidth="0.6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* gold frame on the envelope */}
            <div className="op-drop pointer-events-none absolute inset-[6px] z-[5] border border-[#c6a15b]/30" aria-hidden="true" />

            {/* wax seal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                launch();
              }}
              disabled={!ready}
              aria-label="Open the invitation"
              className="op-seal group absolute left-1/2 top-[56%] z-[6] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none md:h-[4.5rem] md:w-[4.5rem]"
            >
              <span aria-hidden="true" className="op-sealfx seal-ring pointer-events-none absolute -inset-2.5 rounded-full border border-[#c6a15b]/55" />
              <span aria-hidden="true" className="op-sealfx seal-ring d2 pointer-events-none absolute -inset-2.5 rounded-full border border-[#c6a15b]/45" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full border border-[#c6a15b]/70 bg-[radial-gradient(circle_at_35%_30%,#7a262d,#421217_70%)] shadow-[inset_0_0_14px_rgba(0,0,0,0.55),0_8px_24px_-8px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.05] group-active:scale-95">
                <span className="absolute inset-[5px] rounded-full border border-[#c6a15b]/40" aria-hidden="true" />
                <span className="font-heading text-lg text-gold-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">கி</span>
              </span>
            </button>
          </div>
        </div>

        {/* name + date */}
        <div className="op-ui op-names mt-8 flex flex-col items-center gap-2 md:mt-10">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-heading text-[clamp(1.15rem,0.8vw+1rem,1.6rem)] text-[#fdf1dd]">
            <span>ஸ்ரீ கீர்த்தனா</span>
            <Jasmine size={15} />
          </p>
          <p className="font-serif-en text-[8px] tracking-[0.45em] uppercase text-[#fdf1dd]/50 md:text-[9px]">
            Sunday · 26 April 2026 · Kumbakonam
          </p>
        </div>

        {/* tap to open */}
        <div className="op-ui mt-7 flex min-h-[3rem] flex-col items-center md:mt-9">
          {ready ? (
            <>
              <p className="font-heading text-sm text-gold-2/90">அழைப்பிதழைத் திறக்கத் தொடவும்</p>
              <p className="mt-2 font-serif-en text-[8px] tracking-[0.5em] uppercase text-[#fdf1dd]/45 md:text-[9px]">
                Tap to open · with soft music
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2.5">
              <Jasmine size={30} className="animate-spin [animation-duration:3.2s] opacity-70" />
              <p className="font-heading text-sm text-[#fdf1dd]/50">ஏற்றுகிறது…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

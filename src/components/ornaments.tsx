import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useId } from "react";

/* ------------------------------------------------------------------ */
/* Garland — vertical strand of jasmine & marigold (door-frame style)  */
/* ------------------------------------------------------------------ */
export function Garland({ className = "" }: { className?: string }) {
  const blooms = Array.from({ length: 7 });
  return (
    <svg viewBox="0 0 60 340" className={className} aria-hidden="true">
      <line x1="30" y1="4" x2="30" y2="308" stroke="#8a5a23" strokeWidth="2.5" strokeLinecap="round" />
      {blooms.map((_, i) => {
        const y = 30 + i * 40;
        if (i % 2 === 0) {
          /* marigold */
          return (
            <g key={i} transform={`translate(30 ${y})`}>
              {Array.from({ length: 8 }).map((_, p) => (
                <circle key={p} cx={Math.cos((p * Math.PI) / 4) * 9} cy={Math.sin((p * Math.PI) / 4) * 9} r="4.6" fill="#f5a623" />
              ))}
              <circle r="8" fill="#e8810f" />
              <circle r="3.2" fill="#b45309" />
            </g>
          );
        }
        /* jasmine */
        return (
          <g key={i} transform={`translate(30 ${y})`}>
            {Array.from({ length: 5 }).map((_, p) => (
              <ellipse key={p} cx="0" cy="-7" rx="5" ry="7.4" fill="#fffdf4" stroke="#e6d9b6" strokeWidth="0.9" transform={`rotate(${p * 72})`} />
            ))}
            <circle r="2.6" fill="#e9c95c" />
          </g>
        );
      })}
      {/* tassel knot */}
      <circle cx="30" cy="312" r="7" fill="#e8810f" stroke="#b45309" strokeWidth="1.4" />
      <line x1="26" y1="318" x2="23" y2="334" stroke="#c08f2c" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="319" x2="30" y2="336" stroke="#c08f2c" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="318" x2="37" y2="334" stroke="#c08f2c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* TextRing — circular Tamil blessing rotating around the portrait     */
/* ------------------------------------------------------------------ */
export function TextRing({ className = "" }: { className?: string }) {
  const id = useId().replace(/[:]/g, "");
  return (
    <svg viewBox="0 0 560 560" className={className} aria-hidden="true">
      <defs>
        <path
          id={`ring-${id}`}
          d="M280 280 m -216 0 a216 216 0 1 1 432 0 a216 216 0 1 1 -432 0"
          fill="none"
        />
      </defs>
      <text
        fontSize="23"
        letterSpacing="6"
        fill="#b98a2e"
        opacity="0.85"
        style={{ fontFamily: "'Arima', 'Hind Madurai', serif" }}
      >
        <textPath href={`#ring-${id}`}>
          {"பூப்புனித நீராட்டு விழா  •  மங்கல வாழ்த்துகள்  •  அன்புடன் அழைக்கிறோம்  •  "}
        </textPath>
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* KolamBloom — kolam medallion that draws itself when seen            */
/* ------------------------------------------------------------------ */
export function KolamBloom({
  className = "",
  stroke = "#7b1e2f",
}: {
  className?: string;
  stroke?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const petal = "M140 140 C 106 112 104 66 140 34 C 176 66 174 112 140 140 Z";
  let i = 0;
  const d = (n: number) => ({ "--d": `${n * 0.16}s` } as CSSProperties);

  return (
    <svg
      ref={ref}
      viewBox="0 0 280 280"
      className={`kolam-bloom ${drawn ? "drawn" : ""} ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {Array.from({ length: 8 }).map((_, p) => (
          <path key={`p${p}`} d={petal} pathLength={1} transform={`rotate(${p * 45} 140 140)`} style={d(i++)} />
        ))}
        <path d="M140 112 L168 140 L140 168 L112 140 Z" pathLength={1} style={d(i++)} />
        <path d="M140 126 L154 140 L140 154 L126 140 Z" pathLength={1} style={d(i++)} />
        <path d="M32 140 a108 108 0 1 0 216 0 a108 108 0 1 0 -216 0" pathLength={1} style={d(i++)} />
        <path d="M20 140 a120 120 0 1 0 240 0 a120 120 0 1 0 -240 0" pathLength={1} strokeWidth="2" style={d(i++)} />
      </g>
      <g fill={stroke}>
        {Array.from({ length: 16 }).map((_, p) => {
          const a = (p * Math.PI) / 8;
          return (
            <circle
              key={`d${p}`}
              className="kb-dot"
              cx={140 + Math.cos(a) * 114}
              cy={140 + Math.sin(a) * 114}
              r="2.6"
              style={d(p * 0.6)}
            />
          );
        })}
        <circle className="kb-dot" cx="140" cy="140" r="4" style={d(9)} />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* DiyaRow — small row of earthen lamps with flickering flames         */
/* ------------------------------------------------------------------ */
export function DiyaRow({ className = "" }: { className?: string }) {
  const centers = [50, 110, 170, 230, 290];
  return (
    <svg viewBox="0 0 340 62" className={className} aria-hidden="true">
      {centers.map((cx, i) => {
        const big = i === 2;
        const s = big ? 1.18 : 1;
        return (
          <g key={i} transform={`translate(${cx} 34) scale(${s})`}>
            <ellipse cx="0" cy="18" rx="20" ry="4" fill="#8a5e17" opacity="0.35" />
            <ellipse cx="0" cy="0" rx="16" ry="3.4" fill="#e2c478" stroke="#8a5e17" strokeWidth="1" />
            <path d="M-16 1 C -14 16 14 16 16 1 Z" fill="#c08f2c" stroke="#8a5e17" strokeWidth="1" />
            <path d="M-9 4 C -7 10 7 10 9 4" fill="none" stroke="#8a5e17" strokeWidth="0.8" opacity="0.6" />
            <ellipse cx="0" cy="-10" rx="10" ry="12" fill="#ffd76e" opacity="0.28" className="animate-glow" style={{ animationDelay: `${i * 0.5}s` }} />
            <g className="animate-flicker" style={{ animationDelay: `${i * 0.35}s`, transformOrigin: "0px 0px" }}>
              <path d="M0 -24 C -4.4 -16 -3.6 -8 0 -3.5 C 3.6 -8 4.4 -16 0 -24 Z" fill="#f6a81d" />
              <path d="M0 -14 C -2 -10 -1.6 -6.5 0 -4.5 C 1.6 -6.5 2 -10 0 -14 Z" fill="#fff3c4" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Twinkles — drifting gold sparks (lamp-light glitter)                */
/* ------------------------------------------------------------------ */
const SPARKS = [
  { l: "8%", t: "22%", s: 1.1, d: 0 },
  { l: "16%", t: "58%", s: 0.8, d: 1.2 },
  { l: "26%", t: "12%", s: 0.7, d: 2.1 },
  { l: "38%", t: "70%", s: 1, d: 0.6 },
  { l: "55%", t: "18%", s: 0.75, d: 1.7 },
  { l: "68%", t: "62%", s: 1.15, d: 0.9 },
  { l: "80%", t: "28%", s: 0.85, d: 2.6 },
  { l: "90%", t: "55%", s: 0.7, d: 1.4 },
  { l: "47%", t: "40%", s: 0.65, d: 3 },
];

/* ------------------------------------------------------------------ */
/* LaceEdge — looping temple-lace bunting between sections             */
/* ------------------------------------------------------------------ */
export function LaceEdge({
  className = "",
  color = "#c08f2c",
  dot = "#a8741f",
  flip = false,
}: {
  className?: string;
  color?: string;
  dot?: string;
  flip?: boolean;
}) {
  const loops = Array.from({ length: 120 });
  const dots = Array.from({ length: 30 });
  return (
    <svg
      viewBox="0 0 1440 26"
      preserveAspectRatio="none"
      className={`${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      {loops.map((_, i) => {
        const x = i * 12;
        return (
          <path
            key={`l${i}`}
            d={`M ${x} 22 Q ${x + 6} 5 ${x + 12} 22`}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
      {dots.map((_, i) => (
        <circle key={`d${i}`} cx={i * 48 + 6} cy={12.4} r="1.7" fill={dot} opacity="0.85" />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Twinkles — drifting gold sparks (lamp-light glitter)                */
/* ------------------------------------------------------------------ */
export function Twinkles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {SPARKS.map((p, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-[#ecc95f]"
          style={{
            left: p.l,
            top: p.t,
            width: `${4.5 * p.s}px`,
            height: `${4.5 * p.s}px`,
            animationDelay: `${p.d}s`,
            boxShadow: "0 0 8px 1px rgba(236,201,95,0.65)",
          }}
        />
      ))}
    </div>
  );
}

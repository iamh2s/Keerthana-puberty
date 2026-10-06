import { useId } from "react";

/* ------------------------------------------------------------------ */
/* Mango-leaf thoranam — the green garland hung above the doorway      */
/* ------------------------------------------------------------------ */
export function Thoranam({ className = "" }: { className?: string }) {
  const greens = ["#2f7a4c", "#1f5c3d", "#3c8a5b", "#27673f"];
  const items = Array.from({ length: 26 });

  return (
    <svg
      viewBox="0 0 1300 112"
      preserveAspectRatio="xMidYMin meet"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="7" x2="1300" y2="7" stroke="#8a5a23" strokeWidth="4" strokeLinecap="round" />
      {items.map((_, i) => {
        const x = 26 + i * 50;
        const kind = i % 6;
        if (kind === 2) {
          /* marigold */
          return (
            <g key={i}>
              <line x1={x} y1="8" x2={x} y2="24" stroke="#8a5a23" strokeWidth="2.5" />
              <g transform={`translate(${x} 46)`}>
                {Array.from({ length: 8 }).map((_, p) => (
                  <circle
                    key={p}
                    cx={Math.cos((p * Math.PI) / 4) * 12}
                    cy={Math.sin((p * Math.PI) / 4) * 12}
                    r="6"
                    fill="#f5a623"
                  />
                ))}
                <circle r="11" fill="#e8810f" />
                <circle r="4.5" fill="#b45309" />
              </g>
            </g>
          );
        }
        if (kind === 5) {
          /* small jasmine tucked between leaves */
          return (
            <g key={i}>
              <line x1={x} y1="8" x2={x} y2="20" stroke="#8a5a23" strokeWidth="2.5" />
              <g transform={`translate(${x} 40) scale(0.9)`}>
                {Array.from({ length: 5 }).map((_, p) => (
                  <ellipse
                    key={p}
                    cx="0"
                    cy="-9"
                    rx="6"
                    ry="9.5"
                    fill="#fffdf4"
                    stroke="#e8dcbd"
                    strokeWidth="1"
                    transform={`rotate(${p * 72})`}
                  />
                ))}
                <circle r="3.2" fill="#e9c95c" />
              </g>
            </g>
          );
        }
        /* mango leaf */
        const g = greens[i % greens.length];
        const lean = i % 2 === 0 ? -3 : 3;
        return (
          <g key={i} transform={`translate(${x} 0) rotate(${lean})`}>
            <path
              d="M0 10 C -15 30 -13 64 0 96 C 13 64 15 30 0 10 Z"
              fill={g}
              stroke="#17462c"
              strokeWidth="1.4"
            />
            <path d="M0 20 L 0 86" stroke="#17462c" strokeWidth="1.2" opacity="0.7" />
            <path d="M0 44 L -6 38 M0 62 L 6 56" stroke="#17462c" strokeWidth="1" opacity="0.55" />
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Brass kuthuvilakku — the traditional standing lamp                  */
/* ------------------------------------------------------------------ */
export function Kuthuvilakku({
  className = "",
  lit = true,
}: {
  className?: string;
  lit?: boolean;
}) {
  const uid = useId().replace(/[:]/g, "");
  const metal = `metal-${uid}`;
  const flame = `flame-${uid}`;
  const glow = `glow-${uid}`;

  return (
    <svg viewBox="0 0 120 210" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={metal} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a8741f" />
          <stop offset="0.45" stopColor="#e9c876" />
          <stop offset="0.62" stopColor="#d3a445" />
          <stop offset="1" stopColor="#8f6113" />
        </linearGradient>
        <linearGradient id={flame} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e8730c" />
          <stop offset="0.55" stopColor="#f6a81d" />
          <stop offset="1" stopColor="#ffe08a" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0" stopColor="#ffd76e" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffd76e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {lit && <ellipse cx="60" cy="40" rx="34" ry="34" fill={`url(#${glow})`} className="animate-glow" />}

      {lit && (
        <g className="animate-flicker" style={{ transformOrigin: "60px 62px" }}>
          <path d="M60 20 C 52 34 51 44 60 54 C 69 44 68 34 60 20 Z" fill={`url(#${flame})`} />
          <path d="M60 34 C 56.5 41 56.5 46 60 51 C 63.5 46 63.5 41 60 34 Z" fill="#fff3c4" />
        </g>
      )}

      <g stroke="#7a5410" strokeWidth="1.4">
        {/* top oil cup */}
        <path d="M33 62 C 38 82 82 82 87 62 L 82 58 C 78 73 42 73 38 58 Z" fill={`url(#${metal})`} />
        <ellipse cx="60" cy="60" rx="27" ry="6.5" fill="#f0d488" stroke="#7a5410" />
        {/* stem to middle crown */}
        <rect x="55" y="80" width="10" height="10" rx="3" fill={`url(#${metal})`} />
        {/* middle crown dish */}
        <path d="M26 92 C 32 112 88 112 94 92 L 89 88 C 84 103 36 103 31 88 Z" fill={`url(#${metal})`} />
        <ellipse cx="60" cy="90" rx="34" ry="7.5" fill="#f0d488" stroke="#7a5410" />
        {/* tapered pillar */}
        <path d="M53 112 L 67 112 L 63.5 158 L 56.5 158 Z" fill={`url(#${metal})`} />
        <ellipse cx="60" cy="134" rx="10.5" ry="4.5" fill="#f0d488" stroke="#7a5410" />
        {/* base dome */}
        <path d="M36 186 C 40 160 80 160 84 186 Z" fill={`url(#${metal})`} />
        <ellipse cx="60" cy="186" rx="30" ry="6.5" fill="#e2b753" stroke="#7a5410" />
        <ellipse cx="60" cy="196" rx="38" ry="5" fill="#a8741f" stroke="#7a5410" />
      </g>
      {/* dancing light dots around lamp */}
      {lit && (
        <g fill="#e8b53a">
          <circle cx="26" cy="30" r="1.8" opacity="0.8" className="animate-glow" />
          <circle cx="96" cy="44" r="1.5" opacity="0.6" className="animate-glow" style={{ animationDelay: "1.1s" }} />
          <circle cx="88" cy="18" r="1.3" opacity="0.7" className="animate-glow" style={{ animationDelay: "2s" }} />
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Jasmine blossom                                                     */
/* ------------------------------------------------------------------ */
export function Jasmine({
  className = "",
  size = 26,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className={className} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, p) => (
        <ellipse
          key={p}
          cx="22"
          cy="12"
          rx="7.5"
          ry="11.5"
          fill="#fffdf4"
          stroke="#e6d9b6"
          strokeWidth="1"
          transform={`rotate(${p * 72} 22 22)`}
        />
      ))}
      <circle cx="22" cy="22" r="4" fill="#e9c95c" />
      <circle cx="22" cy="22" r="1.6" fill="#c9a227" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kolam corner ornament (top-left orientation; flip via Tailwind)     */
/* ------------------------------------------------------------------ */
export function KolamCorner({
  className = "",
  stroke = "#7b1e2f",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 190 C 10 96 96 10 190 10" />
        <path d="M42 190 C 42 122 122 42 190 42" />
        <path d="M74 190 C 74 148 148 74 190 74" />
        <path d="M108 190 C 108 172 172 108 190 108" />
        {/* central diamond */}
        <path d="M106 84 L 130 108 L 106 132 L 82 108 Z" />
        <path d="M106 97 L 117 108 L 106 119 L 95 108 Z" />
        {/* side sparkles */}
        <path d="M150 118 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0" />
        <path d="M118 150 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0" />
        <path d="M42 96 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0" />
        <path d="M96 42 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0" />
      </g>
      <g fill={stroke}>
        <circle cx="20" cy="20" r="4" />
        <circle cx="52" cy="20" r="4" />
        <circle cx="20" cy="52" r="4" />
        <circle cx="20" cy="122" r="4" />
        <circle cx="122" cy="20" r="4" />
        <circle cx="164" cy="162" r="4" />
        <circle cx="58" cy="164" r="4" />
        <circle cx="164" cy="58" r="4" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kolam strip — repeating diamond band used as a section rule         */
/* ------------------------------------------------------------------ */
export function KolamStrip({
  className = "",
  tone = "maroon",
}: {
  className?: string;
  tone?: "maroon" | "cream";
}) {
  const units = Array.from({ length: 30 });
  const stroke = tone === "cream" ? "#fbf3e1" : "#7b1e2f";
  return (
    <svg viewBox="0 0 1320 28" className={className} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {units.map((_, i) => {
        const x = i * 44;
        return (
          <g key={i}>
            <path
              d={`M ${x + 14} 4 L ${x + 26} 14 L ${x + 14} 24 L ${x + 2} 14 Z`}
              fill="none"
              stroke={stroke}
              strokeWidth="1.7"
              opacity="0.75"
            />
            <circle cx={x + 36} cy={14} r="2.4" fill="#e2c478" opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Dotted mandala halo behind the portrait                             */
/* ------------------------------------------------------------------ */
export function MandalaFrame({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 24 });
  const dots = Array.from({ length: 36 });
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g fill="none" stroke="#bc8b2a" strokeWidth="1.1">
        <circle cx="200" cy="200" r="192" strokeDasharray="1.5 9" strokeLinecap="round" />
        <circle cx="200" cy="200" r="156" strokeDasharray="5 7" />
        <circle cx="200" cy="200" r="128" opacity="0.7" />
      </g>
      <g stroke="#bc8b2a" strokeWidth="1.1" opacity="0.8">
        {spokes.map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="40"
            x2="200"
            y2="58"
            transform={`rotate(${(360 / spokes.length) * i} 200 200)`}
          />
        ))}
      </g>
      <g fill="#bc8b2a">
        {dots.map((_, i) => {
          const a = (i * Math.PI) / 18;
          return (
            <circle key={i} cx={200 + Math.cos(a) * 176} cy={200 + Math.sin(a) * 176} r="2.4" opacity="0.85" />
          );
        })}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Soft falling jasmine petals                                         */
/* ------------------------------------------------------------------ */
const PETALS = [
  { left: "6%", size: 12, dur: "15s", delay: "0s", tone: "#ffe3ec" },
  { left: "18%", size: 9, dur: "19s", delay: "4s", tone: "#fffdf4" },
  { left: "33%", size: 13, dur: "17s", delay: "8s", tone: "#ffd9e4" },
  { left: "52%", size: 10, dur: "21s", delay: "2.5s", tone: "#fffdf4" },
  { left: "68%", size: 12, dur: "16s", delay: "6.5s", tone: "#ffe3ec" },
  { left: "84%", size: 9, dur: "20s", delay: "10s", tone: "#fffdf4" },
  { left: "93%", size: 11, dur: "18s", delay: "1.5s", tone: "#ffd9e4" },
];

export function Petals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        >
          <svg width={p.size} height={p.size * 1.4} viewBox="0 0 10 14">
            <path
              d="M5 0 C 9.2 3.6 9.2 10.2 5 14 C 0.8 10.2 0.8 3.6 5 0 Z"
              fill={p.tone}
              opacity="0.9"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ornamental divider — line, diamond, blossom                         */
/* ------------------------------------------------------------------ */
export function Divider({
  className = "",
  variant = "jasmine",
  tone = "gold",
}: {
  className?: string;
  variant?: "jasmine" | "lamp";
  tone?: "gold" | "cream";
}) {
  const line =
    tone === "gold"
      ? "bg-gradient-to-r from-transparent via-[#bc8b2a]/60 to-transparent"
      : "bg-gradient-to-r from-transparent via-[#fbf3e1]/70 to-transparent";
  const diamond = tone === "gold" ? "bg-[#bc8b2a]/80" : "bg-[#fbf3e1]/80";

  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`} aria-hidden="true">
      <span className={`h-px w-14 sm:w-20 ${line}`} />
      <span className={`w-1.5 h-1.5 rotate-45 rounded-[1px] ${diamond}`} />
      {variant === "lamp" ? (
        <Kuthuvilakku className="w-5 text-[#bc8b2a]" lit={tone !== "cream"} />
      ) : (
        <Jasmine size={22} />
      )}
      <span className={`w-1.5 h-1.5 rotate-45 rounded-[1px] ${diamond}`} />
      <span className={`h-px w-14 sm:w-20 ${line}`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Consistent section heading with small English eyebrow               */
/* ------------------------------------------------------------------ */
export function SectionHeader({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <p className="font-serif-en italic text-sm sm:text-[15px] tracking-[0.28em] uppercase text-gold">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl sm:text-4xl text-maroon mt-1.5 leading-snug">{title}</h2>
      <Divider className="mt-4" />
    </div>
  );
}

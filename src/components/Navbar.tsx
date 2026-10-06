import { useEffect, useState } from "react";
import { Home, MailOpen, CalendarDays, Users, Images, MapPin } from "lucide-react";
import { Jasmine } from "./decor";

const LINKS = [
  { id: "home", href: "#home", label: "முகப்பு", short: "முகப்பு", icon: Home },
  { id: "azhaippu", href: "#azhaippu", label: "அழைப்பு", short: "அழைப்பு", icon: MailOpen },
  { id: "vivarangal", href: "#vivarangal", label: "விழா விவரங்கள்", short: "விழா", icon: CalendarDays },
  { id: "kudumbam", href: "#kudumbam", label: "குடும்பம்", short: "குடும்பம்", icon: Users },
  { id: "padangal", href: "#padangal", label: "புகைப்படங்கள்", short: "படங்கள்", icon: Images },
  { id: "idam", href: "#idam", label: "இடம்", short: "இடம்", icon: MapPin },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ---------------- Desktop: slim side rail ---------------- */}
      <nav
        aria-label="பிரிவுகள்"
        className="side-rail hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-[92px] flex-col items-center bg-cream/95 backdrop-blur-sm border-r border-gold/35 shadow-[2px_0_18px_rgba(123,30,47,0.07)]"
      >
        <a href="#home" className="side-brand pt-5 pb-2 flex flex-col items-center gap-1 group">
          <Jasmine size={34} className="group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-heading text-[12px] text-maroon leading-none mt-1">அழைப்பிதழ்</span>
        </a>

        <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold/60 to-transparent my-3" aria-hidden="true" />

        <div className="flex flex-col items-center gap-1 w-full px-2.5">
          {LINKS.map(({ id, href, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={href}
                aria-label={label}
                className={`side-rail-item w-full flex flex-col items-center gap-1 rounded-2xl py-2.5 transition-colors duration-300 ${
                  isActive
                    ? "bg-blush text-maroon shadow-inner"
                    : "text-ink/60 hover:text-maroon hover:bg-blush/50"
                }`}
              >
                <span
                  className={`grid place-items-center w-8 h-8 rounded-full transition-colors ${
                    isActive ? "bg-maroon text-cream" : "bg-paper border border-gold/30"
                  }`}
                >
                  <Icon size={15} />
                </span>
                <span className="text-[11px] leading-tight text-center font-medium">{label}</span>
              </a>
            );
          })}
        </div>

        <div className="mt-auto pb-4 w-full px-3">
          <p className="text-center text-[10px] font-serif-en italic text-gold tracking-widest border-t border-dashed border-gold/40 pt-3">
            26 ஏப் 2026
          </p>
        </div>
      </nav>

      {/* ---------------- Mobile: bottom bar ---------------- */}
      <nav
        aria-label="பிரிவுகள்"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-paper/95 backdrop-blur border-t border-gold/40 shadow-[0_-6px_24px_rgba(123,30,47,0.12)]"
        style={{ paddingBottom: "max(env(safe-area-inset-bottom), 4px)" }}
      >
        <div className="grid grid-cols-6">
          {LINKS.map(({ id, href, short, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={href}
                className={`relative flex flex-col items-center gap-0.5 py-2 transition-colors ${
                  isActive ? "text-maroon" : "text-ink/55 active:text-maroon"
                }`}
              >
                {isActive && (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 h-[3px] w-7 rounded-b-full bg-pink-trad" />
                )}
                <span
                  className={`grid place-items-center w-9 h-9 rounded-full transition-all duration-300 ${
                    isActive ? "bg-maroon text-cream scale-105" : ""
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className={`bottombar-label text-[10px] leading-none ${isActive ? "font-bold" : "font-medium"}`}>
                  {short}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

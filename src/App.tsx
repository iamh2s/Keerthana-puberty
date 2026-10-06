import { useEffect, useState } from "react";
import AOS from "aos";

import EntryGate from "./components/EntryGate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Events from "./components/Events";
import Family from "./components/Family";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Finale from "./components/Finale";
import MusicToggle from "./components/MusicToggle";
import ContactButton from "./components/ContactButton";

import { ambientMusic } from "./lib/music";

export default function App() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    ambientMusic.start();
  };

  /* =========================================================
     AOS
  ========================================================= */

  useEffect(() => {
    if (!opened) return;

    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      offset: 70,
      once: true,
      disable: () =>
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches,
    });

    AOS.refresh();
  }, [opened]);

  return (
    <div className="min-h-screen bg-cream font-body text-ink md:pl-[92px]">

      {/* =====================================================
          ENTRY GATE
      ===================================================== */}

      {!opened && <EntryGate onOpen={handleOpen} />}

      {/* =====================================================
          RIGHT SIDE FLOATING BUTTONS
      ===================================================== */}

      {opened && (
        <>
          {/* Contact button - right side */}
          <ContactButton />

          {/* Music button */}
          <MusicToggle />
        </>
      )}

      {/* =====================================================
          LEFT NAVIGATION
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>
        <Hero />

        <Welcome />

        <About />

        <Events />

        <Family />

        <Gallery />

        <Venue />

        <Finale />
      </main>
    </div>
  );
}
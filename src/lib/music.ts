/* =========================================================
   AMBIENT MUSIC
   Audio file:
   public/music/music.mp3
========================================================= */

const MUSIC_SRC = "/music/music.mp3";

let audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement {
  if (typeof window === "undefined") {
    throw new Error("Music can only be used in the browser.");
  }

  if (!audio) {
    audio = new Audio(MUSIC_SRC);

    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";
  }

  return audio;
}

export const ambientMusic = {
  /* =======================================================
     PLAYING STATUS
  ======================================================= */

  get playing(): boolean {
    return audio !== null && !audio.paused;
  },

  /* =======================================================
     START MUSIC
     Used by EntryGate.tsx
  ======================================================= */

  async start(): Promise<void> {
    const player = getAudio();

    try {
      await player.play();
    } catch (error) {
      console.warn("Unable to start music:", error);
    }
  },

  /* =======================================================
     PLAY MUSIC
  ======================================================= */

  async play(): Promise<void> {
    await this.start();
  },

  /* =======================================================
     PAUSE
  ======================================================= */

  pause(): void {
    if (!audio) return;

    audio.pause();
  },

  /* =======================================================
     STOP
  ======================================================= */

  stop(): void {
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  },

  /* =======================================================
     TOGGLE
  ======================================================= */

  async toggle(): Promise<void> {
    const player = getAudio();

    if (player.paused) {
      try {
        await player.play();
      } catch (error) {
        console.warn("Unable to play music:", error);
      }
    } else {
      player.pause();
    }
  },

  /* =======================================================
     VOLUME
     0 = mute
     1 = maximum
  ======================================================= */

  setVolume(volume: number): void {
    const player = getAudio();

    player.volume = Math.max(0, Math.min(1, volume));
  },

  /* =======================================================
     GET AUDIO ELEMENT
  ======================================================= */

  getAudio(): HTMLAudioElement {
    return getAudio();
  },
};
/**
 * Tiny synthesized UI sounds — no audio files, just the Web Audio API.
 * Browsers keep the AudioContext suspended until the first user gesture;
 * we resume it on that gesture and QUEUE the sound until resume completes,
 * so even the very first click makes noise.
 */

let ctx: AudioContext | null = null;

const PREF_KEY = 'fg-sounds';

export function soundsEnabled(): boolean {
  if (typeof localStorage === 'undefined') return false;
  return localStorage.getItem(PREF_KEY) !== 'off';
}

export function setSoundsEnabled(on: boolean): void {
  localStorage.setItem(PREF_KEY, on ? 'on' : 'off');
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as any).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

function schedule(ac: AudioContext, freqFrom: number, freqTo: number, duration: number, type: OscillatorType, gainPeak: number) {
  const t0 = ac.currentTime;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqFrom, t0);
  osc.frequency.exponentialRampToValueAtTime(freqTo, t0 + duration);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(gainPeak, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

function blip(freqFrom: number, freqTo: number, duration: number, type: OscillatorType = 'sine', gainPeak = 0.08) {
  if (!soundsEnabled()) return;
  const ac = getCtx();
  if (!ac) return;
  if (ac.state === 'running') {
    schedule(ac, freqFrom, freqTo, duration, type, gainPeak);
  } else {
    // Wake the context and play as soon as it's ready (~ms after the gesture).
    // If the browser rejects (no gesture yet), stay silent — no error spam.
    void ac.resume().then(
      () => schedule(ac, freqFrom, freqTo, duration, type, gainPeak),
      () => {}
    );
  }
}

/** Soft "swoosh-pop" when a page transition completes */
export function playNavigate() {
  blip(320, 660, 0.16, 'sine');
}

/** Gentle tick for hovering nav links */
export function playTick() {
  blip(900, 900, 0.045, 'triangle', 0.035);
}

/** Tiny paper-rustle tick for mobile scrolling */
export function playScroll() {
  blip(620, 760, 0.028, 'triangle', 0.007);
}

/** Cheerful two-note chirp for turning sounds ON */
export function playHello() {
  blip(523, 523, 0.09, 'sine');
  setTimeout(() => blip(784, 784, 0.12, 'sine'), 90);
}

/** Warm the AudioContext up on the first user gesture (autoplay policy) */
export function primeAudio() {
  const prime = () => {
    const ac = getCtx();
    if (ac && ac.state !== 'running') void ac.resume().catch(() => {});
  };
  // pointerdown fires before click completes, so the context is often
  // already running by the time the navigation sound is requested.
  window.addEventListener('pointerdown', prime, { passive: true });
  window.addEventListener('touchstart', prime, { passive: true });
  window.addEventListener('keydown', prime);
}

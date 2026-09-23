// Web Audio API pure brass temple bell and sacred ghanti synthesizer
// Zero external files, works 100% offline with zero latency

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a resonant brass temple ghanti (bell) sound
 */
export function playTempleBell(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Harmonic frequencies typical of brass temple bells (घंटी)
    const frequencies = [1180, 1680, 2420, 3100, 4800];
    const gains = [0.35, 0.25, 0.18, 0.12, 0.05];
    const decayTimes = [2.2, 1.8, 1.4, 1.1, 0.7];

    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Micro pitch bend characteristic of struck bell brass
      osc.frequency.exponentialRampToValueAtTime(freq * 0.992, now + decayTimes[i]);

      gainNode.gain.setValueAtTime(gains[i], now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decayTimes[i]);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decayTimes[i]);
    });
  } catch (err) {
    console.error('Audio bell error:', err);
  }
}

/**
 * Plays deep resonant temple gong / shree sound
 */
export function playTempleGong(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const baseFreq = 216; // Sacred vibration frequency (Hz)
    const partials = [baseFreq, baseFreq * 1.5, baseFreq * 2.02, baseFreq * 2.76, baseFreq * 3.45];
    const gains = [0.4, 0.25, 0.15, 0.1, 0.05];

    partials.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gains[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.5);
    });
  } catch (err) {
    console.error('Audio gong error:', err);
  }
}

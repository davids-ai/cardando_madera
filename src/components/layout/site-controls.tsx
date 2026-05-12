"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, Music2, Pause, Play, Volume2, VolumeX, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappUrl = "https://wa.me/573114755830";

export function SiteControls() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.18);

  useEffect(() => {
    const audio = new Audio("/musicafondo.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.18;
    audio.muted = false;
    audioRef.current = audio;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch {
        setIsPlaying(false);
      }
    };

    void tryAutoplay();

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted((previous) => !previous);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 px-2 pb-2">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/25 transition hover:bg-emerald-700"
      >
        <MessageCircleMore size={18} />
        WhatsApp
      </motion.a>

      <motion.div
        initial={false}
        animate={{ scale: 1, y: 0 }}
        className="w-[min(92vw,18rem)] rounded-[1.5rem] border border-white/15 bg-stone-950/90 p-3 text-white shadow-2xl backdrop-blur-xl"
      >
        <button
          type="button"
          aria-label="Controlar música de fondo"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex w-full items-center justify-between rounded-[1.15rem] border border-white/10 bg-white/8 px-4 py-3 text-left transition hover:bg-white/12"
        >
          <span className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">
              {isPlaying ? <Waves size={18} /> : <Music2 size={18} />}
              {isPlaying ? <span className="absolute inset-0 animate-ping rounded-2xl bg-amber-300/40" /> : null}
            </span>
            <span>
              <span className="block text-sm font-semibold">Música ambiental</span>
              <span className="block text-xs text-white/70">{isPlaying ? "Sonando" : "Pausada"}</span>
            </span>
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-white/60">{isOpen ? "Cerrar" : "Abrir"}</span>
        </button>

        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 space-y-4 rounded-[1.15rem] border border-white/10 bg-black/25 p-4"
          >
            <div className="flex gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-100"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? "Pausar" : "Reproducir"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            <label className="block space-y-2 text-xs uppercase tracking-[0.24em] text-white/60">
              Volumen
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => {
                  const nextVolume = Number(event.target.value);
                  setVolume(nextVolume);
                  if (nextVolume > 0 && isMuted) {
                    setIsMuted(false);
                  }
                }}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-amber-300"
              />
            </label>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
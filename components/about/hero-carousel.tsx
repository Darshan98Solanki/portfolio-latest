"use client";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Music,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Instrument_Serif } from "next/font/google";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import ElasticSlider from "./ElasticSlider";
import Shuffle from "@/components/Shuffle";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";
const IDEAS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";
const VISION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/0VvtgY5wDzTT7Bn79J2v3T?si=f90a306c692a4cbe";

const HERO_AUDIO = encodeURI("/I Like Me Better_spotdown.org.mp3");
const IDEAS_AUDIO = encodeURI("/Like You_spotdown.org.mp3");
const VISION_AUDIO = encodeURI("/Laal Bindi_spotdown.org.mp3");

type CardConfig = {
  id: string;
  navLabel: string;
  video: string;
  audioSrc: string;
  trackTitle: string;
  trackArtist: string;
};

const CARDS: CardConfig[] = [
  {
    id: "hero",
    navLabel: "Hero",
    video: HERO_VIDEO,
    audioSrc: HERO_AUDIO,
    trackTitle: "I Like Me Better",
    trackArtist: "Lauv",
  },
  {
    id: "ideas",
    navLabel: "Pioneering Ideas",
    video: IDEAS_VIDEO,
    audioSrc: IDEAS_AUDIO,
    trackTitle: "Like You",
    trackArtist: "LerocQue",
  },
  {
    id: "vision",
    navLabel: "Innovation x Vision",
    video: VISION_VIDEO,
    audioSrc: VISION_AUDIO,
    trackTitle: "Laal Bindi",
    trackArtist: "Akull",
  },
];

// Waits until the video has buffered enough to play smoothly (or a grace
// period elapses) before revealing it, so a slow network shows a brief black
// background instead of a video that pops in half-loaded and stutters.
function useVideoReveal(
  ref: RefObject<HTMLVideoElement | null>,
  onReady: () => void,
): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let cancelled = false;
    const markReady = () => {
      if (cancelled) return;
      setReady(true);
      onReady();
    };

    video.addEventListener("canplaythrough", markReady, { once: true });
    video.addEventListener("error", markReady, { once: true });
    // Check on the next tick in case the video was already buffered enough
    // by the time this effect ran (canplaythrough won't fire again for it).
    const immediate = setTimeout(() => {
      if (video.readyState >= 3) markReady();
    }, 0);
    // Some connections never fire canplaythrough for a streamed mp4 — don't
    // let the card hang forever waiting for it.
    const fallback = setTimeout(() => {
      if (video.readyState >= 2) markReady();
    }, 4000);

    return () => {
      cancelled = true;
      clearTimeout(immediate);
      clearTimeout(fallback);
      video.removeEventListener("canplaythrough", markReady);
      video.removeEventListener("error", markReady);
    };
  }, [ref, onReady]);

  return ready;
}

const cardTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

function CarouselCard({
  id,
  video,
  trackTitle,
  trackArtist,
  isPlaying,
  onTogglePlay,
  onVideoReady,
}: {
  id: string;
  video: string;
  trackTitle: string;
  trackArtist: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onVideoReady: (id: string) => void;
}): ReactNode {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleReady = useCallback(() => onVideoReady(id), [onVideoReady, id]);
  const ready = useVideoReveal(videoRef, handleReady);

  return (
    <motion.div
      {...cardTransition}
      className="absolute inset-0 flex flex-col overflow-hidden"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        src={video}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass flex h-20 w-20 items-center justify-center rounded-full border border-white/20 sm:h-24 sm:w-24"
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying
                ? { duration: 6, ease: "linear", repeat: Infinity }
                : { duration: 0.3 }
            }
          >
            <Music className="h-8 w-8 text-white sm:h-9 sm:w-9" aria-hidden="true" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs tracking-widest text-white/40 uppercase">
            Now Playing
          </p>
          <h2
            className={`${instrumentSerif.className} mt-3 text-4xl text-white italic sm:text-5xl md:text-6xl`}
          >
            {trackTitle}
          </h2>
          <p className="mt-2 text-sm text-white/60 sm:text-base">
            {trackArtist}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Play className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="liquid-glass flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]"
          >
            Open in Spotify
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroCarousel(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [readyCardId, setReadyCardId] = useState<string | null>(null);
  const [volume, setVolume] = useState(70);
  const activeCard = CARDS[activeIndex];
  // Derived, not stored: as soon as the card changes this is false again
  // until that card's own video reports back, no reset effect needed.
  const videoReady = readyCardId === activeCard?.id;

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  // Card changed: stop the previous track and swap the <audio> source in
  // (its `src` already points at the new card by the time this runs).
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.load();
  }, [activeIndex]);

  // Only start/resume audio once the active card's video has actually
  // loaded, so the video is visible first and the song follows right after.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying || !videoReady) return;
    void audio.play();
  }, [videoReady, isPlaying]);

  // Applies live, on every drag tick — the audio element persists across
  // card switches, so this doesn't need to be re-applied per card.
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume / 100;
  }, [volume]);

  const handleVideoReady = useCallback((id: string) => setReadyCardId(id), []);

  const togglePlay = (): void => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Flip intent on now; the effect above fires the actual play() once
      // (or as soon as) the video is ready.
      setIsPlaying(true);
    }
  };

  const goTo = (index: number): void => {
    setActiveIndex((index + CARDS.length) % CARDS.length);
  };

  if (!activeCard) return null;

  return (
    <div className="flex flex-col gap-3">
      <Shuffle
        text="Music DNA"
        tag="h3"
        className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]"
        shuffleDirection="right"
        textAlign="left"
        animationMode="evenodd"
        stagger={0.03}
        duration={0.35}
        triggerOnce
        triggerOnHover
      />

      <section className="relative w-full">
        <div className="relative isolate flex min-h-[70vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-black">
          <AnimatePresence mode="wait">
            <CarouselCard
              key={activeCard.id}
              id={activeCard.id}
              video={activeCard.video}
              trackTitle={activeCard.trackTitle}
              trackArtist={activeCard.trackArtist}
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onVideoReady={handleVideoReady}
            />
          </AnimatePresence>

        <audio
          ref={audioRef}
          src={activeCard.audioSrc}
          loop
          preload="none"
          onEnded={() => setIsPlaying(false)}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3 p-4 sm:p-6">
          <div className="pointer-events-auto flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous card"
              className="liquid-glass rounded-full p-2 text-white/70 transition-colors hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2.5">
              {CARDS.map((card, i) => (
                <button
                  key={card.id}
                  type="button"
                  title={card.navLabel}
                  onClick={() => goTo(i)}
                  aria-label={`Show ${card.navLabel}`}
                  aria-current={i === activeIndex}
                  className={`rounded-full transition-all ${
                    i === activeIndex
                      ? "h-2 w-2 bg-white"
                      : "h-1.5 w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next card"
              className="liquid-glass rounded-full p-2 text-white/70 transition-colors hover:text-white"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="pointer-events-auto">
            <ElasticSlider
              defaultValue={volume}
              maxValue={100}
              onChange={setVolume}
              leftIcon={<VolumeX className="h-4 w-4 text-white/50" aria-hidden="true" />}
              rightIcon={<Volume2 className="h-4 w-4 text-white/50" aria-hidden="true" />}
            />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

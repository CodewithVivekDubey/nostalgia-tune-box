import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PLAYLISTS, type Track } from "@/lib/tracks";
import { formatTime, loadYouTubeApi, type YTPlayer } from "@/lib/youtube";
import { SeekBar } from "./SeekBar";
import { NextIcon, PauseIcon, PlayIcon, PrevIcon } from "./icons";

/* ── module-scope sub-components (never re-declared per render) ────────── */

function Vinyl({ size, playing }: { size: number; playing: boolean }) {
  return (
    <div
      className="relative shrink-0 self-start overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_center,#2a2320_0%,#120e0c_38%,#241d19_39%,#0d0a09_100%)] shadow-[0_8px_20px_-6px_rgba(0,0,0,0.9),inset_0_0_16px_rgba(0,0,0,0.8)]"
      style={{
        width: size,
        height: size,
        animation: "spin 8s linear infinite",
        animationPlayState: playing ? "running" : "paused",
      }}
    >
      <div className="absolute inset-[14%] rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.14),transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,rgba(255,255,255,0.14))]" />
      <div className="absolute inset-[30%] rounded-full bg-accent-warm/80" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40"
        style={{ width: 12, height: 12 }}
      />
    </div>
  );
}

function TrackMeta({ track, compact }: { track: Track; compact?: boolean }) {
  return (
    <div className="min-w-0 flex-1">
      <p
        className={`truncate font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] ${
          compact ? "text-[14.5px]" : "text-[15px]"
        }`}
      >
        {track.title}
      </p>
      <p className="truncate text-[12.5px] text-white/70">
        {track.artist} · {track.film} ({track.year})
      </p>
    </div>
  );
}

function TimeReadout({ position, duration }: { position: number; duration: number }) {
  return (
    <span className="shrink-0 text-[10.5px] tabular-nums text-white/60">
      {formatTime(position)} / {formatTime(duration)}
    </span>
  );
}

function GhostButton({
  label,
  onClick,
  children,
  size = 40,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid shrink-0 place-items-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white active:scale-95"
      style={{ width: size, height: size }}
    >
      {children}
    </button>
  );
}

function PlayButton({
  playing,
  onClick,
  size,
}: {
  playing: boolean;
  onClick: () => void;
  size: number;
}) {
  return (
    <button
      type="button"
      aria-label={playing ? "Pause" : "Play"}
      onClick={onClick}
      className="grid shrink-0 place-items-center rounded-full bg-gradient-to-b from-accent-warm-soft to-accent-warm text-ink ring-1 ring-white/25 shadow-[0_10px_26px_-8px_var(--accent-warm)] transition active:scale-95"
      style={{ width: size, height: size }}
    >
      {playing ? (
        <PauseIcon className="h-[45%] w-[45%]" />
      ) : (
        <PlayIcon className="h-[45%] w-[45%] translate-x-[1px]" />
      )}
    </button>
  );
}

function PlaylistTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="glass-panel flex max-w-full items-center gap-1 rounded-full p-1">
      {PLAYLISTS.map((pl, i) => (
        <button
          key={pl.id}
          type="button"
          onClick={() => onSelect(i)}
          className={`rounded-full px-2.5 py-1.5 text-[11px] whitespace-nowrap sm:px-3 sm:text-[11.5px] font-medium tracking-wide transition ${
            i === active
              ? "bg-accent-warm text-ink"
              : "text-white/65 hover:bg-white/10 hover:text-white"
          }`}
        >
          {pl.name}
        </button>
      ))}
    </div>
  );
}

function Stage({
  mountId,
  needsVideoId,
  track,
}: {
  mountId: string;
  needsVideoId: boolean;
  track: Track;
}) {
  return (
    <div className="glass-panel w-full max-w-xl overflow-hidden rounded-3xl p-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/60">
        <div id={mountId} className="absolute inset-0 h-full w-full" />
        {needsVideoId ? (
          <div className="absolute inset-0 grid place-items-center px-6 text-center">
            <div>
              <p className="font-display text-[15px] font-semibold text-white">
                “{track.title}” has no video ID yet
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/65">
                Paste the rights holder's own YouTube ID into{" "}
                <code className="text-accent-warm-soft">src/lib/tracks.ts</code> and it
                plays here — the player stays visible, as YouTube's policies require.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ── engine ───────────────────────────────────────────────────────────── */

const MOUNT_ID = "yt-stage-mount";

export function Player() {
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const playlist = PLAYLISTS[playlistIndex]!;
  const tracks = playlist.tracks;
  const track = tracks[trackIndex]!;
  const playableCount = useMemo(
    () => tracks.filter((t) => t.videoId).length,
    [tracks],
  );

  const playerRef = useRef<YTPlayer | null>(null);
  const readyRef = useRef(false);
  const trackRef = useRef(track);
  trackRef.current = track;

  const go = useCallback(
    (delta: number) => {
      setTrackIndex((i) => {
        const len = tracks.length;
        if (len === 0) return 0;
        return (i + delta + len) % len;
      });
      setPosition(0);
    },
    [tracks.length],
  );

  /* boot the IFrame API once */
  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;
        const el = document.getElementById(MOUNT_ID);
        if (!el) return;
        playerRef.current = new YT.Player(el, {
          width: "100%",
          height: "100%",
          videoId: trackRef.current.videoId || undefined,
          playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
          events: {
            onReady: () => {
              readyRef.current = true;
              setDuration(playerRef.current?.getDuration() || 0);
            },
            onStateChange: (e: { data: number }) => {
              if (e.data === YT.PlayerState.PLAYING) {
                setPlaying(true);
                setDuration(playerRef.current?.getDuration() || 0);
              } else if (e.data === YT.PlayerState.PAUSED) {
                setPlaying(false);
              } else if (e.data === YT.PlayerState.ENDED) {
                setPlaying(false);
                go(1);
              }
            },
            onError: (e: { data: number }) => {
              // Videos get deleted or lose embed permission after ship.
              const detail = { code: e.data, videoId: trackRef.current.videoId };
              console.warn("[radio-cassette] youtube error", detail);
              window.dispatchEvent(
                new CustomEvent("radio-cassette:yt-error", { detail }),
              );
              go(1);
            },
          },
        });
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
      readyRef.current = false;
    };
  }, [go]);

  /* load whatever track is current */
  useEffect(() => {
    const p = playerRef.current;
    if (!p || !readyRef.current) return;
    if (!track.videoId) {
      p.pauseVideo();
      setPlaying(false);
      setDuration(track.duration);
      setPosition(0);
      return;
    }
    p.loadVideoById(track.videoId);
    setPosition(0);
  }, [track.videoId, track.duration]);

  /* progress ticker */
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      setPosition(p.getCurrentTime() || 0);
      const d = p.getDuration() || 0;
      if (d) setDuration(d);
    }, 400);
    return () => window.clearInterval(t);
  }, [playing]);

  const toggle = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    // Never gated behind a readiness event — always safe to call on a gesture.
    if (playing) p.pauseVideo();
    else p.playVideo();
  }, [playing]);

  const seek = useCallback((seconds: number) => {
    setPosition(seconds);
    playerRef.current?.seekTo(seconds, true);
  }, []);

  const selectPlaylist = useCallback((i: number) => {
    setPlaylistIndex(i);
    setTrackIndex(0);
    setPosition(0);
  }, []);

  const shownDuration = duration || track.duration;

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-2.5 sm:gap-3">
      <PlaylistTabs active={playlistIndex} onSelect={selectPlaylist} />
      <Stage mountId={MOUNT_ID} needsVideoId={!track.videoId} track={track} />

      {/* DESKTOP — one horizontal glass pill */}
      <div className="glass-panel hidden w-full items-center gap-4 rounded-full p-3 pr-5 sm:flex">
        <Vinyl size={80} playing={playing} />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <TrackMeta track={track} />
          <SeekBar position={position} duration={shownDuration} onSeek={seek} />
          <TimeReadout position={position} duration={shownDuration} />
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <GhostButton label="Previous track" onClick={() => go(-1)}>
            <PrevIcon className="h-4 w-4" />
          </GhostButton>
          <PlayButton playing={playing} onClick={toggle} size={44} />
          <GhostButton label="Next track" onClick={() => go(1)}>
            <NextIcon className="h-4 w-4" />
          </GhostButton>
        </div>
      </div>

      {/* MOBILE — stacked card */}
      <div className="glass-panel flex w-full flex-col gap-3 rounded-[26px] p-4 sm:hidden">
        <div className="flex items-center gap-3">
          <Vinyl size={64} playing={playing} />
          <TrackMeta track={track} compact />
        </div>
        <SeekBar position={position} duration={shownDuration} onSeek={seek} />
        <div className="flex items-center justify-between">
          <TimeReadout position={position} duration={shownDuration} />
          <div className="flex items-center gap-2">
            <GhostButton label="Previous track" onClick={() => go(-1)} size={44}>
              <PrevIcon className="h-4 w-4" />
            </GhostButton>
            <PlayButton playing={playing} onClick={toggle} size={52} />
            <GhostButton label="Next track" onClick={() => go(1)} size={44}>
              <NextIcon className="h-4 w-4" />
            </GhostButton>
          </div>
          <span className="w-[52px] text-right text-[10.5px] tabular-nums text-white/45">
            {trackIndex + 1}/{tracks.length}
          </span>
        </div>
      </div>

      <p className="px-4 text-center text-[10.5px] text-white/45">
        {playlist.tagline} · {playableCount} of {tracks.length} tracks wired to a
        rights-holder upload
      </p>
    </div>
  );
}

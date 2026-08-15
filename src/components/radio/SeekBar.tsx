import { useCallback, useRef } from "react";

type SeekBarProps = {
  position: number;
  duration: number;
  onSeek: (seconds: number) => void;
  className?: string;
};

/** Module-scope component: 24px invisible hit area, 3px visible rail. */
export function SeekBar({ position, duration, onSeek, className }: SeekBarProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const pct = duration > 0 ? Math.min(100, (position / duration) * 100) : 0;

  const seekFromEvent = useCallback(
    (clientX: number) => {
      const el = railRef.current;
      if (!el || duration <= 0) return;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      onSeek(ratio * duration);
    },
    [duration, onSeek],
  );

  return (
    <div
      ref={railRef}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      className={`group/seek relative flex h-6 w-full cursor-pointer touch-none items-center ${className ?? ""}`}
      onPointerDown={(e) => {
        draggingRef.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        seekFromEvent(e.clientX);
      }}
      onPointerMove={(e) => {
        if (draggingRef.current) seekFromEvent(e.clientX);
      }}
      onPointerUp={(e) => {
        draggingRef.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onSeek(Math.min(duration, position + 5));
        if (e.key === "ArrowLeft") onSeek(Math.max(0, position - 5));
      }}
    >
      <div className="relative h-[3px] w-full rounded-full bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent-warm shadow-[0_0_10px_2px_var(--accent-warm)]"
          style={{ width: `${pct}%` }}
        />
        <span
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-warm-soft opacity-0 shadow-[0_0_12px_2px_rgba(0,0,0,0.5)] transition-opacity group-hover/seek:opacity-100"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

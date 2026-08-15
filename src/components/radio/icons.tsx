type IconProps = { className?: string };

export function PrevIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 5.5a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0v-11a1 1 0 0 1 1-1Zm11.2.1a1 1 0 0 1 .8 1v10.8a1 1 0 0 1-1.55.84l-8-5.4a1 1 0 0 1 0-1.66l8-5.4a1 1 0 0 1 .75-.18Z" />
    </svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17 5.5a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0v-11a1 1 0 0 1 1-1ZM5.8 5.6a1 1 0 0 1 .95.18l8 5.4a1 1 0 0 1 0 1.66l-8 5.4A1 1 0 0 1 5 17.4V6.6a1 1 0 0 1 .8-1Z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.2a1 1 0 0 1 1.5-.87l9.1 5.8a1 1 0 0 1 0 1.74l-9.1 5.8A1 1 0 0 1 8 16.8V5.2Z" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.5 4h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm5 0h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

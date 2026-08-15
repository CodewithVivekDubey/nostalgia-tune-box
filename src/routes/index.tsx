import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "@/components/radio/Clock";
import { Player } from "@/components/radio/Player";
import wordmark from "@/assets/radio-cassette.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: "Radio Cassette — Nostalgia Street Radio" },
      {
        name: "description",
        content:
          "A golden-hour street corner that plays old Hindi favourites. One glass player, three hand-made playlists, IST clock ticking.",
      },
      { property: "og:title", content: "Radio Cassette — Nostalgia Street Radio" },
      {
        property: "og:description",
        content:
          "A golden-hour street corner that plays old Hindi favourites. One glass player, three hand-made playlists, IST clock ticking.",
      },
      { property: "og:type", content: "music.radio_station" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", short: "IG" },
  { label: "YouTube", href: "https://youtube.com", short: "YT" },
  { label: "Email", href: "mailto:hello@example.com", short: "@" },
];

function ListenerCount() {
  return (
    <div className="glass-panel flex items-center gap-2 rounded-full px-3 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-warm shadow-[0_0_8px_2px_var(--accent-warm)]" />
      <span className="text-[11px] font-medium tracking-[0.14em] text-white/75 uppercase tabular-nums">
        137<span className="hidden sm:inline"> listening</span>
      </span>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-1.5">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="glass-panel grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold text-white/75 transition hover:text-white"
        >
          {s.short}
        </a>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* background scene */}
      <div className="hero-bg fixed inset-0 -z-20 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      </div>
      {/* film grain */}
      <div className="grain-layer pointer-events-none fixed inset-0 -z-10" />

      {/* top row */}
      <div className="safe-pad fixed inset-x-0 top-0 z-10 flex items-start justify-between gap-3">
        <Clock />
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "max(1rem, env(safe-area-inset-top))" }}>
          <ListenerCount />
        </div>
        <SocialLinks />
      </div>

      <header className="safe-pad flex flex-col items-center pt-14 text-center sm:pt-28">
        <img
          src={wordmark.url}
          alt="Radio Cassette"
          className="w-[190px] max-w-[70vw] self-center mix-blend-screen drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)] sm:w-[320px]"
          loading="eager"
        />
        <h1 className="sr-only">Radio Cassette — nostalgia street radio</h1>
        <p className="mt-1 hidden max-w-sm text-[12.5px] sm:block leading-relaxed text-white/60">
          Musical Corner, 6:40 pm. Cricket in the gully, cassettes on the counter.
        </p>
      </header>

      <div className="safe-pad flex w-full justify-center pb-4">
        <Player />
      </div>
    </main>
  );
}

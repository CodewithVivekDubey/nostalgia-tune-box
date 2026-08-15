import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const parts = now ? fmt.format(now) : "";
  const [time, meridiem] = parts.split(" ");
  const [hh, mm] = (time ?? "").split(":");

  return (
    <div className="flex items-baseline gap-1.5 text-white/85 tabular-nums drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
      <span className="font-display text-[22px] leading-none font-semibold tracking-tight">
        {hh ?? "--"}
        <span className="blink px-[1px]">:</span>
        {mm ?? "--"}
      </span>
      <span className="text-[10.5px] font-medium tracking-[0.18em] text-white/60 uppercase">
        {meridiem ?? ""} IST
      </span>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  city?: string;
  timezone?: string;
}

export default function LiveClock({
  city = "New York, NY",
  timezone = "America/New_York",
}: LiveClockProps) {
  const [time, setTime] = useState<string>("");
  const [colonVisible, setColonVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      });
      setTime(formatted);
      setColonVisible((v) => !v);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  if (!time) return null;

  // Replace the colon to animate blink
  const [h, rest] = time.split(":");
  const [min, meridiem] = rest ? rest.split(" ") : ["", ""];

  return (
    <span className="font-mono text-[11px] tracking-wide text-[var(--muted)] tabular-nums">
      {h}
      <span style={{ opacity: colonVisible ? 1 : 0.2, transition: "opacity 0.1s" }}>
        :
      </span>
      {min} {meridiem} — {city}
    </span>
  );
}

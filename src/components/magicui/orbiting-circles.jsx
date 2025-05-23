import { cn } from "../../lib/utils";
import React from "react";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 2,
  radius = 50,
  path = true,
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle cx="50%" cy="50%" r={radius} fill="none" />
        </svg>
      )}

      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10 shadow-2xl",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

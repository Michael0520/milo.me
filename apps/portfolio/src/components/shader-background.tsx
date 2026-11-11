"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedShaderBackground = dynamic(() => import("@/components/shaders/OrbitalSunrise4"), {
  ssr: false,
});

export function ShaderBackground() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    let active = true;

    async function checkSupport() {
      try {
        const adapter = await navigator.gpu?.requestAdapter();
        if (active && adapter) setSupported(true);
      } catch {
        // The shader is decorative; unavailable GPU access keeps the regular background.
      }
    }

    void checkSupport();
    return () => {
      active = false;
    };
  }, []);

  return supported ? (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden h-dvh w-dvw dark:block"
    >
      <AnimatedShaderBackground />
    </div>
  ) : null;
}

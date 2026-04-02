"use client";

import dynamic from "next/dynamic";

export const ShaderBackground = dynamic(
  () =>
    import("shaders/react").then(({ Shader, Blob, FilmGrain, Glow, Swirl, WaveDistortion }) => {
      return function ShaderBackgroundContent() {
        return (
          <div className="fixed inset-0 -z-10 hidden h-dvh w-dvw dark:block">
            <Shader style={{ width: "100%", height: "100%" }}>
              <Glow blendMode="screen" intensity={0.15} size={20} threshold={0.4}>
                <Swirl
                  blend={37}
                  colorA="#0a0c14"
                  colorB="#10111a"
                  colorSpace="oklch"
                  speed={0.4}
                />
                <Blob
                  center={{ x: 0.5, y: 0.77 }}
                  colorA="#121320"
                  colorB="#3535B5"
                  deformation={0.8}
                  highlightIntensity={0}
                  highlightX={0.6}
                  highlightY={-0.5}
                  highlightZ={0.8}
                  seed={42}
                  size={0.8}
                  softness={3}
                  speed={1.2}
                  visible={true}
                />
                <WaveDistortion
                  angle={230}
                  edges="mirror"
                  frequency={8.9}
                  speed={0.6}
                  strength={0.25}
                  transform={{ offsetX: 0.04, scale: 1.34 }}
                  visible={true}
                  waveType="sawtooth"
                />
              </Glow>
              <FilmGrain strength={0.08} />
            </Shader>
          </div>
        );
      };
    }),
  { ssr: false },
);

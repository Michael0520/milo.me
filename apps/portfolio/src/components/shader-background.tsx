"use client";

import dynamic from "next/dynamic";

export const ShaderBackground = dynamic(
  () =>
    import("shaders/react").then(({ Shader, FilmGrain, FlowingGradient, Grid }) => {
      return function ShaderBackgroundContent() {
        return (
          <div className="fixed inset-0 -z-10 hidden h-dvh w-dvw dark:block">
            <Shader style={{ width: "100%", height: "100%" }}>
              <FlowingGradient
                colorB="#0c0c2e"
                colorC="#1a1a6b"
                colorD="#2b2b9e"
                colorSpace="oklab"
                distortion={0.2}
                seed={34}
                visible={true}
              />
              <Grid blendMode="linearDodge" cells={30} opacity={0.01} thickness={0.4} />
              <FilmGrain strength={0.1} />
            </Shader>
          </div>
        );
      };
    }),
  { ssr: false },
);

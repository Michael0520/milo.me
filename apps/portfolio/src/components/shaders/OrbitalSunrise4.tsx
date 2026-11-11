"use client";

import {
  Shader,
  Circle,
  FloatingParticles,
  LensDistortion,
  LensFlare,
  SolidColor,
} from "shaders/react";

const HORIZONTAL_OFFSET = 0.18;

export default function OrbitalSunrise4() {
  return (
    <Shader toneMapping="aces" style={{ width: "100%", height: "100%" }}>
      <SolidColor color="#060203" />
      <FloatingParticles
        angle={180}
        angleVariance={0}
        count={140}
        maskSource="idmw584uhaz4xdgzbl4"
        maskType="alphaInverted"
        opacity={0.4}
        particleColor="#ffe8e0"
        particleSize={0.45}
        randomness={0}
        speed={0.01}
        speedVariance={0}
        twinkle={0.65}
      />
      <Circle
        blendMode="linearDodge"
        center={{
          x: 1.07 + HORIZONTAL_OFFSET,
          y: 0.7,
        }}
        color="#ff6a4d"
        opacity={0.95}
        radius={2}
        softness={0.4}
        transform={{ scale: 3 }}
      />
      <Circle
        blendMode="linearDodge"
        center={{
          x: 1.07 + HORIZONTAL_OFFSET,
          y: 0.7,
        }}
        color="#ffe0d4"
        maskSource="idmw584uhaz4xdgzbl4"
        radius={1.905}
        softness={0.008}
        transform={{ scale: 3 }}
      />
      <Circle
        blendMode="linearDodge"
        center={{
          x: 0.67 + HORIZONTAL_OFFSET,
          y: 0.25,
        }}
        color="#fff0e8"
        radius={0.08}
        softness={0.25}
      />
      <Circle
        center={{
          x: 1.07 + HORIZONTAL_OFFSET,
          y: 0.7,
        }}
        color="#0a0303"
        radius={1.9}
        softness={0.02}
        transform={{ scale: 3 }}
      />
      <Circle
        id="idmw584uhaz4xdgzbl4"
        center={{
          x: 0.64 + HORIZONTAL_OFFSET,
          y: 0.25,
        }}
        radius={1.5}
        softness={1}
        visible={false}
      />
      <LensFlare
        blendMode="linearDodge"
        edgeFade={0}
        ghostChroma={0.05}
        ghostIntensity={0.04}
        glareIntensity={0.3}
        glareSize={0.22}
        haloChroma={0}
        haloIntensity={0}
        intensity={{
          mode: "ping-pong",
          type: "auto-animate",
          speed: 0.08,
          easing: "sine",
          outputMax: 0.68,
          outputMin: 0.48,
        }}
        lightPosition={{
          x: 0.67 + HORIZONTAL_OFFSET,
          y: 0.25,
        }}
        speed={0.6}
        starburstIntensity={0.12}
        streakIntensity={0.35}
        streakLength={0.75}
      />
      <LensDistortion
        angle={180}
        center={{
          x: 0.64 + HORIZONTAL_OFFSET,
          y: 0.27,
        }}
        focusCenter={1}
        grainOverlay={0.01}
        spread={0.2}
      />
    </Shader>
  );
}

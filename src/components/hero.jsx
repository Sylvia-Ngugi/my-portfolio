import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div
  className="relative w-full h-screen overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/BACKGROUND.png')" }}
>

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          preset: "links",
          background: {
            color: "#ffffff",
          },
          fullScreen: {
            enable: false,
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
            number: {
              value: 50,
            },
          },
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="/PROFILE.jpeg"
          alt="SILVIA NGUGI"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-black">Hi, I'm Silvia</h1>
        <p className="mt-2 text-lg md:text-xl text-white">
          Software Engineer • Freelancer • Creative Thinker • Problem Solver
        </p>
      </div>
    </div>
  );
};

export default Hero;

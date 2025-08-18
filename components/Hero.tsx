// components/Hero.tsx - REPLACE your current Hero
import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

// Lazy load Spotlight component if it's heavy
const Spotlight = dynamic(
  () => import("./ui/Spotlight").then((mod) => ({ default: mod.Spotlight })),
  {
    ssr: true, // Keep SSR for above-the-fold content
    loading: () => <div className="spotlight-skeleton" />,
  }
);

const Hero = () => {
  return (
    <div id="about" className="pb-20 pt-36 relative">
      {/* Spotlights - lazy loaded */}
      <div className="absolute inset-0">
        <Spotlight
          className="top-40 left-10 md:left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid - optimized */}
      <div className="absolute flex h-screen w-full items-center justify-center bg-black top-0 left-0">
        <div
          className={cn(
            "absolute inset-0 opacity-20", // Reduce opacity for better performance
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Radial gradient mask */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
            Dynamic Portfolio using next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-6"
            words="Transforming Concepts into Seamless Experiences"
          />

          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl text-gray-300">
            Hi, I'm{" "}
            <span className="text-white font-semibold">Kowshik Sangada</span>, a
            Web Developer
          </p>

          <a href="#about" className="inline-block">
            <MagicButton
              title="My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

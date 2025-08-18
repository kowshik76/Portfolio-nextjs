// components/ui/LazyGlobe.tsx - Create this NEW file
"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

// Lazy load the Globe component with SSR disabled
const GlobeComponent = dynamic(
  () => import("./Globe").then((mod) => ({ default: mod.World })),
  {
    ssr: false,
    loading: () => <GlobeSkeleton />,
  }
);

interface LazyGlobeProps {
  globeConfig: any;
  data: any[];
}

export function LazyGlobe({ globeConfig, data }: LazyGlobeProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "200px", // Start loading 200px before component comes into view
  });

  return (
    <div ref={ref} className="h-[400px] md:h-[600px] w-full">
      {inView ? (
        <Suspense fallback={<GlobeSkeleton />}>
          <GlobeComponent globeConfig={globeConfig} data={data} />
        </Suspense>
      ) : (
        <GlobeSkeleton />
      )}
    </div>
  );
}

// Loading skeleton while Globe loads
function GlobeSkeleton() {
  return (
    <div className="h-[400px] md:h-[600px] w-full bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>

      {/* Loading content */}
      <div className="text-center z-10">
        <div className="relative">
          {/* Spinning globe icon */}
          <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>

          {/* Pulsing dots */}
          <div className="flex justify-center space-x-1 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          <p className="text-gray-400 text-sm">Loading 3D Globe...</p>
        </div>
      </div>
    </div>
  );
}

// Add to globals.css

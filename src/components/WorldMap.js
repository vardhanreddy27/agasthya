// WorldMap.js
"use client";

import { useEffect, useState, useRef } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

export function WorldMap({ dots = [], lineColor = "rgb(157 37 45)" }) {
  const svgRef = useRef(null);
  const { theme } = useTheme();
  const [svgMap, setSvgMap] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF80" : "#000000",
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    });
    setSvgMap(svg);
  }, [theme]);

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  if (!mounted || !svgMap) return null;

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        unoptimized
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {[dot.start, dot.end].map((point, index) => {
              const { x, y } = projectPoint(point.lat, point.lng);
              const fillColor = theme === "dark" ? "#FFB703" : "#8B0000";
              return (
                <circle
                  key={`${index}-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={fillColor}
                  stroke="#ffffff"
                  strokeWidth="1"
                  opacity="1"
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}

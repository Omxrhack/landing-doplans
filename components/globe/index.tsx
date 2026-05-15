// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import { GLOBE_EVENTS, type GlobeEvent } from "@/lib/globe-events";

interface GlobeDoplansPropss {
  onActiveEvent?: (event: GlobeEvent | null) => void;
}

const getData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
  );
  return res.json();
};

export default function GlobeDoplans({ onActiveEvent }: GlobeDoplansPropss) {
  let Globe = () => null;
  if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

  const globeEl = useRef(null);
  const [arcsData, setArcsData]         = useState([]);
  const [ringsData, setRingsData]       = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hexData, setHexData]           = useState([]);
  const [dimensions, setDimensions]     = useState({ width: 0, height: 0 });
  const [isDark, setIsDark]             = useState(true);
  const isDarkRef                       = useRef(true);
  const onActiveEventRef                = useRef(onActiveEvent);

  useEffect(() => { onActiveEventRef.current = onActiveEvent; }, [onActiveEvent]);

  // Detect theme
  useEffect(() => {
    const check = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
      isDarkRef.current = dark;
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    getData().then((geo) => setHexData(geo.features));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const from    = GLOBE_EVENTS[currentIndex];
    const nextIdx = (currentIndex + 1) % GLOBE_EVENTS.length;
    const to      = GLOBE_EVENTS[nextIdx];
    const timers: ReturnType<typeof setTimeout>[] = [];

    setArcsData([{
      startLat: from.lat, startLng: from.lng,
      endLat: to.lat,     endLng: to.lng,
      color: isDarkRef.current ? "rgba(180, 120, 255, 1)" : "rgba(90, 24, 154, 1)",
    }]);

    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: from.lat, lng: from.lng, altitude: 2 }, 0);

      timers.push(setTimeout(() => {
        globeEl.current?.pointOfView({ lat: to.lat, lng: to.lng, altitude: 2 }, 3000);
      }, 0));

      timers.push(setTimeout(() => {
        setRingsData([{ lat: to.lat, lng: to.lng, maxRadius: 5, propagationSpeed: 5, repeatPeriod: 1000 }]);
        onActiveEventRef.current?.(GLOBE_EVENTS[nextIdx]);
      }, 3000));

      timers.push(setTimeout(() => setArcsData([]),  3000));
      timers.push(setTimeout(() => setRingsData([]), 6300));

      timers.push(setTimeout(() => {
        onActiveEventRef.current?.(null);
        setCurrentIndex(nextIdx);
      }, 6800));
    }

    return () => timers.forEach(clearTimeout);
  }, [currentIndex]);

  const dotColor   = isDark ? "rgba(180, 120, 255, 0.85)" : "rgba(90, 24, 154, 0.75)";
  const ringColor  = isDark ? "rgba(200, 140, 255, 0.9)"  : "rgba(90, 24, 154, 0.85)";
  const pinColor   = isDark ? "rgba(200, 150, 255, 0.95)" : "rgba(90, 24, 154, 0.9)";
  const labelColor = isDark ? "rgba(230, 200, 255, 1)"    : "rgba(55, 10, 110, 1)";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="translate-x-[38%] scale-[1.35]">
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          hexPolygonsData={hexData}
          hexPolygonResolution={3}
          hexPolygonMargin={0.35}
          hexPolygonUseDots={true}
          hexPolygonColor={() => dotColor}
          arcsData={arcsData}
          arcColor={(d) => d.color}
          arcStroke={0.8}
          arcDashLength={1}
          arcDashGap={1}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={1600}
          arcAltitudeAutoScale={0.4}
          ringsData={ringsData}
          ringColor={() => ringColor}
          ringMaxRadius={() => 3}
          ringPropagationSpeed={() => 3}
          ringRepeatPeriod={() => 1600}
          pointsData={GLOBE_EVENTS}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.06}
          pointRadius={0.35}
          pointColor={() => pinColor}
          pointsMerge={false}
          pointsTransitionDuration={800}
          labelsData={GLOBE_EVENTS}
          labelLat="lat"
          labelLng="lng"
          labelText={(d) => `${d.emoji} ${d.name}`}
          labelSize={0.5}
          labelAltitude={0.08}
          labelColor={() => labelColor}
          labelDotRadius={0.25}
          labelIncludeDot={true}
          labelDotOrientation={() => "bottom"}
          labelsTransitionDuration={800}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={false}
          showGlobe={false}
        />
      </div>
    </div>
  );
}

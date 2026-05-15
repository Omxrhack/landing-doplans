// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";

const locations = [
  { id: 1, country: "Germany",      lat: 52.52,   lng: 13.405   },
  { id: 2, country: "Japan",        lat: 36.2048, lng: 138.2529 },
  { id: 3, country: "Brazil",       lat: -14.235, lng: -51.9253 },
  { id: 4, country: "Mexico",       lat: 19.4326, lng: -99.1332 },
  { id: 5, country: "Canada",       lat: 56.1304, lng: -106.3468},
  { id: 6, country: "Australia",    lat: -35.28,  lng: 149.13   },
  { id: 7, country: "France",       lat: 48.8566, lng: 2.3522   },
  { id: 8, country: "India",        lat: 28.6139, lng: 77.209   },
  { id: 9, country: "England",      lat: 51.5074, lng: -0.1278  },
  { id: 10, country: "South Africa",lat: -25.746, lng: 28.1881  },
  { id: 11, country: "Spain",       lat: 40.4168, lng: -3.7038  },
  { id: 12, country: "Colombia",    lat: 4.711,   lng: -74.0721 },
];

const getData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
  );
  return res.json();
};

export default function GlobeDoplans() {
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

  // Detect theme — ref keeps color in sync without re-triggering animation
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
    const from = locations[currentIndex];
    const nextIdx = (currentIndex + 1) % locations.length;
    const to = locations[nextIdx];

    setArcsData([{
      startLat: from.lat, startLng: from.lng,
      endLat: to.lat,     endLng: to.lng,
      color: isDarkRef.current ? "rgba(180, 120, 255, 1)" : "rgba(90, 24, 154, 1)",
    }]);

    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: from.lat, lng: from.lng, altitude: 2 }, 0);
      setTimeout(() => {
        globeEl.current?.pointOfView({ lat: to.lat, lng: to.lng, altitude: 2 }, 3000);
      }, 0);
      setTimeout(() => {
        setRingsData([{ lat: to.lat, lng: to.lng, maxRadius: 5, propagationSpeed: 5, repeatPeriod: 1000 }]);
      }, 3000);
      setTimeout(() => setArcsData([]),            3000);
      setTimeout(() => setRingsData([]),           6300);
      setTimeout(() => setCurrentIndex(nextIdx),   6800);
    }
  }, [currentIndex]);

  // Colors per theme: dark = bright purple, light = deep purple
  const dotColor    = isDark ? "rgba(180, 120, 255, 0.85)" : "rgba(90, 24, 154, 0.75)";
  const ringColor   = isDark ? "rgba(200, 140, 255, 0.9)"  : "rgba(90, 24, 154, 0.85)";

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
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={false}
          showGlobe={false}
        />
      </div>
    </div>
  );
}

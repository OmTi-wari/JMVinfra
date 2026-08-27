import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";

type LocationsMapProps = {
  city: string;
  address: string;
  coordinates: [number, number];
};

export function LocationsMap({ city, address, coordinates }: LocationsMapProps) {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let map: import("leaflet").Map | undefined;

    void import("leaflet").then((L) => {
      if (disposed || !mapElement.current) return;

      map = L.map(mapElement.current, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      L.circleMarker(coordinates, {
        radius: 10,
        color: "#fafafa",
        weight: 3,
        fillColor: "#e65100",
        fillOpacity: 1,
      })
        .addTo(map)
        .bindPopup(`<strong>${city}</strong><br />${address}`)
        .openPopup();
      map.setView(coordinates, 14);
    });

    return () => {
      disposed = true;
      map?.remove();
    };
  }, [address, city, coordinates]);

  return (
    <div className="relative isolate overflow-hidden bg-jmv-brown">
      <div ref={mapElement} className="h-56 w-full" aria-label={`${city} office map`} />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-jmv-brown shadow-md">
        {city}
      </div>
    </div>
  );
}

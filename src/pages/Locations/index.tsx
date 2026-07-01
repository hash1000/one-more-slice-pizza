import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";
import { containerClasses } from "../../utils/layout";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const LOCATION = {
  name: "One More Slice — Palos Heights",
  address: "Palos Heights, Illinois",
  lat: 41.66154135542811,
  lng: -87.7780206446805,
  hours: "Mon–Fri 11am–9pm · Sat–Sun 11am–10pm",
  phone: "Coming soon",
  status: "Opening soon",
} as const;

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-orange/80">{icon}</span>
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-cream/40">{label}</p>
        <p className="mt-0.5 font-body text-sm text-cream/80">{value}</p>
      </div>
    </div>
  );
}

export function Locations() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className={containerClasses}>
        <div className="mx-auto max-w-4xl pt-12 text-center">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}
            className="font-display text-xs font-bold uppercase tracking-widest text-orange">
            Our Locations
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 font-display text-5xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-6xl">
            Find us in <span className="text-orange">Palos Heights.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-charcoal/65">
            Our first location is opening soon in Palos Heights, Illinois — serving the southwest suburbs with generous slices and real value.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-6xl">
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-charcoal/8 shadow-soft lg:grid-cols-[1fr_360px]">
            <div className="order-2 h-80 lg:order-1 lg:h-auto lg:min-h-[480px]">
              <MapContainer center={[LOCATION.lat, LOCATION.lng]} zoom={14} scrollWheelZoom={false}
                className="h-full w-full" style={{ minHeight: "320px" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[LOCATION.lat, LOCATION.lng]}>
                  <Popup><strong>{LOCATION.name}</strong><br />{LOCATION.address}</Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="order-1 flex flex-col justify-center gap-6 bg-charcoal p-8 lg:order-2 lg:p-10">
              <div>
                <span className="inline-block rounded-full bg-orange/20 px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-orange-light">
                  {LOCATION.status}
                </span>
                <h2 className="mt-4 font-display text-2xl font-black leading-snug text-cream">{LOCATION.name}</h2>
                <p className="mt-2 font-body text-base text-cream/60">{LOCATION.address}</p>
              </div>
              <div className="h-px bg-cream/10" />
              <div className="flex flex-col gap-4">
                <InfoRow
                  icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>}
                  label="Hours" value={LOCATION.hours}
                />
                <InfoRow
                  icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  label="Phone" value={LOCATION.phone}
                />
              </div>
              <a href={`https://maps.google.com/?q=${LOCATION.lat},${LOCATION.lng}`} target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 font-display text-sm font-bold text-white transition-opacity hover:opacity-90">
                Get Directions
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

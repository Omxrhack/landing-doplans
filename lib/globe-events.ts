export const GLOBE_EVENTS = [
  { id: 1,  lat: 40.4168, lng:  -3.7038, city: "Madrid",    emoji: "🎵", name: "Festival Primavera", time: "Hoy · 20:00",    attendees: 340,  category: "Música"    },
  { id: 2,  lat: 19.4326, lng: -99.1332, city: "CDMX",      emoji: "🎭", name: "Festival de Arte",   time: "Mañana · 18:00", attendees: 120,  category: "Arte"      },
  { id: 3,  lat:  4.711,  lng: -74.0721, city: "Bogotá",    emoji: "🎶", name: "Rock al Parque",     time: "Sáb · 16:00",    attendees: 980,  category: "Música"    },
  { id: 4,  lat: -34.603, lng: -58.381,  city: "Bs. Aires", emoji: "🎪", name: "Feria de Diseño",    time: "Dom · 11:00",    attendees: 430,  category: "Arte"      },
  { id: 5,  lat: -23.55,  lng: -46.633,  city: "São Paulo", emoji: "🎨", name: "Bienal de Arte",     time: "Vie · 10:00",    attendees: 670,  category: "Arte"      },
  { id: 6,  lat: 52.52,   lng:  13.405,  city: "Berlín",    emoji: "🎧", name: "Techno Festival",    time: "Sáb · 22:00",    attendees: 2100, category: "Nightlife" },
  { id: 7,  lat: 48.8566, lng:   2.3522, city: "París",     emoji: "👗", name: "Fashion Week",       time: "Lun · 09:00",    attendees: 560,  category: "Cultura"   },
  { id: 8,  lat: 36.2048, lng: 138.2529, city: "Tokio",     emoji: "🌸", name: "Hanami Festival",    time: "Mié · 08:00",    attendees: 1800, category: "Cultura"   },
  { id: 9,  lat: 28.6139, lng:  77.209,  city: "Delhi",     emoji: "✨", name: "Diwali Mela",        time: "Jue · 19:00",    attendees: 3200, category: "Cultura"   },
  { id: 10, lat: 51.5074, lng:  -0.1278, city: "Londres",   emoji: "🎭", name: "West End Show",      time: "Vie · 20:30",    attendees: 890,  category: "Teatro"    },
] as const;

export type GlobeEvent = typeof GLOBE_EVENTS[number];

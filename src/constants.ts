/**
 * Spiral Katta - Official Café Information
 * Verified business details strictly aligned with provided data.
 */

export const CAFE_INFO = {
  name: "SPIRAL KATTA",
  eyebrow: "CAFE • CHAKAN",
  headline: "Good Food. Good Coffee. Good Katta.",
  description: "Your everyday spot in Chakan to grab a bite, meet your people and spend a good evening.",
  
  address: {
    line1: "Ambethan Chowk",
    line2: "Chakan - Ambethan Rd",
    city: "Chakan",
    state: "Maharashtra",
    pincode: "410501",
    country: "India",
    full: "Ambethan Chowk, Chakan - Ambethan Rd, Chakan, Maharashtra 410501, India",
    display: "Ambethan Chowk, Chakan - Ambethan Road, Chakan, Maharashtra 410501"
  },

  phone: "+91 98500 35440",
  phoneRaw: "+919850035440",

  hours: {
    days: "Monday – Sunday",
    daysShort: "Daily",
    time: "10:00 AM – 10:30 PM",
    display: "10:00 AM — 10:30 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 22,
    closeMinute: 30
  },

  category: "Cafe",

  // Direct Google Maps directions and search links
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Spiral+Katta,+Ambethan+Chowk,+Chakan+-+Ambethan+Rd,+Chakan,+Maharashtra+410501",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Spiral+Katta+Ambethan+Chowk+Chakan+Maharashtra+410501",
  // Standard embed url for Ambethan Chowk Chakan
  mapsEmbedUrl: "https://maps.google.com/maps?q=Ambethan+Chowk,+Chakan+-+Ambethan+Rd,+Chakan,+Maharashtra+410501&t=&z=16&ie=UTF8&iwloc=&output=embed"
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Visit Us", href: "#location" },
] as const;

export const HIGHLIGHTS = [
  {
    title: "GOOD FOOD",
    description: "Simple, satisfying café moments.",
    detail: "Freshly prepared refreshments and quick bites crafted to pair perfectly with your daily routine.",
    icon: "UtensilsCrossed"
  },
  {
    title: "GOOD VIBES",
    description: "A relaxed space to spend time with your people.",
    detail: "Natural light, cozy wooden seating, and an unhurried atmosphere where hours drift easily.",
    icon: "Sparkles"
  },
  {
    title: "EVERYDAY KATTA",
    description: "Your casual stop in Chakan.",
    detail: "The authentic neighborhood hangout spot — built for spontaneous catch-ups and evening conversations.",
    icon: "Coffee"
  },
  {
    title: "EASY TO FIND",
    description: "Located at Ambethan Chowk.",
    detail: "Conveniently situated along the Chakan - Ambethan Road with accessible parking and simple directions.",
    icon: "MapPin"
  }
] as const;

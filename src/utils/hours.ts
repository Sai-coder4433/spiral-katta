/**
 * Helper to determine real-time opening status for Spiral Katta in IST (Indian Standard Time, UTC+5:30)
 */

export interface OpenStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
}

export function getCafeOpenStatus(): OpenStatus {
  try {
    // Current UTC time
    const now = new Date();
    // Convert to IST (UTC + 5 hours 30 minutes)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const istDate = new Date(utcTime + istOffset);

    const hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    const openMinutes = 10 * 60; // 10:00 AM
    const closeMinutes = 22 * 60 + 30; // 10:30 PM

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusText: "Open Now",
        subText: "Closes at 10:30 PM"
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed Now",
        subText: "Opens at 10:00 AM"
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "Open Daily",
      subText: "10:00 AM – 10:30 PM"
    };
  }
}

// Configurable WhatsApp Numbers & Helper functions

// Restaurant / Contact Us WhatsApp number (Same for Contact Us & Restaurant Reservations)
export const RESTAURANT_WHATSAPP_NUMBER = "2348104128681";

// Kcanice & Isabella Apartments WhatsApp number 
// Can be updated here or set via VITE_APARTMENT_WHATSAPP environment variable
export const APARTMENT_WHATSAPP_NUMBER = import.meta.env.VITE_APARTMENT_WHATSAPP || "2348039352371";

/**
 * Generate a WhatsApp URL for Restaurant bookings & Contact Us
 */
export const getRestaurantWhatsAppUrl = (message = '') => {
  const cleanNumber = RESTAURANT_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  if (!message) return `https://wa.me/${cleanNumber}`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate a WhatsApp URL for Kcanice & Isabella Apartment bookings
 */
export const getApartmentWhatsAppUrl = (message = '') => {
  const cleanNumber = APARTMENT_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  if (!message) return `https://wa.me/${cleanNumber}`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

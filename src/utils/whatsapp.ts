export const JINKA_PHONE_NUMBER = "8341342545";
export const JINKA_WHATSAPP_NUMBER = "918341342545";
export const JINKA_EMAIL = "jinkahometheatres@gmail.com";
export const JINKA_ADDRESS = "32/98-A, Tarakaramapuram, Dharmavaram, Sri Sathya Sai District, Andhra Pradesh, PIN: 515671";
export const JINKA_HOURS = "Every day: 10:00 AM – 10:00 PM";

export function generateSingleProductWhatsAppLink(productName: string, productPrice?: string): string {
  const message = `Hello Jinka Home Theaters,\n\nI am interested in:\n*${productName}* ${productPrice ? `(${productPrice})` : ''}\n\nPlease share more details, pricing, and availability.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateGeneralConsultationWhatsAppLink(): string {
  const message = `Hello Jinka Home Theaters,\n\nI would like to consult with your team regarding a custom private home theater design for my space. Please connect with me.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateCartWhatsAppLink(items: Array<{ name: string; quantity: number; price: string }>): string {
  let itemList = items.map((item, idx) => `${idx + 1}. *${item.name}* × ${item.quantity} (${item.price})`).join('\n');
  const message = `Hello Jinka Home Theaters,\n\nI am interested in the following products for my home theater setup:\n\n${itemList}\n\nPlease share detailed specifications, availability, and best offer.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

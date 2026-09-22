export const JINKA_PHONE_NUMBER = "8341342545";
export const JINKA_SUPPORT_NUMBER = "9491584703";
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

export function generateCartWhatsAppLink(
  items: Array<{ name: string; quantity: number; price: string }>,
  location: string = ""
): string {
  let itemList = items.map((item, idx) => `${idx + 1}. *${item.name}* × ${item.quantity} (${item.price})`).join('\n');
  const locationText = location.trim() ? `\n\nDelivery/Installation Location: ${location}` : "";
  const message = `Hello Jinka Home Theaters,\n\nI am interested in the following products for my home theater setup:\n\n${itemList}${locationText}\n\nPlease share detailed specifications, availability, and best offer.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateBookSlotWhatsAppLink(name: string, date: string, location: string, mobile: string): string {
  const message = `Hello Jinka Home Theaters,\n\nI would like to book a *Site Visit*.\n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*Preferred Date:* ${date}\n*Location:* ${location}\n\n*Acknowledgment:* I understand the Site Visit charges are 5,000/-.\n\nPlease confirm availability for this slot.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateQuotationWhatsAppLink(name: string, mobile: string, location: string, requirement: string, budget: string, roomSize: string): string {
  const message = `Hello Jinka Home Theaters,\n\nI would like to request a *Quotation*.\n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*Location:* ${location}\n*Requirement:* ${requirement}\n*Budget:* ${budget}\n*Room Size (H/W/L):* ${roomSize}\n\n*Acknowledgment:* I understand the Quotation charges are 100/-.\n\nPlease connect with me to proceed.`;
  return `https://wa.me/${JINKA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

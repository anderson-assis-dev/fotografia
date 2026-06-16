export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsappLink(phone, message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildMailtoLink(email, subject, body) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${email}?${params.toString()}`;
}

"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "2349126590125";
  const message = encodeURIComponent(
    "Hello KINGFOUNDER, I would like to know more about your community and programs.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KINGFOUNDER on WhatsApp"
      className="fixed right-5 bottom-6 
       flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      <FaWhatsapp className="h-6 w-6" />
      <span className="hidden font-semibold md:inline">Chat with us</span>
    </a>
  );
}

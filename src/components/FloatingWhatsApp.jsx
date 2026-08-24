// FloatingWhatsApp.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center"
      title="Chat for Prayer Request"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
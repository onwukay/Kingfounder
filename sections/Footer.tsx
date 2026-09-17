import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Play, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#010816] text-white">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Image src="/logo2.png" alt="KINGFOUNDER" width={170} height={70} />

          <p className="mt-4 leading-7 text-slate-400">
            Raising confident leaders through mentorship, communication,
            discipline, and personal development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>
              <Link href="/" className="transition hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link href="/programs" className="transition hover:text-blue-400">
                Programs
              </Link>
            </li>

            <li>
              <Link
                href="/resources"
                className="transition hover:text-blue-400"
              >
                Resources
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Programs</h3>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Young Leaders</li>
            <li>University Leaders</li>
            <li>Professionals</li>
            <li>Mentorship Circle</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>

          <div className="mt-4 space-y-4 text-slate-300">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-400" />
              <span>kingfounder1@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-blue-400" />
              <span>+234 912 659 0125</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-blue-400" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-2">
            {/* Facebook / Website */}
            <a
              href="#"
              className="rounded-full bg-slate-900 p-2 md:p-3 transition hover:bg-blue-500/20"
            >
              <Globe className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349126590125?text=Hello%20KINGFOUNDER,%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with KINGFOUNDER on WhatsApp"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-green-500/20"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kingfounder_consultancy?igsh=MTR1dnNhMjJ2Nnhmcw=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-pink-500/20"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@kingfounder_consulting?si=2DH2_tcEGw_fQBD5Can"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-red-500/20"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 KINGFOUNDER. Built to raise confident leaders.
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo2.png"
            alt="KINGFOUNDER"
            width={150}
            height={60}
            className="h-[60px] w-[150px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          <li>
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/programs"
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              href="/resources"
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              Resources
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-500 md:block"
        >
          Join Community
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              href="/programs"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
            >
              Programs
            </Link>

            <Link
              href="/resources"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-yellow-400 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-yellow-500"
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

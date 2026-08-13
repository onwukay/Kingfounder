import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-20 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="KINGFOUNDER"
            width={150}
            height={60}
            className="h-[60px] w-[150px] object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
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

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
        >
          Join Community
        </Link>
      </div>
    </nav>
  );
}

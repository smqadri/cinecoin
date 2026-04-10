"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Coins } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/architecture", label: "Architecture" },
  { href: "/stakeholders", label: "Stakeholders" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/implementation", label: "Implementation" },
  { href: "/whitepaper", label: "Whitepaper" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[#1e2044]"
      style={{ background: "rgba(10, 11, 26, 0.85)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center shadow-lg shadow-[#f0b90b]/20 group-hover:shadow-[#f0b90b]/40 transition-shadow">
              <Coins className="w-6 h-6 text-[#0a0b1a]" />
            </div>
            <span className="text-xl font-bold gradient-text">CineCoin</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-[#f0b90b] hover:bg-[#f0b90b]/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/implementation"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold text-sm hover:shadow-lg hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#1e2044] backdrop-blur-xl"
          style={{ background: "rgba(10, 11, 26, 0.95)" }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-[#f0b90b] hover:bg-[#f0b90b]/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/implementation" onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

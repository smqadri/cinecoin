import Link from "next/link";
import { Coins, GraduationCap, FileText, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2044] bg-[#070816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center">
                <Coins className="w-5 h-5 text-[#0a0b1a]" />
              </div>
              <span className="text-lg font-bold gradient-text">CineCoin</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A blockchain-based secure digital content distribution system enabling fair compensation for creators, providers, and transparent access for viewers.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0b90b] uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              {[
                { href: "/architecture", label: "Architecture" },
                { href: "/stakeholders", label: "Stakeholders" },
                { href: "/tokenomics", label: "Tokenomics" },
                { href: "/implementation", label: "Implementation" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#f0b90b] text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0b90b] uppercase tracking-wider mb-4">Research</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-[#f0b90b] text-sm transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Whitepaper
                </Link>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/380515997" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#f0b90b] text-sm transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Research Paper I
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/391120982" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#f0b90b] text-sm transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Research Paper II
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0b90b] uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" /> sqadri@my.harrisburgu.edu
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" /> me@syedqadri.com
                </span>
              </li>
              <li>
                <a href="https://www.syedqadri.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f0b90b] text-sm flex items-center gap-2 transition-colors">
                  <GraduationCap className="w-4 h-4" /> www.syedqadri.com
                </a>
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4">
              Syed Mohiuddin Qadri<br />
              Harrisburg University of Science &amp; Technology
            </p>
            <a href="https://lusory.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f0b90b] text-xs mt-2 inline-block transition-colors">
              LUSORY LIMITED &mdash; lusory.net
            </a>
          </div>
        </div>

        <div className="border-t border-[#1e2044] mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} CineCoin. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built on blockchain technology for a decentralized future</p>
        </div>
      </div>
    </footer>
  );
}

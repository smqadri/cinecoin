import Link from "next/link";
import {
  Shield, Coins, Server, Eye, ArrowRight, Lock, Globe, Zap,
  Film, Database, Users, CheckCircle, ChevronRight, Layers,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "DRM-Protected Content",
    desc: "Asymmetric encryption and license issuance via smart contracts ensure only authorized consumers access content.",
  },
  {
    icon: Globe,
    title: "Decentralized Storage",
    desc: "Content is encrypted, segmented, and distributed across the Sia network eliminating single points of failure.",
  },
  {
    icon: Coins,
    title: "Fair Compensation",
    desc: "Creators earn CineCoin for every view. Hosting providers are paid for data served. Consumers pay only for what they watch.",
  },
  {
    icon: Lock,
    title: "Secret Block Privacy",
    desc: "Transaction details are encapsulated in secret blocks accessible only to the consumer, ensuring privacy.",
  },
  {
    icon: Zap,
    title: "HLS Streaming",
    desc: "Adaptive bitrate streaming via encrypted HLS segments delivers high-quality video across all devices.",
  },
  {
    icon: Layers,
    title: "Dual-Layer Architecture",
    desc: "Off-chain authentication and on-chain transaction validation provide security without blockchain bottlenecks.",
  },
];

const stakeholders = [
  {
    icon: Film,
    title: "Content Creators",
    desc: "Publish content securely on the decentralized network and earn CineCoin for every view. Full control over licensing and DRM policies.",
    color: "from-[#f0b90b] to-[#f7d55a]",
    link: "/stakeholders#creators",
  },
  {
    icon: Server,
    title: "Hosting Providers",
    desc: "Provide storage on the Sia network and earn CineCoin proportional to the amount of data served to consumers.",
    color: "from-[#3b82f6] to-[#8b5cf6]",
    link: "/stakeholders#providers",
  },
  {
    icon: Eye,
    title: "Content Viewers",
    desc: "Browse and consume digital content securely. Pay only for the data consumed using CineCoin from your wallet.",
    color: "from-[#06b6d4] to-[#3b82f6]",
    link: "/stakeholders#viewers",
  },
];

const stats = [
  { value: "256-bit", label: "AES Encryption" },
  { value: "100%", label: "Decentralized" },
  { value: "0", label: "Single Points of Failure" },
  { value: "3", label: "Stakeholder Roles" },
];

const workflow = [
  { step: "01", title: "Register & Authenticate", desc: "Users create an account, generate asymmetric key pairs, and authenticate via the off-chain layer." },
  { step: "02", title: "Upload & Encrypt", desc: "Creators upload content which is encrypted using Widevine DRM and stored on decentralized Sia nodes." },
  { step: "03", title: "License & Smart Contract", desc: "Consumers request access, triggering a smart contract that issues a license with usage policies." },
  { step: "04", title: "Stream & Pay", desc: "Content streams via encrypted HLS. CineCoin flows from viewer to creator and hosting provider automatically." },
];

export default function Home() {
  return (
    <div className="bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f0b90b]/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[120px] animate-float-delay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/3 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] text-sm font-medium mb-6">
                <Coins className="w-4 h-4" />
                Blockchain-Powered Content Distribution
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="gradient-text">CineCoin</span>
                <br />
                <span className="text-white">Secure Digital</span>
                <br />
                <span className="text-gray-400">Content Distribution</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg">
                A decentralized platform where content creators earn fairly, hosting providers are compensated for storage, and consumers pay only for what they watch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/architecture"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold text-lg hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
                  Explore Architecture <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/whitepaper"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2044] hover:border-[#f0b90b]/30 text-gray-300 font-medium text-lg transition-all hover:bg-[#f0b90b]/5">
                  <FileText className="w-5 h-5" /> Read Whitepaper
                </Link>
              </div>
            </div>

            {/* Hero Visual - Blockchain Diagram */}
            <div className="hidden lg:flex justify-center animate-slide-right">
              <div className="relative w-[450px] h-[450px]">
                {/* Central coin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center shadow-2xl shadow-[#f0b90b]/30 animate-pulse-glow z-10">
                  <Coins className="w-16 h-16 text-[#0a0b1a]" />
                </div>
                {/* Orbiting nodes */}
                {[
                  { Icon: Film, label: "Creator", angle: 0, color: "#f0b90b" },
                  { Icon: Server, label: "Provider", angle: 120, color: "#3b82f6" },
                  { Icon: Eye, label: "Viewer", angle: 240, color: "#06b6d4" },
                ].map(({ Icon, label, angle, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 170 + 225 - 36;
                  const y = Math.sin(rad) * 170 + 225 - 36;
                  return (
                    <div key={i} className="absolute" style={{ left: x, top: y }}>
                      <div className="w-[72px] h-[72px] rounded-2xl flex flex-col items-center justify-center gap-1 border border-[#1e2044] bg-[#111227]"
                        style={{ boxShadow: `0 0 20px ${color}20` }}>
                        <Icon className="w-6 h-6" style={{ color }} />
                        <span className="text-[10px] text-gray-400">{label}</span>
                      </div>
                    </div>
                  );
                })}
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 450">
                  <defs>
                    <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0b90b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f0b90b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0, 120, 240].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 170 + 225;
                    const y = Math.sin(rad) * 170 + 225;
                    return (
                      <line key={i} x1="225" y1="225" x2={x} y2={y}
                        stroke="url(#line1)" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
                    );
                  })}
                  <circle cx="225" cy="225" r="170" fill="none" stroke="#f0b90b" strokeWidth="0.5" opacity="0.15" strokeDasharray="8 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#111227]/60 border border-[#1e2044] backdrop-blur-sm">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="p-8 lg:p-10 rounded-3xl bg-red-500/5 border border-red-500/10">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">The Problem</h3>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Traditional Content Distribution is Broken</h2>
              <ul className="space-y-4">
                {[
                  "Centralized systems create single points of failure",
                  "Creators lose revenue to intermediaries and piracy",
                  "Limited traceability of unauthorized access and distribution",
                  "DRM systems are vulnerable to decryption attacks",
                  "Hosting providers lack fair compensation models",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 lg:p-10 rounded-3xl bg-[#f0b90b]/5 border border-[#f0b90b]/10">
              <h3 className="text-sm font-semibold text-[#f0b90b] uppercase tracking-wider mb-4">The Solution</h3>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">CineCoin: Decentralized &amp; Secure</h2>
              <ul className="space-y-4">
                {[
                  "Blockchain-based decentralized architecture with no single point of failure",
                  "Smart contract-driven royalty payments directly to creators",
                  "Immutable transaction ledger for complete traceability",
                  "Dual-layer DRM with asymmetric encryption and secret blocks",
                  "Fair pay-per-data model for hosting providers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#f0b90b] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Built on cutting-edge blockchain technology to revolutionize how digital content is distributed, protected, and monetized.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-hover glow-border p-8 rounded-2xl bg-[#111227] border border-[#1e2044]">
                <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-[#f0b90b]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Three Pillars of the <span className="gradient-text">CineCoin Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Each participant plays a vital role and is fairly compensated through the CineCoin cryptocurrency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stakeholders.map((s, i) => (
              <Link key={i} href={s.link}
                className="group card-hover p-8 rounded-2xl bg-[#111227] border border-[#1e2044] relative overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <s.icon className="w-7 h-7 text-[#0a0b1a]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#f0b90b] font-medium group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How <span className="gradient-text">CineCoin</span> Works
            </h2>
            <p className="text-gray-400 text-lg">
              From registration to content consumption, every step is secured by blockchain technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((w, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
                <div className="text-5xl font-black text-[#f0b90b]/10 absolute top-4 right-4">{w.step}</div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-sm mb-4">
                    {w.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-[#111227] to-[#0d0e20] border border-[#1e2044] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0b90b]/5 via-transparent to-[#3b82f6]/5" />
            <div className="relative z-10">
              <Database className="w-12 h-12 text-[#f0b90b] mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Build the Future of <span className="gradient-text">Content Distribution</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Dive into the technical documentation, explore the architecture, or start implementing with our step-by-step guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/implementation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
                  Implementation Guide <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/architecture"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#f0b90b]/30 text-[#f0b90b] font-medium hover:bg-[#f0b90b]/5 transition-all">
                  View Architecture <Layers className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

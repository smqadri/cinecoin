import { Film, Server, Eye, Coins, Upload, Shield, Key, Wallet, ArrowRight, CheckCircle, BarChart3, Globe, Lock, Database, Zap, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Stakeholders - CineCoin",
  description: "Content Creators, Hosting Providers, and Content Viewers - the three pillars of the CineCoin ecosystem.",
};

export default function StakeholdersPage() {
  return (
    <div className="bg-grid-pattern">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#f0b90b]/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Ecosystem Participants
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              The Three <span className="gradient-text">Pillars</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The CineCoin ecosystem is built around three key stakeholders, each with dedicated crypto wallets and fair compensation through the CineCoin cryptocurrency.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Flow Diagram */}
      <section className="py-12 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#111227] border border-[#1e2044]">
            <h3 className="text-lg font-semibold text-center mb-8 gradient-text">CineCoin Flow</h3>
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center mx-auto mb-3">
                  <Film className="w-8 h-8 text-[#0a0b1a]" />
                </div>
                <p className="text-sm font-semibold text-white">Creator</p>
                <p className="text-xs text-gray-500">Publishes content</p>
              </div>
              <div className="text-center hidden md:block">
                <ArrowRight className="w-6 h-6 text-[#f0b90b]/50 mx-auto" />
                <p className="text-xs text-[#f0b90b] mt-1">Uploads</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center mx-auto mb-3">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-white">Provider</p>
                <p className="text-xs text-gray-500">Hosts &amp; serves data</p>
              </div>
              <div className="text-center hidden md:block">
                <ArrowRight className="w-6 h-6 text-[#3b82f6]/50 mx-auto" />
                <p className="text-xs text-[#3b82f6] mt-1">Streams</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-white">Viewer</p>
                <p className="text-xs text-gray-500">Consumes content</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#f0b90b]/5 border border-[#f0b90b]/20">
                <Coins className="w-5 h-5 text-[#f0b90b]" />
                <span className="text-sm text-gray-300">CineCoin flows from <strong className="text-[#06b6d4]">Viewer</strong> to <strong className="text-[#f0b90b]">Creator</strong> + <strong className="text-[#3b82f6]">Provider</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creators */}
      <section id="creators" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center">
                  <Film className="w-6 h-6 text-[#0a0b1a]" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">Content Creators</h2>
                  <p className="text-sm text-[#f0b90b]">Publishers &amp; Rights Holders</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Content creators are the backbone of the CineCoin ecosystem. They produce and publish digital content (video, audio, text, graphics) to the decentralized network, maintaining full ownership and control over their intellectual property.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Upload content with automated encryption and DRM protection",
                  "Set custom licensing terms, pricing, and access policies",
                  "Earn CineCoin directly via smart contracts for every view",
                  "Full traceability of who accessed content and when",
                  "No intermediaries - direct creator-to-consumer model",
                  "Content fingerprinting for copyright protection",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f0b90b] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-[#f0b90b]" /> Creator Workflow
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", action: "Register", detail: "Create account with asymmetric key pair" },
                    { step: "2", action: "Upload Content", detail: "Upload raw content files to the platform" },
                    { step: "3", action: "Auto-Encrypt", detail: "Content encrypted with Widevine DRM + Shaka Packager" },
                    { step: "4", action: "Set Policies", detail: "Define pricing, access rules, and licensing terms" },
                    { step: "5", action: "Distribute", detail: "Content distributed to Sia decentralized storage" },
                    { step: "6", action: "Earn CineCoin", detail: "Receive payments directly to wallet per view" },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] text-xs font-bold shrink-0">{s.step}</div>
                      <div>
                        <span className="text-white text-sm font-medium">{s.action}</span>
                        <p className="text-gray-500 text-xs">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0b90b]/5 border border-[#f0b90b]/20">
                <h3 className="font-semibold text-[#f0b90b] mb-3 flex items-center gap-2">
                  <Wallet className="w-5 h-5" /> Creator Wallet
                </h3>
                <p className="text-sm text-gray-400 mb-3">Every creator has a CineCoin wallet that automatically receives payments.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Revenue per View</p>
                    <p className="text-lg font-bold text-[#f0b90b]">~70%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Payout</p>
                    <p className="text-lg font-bold text-[#f0b90b]">Instant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Providers */}
      <section id="providers" className="py-16 lg:py-24 bg-[#070816] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">Hosting Providers</h2>
                  <p className="text-sm text-[#3b82f6]">Storage &amp; Bandwidth Providers</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Hosting providers contribute unused hard drive space to the Sia decentralized storage network. They store encrypted content segments and serve data to consumers, earning CineCoin proportional to the amount of data they serve.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Monetize unused hard drive space on the Sia network",
                  "Earn CineCoin proportional to data served (pay-per-data model)",
                  "Only store encrypted file fragments - cannot access original content",
                  "Automatic redundancy ensures data availability despite node failures",
                  "No single point of failure - geographically distributed storage",
                  "Smart contract enforces fair compensation per byte served",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-1 space-y-6">
              <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#3b82f6]" /> Provider Compensation Model
                </h3>
                <div className="rounded-xl overflow-hidden border border-[#1e2044]">
                  <table className="w-full styled-table">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>Compensation</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr><td className="text-gray-300">Data Stored (GB/month)</td><td className="text-[#3b82f6] font-mono">0.5 CC/GB</td></tr>
                      <tr><td className="text-gray-300">Data Served (GB)</td><td className="text-[#3b82f6] font-mono">2.0 CC/GB</td></tr>
                      <tr><td className="text-gray-300">Uptime Bonus (&gt;99.9%)</td><td className="text-[#3b82f6] font-mono">+10% bonus</td></tr>
                      <tr><td className="text-gray-300">Redundancy Factor</td><td className="text-[#3b82f6] font-mono">3x replication</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">CC = CineCoin. Rates are illustrative and governed by smart contract parameters.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#3b82f6]/5 border border-[#3b82f6]/20">
                <h3 className="font-semibold text-[#3b82f6] mb-3 flex items-center gap-2">
                  <Wallet className="w-5 h-5" /> Provider Wallet
                </h3>
                <p className="text-sm text-gray-400 mb-3">Providers receive CineCoin based on actual data served and stored.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Revenue Share</p>
                    <p className="text-lg font-bold text-[#3b82f6]">~30%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Settlement</p>
                    <p className="text-lg font-bold text-[#3b82f6]">Per Block</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Viewers */}
      <section id="viewers" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">Content Viewers</h2>
                  <p className="text-sm text-[#06b6d4]">Consumers &amp; Subscribers</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Content viewers consume digital content through the CineCoin platform. They pay only for the data they actually consume, with payments automatically distributed to creators and hosting providers via smart contracts.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Pay only for data consumed - no subscription lock-in",
                  "Access DRM-protected content with a valid license",
                  "Secure streaming via encrypted HLS protocol",
                  "Transaction privacy through secret blocks",
                  "Compatible with all devices via HTML5/Video.js player",
                  "Transparent pricing visible before consumption",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#06b6d4] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#06b6d4]" /> Viewer Journey
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", action: "Register & Fund Wallet", detail: "Create account, generate keys, fund CineCoin wallet" },
                    { step: "2", action: "Browse Content", detail: "Explore available digital content catalog" },
                    { step: "3", action: "Request Access", detail: "Initiate smart contract for content license" },
                    { step: "4", action: "Receive License", detail: "DRM license issued with decryption key (encrypted)" },
                    { step: "5", action: "Stream Content", detail: "Watch via encrypted HLS on any device" },
                    { step: "6", action: "Auto-Payment", detail: "CineCoin deducted based on data consumed" },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] text-xs font-bold shrink-0">{s.step}</div>
                      <div>
                        <span className="text-white text-sm font-medium">{s.action}</span>
                        <p className="text-gray-500 text-xs">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#06b6d4]/5 border border-[#06b6d4]/20">
                <h3 className="font-semibold text-[#06b6d4] mb-3 flex items-center gap-2">
                  <Wallet className="w-5 h-5" /> Viewer Wallet
                </h3>
                <p className="text-sm text-gray-400 mb-3">Viewers fund their wallet and pay based on actual data consumed.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Pricing Model</p>
                    <p className="text-sm font-bold text-[#06b6d4]">Pay-per-data</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111227] text-center">
                    <p className="text-xs text-gray-500">Privacy</p>
                    <p className="text-sm font-bold text-[#06b6d4]">Secret Blocks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Stakeholder <span className="gradient-text">Comparison</span>
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[#1e2044] overflow-x-auto">
            <table className="w-full styled-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-center">
                    <span className="flex items-center gap-1 justify-center"><Film className="w-4 h-4" /> Creator</span>
                  </th>
                  <th className="text-center">
                    <span className="flex items-center gap-1 justify-center"><Server className="w-4 h-4" /> Provider</span>
                  </th>
                  <th className="text-center">
                    <span className="flex items-center gap-1 justify-center"><Eye className="w-4 h-4" /> Viewer</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: "Crypto Wallet", creator: "Yes", provider: "Yes", viewer: "Yes" },
                  { feature: "Revenue Model", creator: "Per view", provider: "Per data served", viewer: "Pay per data" },
                  { feature: "Authentication", creator: "Required", provider: "Required", viewer: "Required" },
                  { feature: "Key Pair", creator: "Public/Private", provider: "Public/Private", viewer: "Public/Private" },
                  { feature: "Smart Contract Role", creator: "License issuer", provider: "Storage contract", viewer: "License requester" },
                  { feature: "DRM Interaction", creator: "Encrypts content", provider: "Stores fragments", viewer: "Decrypts with license" },
                  { feature: "Revenue Share", creator: "~70%", provider: "~30%", viewer: "N/A (payer)" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="text-gray-300 font-medium">{row.feature}</td>
                    <td className="text-center text-gray-400">{row.creator}</td>
                    <td className="text-center text-gray-400">{row.provider}</td>
                    <td className="text-center text-gray-400">{row.viewer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Explore the <span className="gradient-text">Economics</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Learn about CineCoin tokenomics, distribution models, and the economics powering the ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tokenomics"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
              View Tokenomics <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/architecture"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1e2044] text-gray-300 font-medium hover:border-[#f0b90b]/30 hover:bg-[#f0b90b]/5 transition-all">
              System Architecture <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

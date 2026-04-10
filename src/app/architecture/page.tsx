import { Shield, Lock, Server, Eye, Film, Key, Database, Layers, ArrowRight, Hash, FileCheck, Users, Cpu, HardDrive, Network } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "System Architecture - CineCoin",
  description: "Detailed technical architecture of the CineCoin blockchain-based secure digital content distribution system.",
};

export default function ArchitecturePage() {
  return (
    <div className="bg-grid-pattern">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              Technical Documentation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              System <span className="gradient-text">Architecture</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The CineCoin platform employs a dual-layer architecture combining off-chain user authentication with on-chain transaction validation through smart contracts and asymmetric encryption.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview Diagram */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Dual-Layer Architecture Overview</span>
          </h2>

          {/* Visual Architecture Diagram */}
          <div className="max-w-5xl mx-auto">
            {/* Off-Chain Layer */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#f0b90b]" />
                <h3 className="text-lg font-semibold text-[#f0b90b]">Off-Chain Layer (Authentication)</h3>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl border border-[#f0b90b]/20 bg-[#f0b90b]/5">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <Film className="w-10 h-10 text-[#f0b90b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-1">Content Owner</h4>
                    <p className="text-xs text-gray-400">Uploads encrypted content</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <Shield className="w-10 h-10 text-[#f0b90b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-1">Authentication Server</h4>
                    <p className="text-xs text-gray-400">Verifies identity via challenge-response</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <Users className="w-10 h-10 text-[#f0b90b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-1">Content Consumers</h4>
                    <p className="text-xs text-gray-400">Authenticated viewers</p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-16 h-px bg-[#f0b90b]/30" />
                    <span>Asymmetric Key Exchange</span>
                    <div className="w-16 h-px bg-[#f0b90b]/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Arrow */}
            <div className="flex justify-center my-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-8 bg-gradient-to-b from-[#f0b90b]/30 to-[#3b82f6]/30" />
                <ArrowRight className="w-5 h-5 text-gray-500 rotate-90" />
                <div className="w-px h-8 bg-gradient-to-b from-[#3b82f6]/30 to-[#8b5cf6]/30" />
              </div>
            </div>

            {/* On-Chain Layer */}
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
                <h3 className="text-lg font-semibold text-[#3b82f6]">On-Chain Layer (Blockchain)</h3>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/5">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* CDN Layer */}
                  <div className="p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <div className="flex items-center gap-2 mb-3">
                      <Network className="w-5 h-5 text-[#3b82f6]" />
                      <h4 className="font-semibold text-white text-sm">Public Chain (CDN)</h4>
                    </div>
                    <p className="text-xs text-gray-400">Smart contract mediates encrypted content delivery between owner and consumer via decentralized CDN.</p>
                  </div>
                  {/* Ledger Layer */}
                  <div className="p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <div className="flex items-center gap-2 mb-3">
                      <Database className="w-5 h-5 text-[#8b5cf6]" />
                      <h4 className="font-semibold text-white text-sm">Public Chain (Ledger)</h4>
                    </div>
                    <p className="text-xs text-gray-400">Transaction verification and consensus via verifier nodes. Public blocks contain validated transactions.</p>
                  </div>
                  {/* License Layer */}
                  <div className="p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-[#06b6d4]" />
                      <h4 className="font-semibold text-white text-sm">Private Chain (License)</h4>
                    </div>
                    <p className="text-xs text-gray-400">Smart contracts issue licenses with secret blocks. Only the consumer can access their transaction details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Process */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            User Registration &amp; <span className="gradient-text">Authentication</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            A challenge-response protocol using asymmetric encryption ensures secure identity verification before any transaction.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Registration Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Registration Process</h3>
              {[
                { step: 1, title: "Select Credentials", desc: "User selects a unique ID and password (PW)" },
                { step: 2, title: "Generate Key Pair", desc: "System generates asymmetric key pair (public/private)" },
                { step: 3, title: "Compute Hash", desc: "Hash value computed from PW and hash of ID: H(PW || H(ID))" },
                { step: 4, title: "Store on Server", desc: "Server stores: User ID, Password Hash, Public Key" },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#111227] border border-[#1e2044]">
                  <div className="w-10 h-10 rounded-lg bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-sm shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Auth Table */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Server Storage Schema</h3>
              <div className="rounded-xl overflow-hidden border border-[#1e2044]">
                <table className="w-full styled-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr><td className="text-white font-mono">user_id</td><td className="text-gray-400">Unique user identifier</td><td className="text-gray-500 font-mono">string</td></tr>
                    <tr><td className="text-white font-mono">pw_hash</td><td className="text-gray-400">H(PW || H(ID))</td><td className="text-gray-500 font-mono">bytes32</td></tr>
                    <tr><td className="text-white font-mono">public_key</td><td className="text-gray-400">User&apos;s RSA public key</td><td className="text-gray-500 font-mono">bytes</td></tr>
                    <tr><td className="text-white font-mono">role</td><td className="text-gray-400">Creator / Provider / Viewer</td><td className="text-gray-500 font-mono">enum</td></tr>
                    <tr><td className="text-white font-mono">wallet_addr</td><td className="text-gray-400">CineCoin wallet address</td><td className="text-gray-500 font-mono">address</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                <h4 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#f0b90b]" /> Authentication Challenge
                </h4>
                <ol className="space-y-2 text-sm text-gray-400 list-decimal list-inside">
                  <li>User sends authentication request to server</li>
                  <li>Server generates random challenge value <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">R</code></li>
                  <li>Server encrypts <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">R</code> with user&apos;s public key: <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">E(PubKey, R)</code></li>
                  <li>User decrypts with private key and returns <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">R</code></li>
                  <li>Server verifies match to confirm identity</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License & Secret Block */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            License &amp; <span className="gradient-text">Secret Block Structure</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Content access is controlled through DRM licenses delivered via smart contracts, with transaction details stored in private secret blocks.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* License Structure */}
            <div className="rounded-2xl overflow-hidden border border-[#f0b90b]/20">
              <div className="bg-gradient-to-r from-[#f0b90b] to-[#c89a09] px-6 py-3">
                <h3 className="font-bold text-[#0a0b1a] flex items-center gap-2">
                  <FileCheck className="w-5 h-5" /> License Structure
                </h3>
              </div>
              <div className="bg-[#111227] p-1">
                {[
                  { field: "Private Key", desc: "Consumer's decryption key (encrypted with consumer's public key)" },
                  { field: "Key Rules", desc: "How to use the decryption key, constraints" },
                  { field: "Consumer Info", desc: "Authenticated consumer's identity data" },
                  { field: "Rights to Use", desc: "Content usage policies (views, duration, devices)" },
                  { field: "Hash of License", desc: "Cryptographic hash for integrity verification" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 px-5 py-3 ${i < 4 ? 'border-b border-[#1e2044]' : ''}`}>
                    <span className="text-[#f0b90b] font-mono text-sm font-semibold whitespace-nowrap">{item.field}</span>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secret Block Structure */}
            <div className="rounded-2xl overflow-hidden border border-[#8b5cf6]/20">
              <div className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Hash className="w-5 h-5" /> Secret Block (Hash) Structure
                </h3>
              </div>
              <div className="bg-[#111227] p-1">
                {[
                  { field: "Previous Hash", desc: "Hash of the previous block in chain (public)" },
                  { field: "Timestamp", desc: "Block creation time" },
                  { field: "User Auth Info", desc: "Consumer's authentication identifier" },
                  { field: "Provider Info", desc: "Content provider/hosting provider details" },
                  { field: "Encrypted Content", desc: "Reference to encrypted content on Sia network" },
                  { field: "License Info", desc: "Link to the associated DRM license" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 px-5 py-3 ${i < 5 ? 'border-b border-[#1e2044]' : ''}`}>
                    <span className="text-[#8b5cf6] font-mono text-sm font-semibold whitespace-nowrap">{item.field}</span>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block Connection */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Block <span className="gradient-text">Connection Structure</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Public blocks form the main chain for transaction verification, while secret blocks are attached privately to authorized consumers.
          </p>

          {/* Chain Visualization */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-[800px] items-start">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex-1 relative">
                  {/* Public Block */}
                  <div className="p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <div className="text-xs font-bold text-[#3b82f6] mb-3">Public Block #{n}</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Hash</span>
                        <span className="text-gray-400 font-mono">Previous | Version</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Merkle Root</span>
                        <span className="text-gray-400 font-mono">Time</span>
                      </div>
                      <div className="border-t border-[#1e2044] pt-2 text-gray-500">
                        Tx(H(SB)) #1_1 ... #1_n
                      </div>
                    </div>
                  </div>
                  {/* Arrow */}
                  {n < 4 && (
                    <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-[#f0b90b]/50" />
                    </div>
                  )}
                  {/* Secret block (on first one) */}
                  {n === 1 && (
                    <div className="mt-3 p-4 rounded-xl bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                      <div className="text-xs font-bold text-[#8b5cf6] mb-2">Secure Block #1</div>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div>Previous hash (public)</div>
                        <div>User auth + Provider info</div>
                        <div>Encrypted content info</div>
                        <div>License information</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Encryption & HLS */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Content Encryption &amp; <span className="gradient-text">HLS Streaming</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Content is encrypted using industry-standard DRM (Widevine/PlayReady) and delivered via HTTP Live Streaming for maximum compatibility.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#f0b90b]" /> Encryption Pipeline
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Input", value: "RAW video file (MP4, AVI, MKV)" },
                    { label: "Codec", value: "H.264 (Advanced Video Coding)" },
                    { label: "DRM", value: "Widevine + PlayReady dual protection" },
                    { label: "Output", value: "Encrypted HLS segments (.ts) + M3U8 manifest" },
                    { label: "Key Server", value: "Widevine license server for key management" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-[#f0b90b] font-mono text-xs bg-[#f0b90b]/10 px-2 py-1 rounded whitespace-nowrap">{item.label}</span>
                      <span className="text-gray-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#3b82f6]" /> HLS Protocol Details
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-[#3b82f6] mt-1">&#8226;</span> Video segmented into small .ts chunks for efficient transfer</li>
                  <li className="flex items-start gap-2"><span className="text-[#3b82f6] mt-1">&#8226;</span> M3U8 manifest file guides adaptive bitrate (ABR) selection</li>
                  <li className="flex items-start gap-2"><span className="text-[#3b82f6] mt-1">&#8226;</span> HTML5/Video.js player handles native browser rendering</li>
                  <li className="flex items-start gap-2"><span className="text-[#3b82f6] mt-1">&#8226;</span> Compatible with smartphones, tablets, laptops, smart TVs</li>
                  <li className="flex items-start gap-2"><span className="text-[#3b82f6] mt-1">&#8226;</span> Operates over HTTP - uses standard CDNs for delivery at scale</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#111227] border border-[#1e2044]">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#06b6d4]" /> Sia Decentralized Storage
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Files uploaded to the Sia network are automatically divided into segments, encrypted, and distributed across multiple hosts worldwide.
              </p>

              {/* Storage Flow */}
              <div className="space-y-3">
                {[
                  { step: "1", title: "File Upload", desc: "Content uploaded to Sia network" },
                  { step: "2", title: "Segmentation", desc: "File split into encrypted segments" },
                  { step: "3", title: "Distribution", desc: "Segments distributed to global hosts" },
                  { step: "4", title: "Redundancy", desc: "Data replicated across geographies" },
                  { step: "5", title: "Skylink Generation", desc: "Cryptographic hash generates unique immutable skylink identifier" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] font-bold text-xs shrink-0">{s.step}</div>
                    <div>
                      <h4 className="text-white text-sm font-medium">{s.title}</h4>
                      <p className="text-gray-500 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#06b6d4]/5 border border-[#06b6d4]/20">
                <p className="text-xs text-gray-400">
                  <strong className="text-[#06b6d4]">Immutability:</strong> Because the skylink is derived from the file&apos;s hash, any modification results in a different hash and a different skylink. This ensures tamper-proof data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-10">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Blockchain", items: ["Sia Blockchain", "Siacoin (Native Token)", "Smart Contracts", "Solana (Future dApp)"], color: "#f0b90b" },
              { category: "Storage & CDN", items: ["Sia Decentralized Storage", "Skynet CDN", "Skylink Content Addressing", "Redundant Replication"], color: "#3b82f6" },
              { category: "Content Protection", items: ["Widevine DRM", "PlayReady DRM", "AES Encryption", "Shaka Packager"], color: "#8b5cf6" },
              { category: "Streaming", items: ["HLS Protocol", "H.264 Codec", "M3U8 Manifests", "Adaptive Bitrate (ABR)"], color: "#06b6d4" },
              { category: "Security", items: ["Asymmetric Encryption (RSA)", "Challenge-Response Auth", "Secret Block Privacy", "Digital Fingerprinting"], color: "#ef4444" },
              { category: "Smart Contracts", items: ["License Issuance", "DRM Key Exchange", "Royalty Distribution", "Usage Policy Enforcement"], color: "#10b981" },
            ].map((tech, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#111227] border border-[#1e2044] card-hover">
                <h3 className="font-semibold text-sm mb-4" style={{ color: tech.color }}>{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: tech.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to <span className="gradient-text">Implement</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Follow our step-by-step implementation guide with code examples and detailed instructions.
          </p>
          <Link href="/implementation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
            Implementation Guide <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

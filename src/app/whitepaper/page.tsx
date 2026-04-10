import { FileText, ExternalLink, ArrowRight, BookOpen, Users, Shield, Layers, Database, Lock, Coins, Globe, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Whitepaper - CineCoin",
  description: "Academic research papers and comprehensive whitepaper for the CineCoin blockchain-based secure digital content distribution system.",
};

export default function WhitepaperPage() {
  return (
    <div className="bg-grid-pattern">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#f0b90b]/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Academic Research
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Whitepaper</span> &amp; Research
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The CineCoin platform is built on rigorous academic research published at Harrisburg University of Science and Technology. Explore the foundational papers and comprehensive system design.
            </p>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-12 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            Published <span className="gradient-text">Research Papers</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "CineCoin: Blockchain-Based Secure Digital Contents Distribution System",
                authors: "Syed Mohiuddin Qadri",
                institution: "Harrisburg University of Science and Technology",
                year: "2024",
                doi: "10.13140/RG.2.2.23742.09289",
                description: "Presents the foundational CineCoin platform architecture including the dual-layer design, license issuance mechanism, secret block structure, and the CineCoin cryptocurrency model for fair content monetization.",
                link: "https://www.researchgate.net/publication/380515997_CineCoin_Blockchain-Based_Secure_Digital_Contents_Distribution_System",
                tags: ["Blockchain", "DRM", "Cryptocurrency", "Smart Contracts"],
              },
              {
                title: "Developing a Blockchain-Based Secure Digital Contents Distribution System",
                authors: "Syed Mohiuddin Qadri, Sangwhan Cha, Daqing Yun, Nushwan Al Nakash, Ki Hyang Lee",
                institution: "Harrisburg University of Science and Technology",
                year: "December 2023",
                doi: "10.13140/RG.2.2.32280.92163",
                description: "Details the implementation of the blockchain-based system integrating Sia decentralized storage and Skynet CDN. Includes experimental results demonstrating feasibility and scalability of secure multimedia distribution.",
                link: "https://www.researchgate.net/publication/391120982_Developing_a_Blockchain-Based_Secure_Digital_Contents_Distribution_System",
                tags: ["Sia", "Skynet", "HLS Streaming", "Widevine DRM"],
              },
              {
                title: "Developing a Blockchain-Based Secure Digital Contents Distribution System (Extended)",
                authors: "Syed Mohiuddin Qadri, Sangwhan Cha, Daqing Yun, Nushwan Al Nakash, Ki Hyang Lee",
                institution: "Harrisburg University of Science and Technology",
                year: "2025",
                doi: null,
                description: "Extended version with additional experimental results, performance benchmarks, and future work including Solana-based dApp development and integrated royalty payment mechanisms.",
                link: "https://www.researchgate.net/publication/380516135_Developing_a_Blockchain-Based_Secure_Digital_Contents_Distribution_System",
                tags: ["Solana", "dApp", "Royalty Payments", "Performance"],
              },
            ].map((paper, i) => (
              <div key={i} className="p-6 lg:p-8 rounded-2xl bg-[#111227] border border-[#1e2044] card-hover">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-[#f0b90b] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-snug">{paper.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{paper.authors}</p>
                      <p className="text-xs text-gray-500">{paper.institution} &mdash; {paper.year}</p>
                      {paper.doi && (
                        <p className="text-xs text-gray-500 mt-0.5">DOI: <span className="text-[#f0b90b]/70 font-mono">{paper.doi}</span></p>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{paper.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-[#f0b90b]/10 text-[#f0b90b] text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <a href={paper.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#f0b90b] font-medium hover:gap-3 transition-all">
                  Read on ResearchGate <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper Summary */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-10">
            Technical <span className="gradient-text">Summary</span>
          </h2>

          <div className="prose prose-invert max-w-none">
            {/* Abstract */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#111227] border border-[#1e2044] mb-8">
              <h3 className="text-lg font-semibold text-[#f0b90b] mb-4">Abstract</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                The CineCoin platform addresses the critical challenges in digital content distribution: security vulnerabilities in centralized systems, lack of traceability, and unfair compensation models. By combining blockchain technology with decentralized storage (Sia) and content delivery (Skynet), the system introduces a dual-layer architecture that separates user authentication (off-chain) from transaction validation (on-chain). A novel license issuance mechanism using secret blocks ensures content authenticity, consumer privacy, and controlled access. The CineCoin cryptocurrency enables a fair three-party economic model: creators earn per view, hosting providers earn per data served, and consumers pay per data consumed.
              </p>
            </div>

            {/* Key Contributions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Key Research Contributions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Layers, title: "Dual-Layer Architecture", desc: "Novel separation of off-chain authentication and on-chain transaction processing for scalable, secure content distribution." },
                  { icon: Lock, title: "Secret Block Mechanism", desc: "Privacy-preserving transaction blocks accessible only to the consumer, enabling verification without revealing sensitive details." },
                  { icon: Shield, title: "DRM Integration", desc: "Industry-standard Widevine and PlayReady DRM integrated with blockchain-based license issuance via smart contracts." },
                  { icon: Coins, title: "Three-Party Economy", desc: "Fair compensation model using CineCoin cryptocurrency for creators (per view), providers (per data), and transparent consumer pricing." },
                  { icon: Database, title: "Decentralized Storage", desc: "Sia network integration for encrypted, segmented, and geographically distributed content storage with zero single points of failure." },
                  { icon: Globe, title: "Universal Streaming", desc: "HLS protocol with adaptive bitrate streaming compatible with smartphones, tablets, laptops, and smart TVs." },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-[#111227] border border-[#1e2044]">
                    <item.icon className="w-6 h-6 text-[#f0b90b] mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Design Principles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Design Principles</h3>
              <div className="space-y-4">
                {[
                  { title: "Decentralization", desc: "No single entity controls the network. Content, storage, and transactions are distributed across the blockchain." },
                  { title: "Transparency", desc: "All transactions are recorded on an immutable ledger, providing complete traceability and auditability." },
                  { title: "Privacy", desc: "Secret blocks ensure consumer transaction details remain private while maintaining verifiability." },
                  { title: "Immutability", desc: "Content integrity is guaranteed through cryptographic hashing via skylinks - any tampering produces a different hash." },
                  { title: "Fair Compensation", desc: "Smart contracts automate payment splitting, ensuring creators and providers receive fair compensation without intermediaries." },
                  { title: "Self-Sovereign Identity", desc: "Users maintain control of their identity through asymmetric key pairs, reducing dependency on centralized authorities." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#111227]/50 border border-[#1e2044]">
                    <CheckCircle className="w-5 h-5 text-[#f0b90b] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Work */}
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#111227] to-[#0d0e20] border border-[#1e2044]">
              <h3 className="text-xl font-semibold text-white mb-6">Future Work &amp; Roadmap</h3>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "Solana dApp Integration",
                    desc: "Implement the on-chain data layer using a Solana-based decentralized application for enhanced decentralization and throughput.",
                    status: "In Development",
                    color: "#f0b90b",
                  },
                  {
                    phase: "Phase 2",
                    title: "Integrated Royalty System",
                    desc: "Deploy automated royalty distribution smart contracts that handle complex revenue sharing between creators, co-creators, and rights holders.",
                    status: "Planned",
                    color: "#3b82f6",
                  },
                  {
                    phase: "Phase 3",
                    title: "Cross-Chain Interoperability",
                    desc: "Enable CineCoin to be bridged across multiple blockchain networks for broader liquidity and accessibility.",
                    status: "Research",
                    color: "#8b5cf6",
                  },
                  {
                    phase: "Phase 4",
                    title: "DAO Governance",
                    desc: "Transition platform governance to a decentralized autonomous organization where CineCoin holders vote on protocol changes.",
                    status: "Conceptual",
                    color: "#06b6d4",
                  },
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 w-20">
                      <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ color: phase.color, background: `${phase.color}15` }}>
                        {phase.phase}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-semibold text-sm">{phase.title}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#1e2044] text-gray-400">{phase.status}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-6">References</h3>
              <div className="space-y-3">
                {[
                  { num: 1, text: "A. Qureshi and D. M. Jimenez, \"Blockchain-Based Multimedia Content Protection: Review and Open Challenges,\" Appl. Sci. 2021." },
                  { num: 2, text: "J. Kishigami et al., \"The Blockchain-Based Digital Content Distribution System,\" IEEE Fifth International Conference on Big Data and Cloud Computing, 2015." },
                  { num: 3, text: "Y. Liu, Q. Lu, C. Zhu, et al., \"A Blockchain-based platform architecture for multimedia data management,\" Multimedia Tools and Applications, 2021." },
                  { num: 4, text: "Sia, Decentralized data storage. Available: https://sia.tech/" },
                  { num: 5, text: "G. Heo et al., \"Efficient and Secure Blockchain System for Digital Content Trading,\" IEEE Access, vol. 9, 2021." },
                  { num: 6, text: "Liu, Yue et al. \"A Blockchain-based Platform Architecture for Multimedia Data Management,\" 2020." },
                ].map((ref, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-[#f0b90b] font-mono text-xs">[{ref.num}]</span>
                    <span className="text-gray-400">{ref.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            About the <span className="gradient-text">Authors</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Syed Mohiuddin Qadri", role: "Lead Researcher", emails: ["sqadri@my.harrisburgu.edu", "me@syedqadri.com"], website: "www.syedqadri.com" },
              { name: "Sangwhan Cha", role: "Co-Researcher", emails: ["scha@harrisburgu.edu"], website: null },
            ].map((author, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044] flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0b90b] to-[#c89a09] flex items-center justify-center text-[#0a0b1a] font-bold text-lg shrink-0">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{author.name}</h3>
                  <p className="text-sm text-[#f0b90b]">{author.role}</p>
                  <p className="text-xs text-gray-400 mt-1">Harrisburg University of Science &amp; Technology</p>
                  {author.emails.map((email, j) => (
                    <p key={j} className="text-xs text-gray-500 mt-1">{email}</p>
                  ))}
                  {author.website && (
                    <a href={`https://${author.website}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#f0b90b] hover:underline mt-1 inline-block">{author.website}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to <span className="gradient-text">Explore Further</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Dive into the technical architecture or start implementing the CineCoin platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/architecture"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
              System Architecture <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/implementation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1e2044] text-gray-300 font-medium hover:border-[#f0b90b]/30 hover:bg-[#f0b90b]/5 transition-all">
              Implementation Guide <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

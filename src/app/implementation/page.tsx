import { Terminal, ArrowRight, Code, FileCode, Server, Shield, Key, Coins, Database, Lock, Cpu, Globe, Download, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Implementation Guide - CineCoin",
  description: "Step-by-step guide to implementing the CineCoin blockchain-based secure digital content distribution system.",
};

const CodeBlock = ({ title, language, children }: { title: string; language: string; children: string }) => (
  <div className="code-block my-4">
    <div className="flex items-center justify-between px-4 py-2 bg-[#1a1b35] border-b border-[#1e2044] rounded-t-lg">
      <span className="text-xs text-gray-400">{title}</span>
      <span className="text-xs text-[#f0b90b] font-mono">{language}</span>
    </div>
    <pre className="p-4 text-sm text-gray-300 overflow-x-auto font-mono leading-relaxed">
      <code>{children}</code>
    </pre>
  </div>
);

export default function ImplementationPage() {
  return (
    <div className="bg-grid-pattern">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              Developer Guide
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Implementation</span> Guide
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Step-by-step instructions for setting up the CineCoin platform, from installing dependencies to deploying smart contracts and streaming encrypted content.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-12 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Prerequisites</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Go 1.17+", desc: "Required for Skynet CLI", icon: Code },
              { name: "Node.js 18+", desc: "For smart contract tools", icon: Terminal },
              { name: "Shaka Packager", desc: "Google's content packager", icon: Settings },
              { name: "Solana CLI", desc: "For dApp deployment (future)", icon: Cpu },
              { name: "Docker", desc: "For containerized deployment", icon: Server },
              { name: "OpenSSL", desc: "For key generation", icon: Key },
            ].map((prereq, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#111227] border border-[#1e2044]">
                <prereq.icon className="w-5 h-5 text-[#f0b90b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white text-sm font-medium">{prereq.name}</span>
                  <p className="text-xs text-gray-500">{prereq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: Skynet CLI */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">1</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Install Skynet CLI</h2>
              <p className="text-sm text-gray-400">Set up the decentralized storage interface</p>
            </div>
          </div>

          <p className="text-gray-400 mb-4">
            The Skynet CLI provides command-line access to the Sia decentralized storage network, enabling file upload, download, and management.
          </p>

          <CodeBlock title="Install Skynet CLI" language="bash">{`# Install Skynet CLI using Go
$ go install github.com/SkynetLabs/skynet-cli/v2/cmd/skynet@latest

# Verify installation
$ skynet --version

# The CLI will output download progress:
# go: downloading github.com/SkynetLabs/skynet-cli/v2 v2.1.1
# go: downloading github.com/SkynetLabs/skynet-cli v1.1.0
# go: downloading github.com/SkynetLabs/go-skynet/v2 v2.3.0`}</CodeBlock>

          <div className="p-4 rounded-xl bg-[#f0b90b]/5 border border-[#f0b90b]/20 mt-4">
            <p className="text-sm text-gray-400">
              <strong className="text-[#f0b90b]">Note:</strong> Ensure your <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">$GOPATH/bin</code> is in your system PATH to access the <code className="text-[#f0b90b] bg-[#f0b90b]/10 px-1 rounded">skynet</code> command globally.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Content Encryption */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">2</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Encrypt Content with DRM</h2>
              <p className="text-sm text-gray-400">Apply Widevine + PlayReady protection using Shaka Packager</p>
            </div>
          </div>

          <p className="text-gray-400 mb-4">
            Content must be encrypted using industry-standard DRM before uploading to the decentralized network. Google&apos;s Shaka Packager handles encoding, encryption, and manifest generation.
          </p>

          <CodeBlock title="Encrypt with Shaka Packager & Widevine DRM" language="bash">{`# Encrypt content using Shaka Packager with Widevine DRM
$ packager \\
  in=./dolby-vision-art.mp4,stream=audio,output=./dolby-vision-art-audio.mp4 \\
  in=./dolby-vision-art.mp4,stream=video,output=./dolby-vision-art-video.mp4 \\
  --enable_widevine_encryption \\
  --key_server_url https://license.uat.widevine.com/cenc/getcontentkey/widevine_test \\
  --content_id 7465737420636f6e74656e74206964 \\
  --signer widevine_test \\
  --aes_signing_key 1ae8ccd0e7985cc0b6203a55855a1034afc252980e970ca90e5202689f947ab9 \\
  --aes_signing_iv d58ce954203b7c9a9a9d467f59839249 \\
  --protection_systems Widevine,PlayReady \\
  --mpd_output ./dolby-vision-art-drm.mpd`}</CodeBlock>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#111227] border border-[#1e2044]">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#8b5cf6]" /> Encryption Parameters
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><code className="text-[#8b5cf6]">content_id</code> - Unique hex identifier for the content</li>
                <li><code className="text-[#8b5cf6]">aes_signing_key</code> - 256-bit AES key for signing</li>
                <li><code className="text-[#8b5cf6]">aes_signing_iv</code> - Initialization vector</li>
                <li><code className="text-[#8b5cf6]">protection_systems</code> - Widevine + PlayReady dual DRM</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#111227] border border-[#1e2044]">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#06b6d4]" /> Output Files
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><code className="text-[#06b6d4]">*-audio.mp4</code> - Encrypted audio stream</li>
                <li><code className="text-[#06b6d4]">*-video.mp4</code> - Encrypted video stream</li>
                <li><code className="text-[#06b6d4]">*-drm.mpd</code> - DASH manifest with DRM info</li>
                <li><code className="text-[#06b6d4]">*.m3u8</code> - HLS manifest (if HLS output enabled)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Upload to Skynet */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">3</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Upload to Decentralized Storage</h2>
              <p className="text-sm text-gray-400">Distribute encrypted content to the Sia network via Skynet</p>
            </div>
          </div>

          <p className="text-gray-400 mb-4">
            Encrypted content is uploaded to the Sia network where it is automatically segmented, replicated, and distributed to hosts worldwide. Each file receives a unique, immutable skylink identifier.
          </p>

          <CodeBlock title="Upload Encrypted Content to Skynet" language="bash">{`# Upload file to Skynet
$ ./skynet upload ~/Videos/file_example_MP4_1920_18MG.mp4

# Output:
# Successfully uploaded file!
# Skylink: sia://AADjq68QKeH_I5Aha6hQgF8nWawaQfV_HhYbZhkEwaHk3g`}</CodeBlock>

          <div className="p-5 rounded-xl bg-[#111227] border border-[#1e2044] mt-6">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-[#f0b90b]" /> How Skylinks Work
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>When a file is uploaded to Skynet, its contents are hashed using a cryptographic function. This hash, combined with metadata, generates a unique <strong className="text-white">skylink</strong> identifier.</p>
              <div className="flex items-start gap-2 mt-3">
                <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span><strong className="text-white">Immutability:</strong> Any file modification produces a different hash and a different skylink</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span><strong className="text-white">Integrity:</strong> Skynet verifies retrieved files haven&apos;t been tampered with</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span><strong className="text-white">Decentralized:</strong> Segments distributed to multiple geographically diverse hosts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Download & Verify */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">4</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Download &amp; Access Content</h2>
              <p className="text-sm text-gray-400">Retrieve content from the decentralized network</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">CLI Download</h3>
              <CodeBlock title="Download via Skynet CLI" language="bash">{`# Download file using skylink
$ ./skynet download \\
  sia://AADjq68QKeH_I5Aha6hQgF8nWawaQfV_HhYbZhkEwaHk3g \\
  ~/Videos/myVideoDownload.mp4

# Output:
# Successfully downloaded skylink!`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Browser Access</h3>
              <CodeBlock title="Access via Browser" language="url">{`# Access content securely from any web browser:
https://siasky.net/AADjq68QKeH_I5Aha6hQgF8nWawaQfV_HhYbZhkEwaHk3g

# The skylink serves as both:
# - A content address (immutable reference)
# - An integrity check (hash-based verification)`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Smart Contract */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">5</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Deploy Smart Contracts</h2>
              <p className="text-sm text-gray-400">License issuance and payment distribution</p>
            </div>
          </div>

          <p className="text-gray-400 mb-4">
            Smart contracts handle the core business logic: content licensing, payment splitting between creators and providers, and DRM key exchange.
          </p>

          <CodeBlock title="CineCoin License Smart Contract" language="solidity">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CineCoinLicense {
    struct License {
        address consumer;
        address creator;
        bytes32 contentHash;     // Skylink hash
        bytes encryptedKey;      // DRM key encrypted with consumer's public key
        uint256 price;           // Price in CineCoin
        uint256 expiresAt;       // License expiration timestamp
        bool isActive;
    }

    struct ContentMetadata {
        address creator;
        bytes32 contentHash;
        uint256 pricePerView;
        string skylink;
        bool isActive;
    }

    mapping(bytes32 => ContentMetadata) public contents;
    mapping(bytes32 => License) public licenses;

    address public platformWallet;
    uint256 public creatorShare = 70;   // 70%
    uint256 public providerShare = 20;  // 20%
    uint256 public platformFee = 5;     // 5%
    uint256 public burnRate = 5;        // 5%

    event ContentRegistered(bytes32 indexed contentId, address creator);
    event LicenseIssued(bytes32 indexed licenseId, address consumer);
    event PaymentDistributed(bytes32 indexed contentId, uint256 amount);

    // Register new content
    function registerContent(
        bytes32 contentHash,
        uint256 pricePerView,
        string calldata skylink
    ) external {
        contents[contentHash] = ContentMetadata({
            creator: msg.sender,
            contentHash: contentHash,
            pricePerView: pricePerView,
            skylink: skylink,
            isActive: true
        });
        emit ContentRegistered(contentHash, msg.sender);
    }

    // Request license (called by consumer)
    function requestLicense(
        bytes32 contentHash,
        bytes calldata consumerPublicKey
    ) external payable {
        ContentMetadata storage content = contents[contentHash];
        require(content.isActive, "Content not found");
        require(msg.value >= content.pricePerView, "Insufficient payment");

        // Distribute payment
        _distributePayment(content.creator, msg.value);

        // Issue license
        bytes32 licenseId = keccak256(
            abi.encodePacked(msg.sender, contentHash, block.timestamp)
        );

        licenses[licenseId] = License({
            consumer: msg.sender,
            creator: content.creator,
            contentHash: contentHash,
            encryptedKey: "",  // Set by creator off-chain
            price: msg.value,
            expiresAt: block.timestamp + 30 days,
            isActive: true
        });

        emit LicenseIssued(licenseId, msg.sender);
    }

    function _distributePayment(address creator, uint256 amount) internal {
        uint256 creatorAmount = (amount * creatorShare) / 100;
        uint256 platformAmount = (amount * platformFee) / 100;
        // Provider payment handled at storage layer
        // Burn amount removed from circulation

        payable(creator).transfer(creatorAmount);
        payable(platformWallet).transfer(platformAmount);
    }
}`}</CodeBlock>
        </div>
      </section>

      {/* Step 6: User Authentication */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">6</div>
            <div>
              <h2 className="text-2xl font-bold text-white">User Authentication System</h2>
              <p className="text-sm text-gray-400">Off-chain challenge-response authentication</p>
            </div>
          </div>

          <CodeBlock title="Authentication Server (Node.js)" language="javascript">{`const crypto = require('crypto');

class AuthServer {
  constructor() {
    this.users = new Map(); // userId -> { pwHash, publicKey }
  }

  // User Registration
  register(userId, password, publicKey) {
    const idHash = crypto.createHash('sha256')
      .update(userId).digest('hex');
    const pwHash = crypto.createHash('sha256')
      .update(password + idHash).digest('hex');

    this.users.set(userId, {
      pwHash,
      publicKey,
      role: 'viewer',      // creator | provider | viewer
      walletAddress: null,  // Set during wallet creation
    });

    return { success: true, userId };
  }

  // Authentication Challenge-Response
  authenticate(userId) {
    const user = this.users.get(userId);
    if (!user) throw new Error('User not found');

    // Generate random challenge
    const challenge = crypto.randomBytes(32);

    // Encrypt challenge with user's public key
    const encryptedChallenge = crypto.publicEncrypt(
      user.publicKey,
      challenge
    );

    return {
      encryptedChallenge,
      expectedResponse: challenge.toString('hex'),
    };
  }

  // Verify challenge response
  verify(userId, decryptedChallenge, expectedResponse) {
    return decryptedChallenge === expectedResponse;
  }
}`}</CodeBlock>

          <CodeBlock title="Client-Side Authentication" language="javascript">{`const crypto = require('crypto');

class AuthClient {
  constructor() {
    // Generate asymmetric key pair during registration
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding:  { type: 'spki',  format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  // Respond to authentication challenge
  respondToChallenge(encryptedChallenge) {
    const decrypted = crypto.privateDecrypt(
      this.privateKey,
      encryptedChallenge
    );
    return decrypted.toString('hex');
  }

  // Create CineCoin wallet
  createWallet() {
    const wallet = crypto.generateKeyPairSync('ec', {
      namedCurve: 'secp256k1',
      publicKeyEncoding:  { type: 'spki',  format: 'der' },
      privateKeyEncoding: { type: 'sec1',  format: 'der' },
    });

    return {
      address: crypto.createHash('sha256')
        .update(wallet.publicKey).digest('hex').slice(0, 40),
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey,
    };
  }
}`}</CodeBlock>
        </div>
      </section>

      {/* Step 7: HLS Setup */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0b90b]/10 flex items-center justify-center text-[#f0b90b] font-bold text-lg">7</div>
            <div>
              <h2 className="text-2xl font-bold text-white">HLS Streaming Setup</h2>
              <p className="text-sm text-gray-400">Configure encrypted video streaming with adaptive bitrate</p>
            </div>
          </div>

          <CodeBlock title="HLS Encrypted Streaming (HTML5 Player)" language="html">{`<!DOCTYPE html>
<html>
<head>
  <title>CineCoin Player</title>
  <link href="https://vjs.zencdn.net/8.0/video-js.css" rel="stylesheet" />
</head>
<body>
  <video-js id="cinecoin-player" class="vjs-default-skin"
    controls preload="auto" width="960" height="540">
    <source
      src="https://siasky.net/{skylink}/stream.m3u8"
      type="application/x-mpegURL" />
  </video-js>

  <script src="https://vjs.zencdn.net/8.0/video.min.js"></script>
  <script>
    // Initialize Video.js player with DRM support
    const player = videojs('cinecoin-player', {
      html5: {
        nativeAudioTracks: false,
        nativeVideoTracks: false,
        hls: {
          overrideNative: true
        }
      }
    });

    // Handle DRM license acquisition
    player.eme({
      keySystems: {
        'com.widevine.alpha': {
          url: 'https://cinecoin.network/drm/license'
        }
      }
    });
  </script>
</body>
</html>`}</CodeBlock>

          <CodeBlock title="Generate HLS Segments with Encryption" language="bash">{`# Convert to HLS with encryption using FFmpeg
$ ffmpeg -i encrypted-video.mp4 \\
  -c copy \\
  -hls_time 10 \\
  -hls_key_info_file enc.keyinfo \\
  -hls_playlist_type vod \\
  -hls_segment_filename "segment_%03d.ts" \\
  playlist.m3u8

# enc.keyinfo format:
# https://cinecoin.network/keys/{content_id}
# /path/to/encryption.key
# 0123456789abcdef0123456789abcdef`}</CodeBlock>
        </div>
      </section>

      {/* Deployment Architecture */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            Deployment <span className="gradient-text">Architecture</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Auth Service",
                desc: "Off-chain authentication server handling user registration, challenge-response verification, and key management.",
                tech: "Node.js + PostgreSQL",
                icon: Shield,
                color: "#f0b90b",
              },
              {
                title: "Smart Contract Layer",
                desc: "On-chain contracts for content licensing, payment distribution, and DRM key exchange.",
                tech: "Solidity + Solana (future)",
                icon: FileCode,
                color: "#8b5cf6",
              },
              {
                title: "Storage Network",
                desc: "Sia decentralized storage for encrypted content segments with automatic redundancy.",
                tech: "Sia + Skynet CDN",
                icon: Database,
                color: "#3b82f6",
              },
              {
                title: "DRM Service",
                desc: "Widevine/PlayReady license server for content encryption key management.",
                tech: "Shaka Packager + Widevine",
                icon: Lock,
                color: "#ef4444",
              },
              {
                title: "Streaming Service",
                desc: "HLS streaming server with adaptive bitrate and encrypted segment delivery.",
                tech: "FFmpeg + Video.js",
                icon: Globe,
                color: "#06b6d4",
              },
              {
                title: "Wallet Service",
                desc: "CineCoin wallet management for all stakeholders with transaction processing.",
                tech: "Web3.js + HD Wallets",
                icon: Coins,
                color: "#10b981",
              },
            ].map((svc, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#111227] border border-[#1e2044] card-hover">
                <svc.icon className="w-8 h-8 mb-3" style={{ color: svc.color }} />
                <h3 className="text-white font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{svc.desc}</p>
                <span className="text-xs font-mono px-2 py-1 rounded-lg" style={{ color: svc.color, background: `${svc.color}15` }}>
                  {svc.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Summary */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            API <span className="gradient-text">Reference</span>
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[#1e2044] overflow-x-auto">
            <table className="w-full styled-table min-w-[700px]">
              <thead>
                <tr>
                  <th>Endpoint</th>
                  <th>Method</th>
                  <th>Description</th>
                  <th>Auth</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { endpoint: "/api/auth/register", method: "POST", desc: "Register new user with key pair", auth: "None" },
                  { endpoint: "/api/auth/challenge", method: "POST", desc: "Request authentication challenge", auth: "None" },
                  { endpoint: "/api/auth/verify", method: "POST", desc: "Verify challenge response", auth: "None" },
                  { endpoint: "/api/content/upload", method: "POST", desc: "Upload and encrypt content", auth: "Creator" },
                  { endpoint: "/api/content/list", method: "GET", desc: "List available content", auth: "Any" },
                  { endpoint: "/api/license/request", method: "POST", desc: "Request content license via smart contract", auth: "Viewer" },
                  { endpoint: "/api/license/verify", method: "GET", desc: "Verify license validity", auth: "Any" },
                  { endpoint: "/api/wallet/balance", method: "GET", desc: "Check CineCoin wallet balance", auth: "Owner" },
                  { endpoint: "/api/wallet/transfer", method: "POST", desc: "Transfer CineCoin between wallets", auth: "Owner" },
                  { endpoint: "/api/stream/{skylink}", method: "GET", desc: "Stream encrypted HLS content", auth: "Licensed" },
                ].map((api, i) => (
                  <tr key={i}>
                    <td className="font-mono text-[#f0b90b] text-xs">{api.endpoint}</td>
                    <td>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        api.method === "GET" ? "bg-[#10b981]/10 text-[#10b981]" : "bg-[#3b82f6]/10 text-[#3b82f6]"
                      }`}>
                        {api.method}
                      </span>
                    </td>
                    <td className="text-gray-400">{api.desc}</td>
                    <td className="text-gray-500 text-xs">{api.auth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Dive Deeper into the <span className="gradient-text">Research</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Read the full academic papers behind the CineCoin system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f0b90b] to-[#c89a09] text-[#0a0b1a] font-semibold hover:shadow-xl hover:shadow-[#f0b90b]/25 transition-all hover:scale-105">
              Read Whitepaper <ArrowRight className="w-5 h-5" />
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

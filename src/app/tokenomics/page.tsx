"use client";

import { Coins, ArrowRight, TrendingUp, Wallet, PieChart, BarChart3, Users, Shield, Zap, Globe, Lock } from "lucide-react";
import Link from "next/link";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area, Legend } from "recharts";

const tokenDistribution = [
  { name: "Content Rewards", value: 40, color: "#f0b90b" },
  { name: "Provider Incentives", value: 25, color: "#3b82f6" },
  { name: "Development Fund", value: 15, color: "#8b5cf6" },
  { name: "Community & Ecosystem", value: 10, color: "#06b6d4" },
  { name: "Founders & Team", value: 7, color: "#10b981" },
  { name: "Reserve", value: 3, color: "#ef4444" },
];

const revenueFlow = [
  { name: "Content Creator", percentage: 70, color: "#f0b90b" },
  { name: "Hosting Provider", percentage: 20, color: "#3b82f6" },
  { name: "Platform Fee", percentage: 5, color: "#8b5cf6" },
  { name: "Burn Mechanism", percentage: 5, color: "#ef4444" },
];

const projectedGrowth = [
  { month: "M1", users: 500, transactions: 2000, tvl: 50 },
  { month: "M3", users: 2500, transactions: 15000, tvl: 300 },
  { month: "M6", users: 10000, transactions: 80000, tvl: 1500 },
  { month: "M9", users: 25000, transactions: 250000, tvl: 5000 },
  { month: "M12", users: 50000, transactions: 600000, tvl: 12000 },
  { month: "M18", users: 120000, transactions: 2000000, tvl: 35000 },
  { month: "M24", users: 250000, transactions: 5000000, tvl: 80000 },
];

const transactionCosts = [
  { platform: "CineCoin", contentFee: 0.001, transferFee: 0.0005, speed: "< 1s" },
  { platform: "Ethereum", contentFee: 2.5, transferFee: 1.2, speed: "15s" },
  { platform: "Traditional CDN", contentFee: 0.08, transferFee: 0.02, speed: "N/A" },
  { platform: "Bitcoin", contentFee: 1.5, transferFee: 0.8, speed: "10min" },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111227] border border-[#1e2044] rounded-lg p-3 shadow-xl">
        <p className="text-white text-sm font-medium mb-1">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' && entry.value > 999 ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TokenomicsPage() {
  return (
    <div className="bg-grid-pattern">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f0b90b]/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] text-sm font-medium mb-6">
              <Coins className="w-4 h-4" />
              Token Economics
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">CineCoin</span> Tokenomics
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Understanding the economic model that powers fair compensation for content creators, hosting providers, and sustainable ecosystem growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Supply", value: "1B", sub: "CineCoin (CC)", icon: Coins },
              { label: "Initial Circulating", value: "100M", sub: "10% of total", icon: TrendingUp },
              { label: "Block Reward", value: "50 CC", sub: "Halving every 2 years", icon: BarChart3 },
              { label: "Tx Fee", value: "0.1%", sub: "Of transaction value", icon: Zap },
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044] text-center card-hover">
                <m.icon className="w-8 h-8 text-[#f0b90b] mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold gradient-text">{m.value}</div>
                <div className="text-sm text-white font-medium">{m.label}</div>
                <div className="text-xs text-gray-500">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Distribution Pie Chart */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-10 text-center">
            Token <span className="gradient-text">Distribution</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={tokenDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {tokenDistribution.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#111227] border border-[#1e2044] rounded-lg p-3 shadow-xl">
                            <p className="text-white text-sm font-medium">{data.name}</p>
                            <p className="text-[#f0b90b] text-sm">{data.value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {tokenDistribution.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full shrink-0" style={{ background: item.color }} />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm font-medium">{item.name}</span>
                      <span className="text-gray-400 text-sm">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1e2044]">
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.value}%`, background: item.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Flow */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Revenue <span className="gradient-text">Distribution per Transaction</span>
          </h2>
          <p className="text-gray-400 mb-10">When a viewer pays to consume content, the CineCoin is distributed as follows:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {revenueFlow.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044] text-center card-hover">
                <div className="text-4xl font-bold mb-2" style={{ color: item.color }}>{item.percentage}%</div>
                <div className="text-white font-medium text-sm">{item.name}</div>
                <div className="mt-3 w-full h-2 rounded-full bg-[#1e2044]">
                  <div className="h-full rounded-full" style={{ width: `${item.percentage}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Revenue flow diagram */}
          <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Transaction Revenue Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="p-4 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-center">
                <p className="text-sm font-semibold text-[#06b6d4]">Viewer Pays</p>
                <p className="text-xs text-gray-400">100 CC</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 md:rotate-0" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Creator", amount: "70 CC", color: "#f0b90b" },
                  { label: "Provider", amount: "20 CC", color: "#3b82f6" },
                  { label: "Platform", amount: "5 CC", color: "#8b5cf6" },
                  { label: "Burned", amount: "5 CC", color: "#ef4444" },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg text-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}30` }}>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.label}</p>
                    <p className="text-xs text-gray-400">{item.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Projection Chart */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Projected <span className="gradient-text">Growth Trajectory</span>
          </h2>
          <p className="text-gray-400 mb-10">Estimated ecosystem growth over the first 24 months post-launch.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Users Growth */}
            <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Users &amp; Transactions</h3>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={projectedGrowth}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f0b90b" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f0b90b" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e2044" />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : v} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="users" stroke="#f0b90b" fill="url(#colorUsers)" name="Users" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* TVL Growth */}
            <div className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044]">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Total Value Locked (CC thousands)</h3>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectedGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e2044" />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="tvl" fill="#3b82f6" radius={[4, 4, 0, 0]} name="TVL (CC)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 lg:py-20 bg-[#070816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
            Cost <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-gray-400 text-center mb-10">How CineCoin compares to traditional platforms and other blockchain solutions.</p>

          <div className="rounded-2xl overflow-hidden border border-[#1e2044] overflow-x-auto">
            <table className="w-full styled-table min-w-[500px]">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th className="text-center">Content Tx Fee ($)</th>
                  <th className="text-center">Transfer Fee ($)</th>
                  <th className="text-center">Settlement Speed</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactionCosts.map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-[#f0b90b]/5" : ""}>
                    <td className={`font-medium ${i === 0 ? "text-[#f0b90b]" : "text-gray-300"}`}>
                      {i === 0 && <Coins className="w-4 h-4 inline mr-1" />}
                      {row.platform}
                    </td>
                    <td className="text-center text-gray-400">${row.contentFee}</td>
                    <td className="text-center text-gray-400">${row.transferFee}</td>
                    <td className="text-center text-gray-400">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wallet Details */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-10 text-center">
            CineCoin <span className="gradient-text">Wallet System</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Creator Wallet",
                icon: "film",
                color: "#f0b90b",
                features: ["Receive CineCoin per content view", "Withdraw to external wallets", "View earnings analytics", "Set minimum payout threshold", "Multi-signature support"]
              },
              {
                title: "Provider Wallet",
                icon: "server",
                color: "#3b82f6",
                features: ["Earn CineCoin per data served", "Stake CineCoin for priority", "View storage/bandwidth metrics", "Auto-compound earnings", "Slashing protection deposit"]
              },
              {
                title: "Viewer Wallet",
                icon: "eye",
                color: "#06b6d4",
                features: ["Fund with CineCoin to consume", "Pay-per-data auto deduction", "View consumption history", "Set spending limits", "Transaction privacy via secret blocks"]
              },
            ].map((wallet, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111227] border border-[#1e2044] card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${wallet.color}15` }}>
                  <Wallet className="w-6 h-6" style={{ color: wallet.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{wallet.title}</h3>
                <ul className="space-y-2">
                  {wallet.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: wallet.color }} />
                      {f}
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
            Start <span className="gradient-text">Building</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Follow our implementation guide to deploy the CineCoin system on your infrastructure.
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

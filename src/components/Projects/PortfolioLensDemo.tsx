import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, ShieldAlert, DollarSign, PieChart, RefreshCw, BarChart3, ChevronDown } from 'lucide-react';

export const PortfolioLensDemo: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '1Y'>('1M');
  const [totalValue, setTotalValue] = useState(248950.40);
  const [selectedAsset, setSelectedAsset] = useState<string>('AAPL');

  const holdings = [
    { ticker: 'AAPL', name: 'Apple Inc.', value: '$84,200.00', allocation: '33.8%', change: '+2.4%' },
    { ticker: 'MSFT', name: 'Microsoft Corp.', value: '$68,450.00', allocation: '27.5%', change: '+1.8%' },
    { ticker: 'NVDA', name: 'Nvidia Corp.', value: '$56,300.00', allocation: '22.6%', change: '+5.2%' },
    { ticker: 'ETH', name: 'Ethereum', value: '$40,000.40', allocation: '16.1%', change: '-0.6%' },
  ];

  const refreshData = () => {
    setTotalValue((prev) => prev + (Math.random() * 500 - 200));
  };

  return (
    <div className="w-full rounded-2xl bg-[#0B0D14] border border-white/10 p-6 font-sans text-zinc-100 shadow-2xl space-y-6">
      {/* Top Portfolio Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">LIVE INVESTOR DASHBOARD</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div className="text-3xl font-extrabold font-mono text-white mt-1">
            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+$12,450.20 (+5.26%) past 30 days</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 text-xs font-mono">
            {(['1D', '1W', '1M', '1Y'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded transition-all ${
                  timeframe === tf ? 'bg-indigo-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <button
            onClick={refreshData}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-all active:rotate-180 duration-300"
            title="Refresh Live Feed"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Chart & Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dynamic Chart Widget */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-indigo-400" /> Performance Velocity</span>
            <span className="text-indigo-300 font-semibold">MAX DRAWDOWN: -4.2%</span>
          </div>

          {/* Simulated Animated Area Chart */}
          <div className="h-40 flex items-end gap-1 pt-6 px-2 border-b border-white/5">
            {[45, 52, 48, 60, 58, 65, 72, 68, 80, 88, 84, 95, 100].map((h, idx) => (
              <div key={idx} className="flex-1 bg-indigo-950/40 rounded-t h-full flex items-end group cursor-pointer">
                <div
                  className="w-full bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t transition-all duration-300 group-hover:from-indigo-500 group-hover:to-cyan-300"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[11px] font-mono text-zinc-500">
            <span>WEEK 1</span>
            <span>WEEK 2</span>
            <span>WEEK 3</span>
            <span>WEEK 4</span>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><PieChart className="w-4 h-4 text-cyan-400" /> Asset Allocation</span>
            <span className="text-emerald-400">Low Risk</span>
          </div>

          <div className="space-y-3">
            {holdings.map((asset) => (
              <div
                key={asset.ticker}
                onClick={() => setSelectedAsset(asset.ticker)}
                className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                  selectedAsset === asset.ticker
                    ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                    : 'bg-black/30 border-white/5 text-zinc-300 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between font-mono font-semibold">
                  <span>{asset.ticker} ({asset.name})</span>
                  <span className="text-emerald-400">{asset.change}</span>
                </div>
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                  <span>{asset.value}</span>
                  <span>{asset.allocation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

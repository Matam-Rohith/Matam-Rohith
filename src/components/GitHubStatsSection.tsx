import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { BarChart3, Github, Trophy, Flame, ExternalLink, RefreshCw, GitCommit } from 'lucide-react';

export const GitHubStatsSection: React.FC = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const refreshStats = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <section id="stats" className="py-16 md:py-20 bg-[#090D15] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Activity Telemetry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            GitHub Metrics & Contributions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Live commit activity, language distributions, streak statistics, and trophies from GitHub.
          </p>
        </div>

        {/* Action Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 bg-[#0D1117] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white">@Matam-Rohith</h4>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.2 rounded border border-emerald-800/60">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-400">Open source engineer & repository maintainer</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={refreshStats}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="Refresh stats cards"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Stats Row 1: Overall Stats & Top Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5" key={reloadKey}>
          {/* GitHub Readme Stats */}
          <div className="rounded-xl bg-[#0D1117] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <GitCommit className="w-3.5 h-3.5" />
                <span>Repository Statistics</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">Tokyo Night</span>
            </div>
            <div className="flex items-center justify-center min-h-[165px]">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=Matam-Rohith&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&bg_color=0D1117&v=${reloadKey}`}
                alt="Matam Rohith's GitHub Stats"
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="rounded-xl bg-[#0D1117] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Flame className="w-3.5 h-3.5" />
                <span>Primary Languages</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">Tokyo Night</span>
            </div>
            <div className="flex items-center justify-center min-h-[165px]">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Matam-Rohith&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&v=${reloadKey}`}
                alt="Top Languages"
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stats Row 2: Streak Stats */}
        <div className="rounded-xl bg-[#0D1117] border border-slate-800 p-4 mb-5 overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>Streak & Commit Continuity</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500">Continuous Contributions</span>
          </div>
          <div className="flex items-center justify-center py-1">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=Matam-Rohith&theme=tokyonight&hide_border=true&background=0D1117&v=${reloadKey}`}
              alt="GitHub Streak"
              className="w-full max-w-xl h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Row 3: Activity Graph */}
        <div className="rounded-xl bg-[#0D1117] border border-slate-800 p-4 mb-5 overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Contribution Timeline</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500">Yearly Cadence</span>
          </div>
          <div className="flex items-center justify-center overflow-x-auto py-1">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=Matam-Rohith&theme=tokyo-night&hide_border=true&bg_color=0D1117&v=${reloadKey}`}
              alt="Activity Graph"
              className="w-full max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Row 4: Trophies */}
        <div className="rounded-xl bg-[#0D1117] border border-slate-800 p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <Trophy className="w-3.5 h-3.5" />
              <span>GitHub Trophies</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500">Milestone Badges</span>
          </div>
          <div className="flex items-center justify-center overflow-x-auto py-2">
            <img
              src={`https://github-profile-trophy.vercel.app/?username=Matam-Rohith&theme=tokyonight&no-frame=true&no-bg=true&margin-w=8&column=7&v=${reloadKey}`}
              alt="GitHub Trophies"
              className="w-full max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

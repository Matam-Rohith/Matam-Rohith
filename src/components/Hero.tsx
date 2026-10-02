import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  MapPin, 
  GraduationCap, 
  Linkedin, 
  Mail, 
  Code2, 
  Globe, 
  Copy, 
  Check, 
  FileText,
  Github
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-950/20 via-slate-900/10 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capsule Render Header Banner from README */}
        <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0D1117] mb-8 shadow-xl">
          <img
            src={PROFILE_INFO.bannerUrl}
            alt="Matam Rohith"
            className="w-full h-auto object-cover max-h-[180px]"
            loading="eager"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-medium mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for SDE Internships, Full-Time Roles & Open Source</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            Matam Rohith
          </h1>

          <p className="text-lg sm:text-xl text-indigo-300 font-medium max-w-2xl mb-4">
            Full Stack Developer & AI/ML Engineer
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-6">
            Building reliable full-stack applications with React, TypeScript & Node.js, and training applied computer vision & machine learning models with Python.
          </p>

          {/* Education & Location */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>B.Tech CSE @ SR University (2022–2026)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Verified Social & Profile Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-3xl">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-[#0A66C2] hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-rose-500 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-rose-400" />
              <span>Resume</span>
            </button>

            <a
              href={PROFILE_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode</span>
            </a>

            <a
              href={PROFILE_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-indigo-500 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Live Portfolio</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-indigo-400 hover:text-white transition-colors"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
            >
              <span>Browse 25 Projects & Repos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Genuine Portfolio Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 w-full max-w-3xl">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">25+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Repositories</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">14+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Live Web Demos</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono">7</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Languages Used</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">2026</div>
              <div className="text-[11px] text-slate-400 mt-0.5">B.Tech CSE Cohort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

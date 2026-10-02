import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Check, Copy, User, MapPin, GraduationCap, Briefcase, Terminal, Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'json'>('python');
  const [copied, setCopied] = useState(false);

  const pythonCode = `rohith = {
    "name"       : "Matam Rohith",
    "location"   : "Hyderabad, Telangana, India",
    "education"  : "B.Tech CSE @ SR University (2022-2026)",
    "interests"  : ["Full Stack Dev", "AI/ML", "Computer Vision", "Open Source"],
    "looking_for": ["Internships", "Entry-Level Roles", "Freelance"],
    "email"      : "matamrohith12614@gmail.com"
}`;

  const jsonCode = JSON.stringify(
    {
      name: PROFILE_INFO.name,
      location: PROFILE_INFO.location,
      education: PROFILE_INFO.education,
      university: PROFILE_INFO.university,
      interests: ["Full Stack Dev", "AI/ML", "Computer Vision", "Open Source"],
      looking_for: ["Internships", "Entry-Level Roles", "Freelance"],
      email: PROFILE_INFO.email,
      github: PROFILE_INFO.github,
      linkedin: PROFILE_INFO.linkedin,
    },
    null,
    2
  );

  const handleCopy = () => {
    const textToCopy = activeTab === 'python' ? pythonCode : jsonCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-[#090D15] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Computer science undergraduate focused on scalable web platforms and practical machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Facts */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0D1117] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>Engineering Journey</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                I am a final-stretch Computer Science & Engineering undergraduate at <strong className="text-white">SR University</strong> (graduating 2026), based in Hyderabad, India.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                My work spans end-to-end web engineering (React, TypeScript, Node.js, ASP.NET Core) and computer vision & ML pipelines (OpenCV, MediaPipe, scikit-learn). I enjoy building software that solves concrete workflow problems — from enterprise ITIL support platforms and SOC incident detection to gesture-driven camera interactions.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Currently open to software engineering internships, graduate engineering roles, and open source collaborations.
              </p>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#0D1117] border border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">Degree</span>
                </div>
                <p className="text-xs text-slate-300">B.Tech in Computer Science</p>
                <p className="text-[11px] text-slate-400">SR University (2022–2026)</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">Location</span>
                </div>
                <p className="text-xs text-slate-300">Hyderabad, Telangana</p>
                <p className="text-[11px] text-slate-400">India (IST / UTC+5:30)</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">Seeking Roles</span>
                </div>
                <p className="text-xs text-slate-300">Software Engineer (SDE)</p>
                <p className="text-[11px] text-slate-400">Full Stack / Backend / ML</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">Problem Solving</span>
                </div>
                <p className="text-xs text-slate-300">LeetCode Active</p>
                <p className="text-[11px] text-slate-400">DSA & Algorithm Design</p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0D1117] border border-slate-800 shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <div className="ml-2 flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>profile.py</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2 py-0.5 text-xs font-mono rounded ${
                      activeTab === 'python'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveTab('json')}
                    className={`px-2 py-0.5 text-xs font-mono rounded ${
                      activeTab === 'json'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    JSON
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto relative min-h-[290px] bg-[#0A0D14]">
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                {activeTab === 'python' ? (
                  <pre className="text-slate-300">
                    <span className="text-pink-400 font-semibold">rohith</span> = &#123;{'\n'}
                    {'    '}<span className="text-indigo-400">"name"</span>       : <span className="text-emerald-300">"Matam Rohith"</span>,{'\n'}
                    {'    '}<span className="text-indigo-400">"location"</span>   : <span className="text-emerald-300">"Hyderabad, Telangana, India"</span>,{'\n'}
                    {'    '}<span className="text-indigo-400">"education"</span>  : <span className="text-emerald-300">"B.Tech CSE @ SR University (2022-2026)"</span>,{'\n'}
                    {'    '}<span className="text-indigo-400">"interests"</span>  : [<span className="text-emerald-300">"Full Stack Dev"</span>, <span className="text-emerald-300">"AI/ML"</span>, <span className="text-emerald-300">"Computer Vision"</span>],{'\n'}
                    {'    '}<span className="text-indigo-400">"looking_for"</span>: [<span className="text-emerald-300">"Internships"</span>, <span className="text-emerald-300">"Entry-Level Roles"</span>, <span className="text-emerald-300">"Freelance"</span>],{'\n'}
                    {'    '}<span className="text-indigo-400">"email"</span>      : <span className="text-emerald-300">"matamrohith12614@gmail.com"</span>{'\n'}
                    &#125;
                  </pre>
                ) : (
                  <pre className="text-slate-300">
                    {jsonCode}
                  </pre>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-[#161B22] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Python 3.12 / Interactive</span>
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

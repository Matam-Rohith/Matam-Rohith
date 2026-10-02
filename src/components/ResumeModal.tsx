import React, { useEffect } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { X, ExternalLink, Download, GraduationCap, Code, Briefcase, Mail, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-[#0D1117] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#161B22]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {PROFILE_INFO.name} — Resume Preview
              </h3>
              <p className="text-xs text-slate-400">
                B.Tech Computer Science & Engineering • SR University (2022-2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open PDF</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-slate-300 text-sm">
          {/* Summary / Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white">{PROFILE_INFO.name}</h4>
              <p className="text-xs text-slate-400">{PROFILE_INFO.title}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {PROFILE_INFO.email}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <div className="flex justify-between items-start mb-1">
                <h5 className="font-semibold text-white">Bachelor of Technology (B.Tech) - Computer Science & Engineering</h5>
                <span className="text-xs text-indigo-400 font-mono">2022 – 2026</span>
              </div>
              <p className="text-xs text-slate-400">SR University, Telangana, India</p>
              <p className="text-xs text-slate-400 mt-2">
                Core coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Machine Learning, Full-Stack Web Development, Software Engineering.
              </p>
            </div>
          </div>

          {/* Technical Competencies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">Languages</span>
                <p className="text-xs text-slate-400">Python, TypeScript, JavaScript, Java, C#, SQL, C</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">Frontend</span>
                <p className="text-xs text-slate-400">React, Next.js, Tailwind CSS, HTML5, CSS3, Recharts</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">Backend & Databases</span>
                <p className="text-xs text-slate-400">Node.js, Express, Flask, ASP.NET Core 8, PostgreSQL, MongoDB, SQLite</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">AI, ML & Tools</span>
                <p className="text-xs text-slate-400">scikit-learn, OpenCV, MediaPipe, Git/GitHub, Docker, Vercel</p>
              </div>
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Software Projects</span>
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-white text-sm">ServiceOps — ITIL Service Management Platform</h5>
                  <span className="text-[11px] font-mono text-slate-400">TypeScript, React, Cloud Run</span>
                </div>
                <p className="text-xs text-slate-400">
                  Incident handling, change request approvals, SLA countdown alerts, and role-based access for enterprise IT workflows.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-white text-sm">GestureVision — Real-Time AI Camera Filter Control</h5>
                  <span className="text-[11px] font-mono text-slate-400">Python, OpenCV, MediaPipe</span>
                </div>
                <p className="text-xs text-slate-400">
                  Computer vision application tracking 21 hand landmarks to dynamically control live video filters without peripheral hardware.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-white text-sm">Requirements Management Portal</h5>
                  <span className="text-[11px] font-mono text-slate-400">React, TypeScript, Tailwind, Recharts</span>
                </div>
                <p className="text-xs text-slate-400">
                  Sprint requirements tracking with priority ranking, Admin/Viewer permission layers, live charts, and full CRUD operations.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-white text-sm">Library Management System</h5>
                  <span className="text-[11px] font-mono text-slate-400">C#, ASP.NET Core 8, EF Core, SQL Server</span>
                </div>
                <p className="text-xs text-slate-400">
                  RESTful Web API with JWT auth, Swagger documentation, loan/reservation scheduling, and CI/CD deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#161B22] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Direct Drive Link: Verified & Hosted
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={PROFILE_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

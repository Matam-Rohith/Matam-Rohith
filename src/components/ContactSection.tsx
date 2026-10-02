import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  Code, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !subject.trim()) {
      setFormFeedback('Please fill out both subject and message before sending.');
      return;
    }

    const emailBody = `From: ${name || 'Prospective Collaborator'} (${email || 'Not specified'})\n\n${message}`;
    const mailtoUrl = `mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    
    setFormFeedback('Opening your email client to send message...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 300);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: PROFILE_INFO.linkedin,
      icon: <Linkedin className="w-4 h-4 text-[#0A66C2]" />,
      handle: 'matam-rohith-1418ab1b4',
      badge: 'Professional Network',
    },
    {
      name: 'GitHub',
      url: PROFILE_INFO.github,
      icon: <Github className="w-4 h-4 text-white" />,
      handle: 'Matam-Rohith',
      badge: 'Code Repositories',
    },
    {
      name: 'LeetCode',
      url: PROFILE_INFO.leetcode,
      icon: <Code className="w-4 h-4 text-[#FFA116]" />,
      handle: 'matam_rohith',
      badge: 'DSA & Algorithms',
    },
    {
      name: 'Portfolio',
      url: PROFILE_INFO.portfolio,
      icon: <Globe className="w-4 h-4 text-[#6C63FF]" />,
      handle: 'rohith-portfolio-six.vercel.app',
      badge: 'Personal Site',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#080C14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Currently interviewing for internships and full-time roles starting in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct channels and Email Box */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Email Card */}
            <div className="p-5 rounded-xl bg-[#0D1117] border border-slate-800">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Direct Email</h3>
                    <p className="text-xs text-slate-400">Response within 24 hours</p>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-[#090D14] border border-slate-800/80 text-xs font-mono text-indigo-300 select-all">
                {PROFILE_INFO.email}
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="p-4 rounded-xl bg-[#0D1117] border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Full Curriculum Vitae</h4>
                  <p className="text-[11px] text-slate-400">PDF hosted on Google Drive</p>
                </div>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
              >
                View Resume
              </button>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-colors flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-white block">{link.name}</span>
                    <p className="text-[11px] text-slate-400 truncate font-mono">{link.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-xl bg-[#0D1117] border border-slate-800">
              <h3 className="text-base font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Opens your default mail app with the message pre-formatted.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg bg-[#090D14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#090D14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. SDE Internship Opportunity / Software Project"
                    className="w-full px-3 py-2 rounded-lg bg-[#090D14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Rohith, I reviewed your work on GestureVision and ServiceOps and would like to discuss..."
                    className="w-full px-3 py-2 rounded-lg bg-[#090D14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                {formFeedback && (
                  <p className="text-xs text-indigo-300 font-mono">
                    {formFeedback}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

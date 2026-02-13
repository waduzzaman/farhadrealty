"use client";

import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Marketplace", href: "/listings" },
    { label: "Philosophy", href: "/about" },
    { label: "Inquiry", href: "/contact" },
  ];

  const socialIcons = [
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Facebook, url: "https://facebook.com" },
  ];

  return (
    <footer className="bg-slate-900 text-white text-center py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 font-black text-xl">
              F
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter">
              Farhad<span className="text-amber-500 font-light">Realty</span>
            </span>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Farhad Realty Group. Toronto, ON. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-600">
            {socialIcons.map(({ icon: Icon, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="hover:text-amber-500 transition-colors cursor-pointer" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

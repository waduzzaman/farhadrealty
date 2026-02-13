"use client";

import React, { useState } from "react";
import { Home, Search, User, Mail, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  active: boolean;
}

const NavItem = ({ label, icon: Icon, href, active }: NavItemProps) => (
  <Link
    href={href}
    className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg text-sm font-bold tracking-tight ${
      active
        ? "bg-slate-900 text-white shadow-md scale-105"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`}
  >
    {Icon && <Icon size={18} className={active ? "text-amber-400" : ""} />}
    {label}
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Listings", icon: Search, href: "/listings" },
    { name: "About", icon: User, href: "/about" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-100 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-2 group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 font-black text-xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-amber-500/10">
            F
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
              Farhad<span className="text-amber-500 font-light">Realty</span>
            </span>
            <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
              Ontario Estates
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-2xl border border-slate-100">
          {navigation.map((item) => (
            <NavItem
              key={item.href}
              label={item.name}
              icon={item.icon}
              href={item.href}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center gap-2"
          >
            List Your Home
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 space-y-3 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between w-full text-left py-4 px-5 rounded-2xl font-bold transition-all ${
                isActive(item.href)
                  ? "bg-slate-900 text-white"
                  : "text-slate-900 hover:bg-slate-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={20}
                  className={isActive(item.href) ? "text-amber-400" : "text-slate-400"}
                />
                {item.name}
              </div>
              <ArrowRight size={18} className="opacity-30" />
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              className="w-full block py-4 bg-amber-500 text-slate-900 font-black rounded-2xl shadow-lg shadow-amber-500/20 uppercase tracking-widest text-sm text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

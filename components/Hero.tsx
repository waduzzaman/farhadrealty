"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Home Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Modern Real Estate <br />
          <span className="text-amber-400">Elevated Experience.</span>
        </h1>

        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
          Farhad Realty specializes in high-end residential sales, investment
          portfolios, and strategic property acquisition across Ontario.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 text-lg shadow-lg">
            Explore Listings <ArrowRight size={20} />
          </button>

          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-full transition-all text-lg">
            Free Valuation
          </button>
        </div>
      </div>
    </section>
  );
}

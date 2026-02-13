"use client"

import React from "react"

export default function AboutBrief() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="relative w-full h-96 md:h-full rounded-3xl shadow-2xl overflow-hidden bg-slate-200 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Farhad - Real Estate Expert and Principal Consultant"
              className="w-full h-full object-cover"
              loading="eager"
              style={{ aspectRatio: '3/4' }}
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533"%3E%3Crect fill="%23cbd5e1" width="400" height="533"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EFarhad Profile%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-3xl z-0"></div>
        </div>

        {/* Text Section */}
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
            Experience Excellence
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
            Unrivaled Expertise in Ontario Real Estate
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            With over a decade of precision in the market, Farhad Realty provides a white-glove service
            that transcends traditional brokerage. Every transaction is handled with absolute discretion
            and strategic foresight.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-slate-900">$1.2B+</h4>
              <p className="text-slate-500 font-medium">Sales Volume</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900">500+</h4>
              <p className="text-slate-500 font-medium">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

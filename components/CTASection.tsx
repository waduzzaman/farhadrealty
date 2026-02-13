"use client"

import React from "react"

interface CTASectionProps {
  title: string
  subtitle: string
}

export default function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="py-24 bg-amber-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h2>
        <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
        <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-2xl text-lg">
          Contact Farhad Today
        </button>
      </div>
    </section>
  )
}

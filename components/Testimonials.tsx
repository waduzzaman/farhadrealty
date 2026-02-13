"use client"

import React from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      text: "Farhad made our home-buying journey seamless. His attention to detail and negotiation skills are second to none in Toronto.",
      author: "Sarah & Mark Thompson",
    },
    {
      text: "The marketing strategy used to sell our Oakville property was incredible. We received multiple offers within 48 hours.",
      author: "James Chen",
    },
  ]

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <Quote className="absolute top-10 left-10 text-white/5 w-64 h-64 -rotate-12" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 text-left"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xl italic mb-8 leading-relaxed">{t.text}</p>
              <p className="font-bold text-amber-400">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

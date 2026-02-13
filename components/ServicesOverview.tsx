"use client"

import React from "react"
import { Award, TrendingUp, ShieldCheck } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      title: "Residential Sales",
      icon: Award,
      desc: "Maximizing value through strategic staging and elite marketing.",
    },
    {
      title: "Investment Portfolios",
      icon: TrendingUp,
      desc: "Data-driven property acquisition for long-term wealth building.",
    },
    {
      title: "Buyer Representation",
      icon: ShieldCheck,
      desc: "Expert negotiation and exclusive access to off-market listings.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Comprehensive solutions for every step of your real estate journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 mx-auto">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import PropertyCard from "./PropertyCard"

export default function FeaturedListings() {
  const properties = [
    {
      id: "1",
      title: "Modern Villa",
      price: "$1,250,000",
      location: "Oakville, ON",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c0c4b00?w=800&q=80",
      type: "For Sale",
    },
    {
      id: "2",
      title: "Penthouse",
      price: "$2,100,000",
      location: "Toronto, ON",
      beds: 3,
      baths: 3,
      sqft: 1950,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      type: "Featured",
    },
    {
      id: "3",
      title: "Suburban Home",
      price: "$899,000",
      location: "Richmond Hill, ON",
      beds: 5,
      baths: 4,
      sqft: 3200,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      type: "New Listing",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Featured Properties
            </h2>
            <p className="text-slate-500">
              Hand-picked exclusive opportunities for our clients.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
            View All Properties <ChevronRight size={20} />
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import Link from "next/link"
import { Bed, Bath, Square, MapPin } from "lucide-react"

interface PropertyProps {
  id: string
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  type: string
}

interface PropertyCardProps {
  property: PropertyProps
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer flex flex-col h-full">
      {/* Property Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="eager"
          style={{ aspectRatio: '16/9' }}
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%23cbd5e1" width="400" height="225"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EProperty Image%3C/text%3E%3C/svg%3E';
          }}
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm tracking-wide">
          {property.type}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 flex flex-col grow">
        <div className="mb-2">
          <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight">
            {property.price}
          </h3>
        </div>

        <p className="text-slate-500 flex items-center gap-1.5 text-sm mb-6 font-medium">
          <MapPin size={16} className="text-amber-500" />
          {property.location}
        </p>

        {/* Features */}
        <div className="mt-auto grid grid-cols-3 gap-2 py-4 border-t border-slate-50 text-slate-600">
          <div className="flex flex-col items-center gap-1">
            <Bed size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.beds}</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-slate-100">
            <Bath size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.baths}</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.sqft}</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">Sqft</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/listings/${property.id}`}
          className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-900 rounded-xl font-bold transition-all duration-300 text-sm text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

"use client";

import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ChevronLeft,
  Calendar,
  Phone,
} from "lucide-react";

interface Property {
  id: string;
  title: string;
  price: string;
  priceNumeric: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  description: string;
  features?: string[];
  gallery?: string[];
}

interface PropertyDetailsPageProps {
  property: Property;
  onBack: () => void;
}

const PropertyDetailsPage = ({
  property,
  onBack,
}: PropertyDetailsPageProps) => {

  const mortgageCalc = (price: number): string => {
    const monthly = (price * 0.8) / (25 * 12);
    return Math.round(monthly).toLocaleString();
  };

  if (!property) return null;

  return (
    <div className="pb-24 bg-white">
      {/* Top Gallery */}
      <div className="pt-4 pb-8 max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-6 transition-colors group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Marketplace
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
          {/* Main Image */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-slate-100 group cursor-pointer">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect fill="%23cbd5e1" width="600" height="600"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EProperty Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Gallery */}
          {property.gallery?.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="hidden md:block rounded-3xl overflow-hidden bg-slate-100 group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23cbd5e1" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EPhoto%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          ))}

          {/* View More */}
          {property.gallery && property.gallery.length > 0 && (
            <div className="relative hidden md:block rounded-3xl overflow-hidden bg-slate-100 group cursor-pointer">
              <img
                src={property.gallery[0]}
                alt="More photos"
                className="w-full h-full object-cover blur-sm opacity-60"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23cbd5e1" width="300" height="300"/%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl bg-black/30">
                +12 Photos
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">
                {property.title}
              </h1>
              <p className="flex items-center gap-2 text-slate-500 text-lg font-medium">
                <MapPin size={20} className="text-amber-500" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-black text-slate-400 uppercase">
                Bedrooms
              </span>
              <div className="flex items-center gap-3 font-black text-2xl">
                <Bed size={24} className="text-amber-500" />
                {property.beds}
              </div>
            </div>

            <div>
              <span className="text-xs font-black text-slate-400 uppercase">
                Bathrooms
              </span>
              <div className="flex items-center gap-3 font-black text-2xl">
                <Bath size={24} className="text-amber-500" />
                {property.baths}
              </div>
            </div>

            <div>
              <span className="text-xs font-black text-slate-400 uppercase">
                Total Area
              </span>
              <div className="flex items-center gap-3 font-black text-2xl">
                <Square size={24} className="text-amber-500" />
                {property.sqft} FT²
              </div>
            </div>

            <div>
              <span className="text-xs font-black text-slate-400 uppercase">
                Est. Payment
              </span>
              <div className="font-black text-2xl">
                ${mortgageCalc(property.priceNumeric)}/MO
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white border rounded-3xl shadow-xl p-8">
              <h2 className="text-5xl font-black text-slate-900 mb-8">
                {property.price}
              </h2>

              <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl flex items-center justify-center gap-2 uppercase text-xs">
                <Calendar size={18} /> Book a Private Tour
              </button>

              {/* Agent */}
              <div className="mt-12 pt-8 border-t flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                    alt="Farhad - Agent"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23cbd5e1"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div>
                  <p className="font-black text-slate-900">
                    Farhad Realty Group
                  </p>
                  <p className="text-xs text-amber-600 font-black uppercase">
                    Principal Consultant
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500 p-6 rounded-3xl text-slate-900 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase">Need help?</p>
                <p className="font-black text-xl">
                  +1 (416) 555-0123
                </p>
              </div>
              <Phone size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

import React, { useState } from 'react';
import { 
  MapPin, Bed, Bath, Square, TrendingUp, 
  Share2, Heart, ChevronLeft, Zap, Car, 
  CheckCircle2, Calendar, Star, Phone 
} from 'lucide-react';

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

/**
 * PropertyDetailsPage Component
 * @param {Property} property - The property data object
 * @param {Function} onBack - Callback to return to the listings view
 */
const PropertyDetailsPage = ({ property, onBack }: PropertyDetailsPageProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Simple mock mortgage calculation (20% down, 25 year term)
  const mortgageCalc = (price) => {
    const monthly = (price * 0.8) / (25 * 12); 
    return Math.round(monthly).toLocaleString();
  };

  if (!property) return null;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pb-24 bg-white">
      {/* Top Gallery Section */}
      <div className="pt-4 pb-8 max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-6 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Marketplace
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
          {/* Main Image */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group cursor-pointer bg-slate-100 flex items-center justify-center">
            <img src={property.image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Main Residence" loading="eager" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect fill="%23cbd5e1" width="600" height="600"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EProperty Image%3C/text%3E%3C/svg%3E'; }} />
          </div>
          {/* Gallery Grid */}
          {property.gallery?.slice(0, 3).map((img, idx) => (
            <div key={idx} className="hidden md:flex md:flex-col rounded-3xl overflow-hidden group cursor-pointer bg-slate-100 items-center justify-center">
              <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`Gallery ${idx}`} loading="lazy" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23cbd5e1" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EImage%3C/text%3E%3C/svg%3E'; }} />
            </div>
          ))}
          {/* View More Placeholder */}
          {property.gallery && property.gallery.length > 0 && (
            <div className="relative rounded-3xl overflow-hidden cursor-pointer group hidden md:flex md:flex-col bg-slate-100 items-center justify-center">
              <img src={property.gallery[0]} className="w-full h-full object-cover blur-[2px] opacity-60" alt="More" loading="lazy" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23cbd5e1" width="300" height="300"/%3E%3C/svg%3E'; }} />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform bg-black/30">
                +12 Photos
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        {/* Left Column: Content & Description */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full">{property.type}</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">MLS: #ON882910</span>
              </div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{property.title}</h1>
              <p className="flex items-center gap-2 text-slate-500 text-lg font-medium">
                <MapPin size={20} className="text-amber-500" /> {property.location}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 font-bold transition-all"><Share2 size={18}/> Share</button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 font-bold transition-all"><Heart size={18}/> Save</button>
            </div>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bedrooms</span>
              <div className="flex items-center gap-3 font-black text-2xl text-slate-900"><Bed size={24} className="text-amber-500"/> {property.beds}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bathrooms</span>
              <div className="flex items-center gap-3 font-black text-2xl text-slate-900"><Bath size={24} className="text-amber-500"/> {property.baths}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Area</span>
              <div className="flex items-center gap-3 font-black text-2xl text-slate-900"><Square size={24} className="text-amber-500"/> {property.sqft} <span className="text-sm font-bold text-slate-400">FT²</span></div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Payment</span>
              <div className="flex items-center gap-1 font-black text-2xl text-slate-900"><span className="text-amber-500">$</span>{mortgageCalc(property.priceNumeric)}<span className="text-sm font-bold text-slate-400">/MO</span></div>
            </div>
          </div>

          {/* Interactive Tabs Section */}
          <div className="space-y-8">
            <div className="flex border-b border-slate-100 gap-8">
              {['overview', 'features', 'location'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full" />}
                </button>
              ))}
            </div>

            {/* Tab Content: Overview */}
            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                <h3 className="text-2xl font-black text-slate-900 mb-6">About this Residence</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{property.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex items-center gap-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-600"><Zap size={24}/></div>
                      <div>
                        <p className="font-bold text-slate-900">Energy Efficient</p>
                        <p className="text-xs text-slate-500">Tier 1 LEED Certified Construction</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600"><Car size={24}/></div>
                      <div>
                        <p className="font-bold text-slate-900">Premium Garage</p>
                        <p className="text-xs text-slate-500">3-Car heated with EV integration</p>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* Tab Content: Features */}
            {activeTab === 'features' && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-300 grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features?.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:border-amber-200 transition-colors">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                    <span className="font-bold text-slate-700 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Investment Outlook Card */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10 flex-1">
              <h4 className="text-2xl font-black mb-2 flex items-center gap-2"><TrendingUp className="text-amber-500" /> Investment Outlook</h4>
              <p className="text-slate-400 text-sm leading-relaxed">This property is located in a high-demand sub-market with a projected 5.2% annual appreciation based on local development plans.</p>
            </div>
            <button className="relative z-10 px-6 py-4 bg-amber-500 text-slate-900 font-black rounded-2xl text-sm hover:bg-amber-400 transition-colors uppercase tracking-widest whitespace-nowrap">
              Get Market Report
            </button>
          </div>
        </div>

        {/* Right Column: Sticky Pricing & Lead Gen */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white border border-slate-100 rounded-[32px] shadow-2xl p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6">
                <div className="flex items-center gap-1 text-amber-500"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Listing Price</p>
              <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">{property.price}</h2>
              
              <div className="space-y-3">
                <button className="w-full py-4.5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 uppercase tracking-widest text-xs">
                  <Calendar size={18} /> Book a Private Tour
                </button>
                <button className="w-full py-4.5 border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-xs">
                  Request Information
                </button>
              </div>

              {/* Agent Profile */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden border-2 border-amber-500/20">
                   <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Farhad - Agent" />
                </div>
                <div>
                  <p className="font-black text-slate-900">Farhad Realty Group</p>
                  <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest">Principal Consultant</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Banner */}
            <div className="bg-amber-500 p-6 rounded-[32px] text-slate-900 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-tight">Need help?</p>
                <p className="font-black text-xl">+1 (416) 555-0123</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full"><Phone size={24}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
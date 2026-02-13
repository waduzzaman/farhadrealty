import AboutBrief from "@/components/AboutBrief";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            About Farhad Realty
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Premier luxury real estate services in Ontario, guided by expertise, integrity, and a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <AboutBrief />

      {/* Extended About Section - Meet Farhad */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Professional Image */}
            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-3xl shadow-2xl overflow-hidden bg-slate-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Farhad - Principal Consultant at Farhad Realty"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ aspectRatio: '3/4' }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533"%3E%3Crect fill="%23cbd5e1" width="400" height="533"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EFarhad Profile%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">
                Meet Farhad
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                With over 15 years of dedicated service in Ontario's real estate market, Farhad has established himself as a trusted advisor for high-net-worth individuals and families seeking premium properties. His approach combines market expertise with personalized service, ensuring every client receives tailored solutions.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Specializing in luxury residential properties across Toronto, Richmond Hill, Oakville, and the Greater Toronto Area, Farhad brings strategic insight and industry connections that deliver results. His track record speaks to a commitment to excellence and client satisfaction above all else.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you're buying, selling, or investing, Farhad's consultative approach ensures you make informed decisions with confidence and clarity.
              </p>
            </div>
          </div>

          {/* Expertise and Service Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-black text-xl mt-1">✓</span>
                  <span className="text-slate-600">Luxury residential properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-black text-xl mt-1">✓</span>
                  <span className="text-slate-600">Strategic market analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-black text-xl mt-1">✓</span>
                  <span className="text-slate-600">Negotiation excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-black text-xl mt-1">✓</span>
                  <span className="text-slate-600">Client-first approach</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Service Areas</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Greater Toronto Area (GTA)</li>
                <li>• Toronto & Downtown Core</li>
                <li>• Richmond Hill & Vaughan</li>
                <li>• Oakville & Mississauga</li>
                <li>• Markham & Scarborough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tighter">
            By The Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-black text-amber-400 mb-3">15+</h3>
              <p className="text-slate-300 font-bold">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-black text-amber-400 mb-3">$1.2B+</h3>
              <p className="text-slate-300 font-bold">Sales Volume</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-black text-amber-400 mb-3">500+</h3>
              <p className="text-slate-300 font-bold">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-black text-amber-400 mb-3">100%</h3>
              <p className="text-slate-300 font-bold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center tracking-tighter">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Integrity</h3>
              <p className="text-slate-600">
                We conduct every transaction with absolute honesty and transparency. Your trust is our most valuable asset.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-green-50 border border-green-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Excellence</h3>
              <p className="text-slate-600">
                We pursue excellence in every detail, from market research to final closing. Your success is our success.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Partnership</h3>
              <p className="text-slate-600">
                We view our clients as partners. Your goals become our mission, and your satisfaction drives our actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6 tracking-tighter">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today to discuss your real estate goals and discover how Farhad Realty can help you achieve them.
          </p>
          <button className="px-8 py-4 bg-amber-500 text-slate-900 font-black rounded-2xl hover:bg-amber-400 transition-all uppercase tracking-widest text-sm">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

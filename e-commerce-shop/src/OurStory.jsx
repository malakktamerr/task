

import React from 'react';

export default function OurStory({ onNavigateToShop }) {
  return (
    <main className="w-full bg-[#FAF8F5] text-neutral-900 font-sans text-xs">
      
      {/* Section 1: Main Hero */}
      <section className="px-8 py-12 md:py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-fredericka font-normal leading-tight lg:leading-[104px]">
            Made from threads. <br />
            <span className="italic">Held by people.</span>
          </h1>
          <p className="text-[#1C1B1A] text-[20px] md:text-[24px] font-normal leading-[1.27]">
            nesej comes from the Arabic word for “weave”. It describes how we make clothes — and how we see community.
          </p>
        </div>

        {/* Hero Image Block - 620x620 Constraint */}
        <div className="rounded-3xl overflow-hidden shadow-sm w-full max-w-[620px] h-[400px] md:h-[620px] bg-[#EAE4DC] mx-auto">
          <img 
            src="/images/group.png" 
            alt="Community group"
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Section 2: Banner with Zoomed Image */}
      <section className="relative w-full min-h-[520px] flex items-center overflow-hidden bg-[#E7E2D8] my-8 py-12 md:py-16">
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 z-0 overflow-hidden">
          <img 
            src="/images/naseg.jpg" 
            alt="Woven fabric texture" 
            className="w-full h-full object-cover object-left transform scale-[1.25] origin-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E7E2D8]/40 to-[#E7E2D8]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex justify-end">
          <div className="w-full md:w-1/2 space-y-6 text-left pl-0 md:pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredericka font-normal leading-[1.2] text-neutral-900">
              Clothes for every body and every season.
            </h2>
            
            <p className="text-neutral-700 text-[13px] font-light leading-relaxed max-w-lg">
              We make well-built everyday pieces for women, men and kids. Clothes that feel considered, but never precious. Pieces that fit into life as it really is.
            </p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-neutral-400/60 max-w-lg">
              <div>
                <span className="flex items-center gap-1.5 text-[9px] text-[#A25943] uppercase tracking-wider mb-1 font-medium">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  SIZES XS TO 4XL
                </span>
                <span className="text-xs font-medium font-serif text-neutral-900">XS-4XL</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-[9px] text-[#A25943] uppercase tracking-wider mb-1 font-medium">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  100% ORGANIC COTTON
                </span>
                <span className="text-xs font-medium font-serif text-neutral-900">100%</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-[9px] text-[#A25943] uppercase tracking-wider mb-1 font-medium">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  EASY 14-DAY RETURNS
                </span>
                <span className="text-xs font-medium font-serif text-neutral-900">14 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quote / Weave Concept */}
      <section className="px-8 py-16 lg:py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fredericka font-normal text-neutral-900 leading-tight">
            Over, under, together.
          </h3>
        </div>
        <div className="space-y-4">
          <p className="text-[#1C1B1A] text-[14px] md:text-[15px] font-normal leading-relaxed">
            Every garment is threads crossing over and under each other. That is our idea of community too: different people, held together.
          </p>
          <p className="text-[#1C1B1A] text-[13px] font-normal leading-relaxed">
            Vertical threads: structure and quality.
          </p>
          <p className="text-[#1C1B1A] text-[13px] font-normal leading-relaxed">
            Horizontal threads: warmth and the human hand.
          </p>
        </div>
      </section>

      {/* Section 4: Three Principles */}
      <section className="bg-[#F7F4EE] py-16 lg:py-20">
        <div className="px-8 max-w-7xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-fredericka font-normal text-[#C86D51]">
              Warm. Honest. Quietly confident.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-sm max-w-[620px] w-full mx-auto">
              <img 
                src="/images/sweaters.png" 
                alt="Sweaters and knitwear" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl md:text-4xl font-serif font-normal text-neutral-800 leading-snug">
                These three principles shape every piece we make.
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E2B3A3] text-[#C86D51] flex items-center justify-center shrink-0 mt-0.5 bg-[#FAF7F2]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 text-[15px]">Welcoming</h4>
                    <p className="text-neutral-600 text-[12px] font-light mt-0.5">Made for different ages, bodies and ways of living.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E2B3A3] text-[#C86D51] flex items-center justify-center shrink-0 mt-0.5 bg-[#FAF7F2]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387M20.25 14.15a2.18 2.18 0 01-.75 1.661M3.75 14.15v-5.444c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m-5.25 8.006c-.485-.216-.825-.698-.825-1.258V8.706c0-.56.34-1.042.825-1.258m16.5 0c.485.216.825.698.825 1.258v5.444c0 .56-.34 1.042-.825 1.258M9 6.75V4.5a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 4.5v2.25m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 text-[15px]">Crafted</h4>
                    <p className="text-neutral-600 text-[12px] font-light mt-0.5">Attention to fabric, fit and finish. Details are the luxury.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E2B3A3] text-[#C86D51] flex items-center justify-center shrink-0 mt-0.5 bg-[#FAF7F2]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 text-[15px]">Timeless</h4>
                    <p className="text-neutral-600 text-[12px] font-light mt-0.5">Simple pieces and colours that outlive the season.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Details are the luxury */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h3 className="text-4xl md:text-5xl font-fredericka font-normal">Details are the luxury.</h3>
          <p className="text-neutral-800 text-[13px] font-normal">Thoughtfully constructed features built to last through every wear and wash.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-xs">
              <img src="/images/img1.png" alt="Weave texture" className="w-full h-full object-cover" />
            </div>
            <span className="block text-[10px] text-red-700 uppercase font-semibold tracking-wider">WEAVE</span>
            <p className="text-neutral-800 text-[12px] font-normal">The true foundation of every garment.</p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-xs">
              <img src="/images/img2.png" alt="Finish details" className="w-full h-full object-cover" />
            </div>
            <span className="block text-[10px] text-red-700 uppercase font-semibold tracking-wider">FINISH</span>
            <p className="text-neutral-800 text-[12px] font-normal">Stronger seams, and movement.</p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-xs">
              <img src="/images/img3.png" alt="Soft touch fabric" className="w-full h-full object-cover" />
            </div>
            <span className="block text-[10px] text-red-700 uppercase font-semibold tracking-wider">TOUCH</span>
            <p className="text-neutral-800 text-[12px] font-normal">Small touches that make a garment stay.</p>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Banner */}
      <section className="w-full bg-gradient-to-b from-[#A25943] to-[#0B0B0B] py-20 md:py-28 px-8 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-[64px] font-fredericka font-normal leading-tight md:leading-[69px] tracking-[-1.61px] text-white/95">
            Soft cotton, cut for real life.
          </h2>
          <div>
            <button 
              onClick={onNavigateToShop}
              className="inline-block bg-[#1E1E1E] text-white border border-neutral-700/80 rounded-full px-9 py-3.5 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer shadow-md"
            >
              Shop new arrivals
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
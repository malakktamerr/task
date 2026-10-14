
// import React, { useState } from 'react';
// import OurStory from './OurStory'; 

// const productsData = [
//   {
//     id: 1,
//     title: 'Relaxed linen shirt',
//     colorsDetails: 'Oat · XS S M L XL',
//     price: 1250,
//     priceText: 'EGP 1,250',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
//     category: 'Shirt',
//     sizes: ['XS', 'S', 'M', 'L', 'XL'],
//   },
//   {
//     id: 2,
//     title: 'Soft rib tee',
//     colorsDetails: 'Cream · XS S M L XL',
//     price: 720,
//     priceText: 'EGP 720',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80',
//     category: 'Tee',
//     sizes: ['XS', 'S', 'M', 'L', 'XL'],
//   },
//   {
//     id: 3,
//     title: 'Woven midi dress',
//     colorsDetails: 'Oat · XS S M L XL',
//     price: 1050,
//     priceText: 'EGP 1,050',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
//     category: 'Dress',
//     sizes: ['XS', 'S', 'M', 'L', 'XL'],
//   },
//   {
//     id: 4,
//     title: 'Cotton pull-on skirt',
//     colorsDetails: 'Sky · XS S M L',
//     price: 1150,
//     priceText: 'EGP 1,150',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80',
//     category: 'Skirt',
//     sizes: ['XS', 'S', 'M', 'L'],
//   },
//   {
//     id: 5,
//     title: 'Brushed cotton shirt',
//     colorsDetails: 'Moss · S M L XL XXL',
//     price: 1320,
//     priceText: 'EGP 1,320',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80',
//     category: 'Shirt',
//     sizes: ['S', 'M', 'L', 'XL', 'XXL'],
//   },
//   {
//     id: 6,
//     title: 'Loopback sweatshirt',
//     colorsDetails: 'Ink · S M L XL',
//     price: 1360,
//     priceText: 'EGP 1,360',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&auto=format&fit=crop&q=80',
//     category: 'Sweatshirt',
//     sizes: ['S', 'M', 'L', 'XL'],
//   },
//   {
//     id: 7,
//     title: 'Textured knit polo',
//     colorsDetails: 'Clay · S M L XL',
//     price: 1550,
//     priceText: 'EGP 1,550',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80',
//     category: 'Polo',
//     sizes: ['S', 'M', 'L', 'XL'],
//   },
//   {
//     id: 8,
//     title: 'Play all-day tee',
//     colorsDetails: 'Sky · 2-3 4-5 6-7 8-9 10-11',
//     price: 480,
//     priceText: 'EGP 480',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80',
//     category: 'Kids',
//     sizes: ['S', 'M'],
//   },
//   {
//     id: 9,
//     title: 'Cloud soft cardigan',
//     colorsDetails: 'Rust · 2-3 4-5 6-7 8-9 10-11',
//     price: 950,
//     priceText: 'EGP 950',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80',
//     category: 'Cardigan',
//     sizes: ['XS', 'S', 'M'],
//   },
//   {
//     id: 10,
//     title: 'Sunny day overshirt',
//     colorsDetails: 'Sage · 4-5 6-7 8-9 10-11',
//     price: 760,
//     priceText: 'EGP 760',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
//     category: 'Shirt',
//     sizes: ['S', 'M', 'L'],
//   },
// ];

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('shop'); // 'shop' or 'story'
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedSize, setSelectedSize] = useState('All');
//   const [priceLimit, setPriceLimit] = useState(2000);
//   const [favorites, setFavorites] = useState({});
//   const [sortBy, setSortBy] = useState('Featured');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleFavorite = (id) => {
//     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleClearFilters = () => {
//     setSelectedCategory('All');
//     setSelectedSize('All');
//     setPriceLimit(2000);
//     setSortBy('Featured');
//   };

//   const handleNavClick = (page) => {
//     setCurrentPage(page);
//     setIsMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const filteredProducts = productsData
//     .filter((item) => {
//       const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
//       const matchSize = selectedSize === 'All' || item.sizes.includes(selectedSize);
//       const matchPrice = item.price <= priceLimit;
//       return matchCategory && matchSize && matchPrice;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'Price: Low to High') return a.price - b.price;
//       if (sortBy === 'Price: High to Low') return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      
//       {/* Fixed Header Container */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xs">
        
//         {/* Animated Marquee Announcement Bar */}
//         <div className="w-full bg-black text-white py-2.5 overflow-hidden whitespace-nowrap relative">
//           <style>{`
//             @keyframes marquee {
//               0% { transform: translateX(0%); }
//               100% { transform: translateX(-50%); }
//             }
//             .animate-marquee-smooth {
//               display: inline-flex;
//               animation: marquee 20s linear infinite;
//             }
//             .animate-marquee-smooth:hover {
//               animation-play-state: paused;
//             }
//           `}</style>

//           <div className="animate-marquee-smooth gap-8 text-[12px] font-normal leading-[22.5px] tracking-[0.64px]">
//             <span className="shrink-0">Free delivery over EGP 2,000</span>
//             <span className="shrink-0 opacity-50">•</span>
//             <span className="shrink-0">Easy 14-day returns</span>
//             <span className="shrink-0 opacity-50">•</span>
//             <span className="shrink-0">Cash on delivery available</span>
//             <span className="shrink-0 opacity-50">•</span>
//             <span className="shrink-0">Free delivery over EGP 2,000</span>
//             <span className="shrink-0 opacity-50">•</span>
//             <span className="shrink-0">Easy 14-day returns</span>
//             <span className="shrink-0 opacity-50">•</span>
//             <span className="shrink-0">Cash on delivery available</span>
//             <span className="shrink-0 opacity-50">•</span>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div className="w-full border-b border-neutral-200 px-4 md:px-8 py-4 bg-white shadow-xs">
//           <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
            
//             {/* Left Side: Mobile Menu Button & Desktop Navigation */}
//             <div className="flex items-center gap-4">
//               {/* Hamburger Button (Mobile Only) */}
//               <button 
//                 onClick={() => setIsMobileMenuOpen(true)}
//                 aria-label="Open Menu"
//                 className="md:hidden flex items-center gap-1.5 text-neutral-900 p-1 cursor-pointer"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//                 <span className="text-xs uppercase font-medium tracking-wider">Menu</span>
//               </button>

//               {/* Desktop Navigation Links */}
//               <nav className="hidden md:flex items-center gap-6 text-[13px] text-neutral-600 font-semibold">
//                 <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Women</button>
//                 <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Men</button>
//                 <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Kids</button>
//                 <button onClick={() => handleNavClick('shop')} className={`hover:text-black transition-colors cursor-pointer ${currentPage === 'shop' ? 'font-medium text-black' : ''}`}>Shop all</button>
//                 <button onClick={() => handleNavClick('story')} className={`hover:text-black transition-colors cursor-pointer ${currentPage === 'story' ? 'font-semibold text-black' : ''}`}>Our story</button>
//                 <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Contact</button>
//               </nav>
//             </div>

//             {/* Logo */}
//             <button 
//               onClick={() => handleNavClick('shop')} 
//               className="border border-neutral-800 rounded-xl px-5 md:px-7 py-1.5 md:py-2 text-[10px] md:text-[11px] tracking-widest uppercase font-semibold text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer"
//             >
//               LOGO
//             </button>

//             {/* Right Side Icons */}
//             <div className="flex items-center gap-4 md:gap-6 text-neutral-900">
//               <button aria-label="Search" className="hover:opacity-60 transition-opacity p-1 cursor-pointer">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                 </svg>
//               </button>

//               <button aria-label="Profile" className="hidden sm:block hover:opacity-60 transition-opacity p-1 cursor-pointer">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
//                 </svg>
//               </button>

//               <button aria-label="Bag" className="hover:opacity-60 transition-opacity p-1 cursor-pointer">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
//                 </svg>
//               </button>
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* Mobile Sidebar (Drawer) Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 flex md:hidden">
//           <div 
//             className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />

//           <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col p-6">
//             <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
//               <span className="text-xs uppercase tracking-widest font-semibold text-neutral-400">Menu</span>
//               <button 
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 aria-label="Close Menu"
//                 className="p-1 text-neutral-800 hover:text-black cursor-pointer"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <nav className="flex flex-col gap-6 pt-8 text-base font-normal text-neutral-800">
//               <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Women</button>
//               <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Men</button>
//               <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Kids</button>
//               <button onClick={() => handleNavClick('shop')} className={`text-left hover:text-black transition-colors cursor-pointer ${currentPage === 'shop' ? 'font-semibold text-black' : ''}`}>Shop all</button>
//               <button onClick={() => handleNavClick('story')} className={`text-left hover:text-black transition-colors cursor-pointer ${currentPage === 'story' ? 'font-semibold text-black' : ''}`}>Our story</button>
//               <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Contact</button>
//             </nav>

//             <div className="mt-auto pt-6 border-t border-neutral-200 text-xs text-neutral-400 font-light">
//               MOSS Egypt — Woven for everyone.
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Dynamic Page Content with pt-[140px] to prevent overlapping with fixed header */}
//       {currentPage === 'shop' ? (
//         <main className="w-full px-4 md:px-8 py-6 bg-white grow max-w-7xl mx-auto pt-[130px] md:pt-[140px]">
//           <div className="text-[12px] text-neutral-600 mb-6 font-normal">
//             Home / Shop all / <span className="text-[#1C1B1A] font-semibold">New arrivals</span>
//           </div>

//           <div className="mb-8 space-y-3">
//             <h1 className="text-4xl md:text-6xl font-semibold text-[#1C1B1A] tracking-tight leading-tight">
//               shop all
//             </h1>
//             <p className="text-[#1C1B1A] font-normal text-[13px] md:text-[15px] max-w-2xl leading-[1.4]">
//               Well-made everyday pieces in soft fabrics and easy shapes, ready to become your own.
//             </p>
//           </div>

//           <div className="w-full flex items-center justify-between pb-4 mb-8 border-b border-neutral-200">
//             <div className="text-neutral-500 text-[11px]">{filteredProducts.length} items</div>
//             <div className="flex items-center gap-2">
//               <span className="text-neutral-500 text-[11px]">Sort by</span>
//               <select 
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="bg-white border border-neutral-300 rounded-full px-4 py-1.5 text-[11px] outline-none cursor-pointer"
//               >
//                 <option value="Featured">Featured</option>
//                 <option value="Price: Low to High">Price: Low to High</option>
//                 <option value="Price: High to Low">Price: High to Low</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-8">
//             <aside className="w-full lg:w-64 space-y-6 shrink-0">
//               <h2 className="text-lg font-normal text-neutral-900 mb-4">Filter</h2>

//               <div className="space-y-1.5">
//                 <label className="block text-neutral-600 text-[11px]">Category</label>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="w-full bg-white border border-neutral-300 rounded-full px-3 py-2 text-[11px] outline-none cursor-pointer"
//                 >
//                   <option value="All">All</option>
//                   <option value="Shirt">Shirt</option>
//                   <option value="Tee">Tee</option>
//                   <option value="Dress">Dress</option>
//                   <option value="Skirt">Skirt</option>
//                   <option value="Sweatshirt">Sweatshirt</option>
//                   <option value="Polo">Polo</option>
//                   <option value="Kids">Kids</option>
//                   <option value="Cardigan">Cardigan</option>
//                 </select>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="block text-neutral-600 text-[11px]">Size</label>
//                 <select
//                   value={selectedSize}
//                   onChange={(e) => setSelectedSize(e.target.value)}
//                   className="w-full bg-white border border-neutral-300 rounded-full px-3 py-2 text-[11px] outline-none cursor-pointer"
//                 >
//                   <option value="All">All</option>
//                   <option value="XS">XS</option>
//                   <option value="S">S</option>
//                   <option value="M">M</option>
//                   <option value="L">L</option>
//                   <option value="XL">XL</option>
//                   <option value="XXL">XXL</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="block text-neutral-600 text-[11px]">Colour</label>
//                 <div className="flex flex-wrap gap-2 items-center">
//                   <button className="w-5 h-5 rounded-full bg-[#D8D8D8] border border-neutral-300 cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#E5DEC9] border border-neutral-200 cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#F5EFEB] border border-neutral-200 cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#C85A32] cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#A8C2D8] cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#3B5438] cursor-pointer" />
//                   <button className="w-5 h-5 rounded-full bg-[#1C1C1C] cursor-pointer" />
//                 </div>
//               </div>

//               <div className="space-y-2 pt-2">
//                 <label className="block text-neutral-600 text-[11px]">Up to EGP {Number(priceLimit).toLocaleString()}</label>
//                 <input
//                   type="range"
//                   min="400"
//                   max="2000"
//                   step="50"
//                   value={priceLimit}
//                   onChange={(e) => setPriceLimit(Number(e.target.value))}
//                   className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
//                 />
//               </div>

//               <button
//                 onClick={handleClearFilters}
//                 className="text-[11px] text-neutral-500 hover:text-neutral-900 underline underline-offset-2 pt-2 block cursor-pointer"
//               >
//                 Clear filters
//               </button>
//             </aside>

//             <div className="grow">
//               {filteredProducts.length === 0 ? (
//                 <div className="py-16 text-center text-neutral-500 text-sm">
//                   No products match your selected filters.
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//                   {filteredProducts.map((item) => (
//                     <div key={item.id} className="group flex flex-col">
//                       <div className="relative aspect-[3/4] bg-neutral-100 rounded-2xl overflow-hidden mb-3">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />

//                         {item.isNew && (
//                           <span className="absolute top-3 left-3 bg-red-700 text-white text-[9px] px-2 py-0.5 rounded-full font-light">
//                             New
//                           </span>
//                         )}

//                         <button
//                           onClick={() => toggleFavorite(item.id)}
//                           className="absolute top-3 right-3 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-neutral-700 hover:bg-white shadow-sm transition-colors cursor-pointer"
//                         >
//                           <svg
//                             className="w-3.5 h-3.5"
//                             fill={favorites[item.id] ? '#1C1C1C' : 'none'}
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="1.5"
//                               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 000-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                             />
//                           </svg>
//                         </button>
//                       </div>

//                       <h3 className="text-[12px] font-medium text-neutral-900 group-hover:underline leading-snug">
//                         {item.title}
//                       </h3>
//                       <p className="text-[10px] text-neutral-400 font-light mt-0.5 mb-1">
//                         {item.colorsDetails}
//                       </p>
//                       <p className="text-[11px] font-semibold text-neutral-900">
//                         {item.priceText}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       ) : (
//         <div className="pt-[130px] md:pt-[140px] grow">
//           <OurStory onNavigateToShop={() => setCurrentPage('shop')} />
//         </div>
//       )}

//       {/* Shared Dark Footer */}
//       <footer className="w-full bg-[#0C0C0C] text-neutral-300 pt-16 pb-12 px-4 md:px-8 mt-auto">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16">
//             <div className="md:col-span-2 space-y-4">
//               <div className="inline-block border border-neutral-400 text-white rounded-full px-5 py-1 text-[10px] tracking-widest uppercase font-medium">
//                 LOGO
//               </div>
//               <h2 className="text-white text-lg font-normal tracking-tight">
//                 Woven for everyone.
//               </h2>
//               <p className="text-neutral-400 text-[11px] font-light max-w-sm leading-relaxed">
//                 Everyday clothes, thoughtfully made for every body.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Shop</h3>
//               <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
//                 <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Women</button></li>
//                 <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Men</button></li>
//                 <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Kids</button></li>
//                 <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">New arrivals</button></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Help</h3>
//               <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
//                 <li><a href="#" className="hover:text-white">Your bag</a></li>
//                 <li><a href="#" className="hover:text-white">Delivery & returns</a></li>
//                 <li><a href="#" className="hover:text-white">Size guide</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Brand</h3>
//               <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
//                 <li><button onClick={() => setCurrentPage('story')} className="hover:text-white text-left cursor-pointer">Our story</button></li>
//                 <li><a href="#" className="hover:text-white">Materials</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-neutral-800 pt-8 text-[10px] text-neutral-500 font-light">
//             © 2026 MOSS. Made with care in Egypt.
//           </div>
//         </div>
//       </footer> 

//     </div>
//   );
// }

import React, { useState } from 'react';
import OurStory from './OurStory'; 

const productsData = [
  {
    id: 1,
    title: 'Relaxed linen shirt',
    colorsDetails: 'Oat · XS S M L XL',
    price: 1250,
    priceText: 'EGP 1,250',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    category: 'Shirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    title: 'Soft rib tee',
    colorsDetails: 'Cream · XS S M L XL',
    price: 720,
    priceText: 'EGP 720',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80',
    category: 'Tee',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Woven midi dress',
    colorsDetails: 'Oat · XS S M L XL',
    price: 1050,
    priceText: 'EGP 1,050',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
    category: 'Dress',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    title: 'Cotton pull-on skirt',
    colorsDetails: 'Sky · XS S M L',
    price: 1150,
    priceText: 'EGP 1,150',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80',
    category: 'Skirt',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 5,
    title: 'Brushed cotton shirt',
    colorsDetails: 'Moss · S M L XL XXL',
    price: 1320,
    priceText: 'EGP 1,320',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80',
    category: 'Shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 6,
    title: 'Loopback sweatshirt',
    colorsDetails: 'Ink · S M L XL',
    price: 1360,
    priceText: 'EGP 1,360',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&auto=format&fit=crop&q=80',
    category: 'Sweatshirt',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    title: 'Textured knit polo',
    colorsDetails: 'Clay · S M L XL',
    price: 1550,
    priceText: 'EGP 1,550',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80',
    category: 'Polo',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    title: 'Play all-day tee',
    colorsDetails: 'Sky · 2-3 4-5 6-7 8-9 10-11',
    price: 480,
    priceText: 'EGP 480',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80',
    category: 'Kids',
    sizes: ['S', 'M'],
  },
  {
    id: 9,
    title: 'Cloud soft cardigan',
    colorsDetails: 'Rust · 2-3 4-5 6-7 8-9 10-11',
    price: 950,
    priceText: 'EGP 950',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80',
    category: 'Cardigan',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 10,
    title: 'Sunny day overshirt',
    colorsDetails: 'Sage · 4-5 6-7 8-9 10-11',
    price: 760,
    priceText: 'EGP 760',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    category: 'Shirt',
    sizes: ['S', 'M', 'L'],
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('shop'); // 'shop' or 'story'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [priceLimit, setPriceLimit] = useState(2000);
  const [favorites, setFavorites] = useState({});
  const [sortBy, setSortBy] = useState('Featured');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedSize('All');
    setPriceLimit(2000);
    setSortBy('Featured');
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = productsData
    .filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchSize = selectedSize === 'All' || item.sizes.includes(selectedSize);
      const matchPrice = item.price <= priceLimit;
      return matchCategory && matchSize && matchPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      
      {/* Sticky Header Container */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-xs">
        
        {/* Animated Marquee Announcement Bar */}
        <div className="w-full bg-black text-white py-2.5 overflow-hidden whitespace-nowrap relative">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-smooth {
              display: inline-flex;
              animation: marquee 20s linear infinite;
            }
            .animate-marquee-smooth:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="animate-marquee-smooth gap-8 text-[12px] font-normal leading-[22.5px] tracking-[0.64px]">
            <span className="shrink-0">Free delivery over EGP 2,000</span>
            <span className="shrink-0 opacity-50">•</span>
            <span className="shrink-0">Easy 14-day returns</span>
            <span className="shrink-0 opacity-50">•</span>
            <span className="shrink-0">Cash on delivery available</span>
            <span className="shrink-0 opacity-50">•</span>
            <span className="shrink-0">Free delivery over EGP 2,000</span>
            <span className="shrink-0 opacity-50">•</span>
            <span className="shrink-0">Easy 14-day returns</span>
            <span className="shrink-0 opacity-50">•</span>
            <span className="shrink-0">Cash on delivery available</span>
            <span className="shrink-0 opacity-50">•</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full border-b border-neutral-200 px-4 md:px-8 py-4 bg-white shadow-xs">
          <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
            
            {/* Left Side: Mobile Menu Button & Desktop Navigation */}
            <div className="flex items-center gap-4">
              {/* Hamburger Button (Mobile Only) */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
                className="md:hidden flex items-center gap-1.5 text-neutral-900 p-1 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="text-xs uppercase font-medium tracking-wider">Menu</span>
              </button>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-6 text-[13px] text-neutral-600 font-semibold">
                <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Women</button>
                <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Men</button>
                <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Kids</button>
                <button onClick={() => handleNavClick('shop')} className={`hover:text-black transition-colors cursor-pointer ${currentPage === 'shop' ? 'font-medium text-black' : ''}`}>Shop all</button>
                <button onClick={() => handleNavClick('story')} className={`hover:text-black transition-colors cursor-pointer ${currentPage === 'story' ? 'font-semibold text-black' : ''}`}>Our story</button>
                <button onClick={() => handleNavClick('shop')} className="hover:text-black transition-colors cursor-pointer">Contact</button>
              </nav>
            </div>

            {/* Logo */}
            <button 
              onClick={() => handleNavClick('shop')} 
              className="border border-neutral-800 rounded-xl px-5 md:px-7 py-1.5 md:py-2 text-[10px] md:text-[11px] tracking-widest uppercase font-semibold text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              LOGO
            </button>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 md:gap-6 text-neutral-900">
              <button aria-label="Search" className="hover:opacity-60 transition-opacity p-1 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              <button aria-label="Profile" className="hidden sm:block hover:opacity-60 transition-opacity p-1 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>

              <button aria-label="Bag" className="hover:opacity-60 transition-opacity p-1 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Sidebar (Drawer) Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col p-6">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-400">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="p-1 text-neutral-800 hover:text-black cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 pt-8 text-base font-normal text-neutral-800">
              <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Women</button>
              <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Men</button>
              <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Kids</button>
              <button onClick={() => handleNavClick('shop')} className={`text-left hover:text-black transition-colors cursor-pointer ${currentPage === 'shop' ? 'font-semibold text-black' : ''}`}>Shop all</button>
              <button onClick={() => handleNavClick('story')} className={`text-left hover:text-black transition-colors cursor-pointer ${currentPage === 'story' ? 'font-semibold text-black' : ''}`}>Our story</button>
              <button onClick={() => handleNavClick('shop')} className="text-left hover:text-black transition-colors cursor-pointer">Contact</button>
            </nav>

            <div className="mt-auto pt-6 border-t border-neutral-200 text-xs text-neutral-400 font-light">
              MOSS Egypt — Woven for everyone.
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Page Content */}
      {currentPage === 'shop' ? (
        <main className="w-full px-4 md:px-8 py-6 bg-white grow max-w-7xl mx-auto">
          <div className="text-[12px] text-neutral-600 mb-6 font-normal">
            Home / Shop all / <span className="text-[#1C1B1A] font-semibold">New arrivals</span>
          </div>

          <div className="mb-8 space-y-3">
            <h1 className="text-4xl md:text-6xl font-semibold text-[#1C1B1A] tracking-tight leading-tight">
              shop all
            </h1>
            <p className="text-[#1C1B1A] font-normal text-[13px] md:text-[15px] max-w-2xl leading-[1.4]">
              Well-made everyday pieces in soft fabrics and easy shapes, ready to become your own.
            </p>
          </div>

          <div className="w-full flex items-center justify-between pb-4 mb-8 border-b border-neutral-200">
            <div className="text-neutral-500 text-[11px]">{filteredProducts.length} items</div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-[11px]">Sort by</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-neutral-300 rounded-full px-4 py-1.5 text-[11px] outline-none cursor-pointer"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 space-y-6 shrink-0">
              <h2 className="text-lg font-normal text-neutral-900 mb-4">Filter</h2>

              <div className="space-y-1.5">
                <label className="block text-neutral-600 text-[11px]">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-full px-3 py-2 text-[11px] outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Tee">Tee</option>
                  <option value="Dress">Dress</option>
                  <option value="Skirt">Skirt</option>
                  <option value="Sweatshirt">Sweatshirt</option>
                  <option value="Polo">Polo</option>
                  <option value="Kids">Kids</option>
                  <option value="Cardigan">Cardigan</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-neutral-600 text-[11px]">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-full px-3 py-2 text-[11px] outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-neutral-600 text-[11px]">Colour</label>
                <div className="flex flex-wrap gap-2 items-center">
                  <button className="w-5 h-5 rounded-full bg-[#D8D8D8] border border-neutral-300 cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#E5DEC9] border border-neutral-200 cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#F5EFEB] border border-neutral-200 cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#C85A32] cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#A8C2D8] cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#3B5438] cursor-pointer" />
                  <button className="w-5 h-5 rounded-full bg-[#1C1C1C] cursor-pointer" />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-neutral-600 text-[11px]">Up to EGP {Number(priceLimit).toLocaleString()}</label>
                <input
                  type="range"
                  min="400"
                  max="2000"
                  step="50"
                  value={priceLimit}
                  onChange={(e) => setPriceLimit(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <button
                onClick={handleClearFilters}
                className="text-[11px] text-neutral-500 hover:text-neutral-900 underline underline-offset-2 pt-2 block cursor-pointer"
              >
                Clear filters
              </button>
            </aside>

            <div className="grow">
              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center text-neutral-500 text-sm">
                  No products match your selected filters.
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((item) => (
                    <div key={item.id} className="group flex flex-col">
                      <div className="relative aspect-[3/4] bg-neutral-100 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {item.isNew && (
                          <span className="absolute top-3 left-3 bg-red-700 text-white text-[9px] px-2 py-0.5 rounded-full font-light">
                            New
                          </span>
                        )}

                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="absolute top-3 right-3 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-neutral-700 hover:bg-white shadow-sm transition-colors cursor-pointer"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill={favorites[item.id] ? '#1C1C1C' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>

                      <h3 className="text-[12px] font-medium text-neutral-900 group-hover:underline leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-neutral-400 font-light mt-0.5 mb-1">
                        {item.colorsDetails}
                      </p>
                      <p className="text-[11px] font-semibold text-neutral-900">
                        {item.priceText}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        <div className="grow">
          <OurStory onNavigateToShop={() => setCurrentPage('shop')} />
        </div>
      )}

      {/* Shared Dark Footer */}
      <footer className="w-full bg-[#0C0C0C] text-neutral-300 pt-16 pb-12 px-4 md:px-8 mt-auto">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16">
            <div className="md:col-span-2 space-y-4">
              <div className="inline-block border border-neutral-400 text-white rounded-full px-5 py-1 text-[10px] tracking-widest uppercase font-medium">
                LOGO
              </div>
              <h2 className="text-white text-lg font-normal tracking-tight">
                Woven for everyone.
              </h2>
              <p className="text-neutral-400 text-[11px] font-light max-w-sm leading-relaxed">
                Everyday clothes, thoughtfully made for every body.
              </p>
            </div>

            <div>
              <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Shop</h3>
              <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Women</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Men</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">Kids</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white text-left cursor-pointer">New arrivals</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Help</h3>
              <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
                <li><a href="#" className="hover:text-white">Your bag</a></li>
                <li><a href="#" className="hover:text-white">Delivery & returns</a></li>
                <li><a href="#" className="hover:text-white">Size guide</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-[11px] uppercase tracking-wider mb-4 font-normal">Brand</h3>
              <ul className="space-y-2.5 text-[11px] text-neutral-400 font-light">
                <li><button onClick={() => setCurrentPage('story')} className="hover:text-white text-left cursor-pointer">Our story</button></li>
                <li><a href="#" className="hover:text-white">Materials</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-[10px] text-neutral-500 font-light">
            © 2026 MOSS. Made with care in Egypt.
          </div>
        </div>
      </footer> 

    </div>
  );
}
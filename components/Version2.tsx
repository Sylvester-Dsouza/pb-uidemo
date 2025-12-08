import React, { useState, useRef } from 'react';
import { Star, ArrowRight, Heart, Minus, Plus, ShieldCheck, Sparkles, Wind, Package, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { productData } from '../data';

const Version2: React.FC = () => {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(productData.images[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [openSection, setOpenSection] = useState<'details' | 'specs' | 'shipping' | 'reviews' | null>('details');
  const [mIndex, setMIndex] = useState(0);
  
  // Swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && mIndex < productData.images.length - 1) {
        setMIndex(mIndex + 1);
      } else if (diff < 0 && mIndex > 0) {
        setMIndex(mIndex - 1);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50/30 text-slate-900 font-instrument pb-20">

      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] right-[10%] w-[400px] h-[400px] bg-rose-200/20 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-amber-200/15 rounded-full blur-[120px] animate-pulse-soft" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-1 pb-0 sm:py-8 lg:py-20">

        {/* Breadcrumbs - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium tracking-wider text-slate-400 uppercase mb-10">
          <span className="hover:text-slate-700 cursor-pointer transition-colors">Home</span>
          <span className="text-slate-300">/</span>
          <span className="hover:text-slate-700 cursor-pointer transition-colors">Party Collection</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">Licensed Characters</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">

          {/* LEFT: Image Gallery */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:sticky lg:top-24 h-fit">

            
            {/* Mobile Gallery - Flip Card Carousel */}
            <div className="lg:hidden relative -mx-4 sm:mx-0 -mt-1">
              {/* Main Image Container */}
              <div 
                className="relative aspect-square overflow-hidden sm:rounded-2xl bg-gradient-to-br from-rose-50/50 via-white to-slate-50"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Like Button */}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`absolute top-2 right-2 z-20 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isLiked ? 'bg-rose-500 text-white scale-110' : 'bg-white text-gray-400'}`}
                >
                  <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-white' : ''}`} />
                </button>

                {/* Image Counter */}
                <div className="absolute top-2 left-2 z-20 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-medium">
                  {mIndex + 1} / {productData.images.length}
                </div>

                {/* Animated Image */}
                <div 
                  key={mIndex}
                  className="absolute inset-0 flex items-center justify-center p-4"
                  style={{
                    animation: 'flipIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <img 
                    src={productData.images[mIndex]} 
                    alt={productData.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                {/* Touch Areas for Navigation */}
                <button 
                  onClick={() => setMIndex(Math.max(0, mIndex - 1))}
                  className="absolute left-0 top-0 bottom-0 w-1/4 z-10"
                  aria-label="Previous"
                />
                <button 
                  onClick={() => setMIndex(Math.min(productData.images.length - 1, mIndex + 1))}
                  className="absolute right-0 top-0 bottom-0 w-1/4 z-10"
                  aria-label="Next"
                />
                
                {/* Side Indicators */}
                {mIndex > 0 && (
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-10 bg-slate-900/20 rounded-full" />
                )}
                {mIndex < productData.images.length - 1 && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-10 bg-slate-900/20 rounded-full" />
                )}
              </div>
              
              {/* Minimal Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {productData.images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setMIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === mIndex 
                        ? 'w-6 h-2 bg-slate-900' 
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-500'
                    }`} 
                  />
                ))}
              </div>
              
              <style>{`
                @keyframes flipIn {
                  0% { opacity: 0; transform: scale(0.9) rotateY(-10deg); }
                  100% { opacity: 1; transform: scale(1) rotateY(0); }
                }
              `}</style>
            </div>

            
            <div className="hidden lg:flex gap-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                {productData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-full border-2 overflow-hidden transition-all ${activeImg === img
                      ? 'border-rose-400 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                      }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>

              <div className="relative flex-1 aspect-square bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 flex items-center justify-center overflow-hidden group border border-slate-100 animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-rose-50/30"></div>

                <img
                  src={activeImg}
                  alt={productData.name}
                  className="relative z-10 w-full h-full object-contain transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Premium Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/90 backdrop-blur-md border border-slate-200/50 px-4 py-2 rounded-full shadow-sm">
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-700">Premium Foil</span>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group/like border border-slate-200/50"
                >
                  <Heart className={`w - 5 h - 5 transition - all ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover/like:text-rose-400'} `} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="flex flex-col animate-fade-in-up">

            

            {/* Product Title */}
            <h1 className="font-instrument text-[26px] sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.2] mb-3 sm:mb-6 tracking-tight">
              {productData.name}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-6">
              Create magical moments that last forever. Premium Italian foil balloon, perfect for unforgettable celebrations.
            </p>

            {/* Price Section */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-100 mb-6">
              {/* Price */}
              <div className="mb-4">
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-instrument text-3xl sm:text-4xl text-slate-900">₹{productData.price}</span>
                  <span className="text-base text-slate-300 line-through font-light">₹18.00</span>
                </div>
              </div>

              {/* Quantity Stepper - Own Row */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Quantity</span>
                <div className="flex items-center bg-white rounded-full px-1 py-1 shadow-sm border border-slate-200">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 sm:w-12 text-center font-semibold text-base">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-slate-900 text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 rounded-full shadow-lg shadow-slate-900/20 hover:shadow-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 group">
                <span>Add to Basket</span>
                <span className="text-slate-400">•</span>
                <span>₹{(productData.price * qty).toFixed(2)}</span>
              </button>

              {/* Stock Status */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  In Stock - Ships Tomorrow
                </span>
              </div>
            </div>

            {/* Features Grid (Compact) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center">
                  <Wind className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">Helium Ready</h3>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-md flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">Premium Finish</h3>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-md flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">Safe Materials</h3>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-50 to-rose-100 rounded-md flex items-center justify-center">
                  <Package className="w-4 h-4 text-rose-600" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">Gift Ready</h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === 'details' ? null : 'details')}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-900"
                >
                  <span>Details</span>
                  {openSection === 'details' ? <ChevronUp className="w-4 h-4 text-gray-900" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
                {openSection === 'details' && (
                  <div className="px-5 pb-5 text-sm text-gray-700 border-t border-gray-100">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Official licensed Masha and The Bear product</li>
                      <li>High-quality Italian foil manufacturing</li>
                      <li>Self-sealing valve for easy inflation</li>
                      <li>Vibrant, fade-resistant colors</li>
                      <li>Perfect for indoor and outdoor celebrations</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === 'specs' ? null : 'specs')}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-900"
                >
                  <span>Specifications</span>
                  {openSection === 'specs' ? <ChevronUp className="w-4 h-4 text-gray-900" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
                {openSection === 'specs' && (
                  <div className="px-5 pb-5 text-sm text-gray-700 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      {productData.attributes.map((attr) => (
                        <div key={attr.label}>
                          <span className="block text-gray-500 mb-1 text-xs">{attr.label}</span>
                          <span className="font-medium text-gray-900">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === 'shipping' ? null : 'shipping')}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-900"
                >
                  <span>Shipping & Returns</span>
                  {openSection === 'shipping' ? <ChevronUp className="w-4 h-4 text-gray-900" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
                {openSection === 'shipping' && (
                  <div className="px-5 pb-5 text-sm text-gray-700 border-t border-gray-100 space-y-2">
                    <p>In stock. Orders placed today ship by tomorrow.</p>
                    <p>Returns accepted within 14 days in original packaging.</p>
                    <p>Free shipping on qualifying orders.</p>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === 'reviews' ? null : 'reviews')}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-900"
                >
                  <span>Reviews</span>
                  {openSection === 'reviews' ? <ChevronUp className="w-4 h-4 text-gray-900" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
                {openSection === 'reviews' && (
                  <div className="px-5 pb-5 text-sm text-gray-700 border-t border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(productData.rating) ? 'fill-black text-black' : 'fill-gray-300 text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-black">{productData.rating} ({productData.reviews} reviews)</span>
                    </div>
                    <p>Customer reviews coming soon.</p>
                  </div>
                )}
              </div>
            </div>




          </div>
        </div>

        
      </div>

      </div>
  );
};

export default Version2;

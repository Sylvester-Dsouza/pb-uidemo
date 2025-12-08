import React, { useState } from 'react';
import { Star, Heart, Minus, Plus, Truck, ShieldCheck, Package, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { productData } from '../data';

const Version5: React.FC = () => {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(productData.images[0]);
  const [liked, setLiked] = useState(false);
  const [mIndex, setMIndex] = useState(0);
  const [variant, setVariant] = useState<'Standard' | 'Jumbo'>('Standard');

  const originalPrice = (productData.price * 1.25).toFixed(2);
  const savings = Math.round(((parseFloat(originalPrice) - productData.price) / parseFloat(originalPrice)) * 100);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-instrument">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Breadcrumbs & Badges - Hidden on mobile */}
        <div className="hidden sm:flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            <span>Party</span>
            <span>/</span>
            <span>Licensed</span>
            <span>/</span>
            <span className="text-gray-900">{productData.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold">Save {savings}%</div>
            <div className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">Fast shipping</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
            
            {/* Mobile Gallery - Polaroid Style with Swipe */}
            <div className="lg:hidden relative pb-4">
              {/* Main Polaroid Frame */}
              <div className="relative mx-auto w-[90%] max-w-[320px]">
                <div className="bg-white p-3 pb-12 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] rotate-[-2deg] transition-transform duration-500">
                  <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                    <img 
                      key={mIndex}
                      src={productData.images[mIndex]} 
                      alt={productData.name} 
                      className="w-full h-full object-contain animate-fade-in" 
                    />
                  </div>
                  {/* Polaroid Caption */}
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="font-handwriting text-gray-600 text-sm" style={{ fontFamily: 'cursive' }}>
                      ✨ Perfect for parties!
                    </span>
                  </div>
                </div>
                
                {/* Like Button */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`absolute -top-2 -right-2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
                    liked ? 'bg-red-500 text-white scale-110' : 'bg-white text-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
                </button>
                
                {/* Stacked effect behind */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg -z-10 rotate-[4deg] translate-x-2 translate-y-1 opacity-60" />
                <div className="absolute inset-0 bg-white rounded-lg shadow-md -z-20 rotate-[8deg] translate-x-4 translate-y-2 opacity-30" />
              </div>

              {/* Dot Navigation with Swipe Hint */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button 
                  onClick={() => setMIndex(Math.max(0, mIndex - 1))}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {productData.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === mIndex ? 'bg-gray-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setMIndex(Math.min(productData.images.length - 1, mIndex + 1))}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex gap-4 animate-slide-in-left">
              <div className="flex flex-col gap-3">
                {productData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-full border-2 overflow-hidden transition-all ${activeImg === img ? 'border-black shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex-1 bg-white rounded-2xl aspect-square flex items-center justify-center p-10 relative overflow-hidden border border-gray-200 shadow-sm animate-scale-in">
                <img src={activeImg} alt={productData.name} className="relative z-10 w-full h-full object-contain" />
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-black text-black' : 'text-gray-400'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-slide-in-right">
            <div className="bg-white lg:rounded-2xl lg:border border-gray-200 p-0 lg:p-8 sticky top-4">
              <div className="mb-3">
                <h1 className="text-[26px] sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-2">{productData.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(productData.rating) ? 'fill-black text-black' : 'fill-gray-300 text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{productData.rating} ({productData.reviews})</span>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold">₹{productData.price.toFixed(2)}</span>
                  <span className="text-lg text-gray-400 line-through">₹{originalPrice}</span>
                  <span className="px-2 py-1 rounded-full bg-green-600 text-white text-xs font-bold">Save {savings}%</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> In Stock</span>
                  <span>•</span>
                  <span>💵 Cash on Delivery Available</span>
                </div>
              </div>

              

              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Variation</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => setVariant('Standard')}
                    className={`px-3 py-2 rounded-full border text-xs font-semibold ${variant === 'Standard' ? 'border-black text-black bg-gray-50' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                  >
                    Standard 31"
                  </button>
                  <button
                    onClick={() => setVariant('Jumbo')}
                    className={`px-3 py-2 rounded-full border text-xs font-semibold ${variant === 'Jumbo' ? 'border-black text-black bg-gray-50' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                  >
                    Jumbo 45"
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-gray-200 overflow-hidden">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50">
                      <Minus className="w-4 h-4" />
                    </button>
                    <input value={qty} readOnly className="w-16 text-center font-semibold border-x border-gray-200 h-10" />
                    <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1 flex items-center justify-end">
                    <div className="text-sm font-semibold text-gray-900">₹{(productData.price * qty).toFixed(2)}</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <button className="w-full rounded-full bg-black text-white py-4 font-bold text-base hover:bg-gray-900 transition-all hover:scale-[1.02] transform shadow-lg shadow-black/20 flex items-center justify-center gap-2">
                    <span>Add to Cart</span>
                    <span className="text-gray-400">•</span>
                    <span>₹{(productData.price * qty).toFixed(2)}</span>
                  </button>
                  <button className="w-full rounded-full bg-white border-2 border-black text-black py-4 font-bold text-base hover:bg-gray-50 transition-all hover:scale-[1.02] transform animate-subtle-shake">
                    Buy Now — Express Shipping
                  </button>
                  <style>{`
                    @keyframes subtle-shake {
                      0%, 90% { transform: translateX(0); }
                      92% { transform: translateX(-3px); }
                      94% { transform: translateX(3px); }
                      96% { transform: translateX(-2px); }
                      98% { transform: translateX(2px); }
                      100% { transform: translateX(0); }
                    }
                    .animate-subtle-shake {
                      animation: subtle-shake 3s ease-in-out infinite;
                    }
                  `}</style>
                </div>
              </div>

              <div className="mb-5 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-600">🔥</span>
                  <span className="text-amber-800 font-medium">12 people bought this in the last hour</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-200">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                    <Package className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900">Secure Pack</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900">Quality</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                    <Truck className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                    <Lock className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900">Secure Pay</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {productData.attributes.map(attr => (
                    <div key={attr.label}>
                      <span className="block text-gray-500 mb-1 text-xs">{attr.label}</span>
                      <span className="font-medium text-gray-900">{attr.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  );
};

export default Version5;

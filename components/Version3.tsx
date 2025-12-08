import React, { useState } from 'react';
import { Star, Heart, Minus, Plus, ChevronLeft, ChevronRight, Truck, ShieldCheck, Gift, Clock, Sparkles, Check, Users, Zap, Award, Package } from 'lucide-react';
import { productData } from '../data';

const Version3: React.FC = () => {
   const [mainImage, setMainImage] = useState(productData.images[0]);
   const [quantity, setQuantity] = useState(1);
   const [isLiked, setIsLiked] = useState(false);
   const [mIndex, setMIndex] = useState(0);
   const originalPrice = (productData.price * 1.25).toFixed(2);
   const savings = (parseFloat(originalPrice) - productData.price).toFixed(2);
   const [selectedSize, setSelectedSize] = useState<'standard' | 'jumbo'>('standard');
   return (
      <div className="min-h-screen bg-white text-gray-900 font-instrument">
         
         {/* Urgency Banner */}
         <div className="bg-[#567E73] text-white py-2 px-3 text-center">
            <p className="text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
               <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
               <span><strong>Flash Sale!</strong> 20% off ends in 2:47:33</span>
               <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 hidden sm:block" />
            </p>
         </div>

         <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-1 pb-6 sm:py-6 lg:py-10">

            {/* Breadcrumbs - Hidden on mobile */}
            <div className="hidden sm:block mb-6 animate-fade-in">
               <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="hover:text-gray-900 cursor-pointer transition-colors">Home</span>
                  <span>/</span>
                  <span className="hover:text-gray-900 cursor-pointer transition-colors">Party Balloons</span>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">{productData.name}</span>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

               {/* Left: Gallery */}
               <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit animate-slide-in-left">
                  
                  {/* Mobile Gallery - Full Screen Hero with Thumbnails */}
                  <div className="lg:hidden relative -mt-1">
                     {/* Main Hero Image */}
                     <div className="relative aspect-square bg-gradient-to-b from-[#567E73]/5 to-white rounded-2xl overflow-hidden">
                        {/* Sale Badge */}
                        <div className="absolute top-2 left-2 z-20 bg-[#567E73] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                           <Sparkles className="w-3 h-3" />
                           SAVE ₹{savings}
                        </div>
                        
                        {/* Like Button */}
                        <button
                           onClick={() => setIsLiked(!isLiked)}
                           className={`absolute top-2 right-2 z-20 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isLiked ? 'bg-[#567E73] text-white scale-110' : 'bg-white text-gray-400'}`}
                        >
                           <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-white' : ''}`} />
                        </button>

                        {/* Main Image with Animation */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                           <img 
                              key={mIndex}
                              src={productData.images[mIndex]} 
                              alt={productData.name} 
                              className="w-full h-full object-contain animate-scale-in" 
                           />
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-medium">
                           {mIndex + 1} / {productData.images.length}
                        </div>
                     </div>

                     {/* Thumbnail Strip */}
                     <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        {productData.images.map((img, i) => (
                           <button
                              key={i}
                              onClick={() => setMIndex(i)}
                              className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                                 i === mIndex 
                                    ? 'ring-2 ring-[#567E73] ring-offset-1 scale-105' 
                                    : 'opacity-50 hover:opacity-80'
                              }`}
                           >
                              <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Desktop Gallery - Thumbnails on Left */}
                  <div className="hidden lg:flex gap-4">
                     {/* Thumbnails - Left Side */}
                     <div className="flex flex-col gap-3">
                        {productData.images.map((img, i) => (
                           <button
                              key={i}
                              onClick={() => setMainImage(img)}
                              className={`w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 border-2 ${mainImage === img
                                 ? 'border-[#567E73] shadow-lg'
                                 : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-[#567E73]/50'
                                 }`}
                           >
                              <img src={img} className="w-full h-full object-cover" alt={`View ${i + 1}`} />
                           </button>
                        ))}
                     </div>

                     {/* Main Image */}
                     <div className="flex-1 relative bg-white rounded-3xl aspect-square flex items-center justify-center overflow-hidden border border-gray-100 animate-scale-in">
                        {/* Sale Badge */}
                        <div className="absolute top-6 left-6 z-20">
                           <div className="bg-[#567E73] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              SAVE ₹{savings}
                           </div>
                        </div>

                        {/* Like Button */}
                        <button
                           onClick={() => setIsLiked(!isLiked)}
                           className={`absolute top-6 right-6 z-20 p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isLiked ? 'bg-[#567E73] text-white' : 'bg-white text-gray-400 hover:text-[#567E73]'}`}
                        >
                           <Heart className={`w-6 h-6 transition-all ${isLiked ? 'fill-white' : ''}`} />
                        </button>

                        <img
                           src={mainImage}
                           className="relative z-10 w-full h-full object-contain p-8 transition-all duration-700 hover:scale-105"
                           alt={productData.name}
                        />
                     </div>
                  </div>

                  {/* Social Proof - Desktop */}
                  <div className="hidden lg:flex items-center justify-center gap-6 mt-8 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                     <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                           <div className="w-8 h-8 rounded-full bg-[#567E73]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">A</div>
                           <div className="w-8 h-8 rounded-full bg-[#6B9389]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">M</div>
                           <div className="w-8 h-8 rounded-full bg-[#7BA89D]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">S</div>
                        </div>
                        <span className="text-sm text-gray-600"><strong className="text-gray-900">127 people</strong> bought this today</span>
                     </div>
                     <div className="w-px h-6 bg-gray-200"></div>
                     <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#567E73]" />
                        <span className="text-sm text-gray-600"><strong className="text-gray-900">23 viewing</strong> right now</span>
                     </div>
                  </div>
               </div>

               {/* Right: Product Details */}
               <div className="lg:col-span-5 animate-slide-in-right">
                  <div className="lg:sticky lg:top-6 bg-gray-50/70 lg:rounded-3xl lg:p-8">
                     
                     {/* Trust Badge */}
                     <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-[#567E73]/10 rounded-full">
                           <Check className="w-3.5 h-3.5 text-[#567E73]" />
                           <span className="text-xs font-semibold text-[#567E73]">Verified Seller</span>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-[#567E73]/20 rounded-full">
                           <Award className="w-3.5 h-3.5 text-[#4a6d63]" />
                           <span className="text-xs font-semibold text-[#4a6d63]">Best Seller</span>
                        </div>
                     </div>

                     {/* Product Title */}
                     <h1 className="text-[26px] sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
                        {productData.name}
                     </h1>

                     {/* Rating */}
                     <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1">
                           {[1, 2, 3, 4, 5].map(s => (
                              <Star
                                 key={s}
                                 className={`w-5 h-5 ${s <= Math.floor(productData.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
                              />
                           ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{productData.rating}</span>
                        <span className="text-sm text-gray-500">({productData.reviews} happy customers)</span>
                     </div>

                     {/* Price Section */}
                     <div className="bg-[#567E73]/5 rounded-2xl p-5 mb-6 border border-[#567E73]/20">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-4xl font-bold text-gray-900">₹{productData.price}</span>
                           <span className="text-xl text-gray-400 line-through">₹{originalPrice}</span>
                           <span className="px-3 py-1 bg-[#567E73] text-white text-sm font-bold rounded-full">20% OFF</span>
                        </div>
                        <p className="text-sm text-[#4a6d63] font-medium flex items-center gap-1.5">
                           <Clock className="w-4 h-4" />
                           Sale ends soon — Only 8 left at this price!
                        </p>
                     </div>

                     {/* Emotional Description */}
                     <div className="mb-6">
                        <p className="text-sm text-gray-600 leading-relaxed">
                           <span className="text-gray-900 font-medium">Make their eyes light up!</span> Perfect for creating magical birthday moments. 🎈✨
                        </p>
                     </div>

                     {/* Size Selection */}
                     <div className="mb-5">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Size</h3>
                        <div className="flex gap-2">
                           <button 
                              onClick={() => setSelectedSize('standard')}
                              className={`flex-1 px-3 py-2 rounded-lg border text-sm transition-all ${selectedSize === 'standard' ? 'border-[#567E73] bg-[#567E73]/5 text-gray-900 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                           >
                              31" Standard
                           </button>
                           <button 
                              onClick={() => setSelectedSize('jumbo')}
                              className={`flex-1 px-3 py-2 rounded-lg border text-sm transition-all relative ${selectedSize === 'jumbo' ? 'border-[#567E73] bg-[#567E73]/5 text-gray-900 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                           >
                              45" Jumbo
                              <span className="absolute -top-1.5 -right-1.5 bg-[#567E73] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">HOT</span>
                           </button>
                        </div>
                     </div>

                     {/* Quantity & Add to Cart */}
                     <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                              <button
                                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                 className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-700"
                              >
                                 <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                              <button
                                 onClick={() => setQuantity(quantity + 1)}
                                 className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-700"
                              >
                                 <Plus className="w-4 h-4" />
                              </button>
                           </div>
                           <div className="text-sm text-gray-600">
                              Total: <span className="font-bold text-gray-900 text-lg">₹{(productData.price * quantity).toFixed(2)}</span>
                           </div>
                        </div>

                        <button className="w-full bg-[#567E73] text-white py-4 rounded-full font-bold text-base shadow-xl shadow-[#567E73]/30 hover:shadow-2xl hover:shadow-[#567E73]/40 hover:bg-[#4a6d63] transition-all duration-300 hover:scale-[1.02] transform flex items-center justify-center gap-2 mb-3">
                           <Gift className="w-5 h-5" />
                           Add to Cart
                        </button>

                        <button className="w-full bg-gray-900 text-white py-4 rounded-full font-bold text-base hover:bg-gray-800 transition-all animate-subtle-pulse">
                           Buy Now — Express Shipping
                        </button>
                        <style>{`
                          @keyframes subtle-pulse {
                            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(17, 24, 39, 0.4); }
                            50% { transform: scale(1.02); box-shadow: 0 0 0 8px rgba(17, 24, 39, 0); }
                          }
                          .animate-subtle-pulse {
                            animation: subtle-pulse 2s ease-in-out infinite;
                          }
                        `}</style>
                     </div>

                     {/* Trust Indicators */}
                     <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#567E73]/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#567E73]" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">Cash on Delivery</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">Pay when you receive</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6B9389]/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#567E73]" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">Quality Promise</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">100% satisfaction</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7BA89D]/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#567E73]" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">Ships Tomorrow</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">Order in 4h 23m</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#567E73]/15 rounded-full flex items-center justify-center flex-shrink-0">
                              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#567E73]" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">Gift Ready</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">Beautiful packaging</p>
                           </div>
                        </div>
                     </div>

                     {/* Customer Review Highlight */}
                     <div className="bg-[#567E73]/5 rounded-2xl p-3 sm:p-5 border border-[#567E73]/10">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#567E73] flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                              P
                           </div>
                           <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                 <span className="text-sm sm:text-base font-semibold text-gray-900">Priya M.</span>
                                 <div className="flex items-center gap-0.5">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />)}
                                 </div>
                                 <span className="text-[10px] sm:text-xs text-[#567E73] font-medium">Verified Purchase</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                 "My daughter's face when she saw this balloon was priceless! 😍 The quality is amazing and it stayed inflated for days. Already ordered more for her friend's party!"
                              </p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            {/* Mobile Social Proof */}
            <div className="lg:hidden flex items-center justify-center gap-4 mt-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                     <div className="w-7 h-7 rounded-full bg-[#567E73]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">A</div>
                     <div className="w-7 h-7 rounded-full bg-[#6B9389]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">M</div>
                     <div className="w-7 h-7 rounded-full bg-[#7BA89D]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#567E73]">S</div>
                  </div>
                  <span className="text-xs text-gray-600"><strong>127</strong> bought today</span>
               </div>
               <div className="w-px h-5 bg-gray-200"></div>
               <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#567E73] rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-600"><strong>23</strong> viewing now</span>
               </div>
            </div>

            {/* You Might Also Like */}
            <div className="mt-12 lg:mt-16">
               <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Complete the Celebration</h2>
                  <p className="text-gray-500">Customers who bought this also loved these</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {productData.coordinated.slice(0, 4).map(item => (
                     <div key={item.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="aspect-square bg-white overflow-hidden relative">
                           <img
                              src={item.image}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              alt={item.name}
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-4">
                           <p className="font-medium text-gray-900 text-sm mb-1 truncate">{item.name}</p>
                           <p className="text-[#567E73] font-bold">₹{(Math.random() * 10 + 5).toFixed(2)}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         </div>
   );
};

export default Version3;

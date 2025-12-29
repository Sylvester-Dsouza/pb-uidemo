import React, { useState } from 'react';
import { Star, Heart, Minus, Plus, ChevronLeft, ChevronRight, Truck, ShieldCheck, Gift, Clock, Sparkles, Check, Users, Zap, Award, Package, RotateCcw, Shield } from 'lucide-react';
import { productData } from '../data';

const reviews = [
   { name: 'Priya M.', initial: 'P', rating: 5, text: "My daughter's face when she saw this balloon was priceless! 😍 The quality is amazing and it stayed inflated for days. Already ordered more for her friend's party!" },
   { name: 'Rahul S.', initial: 'R', rating: 5, text: "Perfect for my son's birthday! The colors are vibrant and it arrived well-packaged. Highly recommend! 🎉" },
   { name: 'Anita K.', initial: 'A', rating: 4, text: "Great quality balloon, my kids loved it! Delivery was quick and the product matched the photos exactly. ⭐" },
];

const Version3: React.FC = () => {
   const [mainImage, setMainImage] = useState(productData.images[0]);
   const [quantity, setQuantity] = useState(1);
   const [isLiked, setIsLiked] = useState(false);
   const [mIndex, setMIndex] = useState(0);
   const [reviewIndex, setReviewIndex] = useState(0);
   const [showConfetti, setShowConfetti] = useState(false);
   const originalPrice = (productData.price * 1.25).toFixed(2);
   const savings = (parseFloat(originalPrice) - productData.price).toFixed(2);

   const handleAddToCart = () => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
   };
   return (
      <div className="min-h-screen bg-white text-gray-900 font-instrument">
         

         <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-6 sm:py-4 lg:py-6">

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
                     <div className="relative aspect-square bg-white rounded-2xl overflow-hidden">
                        {/* Sale Badge */}
                        <div className="absolute top-2 left-2 z-20 bg-[#B8E4F0] text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                           <Sparkles className="w-3 h-3" />
                           SAVE ₹{savings}
                        </div>
                        
                        {/* Like Button */}
                        <button
                           onClick={() => setIsLiked(!isLiked)}
                           className={`absolute top-2 right-2 z-20 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isLiked ? 'bg-[#B8E4F0] text-gray-900 scale-110' : 'bg-white text-gray-400'}`}
                        >
                           <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-gray-900' : ''}`} />
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
                                    ? 'ring-2 ring-[#B8E4F0] ring-offset-1 scale-105' 
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
                                 ? 'border-[#B8E4F0] shadow-lg'
                                 : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-[#B8E4F0]/50'
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
                           <div className="bg-[#B8E4F0] text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              SAVE ₹{savings}
                           </div>
                        </div>

                        {/* Like Button */}
                        <button
                           onClick={() => setIsLiked(!isLiked)}
                           className={`absolute top-6 right-6 z-20 p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isLiked ? 'bg-[#B8E4F0] text-gray-900' : 'bg-white text-gray-400 hover:text-[#7EC8E3]'}`}
                        >
                           <Heart className={`w-6 h-6 transition-all ${isLiked ? 'fill-gray-900' : ''}`} />
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
                           <div className="w-8 h-8 rounded-full bg-[#B8E4F0]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#7EC8E3]">A</div>
                           <div className="w-8 h-8 rounded-full bg-[#7EC8E3]/40 border-2 border-white flex items-center justify-center text-xs font-bold text-[#7EC8E3]">M</div>
                           <div className="w-8 h-8 rounded-full bg-[#8365AD]/40 border-2 border-white flex items-center justify-center text-xs font-bold text-[#8365AD]">S</div>
                        </div>
                        <span className="text-sm text-gray-600"><strong className="text-gray-900">127 people</strong> bought this today</span>
                     </div>
                     <div className="w-px h-6 bg-gray-200"></div>
                     <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#7EC8E3]" />
                        <span className="text-sm text-gray-600"><strong className="text-gray-900">23 viewing</strong> right now</span>
                     </div>
                  </div>
               </div>

               {/* Right: Product Details */}
               <div className="lg:col-span-5 animate-slide-in-right">
                  <div className="lg:sticky lg:top-6 lg:bg-[#FAF5EF] lg:rounded-[50px] lg:p-8">
                     
                     {/* SKU & Trust Badge */}
                     <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-500">{productData.code}</p>
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-[#B8E4F0]/20 rounded-full">
                           <Award className="w-3.5 h-3.5 text-[#8365AD]" />
                           <span className="text-xs font-semibold text-[#8365AD]">Best Seller</span>
                        </div>
                     </div>

                     {/* Product Title */}
                     <h1 className="text-[22px] sm:text-2xl lg:text-3xl font-bold text-pink-500 leading-tight mb-3">
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
                     <div className="bg-[#EDF8FB] rounded-xl p-3 mb-4 border border-[#B8E4F0]/30">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">₹{productData.price}</span>
                              <span className="text-base text-gray-400 line-through">₹{originalPrice}</span>
                              <span className="px-2 py-0.5 bg-[#B8E4F0] text-gray-900 text-xs font-bold rounded-full">20% OFF</span>
                           </div>
                           <p className="text-xs text-[#7EC8E3] font-medium flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              Only 8 left!
                           </p>
                        </div>
                     </div>

                     {/* Product Details */}
                     <div className="pb-3 mb-3 border-b border-gray-200">
                        <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                           {productData.attributes.map((attr) => (
                              <div key={attr.label} className="text-center p-1.5 bg-white rounded-lg border border-gray-100">
                                 <div className="text-gray-400">{attr.label}</div>
                                 <div className="font-semibold text-gray-500 truncate">{attr.value}</div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Express Shipping Section */}
                     <div className="grid grid-cols-4 gap-1 sm:gap-3 mb-4">
                        <div className="flex flex-col items-center text-center group">
                           <div className="w-10 h-10 bg-[#B8E4F0]/10 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-[#B8E4F0]/20 transition-colors">
                              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#7EC8E3]" />
                           </div>
                           <span className="text-[9px] sm:text-[11px] font-semibold text-gray-900 leading-tight">Express</span>
                           <span className="text-[9px] sm:text-[11px] text-gray-500 leading-tight">Shipping</span>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                           <div className="w-10 h-10 bg-[#B8E4F0]/10 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-[#B8E4F0]/20 transition-colors">
                              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#7EC8E3]" />
                           </div>
                           <span className="text-[9px] sm:text-[11px] font-semibold text-gray-900 leading-tight">Quality</span>
                           <span className="text-[9px] sm:text-[11px] text-gray-500 leading-tight">Guarantee</span>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                           <div className="w-10 h-10 bg-[#B8E4F0]/10 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-[#B8E4F0]/20 transition-colors">
                              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#7EC8E3]" />
                           </div>
                           <span className="text-[9px] sm:text-[11px] font-semibold text-gray-900 leading-tight">COD</span>
                           <span className="text-[9px] sm:text-[11px] text-gray-500 leading-tight">Available</span>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                           <div className="w-10 h-10 bg-[#B8E4F0]/10 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-[#B8E4F0]/20 transition-colors">
                              <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-[#7EC8E3]" />
                           </div>
                           <span className="text-[9px] sm:text-[11px] font-semibold text-gray-900 leading-tight">Easy</span>
                           <span className="text-[9px] sm:text-[11px] text-gray-500 leading-tight">Returns</span>
                        </div>
                     </div>

                     {/* Quantity & Add to Cart */}
                     <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3 relative">
                           {/* Quantity Selector */}
                           <div className="flex items-center bg-white rounded-full px-1 py-1 shadow-sm border border-gray-200">
                              <button
                                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
                              >
                                 <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 sm:w-10 text-center font-semibold text-base">{quantity}</span>
                              <button
                                 onClick={() => setQuantity(quantity + 1)}
                                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#7EC8E3] hover:bg-[#5A8FA3] text-white flex items-center justify-center transition-colors"
                              >
                                 <Plus className="w-4 h-4" />
                              </button>
                           </div>

                           {/* Add to Cart Button with Price */}
                           <button 
                              onClick={handleAddToCart}
                              className="flex-1 bg-[#B8E4F0] text-gray-900 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl shadow-[#B8E4F0]/30 hover:shadow-2xl hover:shadow-[#B8E4F0]/40 hover:bg-[#8FC7E8] transition-all duration-300 hover:scale-[1.02] transform flex items-center justify-center gap-2"
                           >
                              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                              Add to Cart — ₹{(productData.price * quantity).toFixed(2)}
                           </button>
                              
                           {/* Confetti Animation - From Button */}
                           {showConfetti && (
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50" style={{ width: '400px', height: '600px' }}>
                                 {[...Array(50)].map((_, i) => (
                                    <div
                                       key={i}
                                       className="absolute animate-confetti-burst"
                                       style={{
                                          left: '50%',
                                          top: '50%',
                                          animationDelay: `${Math.random() * 0.3}s`,
                                          backgroundColor: ['#B8E4F0', '#FFD700', '#FF6B6B', '#7EC8E3', '#98D8AA', '#FFB6C1', '#DDA0DD', '#87CEEB', '#FFA500', '#FF69B4'][Math.floor(Math.random() * 10)],
                                          width: `${Math.random() * 12 + 8}px`,
                                          height: `${Math.random() * 12 + 8}px`,
                                          borderRadius: Math.random() > 0.5 ? '50%' : '3px',
                                          ['--x' as string]: `${(Math.random() - 0.5) * 300}px`,
                                          ['--r' as string]: `${Math.random() * 1080}deg`,
                                       }}
                                    />
                                 ))}
                              </div>
                           )}
                        </div>

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
                          @keyframes confetti-burst {
                            0% {
                              transform: translateY(0) translateX(0) rotate(0deg) scale(0);
                              opacity: 0;
                            }
                            10% {
                              transform: translateY(-50px) translateX(calc(var(--x) * 0.2)) rotate(calc(var(--r) * 0.1)) scale(1);
                              opacity: 1;
                            }
                            50% {
                              opacity: 1;
                            }
                            100% {
                              transform: translateY(-500px) translateX(var(--x)) rotate(var(--r)) scale(0.5);
                              opacity: 0;
                            }
                          }
                          .animate-confetti-burst {
                            animation: confetti-burst 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                          }
                        `}</style>
                     </div>

                     {/* Product Description */}
                     <div className="pb-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">PRODUCT DESCRIPTION</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                           <span className="text-gray-900 font-medium">Make their eyes light up!</span> Perfect for creating magical birthday moments. 🎈✨
                        </p>
                     </div>

                     {/* Customer Reviews Slider */}
                     <div className="mb-6 mt-6">
                        <div className="flex items-center justify-between mb-3">
                           <h3 className="text-sm font-semibold text-gray-900">CUSTOMER REVIEWS</h3>
                           <div className="flex items-center gap-2">
                              <button 
                                 onClick={() => setReviewIndex(reviewIndex > 0 ? reviewIndex - 1 : reviews.length - 1)}
                                 className="w-8 h-8 rounded-full border border-[#B8E4F0] flex items-center justify-center text-[#7EC8E3] hover:bg-[#B8E4F0]/20 transition-colors"
                              >
                                 <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button 
                                 onClick={() => setReviewIndex(reviewIndex < reviews.length - 1 ? reviewIndex + 1 : 0)}
                                 className="w-8 h-8 rounded-full border border-[#B8E4F0] flex items-center justify-center text-[#7EC8E3] hover:bg-[#B8E4F0]/20 transition-colors"
                              >
                                 <ChevronRight className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                        <div className="bg-[#F5FBFD] rounded-2xl p-3 sm:p-5 border border-[#B8E4F0]/20 overflow-hidden">
                           <div className="flex items-start gap-2.5 sm:gap-3 transition-all duration-300">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B8E4F0] flex items-center justify-center text-gray-900 font-bold text-sm sm:text-lg flex-shrink-0">
                                 {reviews[reviewIndex].initial}
                              </div>
                              <div className="min-w-0 flex-1">
                                 <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                    <span className="text-sm sm:text-base font-semibold text-gray-900">{reviews[reviewIndex].name}</span>
                                    <div className="flex items-center gap-0.5">
                                       {[1,2,3,4,5].map(i => (
                                          <Star key={i} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i <= reviews[reviewIndex].rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} />
                                       ))}
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-[#7EC8E3] font-medium">Verified Purchase</span>
                                 </div>
                                 <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                    "{reviews[reviewIndex].text}"
                                 </p>
                              </div>
                           </div>
                        </div>
                        {/* Dots indicator */}
                        <div className="flex justify-center gap-1.5 mt-3">
                           {reviews.map((_, i) => (
                              <button 
                                 key={i} 
                                 onClick={() => setReviewIndex(i)}
                                 className={`w-2 h-2 rounded-full transition-all ${i === reviewIndex ? 'bg-[#7EC8E3] w-4' : 'bg-gray-300'}`}
                              />
                           ))}
                        </div>
                     </div>

                     {/* Coordinated Products */}
                     <div>
                        <h4 className="text-sm sm:text-[15px] font-semibold text-gray-900 mb-3 sm:mb-4">Coordinated:</h4>
                        <div className="grid grid-cols-4 gap-3 sm:gap-4">
                           {productData.coordinated.slice(0, 8).map(prod => (
                              <div key={prod.id} className="w-full aspect-square rounded-full border-[3px] border-[#B8E4F0] bg-white overflow-hidden hover:scale-105 transition-transform cursor-pointer p-2 sm:p-3">
                                 <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                              </div>
                           ))}
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            {/* Mobile Social Proof */}
            <div className="lg:hidden flex items-center justify-center gap-4 mt-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                     <div className="w-7 h-7 rounded-full bg-[#B8E4F0]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#7EC8E3]">A</div>
                     <div className="w-7 h-7 rounded-full bg-[#7EC8E3]/40 border-2 border-white flex items-center justify-center text-xs font-bold text-[#7EC8E3]">M</div>
                     <div className="w-7 h-7 rounded-full bg-[#8365AD]/40 border-2 border-white flex items-center justify-center text-xs font-bold text-[#8365AD]">S</div>
                  </div>
                  <span className="text-xs text-gray-600"><strong>127</strong> bought today</span>
               </div>
               <div className="w-px h-5 bg-gray-200"></div>
               <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#B8E4F0] rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-600"><strong>23</strong> viewing now</span>
               </div>
            </div>

         </div>

         </div>
   );
};

export default Version3;

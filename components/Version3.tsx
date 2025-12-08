import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Share2, Heart, Minus, Plus, ChevronLeft, ChevronRight, FileText, Truck, CheckCircle } from 'lucide-react';
import { productData } from '../data';

const Version3: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'details' | 'shipping'>('details');
   const [mainImage, setMainImage] = useState(productData.images[0]);
   const [quantity, setQuantity] = useState(1);
   const [isLiked, setIsLiked] = useState(false);
   const [mIndex, setMIndex] = useState(0);
   const originalPrice = (productData.price * 1.25).toFixed(2);
   const [openDetails, setOpenDetails] = useState(true);
   const [openShipping, setOpenShipping] = useState(false);

   return (
      <div className="min-h-screen bg-stone-50 text-gray-800 font-instrument pb-24 lg:pb-0">
         <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Breadcrumbs */}
            <div className="mb-8">
               <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Party / Licenses / <span className="text-gray-900">Biking Masha</span>
               </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

               {/* Left: Gallery */}
               <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
                  
                  <div className="lg:hidden">
                     <div className="relative w-full aspect-square bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                        <img src={productData.images[mIndex]} alt={productData.name} className="w-full h-full object-contain p-6" />
                        {mIndex > 0 && (
                           <button onClick={() => setMIndex(mIndex - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
                              <ChevronLeft className="w-5 h-5" />
                           </button>
                        )}
                        {mIndex < productData.images.length - 1 && (
                           <button onClick={() => setMIndex(mIndex + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
                              <ChevronRight className="w-5 h-5" />
                           </button>
                        )}
                     </div>
                     <div className="flex justify-center gap-2 mt-3">
                        {productData.images.map((_, i) => (
                           <span key={i} className={`w-2 h-2 rounded-full ${i === mIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
                        ))}
                     </div>
                  </div>

                  <div className="hidden lg:flex gap-4">
                     <div className="flex flex-col gap-3">
                        {productData.images.map((img, i) => (
                           <button
                              key={i}
                              onClick={() => setMainImage(img)}
                              className={`w-20 h-20 bg-white rounded-xl border-2 overflow-hidden transition-all ${mainImage === img
                                 ? 'border-indigo-400 shadow-md'
                                 : 'border-gray-200 hover:border-gray-300'
                                 }`}
                           >
                              <img src={img} className="w-full h-full object-cover" alt={`View ${i + 1}`} />
                           </button>
                        ))}
                     </div>

                     {/* Main Image */}
                     <div className="flex-1 bg-white rounded-xl aspect-[4/5] lg:aspect-square flex items-center justify-center p-12 relative overflow-hidden border border-gray-200 shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white opacity-30"></div>
                        <img
                           src={mainImage}
                           className="relative z-10 w-full h-full object-contain"
                           alt={productData.name}
                        />

                        {/* Like Button */}
                        <button
                           onClick={() => setIsLiked(!isLiked)}
                           className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
                        >
                           <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-indigo-500 text-indigo-500' : 'text-gray-400'}`} />
                        </button>
                     </div>
                  </div>
               </div>

               {/* Right: Product Details */}
               <div className="lg:col-span-5 lg:sticky lg:top-8 h-fit">

                  {/* Header */}
                  <div className="border-b border-gray-200 pb-6 mb-6">
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                           Ref. {productData.code}
                        </span>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors">
                           <Share2 className="w-5 h-5" />
                        </button>
                     </div>

                     <h1 className="font-instrument text-4xl lg:text-5xl font-medium mb-4 text-gray-900 leading-tight">
                        {productData.name}
                     </h1>

                     <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                           {[1, 2, 3, 4, 5].map(s => (
                              <Star
                                 key={s}
                                 className={`w-4 h-4 ${s <= Math.floor(productData.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-300 text-gray-300'}`}
                              />
                           ))}
                        </div>
                        <span className="text-sm text-gray-500">
                            {productData.rating} ({productData.reviews} reviews)
                         </span>
                     </div>

                     <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-semibold text-gray-900">₹{productData.price}</span>
                        <span className="text-lg text-gray-400 line-through">₹{originalPrice}</span>
                     </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                     <p className="text-sm text-gray-700 leading-relaxed">
                        {productData.description}
                     </p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4 mb-8 bg-white rounded-xl p-6 border border-gray-200">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-dust_grey-400 mb-4">
                        Specifications
                     </h3>
                     <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                           <span className="block text-gray-500 mb-1 text-xs">Dimensions</span>
                           <span className="font-medium text-gray-900">31" / 45x79 cm</span>
                        </div>
                        <div>
                           <span className="block text-gray-500 mb-1 text-xs">Material</span>
                           <span className="font-medium text-gray-900">Foil Metallized</span>
                        </div>
                        <div>
                           <span className="block text-gray-500 mb-1 text-xs">Gas Type</span>
                           <span className="font-medium text-gray-900">Helium</span>
                        </div>
                        <div>
                           <span className="block text-gray-500 mb-1 text-xs">Capacity</span>
                           <span className="font-medium text-gray-900">0.032 m³</span>
                        </div>
                     </div>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
                           <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                           >
                              <Minus className="w-4 h-4" />
                           </button>
                           <input
                              type="text"
                              value={quantity}
                              readOnly
                              className="w-16 text-center font-semibold border-x border-gray-200 h-12 bg-white text-gray-900"
                           />
                           <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                           >
                              <Plus className="w-4 h-4" />
                           </button>
                        </div>

                        <div className="flex-1">
                           <button className="w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:from-gray-900 hover:via-black hover:to-black transition-all shadow-md hover:shadow-lg">
                             Add to Bag
                          </button>
                        </div>
                     </div>

                     <p className="text-xs text-center flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="text-gray-600">In Stock - Ships Tomorrow</span>
                     </p>
                  </div>

                  <div className="mt-6 space-y-3">
                     <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                        <button
                           onClick={() => setOpenDetails(!openDetails)}
                           className="w-full flex items-center justify-between px-4 py-4 text-sm font-semibold hover:bg-gray-50"
                        >
                           <span className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-700" />
                              <span>Product Details</span>
                           </span>
                           {openDetails ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                        </button>
                        {openDetails && (
                           <div className="px-4 pb-4 border-t border-gray-100 text-sm text-gray-700">
                              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-3">
                                 <FileText className="w-4 h-4" />
                                 <span>Product Highlights</span>
                              </div>
                              <div className="space-y-2">
                                 <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Official licensed Masha and The Bear product</div>
                                 <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> High-quality Italian foil manufacturing</div>
                                 <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Self-sealing valve for easy inflation</div>
                                 <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vibrant, fade-resistant colors</div>
                                 <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Perfect for indoor and outdoor celebrations</div>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                        <button
                           onClick={() => setOpenShipping(!openShipping)}
                           className="w-full flex items-center justify-between px-4 py-4 text-sm font-semibold hover:bg-gray-50"
                        >
                           <span className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-gray-700" />
                              <span>Shipping & Returns</span>
                           </span>
                           {openShipping ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                        </button>
                        {openShipping && (
                           <div className="px-4 pb-4 border-t border-gray-100 text-sm text-gray-700 space-y-2">
                              <div>In stock. Orders placed today ship by tomorrow.</div>
                              <div>Returns accepted within 14 days in original packaging.</div>
                              <div>Free shipping on qualifying orders.</div>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Related Products */}
                  <div className="mt-10 pt-10 border-t border-gray-200">
                     <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-dust_grey-400">
                        You might also like
                     </h3>
                     <div className="grid grid-cols-4 gap-3">
                        {productData.coordinated.slice(0, 4).map(item => (
                           <div key={item.id} className="group cursor-pointer">
                              <div className="bg-white aspect-square rounded-xl mb-2 overflow-hidden border border-gray-200 hover:border-indigo-400 transition-all">
                                 <img
                                    src={item.image}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={item.name}
                                 />
                              </div>
                              <p className="text-xs text-center text-gray-500 group-hover:text-gray-900 transition-colors">
                                 {item.name}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </div>

         {/* Sticky Mobile Bar */}
         <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-40 pb-safe shadow-lg">
            <button className="w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-4 text-sm font-bold tracking-wide uppercase rounded-full hover:from-gray-900 hover:via-black hover:to-black transition-colors">
               Add to Bag - ₹{productData.price}
            </button>
         </div>
      </div>
   );
};

export default Version3;

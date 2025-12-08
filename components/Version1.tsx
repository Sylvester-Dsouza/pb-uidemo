import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { productData } from '../data';

const Version1: React.FC = () => {
  const [mIndex, setMIndex] = useState(0);
  return (
    <div className="bg-white min-h-screen pb-20 font-instrument text-slate-800">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
        Products / Party / Licenses / <span className="text-gray-900">Biking Masha</span>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Images */}
        <div className="flex flex-col gap-6">
          
          <div className="lg:hidden">
            <div className="relative w-full aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
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
                <span key={i} className={`w-2 h-2 rounded-full ${i === mIndex ? 'bg-black' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>

          
          <div className="hidden lg:flex w-full aspect-[4/5] relative items-center justify-center bg-white">
            <img
              src={productData.images[0]}
              alt={productData.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="hidden lg:flex gap-4">
            {productData.images.map((img, idx) => (
              <div key={idx} className="w-24 h-24 border border-gray-200 p-2 cursor-pointer hover:border-red-400 transition-colors">
                <img src={img} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details Card */}
        <div className="bg-[#FAF9F6] p-8 lg:p-12 rounded-3xl relative">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2 text-gray-500 hover:text-red-500 cursor-pointer">
              <span className="text-sm">Wish List</span>
              <Heart className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-blue-400 text-lg mb-1 font-medium">{productData.code}</h3>
          <h1 className="text-4xl lg:text-5xl font-normal text-slate-900 mb-12">{productData.name}</h1>

          {/* Price & CTA */}
          <div className="mb-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-slate-900">₹{productData.price.toFixed(2)}</span>
              <span className="text-lg text-gray-400 line-through">₹{(productData.price * 1.25).toFixed(2)}</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-black text-white py-3.5 rounded-full font-semibold hover:bg-gray-900 transition-colors">Add to Cart</button>
              <button className="flex-1 border-2 border-black text-black py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors">Buy Now</button>
            </div>
          </div>

          {/* Attributes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-10">
            {productData.attributes.map((attr) => (
              <div key={attr.label}>
                <h4 className="font-semibold text-slate-900 mb-1">{attr.label}</h4>
                <p className="text-blue-400 text-lg font-light">{attr.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-10">
            <h4 className="font-semibold text-slate-900 mb-2">Tag</h4>
            <div className="flex gap-2">
              {productData.tags.map(tag => (
                <span key={tag} className="text-blue-400 text-lg font-light">{tag}</span>
              ))}
            </div>
          </div>

          {/* Coordinated Products */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Coordinated:</h4>
            <div className="flex flex-wrap gap-4">
              {productData.coordinated.map(prod => (
                <div key={prod.id} className="w-16 h-16 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden hover:scale-110 transition-transform cursor-pointer">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version1;

import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { productData } from '../data';

const upsellProducts = [
  { image: '/upsell/op1.jpg', name: 'Chubby Star' },
  { image: '/upsell/po2.jpg', name: 'Chubby Star mini' },
  { image: '/upsell/po3.jpg', name: 'Welcome Baby Moon' },
  { image: '/upsell/op4.jpg', name: 'R18 Gender Reveal' },
];

const Version1: React.FC = () => {
  const [mIndex, setMIndex] = useState(0);
  const [upsellIndex, setUpsellIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handleUpsellPrev = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setUpsellIndex(upsellIndex > 0 ? upsellIndex - 1 : upsellProducts.length - 1);
      setSlideDirection(null);
    }, 150);
  };

  const handleUpsellNext = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setUpsellIndex(upsellIndex < upsellProducts.length - 1 ? upsellIndex + 1 : 0);
      setSlideDirection(null);
    }, 150);
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-montserrat text-slate-800">
      {/* Breadcrumbs - Desktop */}
      <div className="hidden lg:block max-w-[1170px] mx-auto px-4 xl:px-[60px] py-4 text-[15px] text-gray-500 text-center">
        Products / Party / Licenses / <span className="text-gray-900">Biking Masha</span>
      </div>

      {/* Mobile Header Section */}
      <div className="lg:hidden">
        {/* Breadcrumbs - Mobile */}
        <div className="px-4 py-3 text-[15px] text-gray-500 text-center border-b border-gray-100">
          Products / Party / Licenses
        </div>

        {/* Wish List */}
        <div className="flex justify-end px-4 py-3">
          <div className="flex items-center gap-2 text-black cursor-pointer">
            <span className="text-[16px] font-normal">Wish List</span>
            <Heart className="w-6 h-6 text-[#E8B4B8] stroke-[#E8B4B8]" fill="none" strokeWidth={1.5} />
          </div>
        </div>

        {/* Product Code & Name */}
        <div className="px-4 mb-2">
          <h3 className="text-[#8a9eb2] text-[18px] mb-1 font-normal">{productData.code}</h3>
          <h1 className="text-[26px] leading-tight font-normal text-black">{productData.name}</h1>
        </div>

        {/* Mobile Image */}
        <div className="px-4 py-4">
          <div className="relative w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
            <img src={productData.images[mIndex]} alt={productData.name} className="w-full h-full object-contain" />
            {mIndex > 0 && (
              <button onClick={() => setMIndex(mIndex - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full shadow flex items-center justify-center">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {mIndex < productData.images.length - 1 && (
              <button onClick={() => setMIndex(mIndex + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full shadow flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Thumbnail Strip */}
          <div className="flex justify-center gap-3 mt-4">
            {productData.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setMIndex(i)}
                className={`w-16 h-16 border-2 ${i === mIndex ? 'border-[#8a9eb2]' : 'border-gray-200'} bg-white p-1 transition-colors`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Details Card */}
        <div className="bg-[#FAF5EF] mx-4 px-6 py-8 rounded-[5px]">
          {/* Attributes Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {productData.attributes.map((attr) => (
              <div key={attr.label}>
                <h4 className="text-[15px] font-normal text-black mb-1">{attr.label}</h4>
                <p className={`text-[15px] font-normal ${attr.value === 'Multicolor' ? 'text-[#5B9FD7]' : 'text-[#8a9eb2]'}`}>{attr.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-[15px] font-normal text-black mb-1.5">Tag</h4>
            <div className="flex gap-2">
              {productData.tags.map(tag => (
                <span key={tag} className="text-[#5B9FD7] text-[15px] font-normal">{tag}</span>
              ))}
            </div>
          </div>

          {/* Coordinated Products */}
          <div>
            <h4 className="text-[18px] font-normal text-black mb-4">Coordinated:</h4>
            <div className="grid grid-cols-3 gap-4">
              {productData.coordinated.slice(0, 6).map(prod => (
                <div key={prod.id} className="w-full aspect-square rounded-full border-[2px] border-[#8a9eb2] bg-white overflow-hidden hover:scale-105 transition-transform cursor-pointer p-3">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid max-w-[1170px] mx-auto px-4 xl:px-[60px] pt-4 lg:pt-0 pb-8 xl:pb-[70px] grid-cols-2 gap-8 xl:gap-12">
        {/* Right Column: Details Card */}
        <div className="bg-[#FAF5EF] px-10 py-8 xl:px-12 xl:py-10 rounded-[40px] relative order-2 mt-8">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2 text-black hover:text-red-500 cursor-pointer">
              <span className="text-[16px] font-normal">Wish List</span>
              <Heart className="w-5 h-5 text-[#E8B4B8] stroke-[#E8B4B8]" fill="none" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-gray-400 text-[26px] mb-1 font-normal">{productData.code}</h3>
          <h1 className="text-[28px] leading-tight font-normal text-black mb-6">{productData.name}</h1>

          {/* Attributes Grid */}
          <div className="grid grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-5 mb-6">
            {productData.attributes.map((attr) => (
              <div key={attr.label}>
                <h4 className="text-[15px] font-normal text-black mb-1">{attr.label}</h4>
                <p className={`text-[15px] font-normal ${attr.value === 'Multicolor' ? 'text-[#5B9FD7]' : 'text-[#8a9eb2]'}`}>{attr.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="text-[15px] font-normal text-black mb-1.5">Tag</h4>
            <div className="flex gap-2">
              {productData.tags.map(tag => (
                <span key={tag} className="text-[#5B9FD7] text-[15px] font-normal">{tag}</span>
              ))}
            </div>
          </div>

          {/* Coordinated Products */}
          <div>
            <h4 className="text-[15px] font-normal text-black mb-3">Coordinated:</h4>
            <div className="grid grid-cols-4 gap-4">
              {productData.coordinated.slice(0, 8).map(prod => (
                <div key={prod.id} className="w-full aspect-square rounded-full border-[3px] border-[#8a9eb2] bg-white overflow-hidden hover:scale-105 transition-transform cursor-pointer p-3">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Column: Images */}
        <div className="flex flex-col gap-6 order-1">
          <div className="flex w-full aspect-[4/5] relative items-center justify-center bg-white">
            <img
              src={productData.images[0]}
              alt={productData.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex gap-4">
            {productData.images.map((img, idx) => (
              <div key={idx} className="w-24 h-24 border border-gray-200 p-2 cursor-pointer hover:border-red-400 transition-colors">
                <img src={img} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="bg-[#FAF5EF] py-12 lg:py-16">
        <div className="max-w-[1170px] mx-auto px-4 xl:px-[60px]">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-black text-center mb-4 lg:mb-12 italic lg:not-italic">
            Other products<br className="lg:hidden" /> may interest you
          </h2>
          
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            {/* Navigation Arrows */}
            <div className="flex justify-end gap-3 mb-4">
              <button 
                onClick={handleUpsellPrev}
                className="w-12 h-12 rounded-full border-2 border-[#5B9FD7] flex items-center justify-center text-[#5B9FD7] hover:bg-[#5B9FD7] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleUpsellNext}
                className="w-12 h-12 rounded-full border-2 border-[#5B9FD7] flex items-center justify-center text-[#5B9FD7] hover:bg-[#5B9FD7] hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Single Product Card with Slide Animation */}
            <div className="overflow-hidden">
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ease-out ${
                  slideDirection === 'left' ? '-translate-x-full opacity-0' : 
                  slideDirection === 'right' ? 'translate-x-full opacity-0' : 
                  'translate-x-0 opacity-100'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 mb-4 w-full aspect-square flex items-center justify-center overflow-hidden">
                  <img 
                    src={upsellProducts[upsellIndex].image} 
                    alt={upsellProducts[upsellIndex].name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className={`text-[16px] font-normal ${upsellIndex === 3 ? 'text-[#5B9FD7]' : 'text-black'}`}>
                  {upsellProducts[upsellIndex].name}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {upsellProducts.map((product, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer group">
                <div className="bg-white rounded-2xl p-8 mb-3 w-full aspect-[4/5] flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <span className={`text-[16px] font-normal ${idx === 3 ? 'text-[#5B9FD7]' : 'text-black'}`}>
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version1;

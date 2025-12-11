import React, { useState } from 'react';
import { Star, Minus, Plus, Truck, Shield, Package, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { productData } from '../data';

const Version4: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const allImages = productData.images;
    const originalPrice = (productData.price * 1.3).toFixed(2);
    const discount = Math.round(((parseFloat(originalPrice) - productData.price) / parseFloat(originalPrice)) * 100);

    return (
        <div className="min-h-screen bg-white font-instrument">

            {/* Breadcrumbs - Hidden on mobile */}
            <div className="hidden sm:block bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="hover:text-gray-900 cursor-pointer">Home</span>
                        <span>/</span>
                        <span className="hover:text-gray-900 cursor-pointer">Party Balloons</span>
                        <span>/</span>
                        <span className="hover:text-gray-900 cursor-pointer">Licensed Characters</span>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{productData.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-1 pb-8 sm:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Side - Image Gallery */}
                    <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
                        <div className="bg-white rounded-lg lg:p-6">
                            
                            {/* Mobile Gallery - Split View with Mini Grid */}
                            <div className="lg:hidden -mt-1">
                                {/* Main Image */}
                                <div className="relative aspect-square overflow-hidden mb-2">
                                    <img 
                                        key={selectedImage}
                                        src={allImages[selectedImage]} 
                                        alt={productData.name} 
                                        className="w-full h-full object-contain p-4 animate-fade-in" 
                                    />
                                    
                                    {/* Floating Badge */}
                                    <div className="absolute top-2 left-2 bg-[#E8B4A0] text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold">
                                        {discount}% OFF
                                    </div>
                                    
                                    {/* Image Counter */}
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-medium">
                                        {selectedImage + 1} / {allImages.length}
                                    </div>
                                </div>
                                
                                {/* Mini Grid Thumbnails */}
                                <div className="grid grid-cols-4 gap-2 px-1">
                                    {allImages.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage(i)}
                                            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                                                i === selectedImage 
                                                    ? 'ring-2 ring-[#D4A574] ring-offset-1' 
                                                    : 'opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                            {i === selectedImage && (
                                                <div className="absolute inset-0 bg-[#E8B4A0]/10" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden lg:flex gap-4 animate-fade-in">
                                {/* Vertical Thumbnails */}
                                <div className="flex flex-col gap-3">
                                    {allImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`w-20 h-20 rounded-md border-2 overflow-hidden transition-all ${selectedImage === idx
                                                ? 'border-[#D4A574] shadow-md'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`View ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="flex-1 relative bg-white rounded-lg aspect-square flex items-center justify-center overflow-hidden group animate-scale-in">
                                    <img
                                        src={allImages[selectedImage]}
                                        alt={productData.name}
                                        className="max-w-full max-h-full object-contain p-8"
                                    />

                                    {/* Image Navigation Arrows */}
                                    {selectedImage > 0 && (
                                        <button
                                            onClick={() => setSelectedImage(selectedImage - 1)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                    )}
                                    {selectedImage < allImages.length - 1 && (
                                        <button
                                            onClick={() => setSelectedImage(selectedImage + 1)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="lg:col-span-5 animate-fade-in-up">
                        <div className="bg-[#FAF5EF] lg:rounded-lg lg:border border-[#E8B4A0]/40 p-0 lg:p-8 sticky top-4">

                            {/* Category Badge */}
                            <div className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                Licensed Character
                            </div>

                            {/* Product Title */}
                            <h1 className="text-[26px] sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
                                {productData.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(productData.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm font-semibold text-gray-900">{productData.rating}</span>
                                </div>
                                <span className="text-sm text-gray-500">({productData.reviews} reviews)</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                {productData.description}
                            </p>

                            {/* Price Section */}
                            <div className="bg-gray-50 rounded-lg p-5 mb-6">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-3xl font-bold text-gray-900">
                                        ₹{productData.price.toFixed(2)}
                                    </span>
                                    <span className="text-lg text-gray-400 line-through">
                                        ₹{originalPrice}
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                                        {discount}% OFF
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500">(Price incl. of all taxes)</p>
                            </div>

                            {/* Size/Type Selection */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">SIZE</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="border-2 border-[#D4A574] bg-[#FFF8DC] rounded-lg p-3 text-left">
                                        <div className="text-xs text-gray-600 mb-1">Standard</div>
                                        <div className="font-semibold text-sm text-gray-900">31" Foil</div>
                                    </button>
                                    <button className="border-2 border-gray-200 hover:border-gray-300 rounded-lg p-3 text-left">
                                        <div className="text-xs text-gray-600 mb-1">Large</div>
                                        <div className="font-semibold text-sm text-gray-900">36" Foil</div>
                                    </button>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">QUANTITY</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border-2 border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            readOnly
                                            className="w-16 text-center font-semibold border-x-2 border-gray-200 h-10"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        ₹{(productData.price * quantity).toFixed(2)} (Incl. of all taxes)
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-6">
                                <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-[#E8B4A0] text-gray-900 py-3.5 rounded-lg font-semibold hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform">
                                    Buy Now
                                </button>
                            </div>

                            {/* Availability Notice */}
                            <div className="flex items-center gap-2 mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-800 font-medium">
                                    In Stock - Ships within 24 hours
                                </span>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-gray-200">
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                                        <Package className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900">No-Cost EMI</span>
                                    <span className="text-[11px] text-gray-500">Available</span>
                                </div>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                                        <Shield className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900">Quality</span>
                                    <span className="text-[11px] text-gray-500">Guarantee</span>
                                </div>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                                        <Truck className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900">Cash on Delivery</span>
                                    <span className="text-[11px] text-gray-500">Pay when received</span>
                                </div>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-gray-200 transition-colors">
                                        <RotateCcw className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900">Easy Returns</span>
                                    <span className="text-[11px] text-gray-500">30-day policy</span>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-4">PRODUCT DETAILS</h3>
                                <div className="space-y-3">
                                    {productData.attributes.map((attr) => (
                                        <div key={attr.label} className="flex justify-between text-sm">
                                            <span className="text-gray-600">{attr.label}:</span>
                                            <span className="font-medium text-gray-900">{attr.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">TAGS</h3>
                                <div className="flex gap-2">
                                    {productData.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Coordinated Products */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-4">COORDINATED</h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {productData.coordinated.slice(0, 8).map(prod => (
                                        <div key={prod.id} className="w-full aspect-square rounded-full border-[3px] border-[#D4A574] bg-white overflow-hidden hover:scale-105 transition-transform cursor-pointer p-3">
                                            <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
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

export default Version4;

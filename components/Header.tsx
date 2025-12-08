import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  version: 1 | 2 | 3 | 4 | 5;
  onVersionChange: (version: 1 | 2 | 3 | 4 | 5) => void;
}

const versionOptions = [
  { id: 1 as const, name: 'Grabo', color: 'bg-blue-600' },
  { id: 2 as const, name: 'Minimal', color: 'bg-purple-600' },
  { id: 3 as const, name: 'Contrast', color: 'bg-black' },
  { id: 4 as const, name: 'Classic', color: 'bg-amber-600' },
  { id: 5 as const, name: 'High-Conversion', color: 'bg-black' },
];

const Header: React.FC<HeaderProps> = ({ version, onVersionChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">Party Bazar</span>

          {/* Version Switcher - Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {versionOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => onVersionChange(opt.id)}
                className={`px-4 py-2 text-sm font-medium transition-all relative ${version === opt.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {opt.name}
                {version === opt.id && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 ${opt.color} rounded-full`}></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button className="text-gray-800">
              <Search className="w-5 h-5" />
            </button>
            <div className="relative">
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              <ShoppingCart className="w-5 h-5 text-gray-800" />
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Flyout Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Flyout Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-lg font-bold">Select Theme</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Theme Switcher */}
          <div className="px-6 py-4">
            <div className="flex flex-col gap-2">
              {versionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    onVersionChange(opt.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 px-4 rounded-xl text-left flex items-center gap-3 transition-all ${version === opt.id ? `${opt.color} text-white shadow-md` : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className={`w-3 h-3 rounded-full ${version === opt.id ? 'bg-white' : opt.color}`}></span>
                  <span className="font-medium">{opt.name}</span>
                  {version === opt.id && (
                    <span className="ml-auto">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

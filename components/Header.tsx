import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  version: 1 | 2 | 3 | 4 | 5;
}

const Header: React.FC<HeaderProps> = ({ version }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-bold tracking-tight">Party Bazar</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900">New Arrivals</a>
            <a href="#" className="hover:text-gray-900">Balloons</a>
            <a href="#" className="hover:text-gray-900">Decor</a>
            <a href="#" className="hover:text-gray-900">Gifts</a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-800">
            <Search className="w-5 h-5" />
          </button>
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            <ShoppingCart className="w-5 h-5 text-gray-800" />
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-gray-900">New Arrivals</a>
            <a href="#" className="hover:text-gray-900">Balloons</a>
            <a href="#" className="hover:text-gray-900">Decor</a>
            <a href="#" className="hover:text-gray-900">Gifts</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

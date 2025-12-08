import React from 'react';
import { Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 mt-auto border-t border-gray-100">
      
      {/* Emotional Banner */}
      <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-pink-50 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Creating Memories</span>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Every Celebration Tells a Story
          </h3>
          <p className="text-gray-600 leading-relaxed">
            From first birthdays to golden anniversaries, we're honored to be part of your most cherished moments. 
            Let's make every celebration unforgettable, together.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Party Bazar</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your one-stop destination for premium party supplies, decorations, and celebration essentials. We believe every moment deserves to be celebrated.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Best Sellers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Party Themes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Gift Cards</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:underline">Track Order</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">123 Party Street, Celebration City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:hello@partybazar.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">hello@partybazar.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              © {new Date().getFullYear()} Party Bazar. <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" /> for celebrations.</span>
            </p>
            <div className="hidden sm:flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

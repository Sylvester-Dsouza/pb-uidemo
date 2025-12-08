import React, { useState } from 'react';
import Header from './components/Header';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';
import Version4 from './components/Version4';
import Version5 from './components/Version5';

function App() {
  const [version, setVersion] = useState<1 | 2 | 3 | 4 | 5>(1);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Version Control Panel (Floating) */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-2xl p-2 rounded-full border border-gray-200 z-[100] flex gap-2">
        <button
          onClick={() => setVersion(1)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${version === 1 ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          Grabo
        </button>
        <button
          onClick={() => setVersion(2)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${version === 2 ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          Minimal
        </button>
        <button
          onClick={() => setVersion(3)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${version === 3 ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          Contrast
        </button>
        <button
          onClick={() => setVersion(4)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${version === 4 ? 'bg-amber-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          Classic
        </button>
        <button
          onClick={() => setVersion(5)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${version === 5 ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          High-Conversion
        </button>
      </div>

      <Header version={version} />

      <main>
        {version === 1 && <Version1 />}
        {version === 2 && <Version2 />}
        {version === 3 && <Version3 />}
        {version === 4 && <Version4 />}
        {version === 5 && <Version5 />}
      </main>

    </div>
  );
}

export default App;

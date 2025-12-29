import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Contrast1 from './components/Contrast1';
import Contrast2 from './components/Contrast2';
import Contrast3 from './components/Contrast3';

function App() {
  const [version, setVersion] = useState<'c1' | 'c2' | 'c3'>('c3');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header version={version} onVersionChange={setVersion} cartCount={cartCount} />

      <main>
        {version === 'c1' && <Contrast1 onAddToCart={handleAddToCart} />}
        {version === 'c2' && <Contrast2 onAddToCart={handleAddToCart} />}
        {version === 'c3' && <Contrast3 onAddToCart={handleAddToCart} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Contrast1 from './components/Contrast1';
import Contrast2 from './components/Contrast2';
import Contrast3 from './components/Contrast3';

function App() {
  const [version, setVersion] = useState<'c1' | 'c2' | 'c3'>('c1');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header version={version} onVersionChange={setVersion} />

      <main>
        {version === 'c1' && <Contrast1 />}
        {version === 'c2' && <Contrast2 />}
        {version === 'c3' && <Contrast3 />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

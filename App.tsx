import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';
import Version4 from './components/Version4';
import Version5 from './components/Version5';

function App() {
  const [version, setVersion] = useState<1 | 2 | 3 | 4 | 5>(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header version={version} onVersionChange={setVersion} />

      <main>
        {version === 1 && <Version1 />}
        {version === 2 && <Version2 />}
        {version === 3 && <Version3 />}
        {version === 4 && <Version4 />}
        {version === 5 && <Version5 />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

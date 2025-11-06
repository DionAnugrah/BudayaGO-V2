import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroMap from './components/HeroMap';
import FeaturedCultures from './components/FeaturedCultures';
import CulturalShop from './components/CulturalShop';
import VirtualTourTeaser from './components/VirtualTourTeaser';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] pointer-events-none" />

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroMap setActiveSection={setActiveSection} />
      <FeaturedCultures />
      <CulturalShop />
      <VirtualTourTeaser />
      <Footer />
    </div>
  );
}

export default App;

import { Map, Archive, ShoppingBag, Home, Eye, Info, Flame } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore Map', icon: Map },
    { id: 'archive', label: 'Archive', icon: Archive },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'tour', label: 'Virtual Tour', icon: Eye },
    { id: 'about', label: 'About Us', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-lg shadow-2xl border-4 border-amber-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNzgyZTBlIj48L3JlY3Q+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgZmlsbD0iIzZhMjYwYyIvPjxwYXRoIGQ9Ik0zMCAzMGgzMHYzMEgzMHoiIGZpbGw9IiM2YTI2MGMiLz48L3N2Zz4=')] opacity-20" />

          <div className="relative flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-amber-300 animate-pulse" />
              <h1 className="text-2xl font-bold text-amber-100 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                ARSIP BUDAYA
              </h1>
            </div>

            <div className="flex gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? 'bg-amber-600 text-white shadow-lg'
                        : 'text-amber-200 hover:bg-amber-700 hover:text-white'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`} />
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 font-medium hidden lg:inline">{item.label}</span>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-300 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

import { useEffect, useRef, useState } from "react";
import { X, Info } from "lucide-react";

interface Kabupaten {
  name: string;
  lat: number;
  lng: number;
  culture: string;
  info: string;
}

function SultengMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState<Kabupaten | null>(
    null
  );
  const [mapLoaded, setMapLoaded] = useState(false);

  const kabupatenData: Kabupaten[] = [
    {
      name: "Palu",
      lat: -0.897111,
      lng: 119.86885,
      culture: "Ibu Kota Provinsi",
      info: "Pusat pemerintahan dan kebudayaan Kaili",
    },
    {
      name: "Donggala",
      lat: -0.7787537492422253,
      lng: 119.72866332013042,
      culture: "Pesisir Kaili",
      info: "Terkenal dengan pantai dan budaya maritim",
    },
    {
      name: "Sigi",
      lat: -1.057111027294755,
      lng: 119.95350389982487,
      culture: "Dataran Tinggi Kaili",
      info: "Pusat pertanian dan budaya Kaili pedalaman",
    },
    {
      name: "Parigi Moutong",
      lat: -0.8152195134018125,
      lng: 120.17075761527528,
      culture: "Tomini Bay",
      info: "Budaya pesisir Teluk Tomini",
    },
    {
      name: "Poso",
      lat: -1.3967759990114756,
      lng: 120.75433847135695,
      culture: "Danau Poso",
      info: "Danau terdalam ketiga di Indonesia",
    },
    {
      name: "Tojo Una-Una",
      lat: -0.8704004169938946,
      lng: 121.58300603390956,
      culture: "Teluk Tomini Timur",
      info: "Budaya Togian dan maritim",
    },
    {
      name: "Morowali",
      lat: -2.7942953501588748,
      lng: 122.12003397568951,
      culture: "Suku Wana",
      info: "Habitat suku Wana dan hutan tropis",
    },
    {
      name: "Morowali Utara",
      lat: -1.8683736987196495,
      lng: 121.33582346801923,
      culture: "Pesisir Timur",
      info: "Budaya maritim dan pertambangan",
    },
    {
      name: "Banggai",
      lat: -0.953237214953104,
      lng: 122.78595339703156,
      culture: "Kepulauan Banggai",
      info: "Kesultanan Banggai dan budaya kepulauan",
    },
    {
      name: "Banggai Kepulauan",
      lat: -1.2160739026671528,
      lng: 122.97213534981113,
      culture: "Pulau Peleng",
      info: "Budaya bahari dan ikan endemik",
    },
    {
      name: "Banggai Laut",
      lat: -1.59291002415966,
      lng: 123.50044785665297,
      culture: "Pulau Banggai",
      info: "Pusat budaya Banggai tradisional",
    },
    {
      name: "Tolitoli",
      lat: 1.0418844605898543,
      lng: 120.81694729868798,
      culture: "Buol Tolitoli",
      info: "Budaya Buol dan tradisi pesisir utara",
    },
    {
      name: "Buol",
      lat: 1.1648743511355657,
      lng: 121.41839278930082,
      culture: "Teluk Tomini Utara",
      info: "Tradisi bahari dan perkebunan",
    },
  ];

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletJS = document.createElement("script");
    leafletJS.src =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
    leafletJS.onload = () => {
      setMapLoaded(true);
    };
    document.body.appendChild(leafletJS);

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || leafletMapRef.current) return;

    const L = (window as any).L;

    // Initialize map
    const map = L.map(mapRef.current).setView([-1.0, 121.0], 8);
    leafletMapRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const createCustomIcon = () => {
      return L.divIcon({
        className: "custom-marker-icon",
        html: `
          <div style="position: relative; width: 40px; height: 40px;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 30px; height: 30px; background: rgba(220, 38, 38, 0.4); border-radius: 50%; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <svg width="40" height="40" viewBox="0 0 24 24" style="position: relative; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.4));">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
              <circle cx="12" cy="10" r="3" fill="#fff"/>
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });
    };

    // Add markers
    kabupatenData.forEach((kab) => {
      const marker = L.marker([kab.lat, kab.lng], {
        icon: createCustomIcon(),
      }).addTo(map);

      const popupContent = `
        <div style="font-family: Georgia, serif;">
          <div style="font-size: 1.2rem; font-weight: bold; color: #78350f; margin-bottom: 8px;">${kab.name}</div>
          <div style="color: #92400e; font-style: italic; margin-bottom: 5px;">${kab.culture}</div>
          <div style="color: #78350f; font-size: 0.9rem;">${kab.info}</div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on("click", () => {
        setSelectedKabupaten(kab);
      });
    });

    // Add scale control
    L.control
      .scale({
        imperial: false,
        metric: true,
      })
      .addTo(map);

    // Add custom CSS for animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes ping {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.6;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0;
        }
      }
      .custom-marker-icon {
        background: none !important;
        border: none !important;
      }
      .leaflet-popup-content-wrapper {
        background: #fffbeb !important;
        border: 2px solid #92400e !important;
        border-radius: 10px !important;
      }
      .leaflet-popup-content {
        margin: 15px !important;
      }
    `;
    document.head.appendChild(style);
  }, [mapLoaded]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1
            className="text-4xl my-20 md:text-6xl font-bold text-amber-900 mb-4 tracking-wide drop-shadow-lg"
            style={{ fontFamily: "Georgia, serif" }}
          >
            PETA BUDAYA SULAWESI TENGAH
          </h1>
          <p
            className="text-lg md:text-xl text-amber-800 max-w-2xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Jelajahi kekayaan budaya 13 kabupaten/kota di Sulawesi Tengah
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl border-8 border-amber-900 overflow-hidden">
          <div ref={mapRef} className="w-full h-[400px] md:h-[600px]" />

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 p-4 rounded-xl shadow-lg border-2 border-amber-900 z-[1000]">
            <h4
              className="text-amber-900 font-bold mb-2 flex items-center gap-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <Info className="w-5 h-5" />
              Legenda
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-600 rounded-full shadow-lg"></div>
              <span className="text-amber-900 text-sm">Kabupaten/Kota</span>
            </div>
            <div className="mt-2 text-xs text-amber-800">
              Klik marker untuk info lengkap
            </div>
          </div>

          {/* Info Panel */}
          {selectedKabupaten && (
            <div className="absolute top-4 right-4 bg-white/95 p-6 rounded-2xl shadow-2xl max-w-sm border-3 border-amber-900 z-[1000] animate-slide-in">
              <button
                onClick={() => setSelectedKabupaten(null)}
                className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition-all hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>

              <h3
                className="text-2xl font-bold text-amber-900 mb-3 pr-8 border-b-2 border-amber-500 pb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {selectedKabupaten.name}
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="font-bold text-amber-900">Budaya: </span>
                  <span className="text-amber-800">
                    {selectedKabupaten.culture}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Informasi: </span>
                  <span className="text-amber-800">
                    {selectedKabupaten.info}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* List of Kabupaten */}
        <div className="mt-8 bg-white/90 rounded-2xl shadow-xl border-4 border-amber-900 p-6">
          <h2
            className="text-2xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            📍 Daftar Kabupaten/Kota
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kabupatenData.map((kab, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedKabupaten(kab);
                  if (leafletMapRef.current) {
                    const L = (window as any).L;
                    leafletMapRef.current.setView([kab.lat, kab.lng], 10);
                  }
                }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border-2 border-amber-300 hover:border-amber-600 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
              >
                <h3 className="font-bold text-amber-900 mb-1">{kab.name}</h3>
                <p className="text-sm text-amber-700 italic">{kab.culture}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default SultengMap;

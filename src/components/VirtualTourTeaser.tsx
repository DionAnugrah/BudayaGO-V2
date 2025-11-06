import { Eye, Play, Sparkles } from 'lucide-react';

function VirtualTourTeaser() {
  return (
    <div className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-amber-900 to-amber-800 rounded-3xl shadow-2xl border-8 border-amber-950 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNzgyZTBlIj48L3JlY3Q+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgZmlsbD0iIzZhMjYwYyIvPjxwYXRoIGQ9Ik0zMCAzMGgzMHYzMEgzMHoiIGZpbGw9IiM2YTI2MGMiLz48L3N2Zz4=')] opacity-10" />

          <div className="relative grid md:grid-cols-2 gap-8 p-12">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full w-fit mb-6 shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">New Experience</span>
              </div>

              <h2
                className="text-5xl font-bold text-amber-100 mb-6 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Tur Warisan Virtual
              </h2>

              <p
                className="text-xl text-amber-200 mb-8 leading-relaxed"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Masuki rumah adat tradisional, jelajahi kuil-kuil kuno, dan
                berjalanlah menyusuri desa-desa bersejarah dengan tur virtual
                360° yang imersif.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-amber-100">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-lg">Lingkungan 3D interaktif</span>
                </div>
                <div className="flex items-center gap-3 text-amber-100">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-lg">
                    Narasi audio dalam dialek lokal
                  </span>
                </div>
                <div className="flex items-center gap-3 text-amber-100">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-lg">
                    Konteks sejarah dan penceritaan
                  </span>
                </div>
              </div>

              <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-900 rounded-xl shadow-2xl border-4 border-amber-950 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 transform hover:scale-105 w-fit">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <Eye className="w-7 h-7 relative z-10" />
                <span
                  className="relative z-10 text-xl font-bold tracking-wide"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Mulai Tur Virtual
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-amber-950 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://superlive.id/storage/articles/mobile/mobile_22e0e527-b63f-4add-bd99-b9ca8b7153c7.jpg"
                  alt="Rumah Tradisional Souraja"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group bg-amber-600 text-white p-8 rounded-full shadow-2xl hover:bg-amber-500 transition-all transform hover:scale-110 border-4 border-white">
                    <Play className="w-12 h-12 fill-white" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-gradient-to-r from-amber-900/90 to-amber-800/90 backdrop-blur-sm rounded-lg p-4 border-2 border-amber-700">
                    <h3
                      className="text-xl font-bold text-amber-100 mb-1"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Rumah adat Souraja
                    </h3>
                    <p className="text-amber-200 text-sm">
                      Rumah Tradisional Sulawesi Tengah
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full animate-pulse opacity-20" />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-full animate-pulse opacity-20"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualTourTeaser;

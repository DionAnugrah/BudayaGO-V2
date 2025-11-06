import { ChevronLeft, ChevronRight, Scroll } from "lucide-react";
import { useState } from "react";

function FeaturedCultures() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cultures = [
    {
      id: 1,
      name: "Suku Kaili",
      region: "Sulawesi Tengah",
      image:
        "https://superlive.id/storage/superadventure/2021/02/16/601df0268b45.jpg",
      description:
        'Pemilik tradisi "Rumah Souraja" dan kesenian Ragoe yang memukau.',
    },
    {
      id: 2,
      name: "Suku Lore",
      region: "Poso, Sulawesi Tengah",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2023/06/19/semarak-festival-tampo-lore-di-poso-2_169.jpeg?w=700&q=90",
      description:
        "Penjaga adat leluhur dengan rumah tradisional Tambi yang unik.",
    },
    {
      id: 3,
      name: "Suku Kulawi",
      region: "Sigi, Sulawesi Tengah",
      image:
        "https://cdn.antaranews.com/cache/1200x800/2017/09/20170920WhatsApp_Image_2017-09-19_at_13.56.55.jpeg",
      description:
        'Pemelihara tradisi "Vunja" dan kerajinan tenun khas yang elegan.',
    },
    {
      id: 4,
      name: "Suku Taa",
      region: "Tojo Una-Una",
      image:
        "https://4.bp.blogspot.com/-rLCcPnSpkEQ/VXZuopz0U1I/AAAAAAAALHE/dgR2QPLK-hE/s1600/kisah%2Bnomaden%2B%25281%2529.jpg",
      description:
        "Komunitas bahari dengan keahlian membuat perahu tradisional.",
    },
    {
      id: 5,
      name: "Suku Bada",
      region: "Lembah Bada, Poso",
      image:
        "https://curupekspress.disway.id/upload/ea1cf0f22d2dc0e962a24920e6c95931.jpeg",
      description:
        "Penjaga misteri patung-patung megalitik purba di Lembah Bada.",
    },
    {
      id: 6,
      name: "Suku Mori",
      region: "Morowali, Sulawesi Tengah",
      image:
        "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-ede-ele-2-d843bee621a48cc357aaeda125770d26.jpg",
      description:
        'Pemilik tradisi "Modero" dan kerajinan anyaman yang terkenal.',
    },
    {
      id: 7,
      name: "Suku Balantak",
      region: "Banggai, Sulawesi Tengah",
      image:
        "https://storydiup.com/wp-content/uploads/2024/07/Sejarah-Suku-Balantak-Yang-Menetap-Di-Sulawesi.webp",
      description:
        'Pemelihara adat "Mombesara" dan rumah panggung tradisional.',
    },
    {
      id: 8,
      name: "Suku Saluan",
      region: "Luwuk Banggai",
      image:
        "https://indonesiajuara.asia/wp-content/uploads/2025/07/Tarian-Penyambutan-Tamu-Suku-Saluan-Source-Facebook-Like-Palu_11zon-1_11zon-1024x576.webp",
      description:
        "Ahli pembuat kerajinan tembaga dan perunggu warisan leluhur.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("culture-scroll");
    if (container) {
      const scrollAmount = 400;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollPosition < (cultures.length - 1) * 330;

  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <Scroll className="w-12 h-12 text-amber-800" />
            <h2
              className="text-5xl font-bold text-amber-900 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Budaya Sulawesi Tengah
            </h2>
            <Scroll className="w-12 h-12 text-amber-800" />
          </div>
          <p
            className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Menjelajahi kekayaan budaya dan tradisi masyarakat Sulawesi Tengah
            yang penuh makna dan keunikan
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-800 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all duration-300 ${
              !canScrollLeft
                ? "opacity-30 cursor-not-allowed"
                : "hover:scale-110"
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div
            id="culture-scroll"
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-14 py-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {cultures.map((culture) => (
              <div
                key={culture.id}
                className="flex-shrink-0 w-80 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 rounded-3xl shadow-2xl border-4 border-amber-800 overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent z-10" />
                    <img
                      src={culture.image}
                      alt={culture.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <h3
                        className="text-2xl font-bold text-white mb-2 drop-shadow-2xl"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {culture.name}
                      </h3>
                      <p className="text-amber-200 text-sm font-semibold bg-amber-900/50 px-3 py-1 rounded-full inline-block">
                        {culture.region}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-t-4 border-amber-800">
                    <p
                      className="text-amber-900 leading-relaxed mb-5 text-center min-h-[60px] flex items-center justify-center"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {culture.description}
                    </p>
                    <button className="w-full bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 py-3 rounded-xl font-bold hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg border-2 border-amber-900 hover:shadow-xl transform hover:-translate-y-1">
                      Jelajahi Budaya
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-800 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all duration-300 ${
              !canScrollRight
                ? "opacity-30 cursor-not-allowed"
                : "hover:scale-110"
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {cultures.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(scrollPosition / 330) === index
                  ? "bg-amber-800 w-8"
                  : "bg-amber-300 hover:bg-amber-500"
              }`}
              onClick={() => {
                const container = document.getElementById("culture-scroll");
                if (container) {
                  const newPosition = index * 330;
                  container.scrollTo({ left: newPosition, behavior: "smooth" });
                  setScrollPosition(newPosition);
                }
              }}
            />
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p
            className="text-amber-700 text-lg italic max-w-2xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "Setiap suku di Sulawesi Tengah menyimpan khazanah budaya yang
            menjadi identitas bangsa Indonesia"
          </p>
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default FeaturedCultures;

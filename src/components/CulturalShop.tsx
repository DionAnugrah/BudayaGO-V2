import { ShoppingBag, Tag, Star } from "lucide-react";

function CulturalShop() {
  const products = [
    {
      id: 1,
      name: "Tenun Donggala",
      category: "Kain Tradisional",
      price: "Rp 850.000",
      originalPrice: "Rp 1.200.000",
      image:
        "https://kinerjaekselen.co/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-12-at-22.42.24.jpeg",
      rating: 4.8,
      reviews: 124,
      description:
        "Kain tenun khas Sulawesi Tengah dengan motif geometris yang penuh makna",
      material: "Kapas & Sutra Alam",
      madeIn: "Donggala",
    },
    {
      id: 2,
      name: "Anyaman Mori",
      category: "Kerajinan Anyaman",
      price: "Rp 350.000",
      originalPrice: "Rp 450.000",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.egfsitrNUio4q97AGPDcOgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.6,
      reviews: 203,
      description: "Anyaman tradisional Suku Mori dengan teknik turun-temurun",
      material: "Rotan Alam",
      madeIn: "Morowali",
    },
    {
      id: 3,
      name: "Perahu Tradisional Taa",
      category: "Miniatur Perahu",
      price: "Rp 750.000",
      originalPrice: "Rp 950.000",
      image:
        "https://cdn.antaranews.com/cache/1200x800/2020/07/03/antarafoto-kampung-pembuat-perahu-030720-da-5.jpg",
      rating: 4.8,
      reviews: 78,
      description:
        "Miniatur perahu tradisional khas Suku Taa yang terkenal dengan keahlian bahari",
      material: "Kayu Jati",
      madeIn: "Tojo Una-Una",
    },
    {
      id: 8,
      name: "Tenun Bomba",
      category: "Pakaian Tradisional",
      price: "Rp 420.000",
      originalPrice: "Rp 550.000",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ghxh382zm5kzaeec263wvpcg.jpg",
      rating: 4.7,
      reviews: 134,
      description: "Kain tenun tradisional khas Kaili",
      material: "Kapas Halus",
      madeIn: "Sigi",
    },
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <ShoppingBag className="w-12 h-12 text-amber-800" />
            <h2
              className="text-5xl font-bold text-amber-900 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Pasar Budaya Sulteng
            </h2>
            <ShoppingBag className="w-12 h-12 text-amber-800" />
          </div>
          <p
            className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Kerajinan tangan autentik dan produk budaya asli dari pengrajin
            terampil Sulawesi Tengah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl border-4 border-amber-900 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rotate-1">
                <div className="relative h-64 overflow-hidden">
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm font-bold">Diskon</span>
                    </div>
                  </div>

                  {/* Authentic Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full shadow-lg">
                      <span className="text-sm font-bold">Asli</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent opacity-70 z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 border-t-4 border-amber-800 bg-gradient-to-br from-amber-100 to-amber-50 relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200 rounded-full -mr-12 -mt-12 opacity-30" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-300 rounded-full -ml-8 -mb-8 opacity-20" />

                  <div className="relative z-10">
                    {/* Category */}
                    <p className="text-sm text-amber-700 font-medium mb-1">
                      {product.category}
                    </p>

                    {/* Product Name */}
                    <h3
                      className="text-xl font-bold text-amber-900 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-amber-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-amber-800">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-amber-600">
                        ({product.reviews} ulasan)
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex justify-between text-xs text-amber-600 mb-3">
                      <span>Bahan: {product.material}</span>
                      <span>Asal: {product.madeIn}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-amber-800">
                          {product.price}
                        </span>
                        <span className="text-sm text-amber-500 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-3 rounded-xl font-bold hover:from-amber-600 hover:to-amber-500 transition-all duration-300 shadow-md border-2 border-amber-900 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5">
                      <ShoppingBag className="w-5 h-5" />
                      Tambah ke Keranjang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-12">
          <div className="text-center bg-amber-100 rounded-2xl p-6 border-2 border-amber-800">
            <div className="text-3xl font-bold text-amber-800 mb-2">500+</div>
            <div className="text-amber-700 font-medium">Produk Budaya</div>
          </div>
          <div className="text-center bg-amber-100 rounded-2xl p-6 border-2 border-amber-800">
            <div className="text-3xl font-bold text-amber-800 mb-2">150+</div>
            <div className="text-amber-700 font-medium">Pengrajin Lokal</div>
          </div>
          <div className="text-center bg-amber-100 rounded-2xl p-6 border-2 border-amber-800">
            <div className="text-3xl font-bold text-amber-800 mb-2">4.8/5</div>
            <div className="text-amber-700 font-medium">Rating Pelanggan</div>
          </div>
          <div className="text-center bg-amber-100 rounded-2xl p-6 border-2 border-amber-800">
            <div className="text-3xl font-bold text-amber-800 mb-2">100%</div>
            <div className="text-amber-700 font-medium">Asli Sulteng</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 px-12 py-4 rounded-full text-xl font-bold hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-2xl border-4 border-amber-950 transform hover:scale-105 hover:shadow-3xl">
            Lihat Semua Produk
          </button>
          <p className="text-amber-600 mt-4 text-sm">
            Dukung pelestarian budaya Sulawesi Tengah dengan membeli produk asli
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style >{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default CulturalShop;

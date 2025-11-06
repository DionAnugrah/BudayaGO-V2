import { Facebook, Instagram, Youtube, Mail, MapPin, Flame } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'Youtube', href: '#' },
  ];

  const footerSections = [
    {
      title: 'Explore',
      links: ['Cultural Map', 'Archive', 'Virtual Tours', 'Events'],
    },
    {
      title: 'Resources',
      links: ['Research Papers', 'Image Gallery', 'Video Library', 'Audio Stories'],
    },
    {
      title: 'Community',
      links: ['Join Us', 'Volunteer', 'Donate', 'Partner Programs'],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-amber-950 to-amber-900 text-amber-100 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzc4MmUwZSI+PC9yZWN0Pjxwb2x5Z29uIHBvaW50cz0iNTAsMCA3NSwzNyA5OSwxMiA2Miw1MCA5OSwzNyA3NSw2MyA1MCwxMDAgMjUsNjMgMSwzNyAzOCw1MCAxLDEyIDI1LDM3IiBmaWxsPSIjNmEyNjBjIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="border-t-4 border-b-4 border-amber-700 py-8 mb-12">
          <svg className="w-full h-4" xmlns="http://www.w3.org/2000/svg">
            <pattern id="batik-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#d97706" />
              <circle cx="30" cy="10" r="2" fill="#d97706" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#batik-pattern)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-10 h-10 text-amber-400 animate-pulse" />
              <h3 className="text-3xl font-bold text-amber-100" style={{ fontFamily: 'Georgia, serif' }}>
                ARSIP BUDAYA
              </h3>
            </div>
            <p className="text-amber-300 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Preserving and celebrating the rich cultural heritage of Indonesia through digital archiving, community engagement, and immersive experiences.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-amber-200">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Jl. Kebudayaan No. 123, Jakarta Pusat, Indonesia</span>
              </div>
              <div className="flex items-start gap-3 text-amber-200">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@arsipbudaya.id</span>
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl font-bold text-amber-200 mb-4 border-b-2 border-amber-700 pb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-amber-300 hover:text-amber-100 transition-colors duration-200 inline-block hover:translate-x-2 transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-4 border-amber-700 pt-8 mb-8">
          <svg className="w-full h-4 mb-8" xmlns="http://www.w3.org/2000/svg">
            <pattern id="batik-pattern-2" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#d97706" />
              <circle cx="30" cy="10" r="2" fill="#d97706" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#batik-pattern-2)" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 border-2 border-amber-700 hover:border-amber-500 shadow-lg"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-amber-200" />
                </a>
              );
            })}
          </div>

          <p className="text-amber-300 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            © 2025 Arsip Budaya Indonesia. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-amber-300">
            <a href="#" className="hover:text-amber-100 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-100 transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-amber-400 italic" style={{ fontFamily: 'Georgia, serif' }}>
            "Unity in Diversity - Bhinneka Tunggal Ika"
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

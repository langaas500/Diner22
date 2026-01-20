'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { menuItems, categories, allergenMap } from '@/data/menu';

export default function MenyPage() {
  const [activeCategory, setActiveCategory] = useState<string>('pizza');
  const [showAllergens, setShowAllergens] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowAllergens(false);
    };
    if (showAllergens) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [showAllergens]);

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#f3efe9] text-neutral-900">
      {/* Subtle paper texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-multiply">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,#000_0,transparent_40%),radial-gradient(circle_at_80%_0%,#000_0,transparent_45%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between gap-3 text-sm">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#d4a31e]">Slitu Pizza</span>
            </Link>

            <a
              href="tel:+4769894646"
              className="inline-flex items-center gap-2 rounded-full bg-[#c41e3a] px-4 py-2 text-white font-semibold shadow-sm hover:brightness-95"
            >
              <span>📞</span> Ring og bestill
            </a>
          </div>

          <nav className="flex items-center gap-6 border-t border-neutral-300/60 py-3 text-sm text-neutral-700">
            <Link className="hover:text-neutral-900" href="/">Hjem</Link>
            <Link className="text-[#d4a31e] font-semibold" href="/meny">Meny</Link>
            <Link className="hover:text-neutral-900" href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pt-6">
          <div className="overflow-hidden rounded-[28px] border border-neutral-300/70 bg-white/55 shadow-sm backdrop-blur">
            <div className="p-6 md:p-10">
              {/* Title */}
              <div className="mb-8 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-[#d4a31e]" />
                  <div className="h-1 w-12 rounded-full bg-[#c41e3a]" />
                </div>
                <h1 className="font-serif text-4xl font-semibold md:text-5xl">Vår meny</h1>
                <p className="mt-2 text-neutral-600">Fersk deig hver morgen, hjemmelagde dressinger</p>
              </div>

              {/* Priser */}
              <div className="mb-6 text-center text-sm text-neutral-700">
                <span className="font-semibold">Medium:</span> 165 kr · <span className="font-semibold">Stor:</span> 199 kr · <span className="font-semibold">Valgfri:</span> 229 kr · <span className="font-semibold">Luksus:</span> 249 kr
              </div>

              {/* Kategori-tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-full font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#d4a31e] text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Meny-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => {
                  const hasVariants = item.prices && item.prices.length > 0;

                  return (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-neutral-300/70 bg-white/60 backdrop-blur"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2 gap-3">
                          <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                          {item.popular && (
                            <span className="bg-[#c41e3a] text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                              Populær
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
                        )}

                        {item.allergens && item.allergens.length > 0 && (
                          <p
                            className="text-xs text-neutral-500 mb-3"
                            title={item.allergens.map((n) => allergenMap[n] ?? String(n)).join(', ')}
                          >
                            Allergener: {item.allergens.join(',')}
                          </p>
                        )}

                        <div className="flex justify-between items-center pt-2 border-t border-neutral-200/60">
                          {hasVariants ? (
                            <div className="text-sm text-neutral-700">
                              {item.prices!.map((opt, idx) => (
                                <span key={opt.label}>
                                  {opt.label}: <span className="font-bold text-[#d4a31e]">{opt.value} kr</span>
                                  {idx < item.prices!.length - 1 && ' · '}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-[#d4a31e]">{item.price} kr</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Info-boks med allergenforklaring */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="overflow-hidden rounded-[22px] border border-neutral-300/70 bg-white/55 shadow-sm backdrop-blur p-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
              Allergeninformasjon
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
              {Object.entries(allergenMap).map(([num, name]) => (
                <div key={num} className="flex items-center gap-2 text-sm text-neutral-700">
                  <span className="font-semibold text-[#d4a31e]">{num}.</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div className="text-center border-t border-neutral-200 pt-4">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Bestill på telefon
              </h4>
              <p className="text-neutral-600 mb-4">
                Ring oss for å bestille mat eller ved spørsmål om allergier.
              </p>
              <a
                href="tel:+4769894646"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#c41e3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-95"
              >
                📞 Ring 69 89 46 46
              </a>
            </div>
          </div>

          <footer className="mt-6 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Slitu Pizza ·{' '}
            <Link className="hover:underline" href="/">Tilbake til forsiden</Link>
          </footer>
        </section>
      </main>

      {/* Sticky allergen-knapp */}
      <button
        onClick={() => setShowAllergens(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-40 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-md backdrop-blur hover:bg-white hover:shadow-lg transition-all"
      >
        <span className="text-base">ℹ️</span>
        Allergener
      </button>

      {/* Allergen modal */}
      {showAllergens && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAllergens(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
              Allergeninformasjon
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {Object.entries(allergenMap).map(([num, name]) => (
                <div key={num} className="flex items-center gap-2 text-sm text-neutral-700">
                  <span className="font-semibold text-[#d4a31e]">{num}.</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-500 text-center mb-4">
              Spør oss ved spørsmål om allergener.
            </p>
            <button
              onClick={() => setShowAllergens(false)}
              className="w-full rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
            >
              Lukk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

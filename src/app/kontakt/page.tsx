'use client';

import Link from 'next/link';

export default function KontaktPage() {
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
            <Link className="hover:text-neutral-900" href="/meny">Meny</Link>
            <Link className="text-[#d4a31e] font-semibold" href="/kontakt">Kontakt</Link>
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
                <h1 className="font-serif text-4xl font-semibold md:text-5xl">Kontakt oss</h1>
                <p className="mt-2 text-neutral-600">Vi gleder oss til å høre fra deg</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Kontaktinfo */}
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-300/70 bg-white/60 p-5 backdrop-blur">
                    <h3 className="font-semibold text-neutral-900 mb-3">📍 Adresse</h3>
                    <p className="text-neutral-700">
                      Peter Slotsviksvei 2<br />
                      1859 Slitu
                    </p>
                    <a
                      href="https://maps.google.com/?q=Peter%20Slotsviksvei%202%2C%201859%20Slitu"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center text-sm text-[#d4a31e] hover:underline"
                    >
                      Åpne i Google Maps →
                    </a>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-neutral-300/70 bg-white/60 p-5 backdrop-blur">
                    <h3 className="font-semibold text-neutral-900 mb-3">📞 Telefon</h3>
                    <a
                      href="tel:+4769894646"
                      className="text-2xl font-bold text-[#d4a31e] hover:underline"
                    >
                      69 89 46 46
                    </a>
                    <p className="mt-2 text-sm text-neutral-600">
                      Ring for bestilling eller spørsmål
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-neutral-300/70 bg-white/60 p-5 backdrop-blur">
                    <h3 className="font-semibold text-neutral-900 mb-3">🌐 Nettside</h3>
                    <a
                      href="https://slitupizza.no"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#d4a31e] hover:underline"
                    >
                      slitupizza.no
                    </a>
                  </div>
                </div>

                {/* Åpningstider */}
                <div className="overflow-hidden rounded-2xl border border-neutral-300/70 bg-white/60 p-5 backdrop-blur">
                  <h3 className="font-semibold text-neutral-900 mb-4">🕒 Åpningstider</h3>
                  <div className="space-y-2 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Mandag</span>
                      <span className="text-neutral-500">Stengt</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tirsdag - Torsdag</span>
                      <span className="font-semibold">15:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fredag</span>
                      <span className="font-semibold">14:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lørdag</span>
                      <span className="font-semibold">13:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Søndag</span>
                      <span className="font-semibold">13:00 - 21:00</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 mb-2">Om oss</h4>
                    <p className="text-sm text-neutral-600">
                      Slitu Pizza Service er en familiedrevet restaurant i Slitu, Eidsberg kommune.
                      Vi har vært i drift siden 2016, og er stolte av å tilby god mat og service.
                      Deigen lages fersk hver morgen, og dressingene er hjemmelagde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-6 mb-8 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Slitu Pizza ·{' '}
            <Link className="hover:underline" href="/">Tilbake til forsiden</Link>
          </footer>
        </section>
      </main>
    </div>
  );
}

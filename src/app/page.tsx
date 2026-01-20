// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#2F2A25]">
      {/* Subtle paper texture vibe */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-multiply">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,#000_0,transparent_40%),radial-gradient(circle_at_80%_0%,#000_0,transparent_45%),radial-gradient(circle_at_80%_90%,#000_0,transparent_45%)]" />
      </div>

      {/* Top bar */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-12 items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-3 text-[#5C5248]">
              <span className="inline-flex items-center gap-2">
                <span className="text-base leading-none">📍</span>
                <span className="hidden sm:inline text-sm">Peter Slotsviksvei 2, Slitu</span>
                <span className="sm:hidden text-sm">Slitu</span>
              </span>

              <span className="hidden md:inline text-[#6B4F3A]">·</span>

              <span className="hidden md:inline-flex items-center gap-2 text-sm">
                <span className="text-base leading-none">👨‍👩‍👧</span>
                <span>Familiedrevet siden 2016</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+4769894646"
                className="inline-flex items-center gap-2 rounded-full border border-[#6B4F3A]/20 bg-white/65 px-3 py-1.5 text-[#2F2A25] shadow-sm backdrop-blur hover:bg-white"
                aria-label="Ring Slitu Pizza"
              >
                <span className="text-base leading-none">📞</span>
                <span className="font-semibold text-[#D9A441]">69 89 46 46</span>
              </a>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#6B4F3A]/20 bg-white/65 shadow-sm backdrop-blur hover:bg-white md:hidden"
                aria-label="Åpne meny"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen((v) => !v)}
              >
                <span className="text-lg leading-none">≡</span>
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-end gap-6 border-t border-[#6B4F3A]/20 py-2 text-sm text-[#5C5248]">
            <Link className="hover:text-[#2F2A25]" href="/meny">
              Meny
            </Link>
            <Link className="hover:text-[#2F2A25]" href="/kontakt">
              Kontakt
            </Link>
          </nav>

          {/* Mobile nav panel */}
          {mobileNavOpen ? (
            <div className="md:hidden">
              <div className="rounded-2xl border border-[#6B4F3A]/20 bg-white/75 p-2 shadow-sm backdrop-blur">
                <div className="grid gap-1 text-sm">
                  <Link
                    className="rounded-xl px-3 py-2 hover:bg-[#F6F2EB]"
                    href="/meny"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Meny
                  </Link>
                  <Link
                    className="rounded-xl px-3 py-2 hover:bg-[#F6F2EB]"
                    href="/kontakt"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
              <div className="h-2" />
            </div>
          ) : null}
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-3 md:pt-4">
          <div className="overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 shadow-sm backdrop-blur">
            <div className="grid items-stretch md:grid-cols-2">
              {/* Left */}
              <div className="relative p-5 md:p-8">
                {/* tiny color hairline (yellow/red) */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-[#D9A441]" />
                  <div className="h-1 w-12 rounded-full bg-[#6B4F3A]" />
                </div>

                {/* Logo placeholder - legg inn logo.png i public/ */}
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-[#D9A441]">Slitu Pizza</h2>
                </div>

                <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
                  Ekte pizza med ferske råvarer <br className="hidden md:block" />
                  – laget i Slitu siden 2016
                </h1>

                <p className="mt-3 text-sm text-[#5C5248]">
                  Familiedrevet pizzarestaurant med hjemmelaget deig hver morgen
                  og dressinger laget fra bunnen av.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#5C5248]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-base leading-none">📍</span>
                    Slitu, Eidsberg
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-base leading-none">👨‍👩‍👧</span>
                    Familievennlig
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-base leading-none">🍕</span>
                    33 pizzaer
                  </span>
                </div>

                <div className="mt-5">
                  <Link
                    href="/meny"
                    className="inline-flex items-center justify-center rounded-xl bg-[#D9A441] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C8962E]"
                  >
                    Se meny
                  </Link>
                </div>

                <div className="mt-4 text-xs text-[#5C5248]">
                  <span className="font-semibold text-[#2F2A25]">Åpent i dag:</span>{" "}
                  Se åpningstider nedenfor
                </div>
              </div>

              {/* Right image */}
              <div className="relative min-h-[200px] md:min-h-[380px]">
                <Image
                  src="/hero.png"
                  alt="Slitu Pizza stemning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="mx-auto max-w-6xl px-4 pt-4">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {/* Pizza */}
            <Link
              href="/meny"
              className="group overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-4 shadow-sm backdrop-blur hover:bg-white/70 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍕</span>
                <div>
                  <h3 className="font-semibold text-[#2F2A25]">Pizza</h3>
                  <p className="text-xs text-[#5C5248]">33 varianter</p>
                </div>
              </div>
            </Link>

            {/* Valgfri */}
            <Link
              href="/meny"
              className="group overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-4 shadow-sm backdrop-blur hover:bg-white/70 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="font-semibold text-[#2F2A25]">Valgfri</h3>
                  <p className="text-xs text-[#5C5248]">Lag din egen</p>
                </div>
              </div>
            </Link>

            {/* Glutenfri */}
            <Link
              href="/meny"
              className="group overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-4 shadow-sm backdrop-blur hover:bg-white/70 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-[#2F2A25]">Glutenfri</h3>
                  <p className="text-xs text-[#5C5248]">Tilgjengelig</p>
                </div>
              </div>
            </Link>

            {/* Tillegg */}
            <Link
              href="/meny"
              className="group overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-4 shadow-sm backdrop-blur hover:bg-white/70 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">➕</span>
                <div>
                  <h3 className="font-semibold text-[#2F2A25]">Tillegg</h3>
                  <p className="text-xs text-[#5C5248]">Ekstra ost, kjøtt</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Om oss & Bestilling */}
        <section className="mx-auto max-w-6xl px-4 pt-4">
          <div className="grid gap-3 md:grid-cols-2">
            {/* Om oss */}
            <div className="overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-5 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-[#2F2A25] mb-2">
                <span className="mr-2">👨‍🍳</span>Om Slitu Pizza
              </h3>
              <p className="text-sm text-[#5C5248]">
                Slitu Pizza Service er en familiedrevet restaurant i Slitu, Eidsberg kommune.
                Vi har vært i drift siden 2016, og er stolte av å tilby god mat og god service
                til en rimelig pris. Deigen lages fersk hver morgen!
              </p>
            </div>

            {/* Bestill */}
            <div className="overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 p-5 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-[#2F2A25] mb-2">
                <span className="mr-2">📞</span>Bestill på telefon
              </h3>
              <p className="text-sm text-[#5C5248] mb-4">
                Ring oss for å bestille pizza til henting.<br />
                <a href="tel:+4769894646" className="font-semibold text-[#D9A441] hover:underline">
                  69 89 46 46
                </a>
              </p>
              <a
                href="https://slitupizza.no"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#6B4F3A]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#2F2A25] shadow-sm hover:bg-white"
              >
                Besøk slitupizza.no
              </a>
            </div>
          </div>
        </section>

        {/* Åpningstider & Adresse */}
        <section className="mx-auto max-w-6xl px-4 py-4">
          <div className="overflow-hidden rounded-lg border border-[#6B4F3A]/15 bg-white/55 shadow-sm backdrop-blur">
            <div className="grid gap-3 p-4 md:grid-cols-3 md:items-center">
              <div className="flex items-center gap-3 text-[#2F2A25]">
                <span className="text-lg leading-none">🕒</span>
                <div>
                  <div className="text-xs text-[#5C5248]">Åpningstider</div>
                  <div className="text-sm font-semibold">
                    Tir-Tor: 15-21 · Fre: 14-21<br />
                    Lør-Søn: 13-21
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#2F2A25]">
                <span className="text-lg leading-none">📍</span>
                <div>
                  <div className="text-xs text-[#5C5248]">Adresse</div>
                  <div className="text-sm font-semibold">Peter Slotsviksvei 2, 1859 Slitu</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <a
                  href="https://maps.google.com/?q=Peter%20Slotsviksvei%202%2C%201859%20Slitu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#6B4F3A]/20 bg-white/70 px-4 py-2 text-xs font-semibold text-[#2F2A25] shadow-sm hover:bg-white"
                >
                  Vis kart
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-3 text-center text-xs text-[#5C5248]">
            © {new Date().getFullYear()} Slitu Pizza ·{" "}
            <Link className="hover:underline" href="/meny">
              Se meny
            </Link>
          </footer>
        </section>
      </main>
    </div>
  );
}

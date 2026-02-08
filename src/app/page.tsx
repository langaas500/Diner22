// UPDATED: premium polish — typography, CTA system, trust strip, featured card, micro-interactions
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../data/menu";

const phoneDisplay = "920 60 569";
const phoneHref = "tel:92060569";

/* Badge mapping by item id */
const badgeMap: Record<number, { label: string; variant: string }> = {
  1: { label: "Bestselger", variant: "hot" },
  3: { label: "Sterk", variant: "spicy" },
  20: { label: "Populær", variant: "default" },
};

function getFromPrice(item: { price?: number; prices?: { value: number }[] }) {
  if (item.prices && item.prices.length > 0) {
    return Math.min(...item.prices.map((p) => p.value));
  }
  return item.price ?? null;
}

function formatNok(n: number) {
  return `${n} kr`;
}

export default function HomePage() {
  const popular = menuItems.filter((m) => m.popular);
  const highlights = (popular.length >= 3 ? popular : menuItems).slice(0, 6);
  const featured = highlights[0];
  const rest = highlights.slice(1);

  const featuredPrice = featured ? getFromPrice(featured) : null;
  const featuredBadge = featured ? badgeMap[featured.id] : undefined;

  return (
    <div>
      {/* HEADER */}
      <header className="neonTop">
        <div className="container">
          <div className="topRow">
            <Link href="/" className="brandLogo" aria-label="Diner 22 hjem">
              <img className="brandLogoImg" src="/logo.png" alt="Diner 22" />
            </Link>

            <nav className="navPill" aria-label="Navigasjon">
              <Link href="/">Hjem</Link>
              <span className="sep">›</span>
              <Link href="/meny">Meny</Link>
              <span className="sep">›</span>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="heroGrid">
              <div className="card heroLeft">
                <p className="heroKicker">Foodtruck · Mysen</p>

                <h1 className="heroTitle">
                  Velkommen til <span className="neonWord">Diner 22</span>
                </h1>

                <p className="heroLead">
                  Saftige burgere, sprø fries og gode dips — laget med
                  kjærlighet fra vår foodtruck i Mysen.
                </p>

                <div className="ctaRow">
                  <a className="btnPrimary" href={phoneHref}>
                    Bestill på telefon <span aria-hidden="true">›</span>
                  </a>
                  <Link className="btnGhost" href="/meny">
                    Se meny
                  </Link>
                </div>
              </div>

              <div className="heroRight card" aria-label="Diner 22 burger og fries">
                <Image
                  src="/bilde1.png"
                  alt=""
                  fill
                  priority
                  className="heroImg"
                />
                <div className="heroGrain" aria-hidden="true" />
                <div className="heroVignette" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trustStrip" aria-label="Hvorfor velge oss">
          <div className="container">
            <div className="trustRow">
              <div className="trustItem">
                <svg
                  className="trustIcon trustIconStar"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  width="18"
                  height="18"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>
                  <strong>4,7</strong> på Google
                </span>
              </div>

              <div className="trustDivider" aria-hidden="true" />

              <div className="trustItem">
                <svg
                  className="trustIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  width="18"
                  height="18"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>
                  Klar på <strong>15–25 min</strong>
                </span>
              </div>

              <div className="trustDivider" aria-hidden="true" />

              <div className="trustItem">
                <svg
                  className="trustIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  width="18"
                  height="18"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Takeaway i <strong>Mysen</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR */}
        <section className="section" id="populaert">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Populært akkurat nå</h2>
              <Link className="btnGhost btnSmall" href="/meny">
                Se full meny
              </Link>
            </div>

            {/* Featured item */}
            {featured && (
              <div className="featuredCard">
                <div className="featuredContent">
                  {featuredBadge && (
                    <span className={`badge badge-${featuredBadge.variant}`}>
                      {featuredBadge.label}
                    </span>
                  )}
                  <h3 className="featuredName">{featured.name}</h3>
                  {featured.description && (
                    <p className="featuredDesc">{featured.description}</p>
                  )}
                  {featured.prices && featured.prices.length > 0 && (
                    <div className="featuredVariants">
                      {featured.prices.map((p, i) => (
                        <span key={p.label}>
                          {p.label}:{" "}
                          <strong>{p.value} kr</strong>
                          {i < featured.prices!.length - 1 && " · "}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="featuredPriceBlock">
                  {featuredPrice !== null && (
                    <>
                      <span className="featuredFrom">fra</span>
                      <span className="featuredPrice neonWord">
                        {formatNok(featuredPrice)}
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Rest of highlights */}
            <div className="highlightGrid">
              {rest.map((item) => {
                const fromPrice = getFromPrice(item);
                const badge = badgeMap[item.id];

                return (
                  <div key={item.id} className="card highlightCard">
                    <div className="highlightTop">
                      <div>
                        {badge && (
                          <span className={`badge badge-${badge.variant}`}>
                            {badge.label}
                          </span>
                        )}
                        <div className="highlightName">{item.name}</div>
                      </div>
                      {fromPrice !== null && (
                        <div className="highlightPrice">
                          fra{" "}
                          <span className="neonWord">
                            {formatNok(fromPrice)}
                          </span>
                        </div>
                      )}
                    </div>

                    {item.description ? (
                      <div className="highlightDesc">{item.description}</div>
                    ) : (
                      <div className="highlightDesc">
                        Se full meny for detaljer.
                      </div>
                    )}

                    {item.prices && item.prices.length > 0 && (
                      <div className="highlightMeta">
                        {item.prices.map((p) => p.label).join(" · ")}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="rightCtaRow">
              <Link className="btnPrimary" href="/meny">
                Se hele menyen <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY — bilde2 + foodtruck side by side */}
        <section className="section" id="galleri">
          <div className="container">
            <div className="galleryDuo">
              <div className="showcaseWrap">
                <Image
                  src="/bilde2.png"
                  alt="Crispy chicken og sides fra Diner 22"
                  width={960}
                  height={540}
                  className="showcaseImg"
                />
                <div className="showcaseOverlay" aria-hidden="true" />
                <div className="showcaseText">
                  <h2 className="showcaseHeading">Crispy Chicken &amp; Sides</h2>
                  <p className="showcaseSub">
                    Sprøtt, raskt og perfekt til takeaway
                  </p>
                </div>
              </div>

              <div className="showcaseWrap">
                <Image
                  src="/truck.jpg"
                  alt="Diner 22 foodtruck i Mysen"
                  width={960}
                  height={1200}
                  className="showcaseImg"
                />
                <div className="showcaseOverlay" aria-hidden="true" />
                <div className="showcaseText">
                  <h2 className="showcaseHeading">Vår foodtruck</h2>
                  <p className="showcaseSub">Raveien 1, Mysen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footerBar" id="kontakt">
          <div className="container">
            <div className="footerRow">
              <div>
                <strong>Diner 22</strong> · Mysen ·{" "}
                <a href={phoneHref} className="footerPhone">
                  {phoneDisplay}
                </a>
              </div>

              <div className="footerLinks">
                <Link href="/meny">Meny</Link>
                <a href="#populaert">Populært</a>
                <Link href="/kontakt">Kontakt</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* MOBILE STICKY CTA */}
      <div className="mobileCta" aria-label="Bestilling">
        <a className="btnPrimary mobilePrimaryBtn" href={phoneHref}>
          Bestill på telefon
        </a>
        <Link className="mobileSecondaryBtn" href="/meny">
          Se meny
        </Link>
      </div>
    </div>
  );
}

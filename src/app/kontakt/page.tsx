// src/app/kontakt/page.tsx
import Link from "next/link";

const phoneDisplay = "920 60 569";
const phoneHref = "tel:92060569";
const email = "diner22.as@gmail.com";
const emailHref = `mailto:${email}`;

const addressLine = "Raveien 1";
const postal = "1850 Mysen";
const mapsHref = "https://maps.google.com/?q=Raveien%201%2C%201850%20Mysen";

const hours = [
  { day: "Mandag", time: "Stengt" },
  { day: "Tirsdag", time: "15:00 – 21:00" },
  { day: "Onsdag", time: "15:00 – 21:00" },
  { day: "Torsdag", time: "15:00 – 21:00" },
  { day: "Fredag", time: "14:00 – 21:00" },
  { day: "Lørdag", time: "13:00 – 21:00" },
  { day: "Søndag", time: "13:00 – 21:00" },
];

export default function KontaktPage() {
  return (
    <div className="menuShell">
      {/* TOP */}
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
              <span style={{ color: "rgba(233,230,242,0.95)", fontWeight: 800 }}>
                Kontakt
              </span>
            </nav>

            <a className="btnPrimary" href={phoneHref}>
              Ring og bestill <span aria-hidden="true">›</span>
            </a>
          </div>

          {/* Header block */}
          <div className="menuHeaderBlock">
            <div className="heroKicker">Kontakt</div>
            <h1 className="menuTitle">
              Kontakt <span className="neonWord">Diner 22</span>
            </h1>
            <p className="menuSub">
              Ring for bestilling. Spør oss om allergener, åpningstider eller hvor vi står.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href={phoneHref}>
                📞 Ring {phoneDisplay} <span aria-hidden="true">›</span>
              </a>
              <a className="btnGhost" href={emailHref}>
                ✉️ Send e-post
              </a>
              <a className="btnGhost" href={mapsHref} target="_blank" rel="noreferrer">
                🗺️ Åpne kart
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="menuMain">
        <div className="container">
          <section className="menuCardWrap">
            <div className="card menuCard">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: 14,
                }}
              >
                {/* Left: contact blocks */}
                <div style={{ display: "grid", gap: 14 }}>
                  <div className="itemCard">
                    <div className="itemTop">
                      <h2 className="itemName">📍 Adresse</h2>
                      <a className="btnGhost" href={mapsHref} target="_blank" rel="noreferrer">
                        Vis kart
                      </a>
                    </div>
                    <p className="itemDesc" style={{ marginBottom: 0 }}>
                      {addressLine}
                      <br />
                      {postal}
                    </p>
                    <div className="itemBottom">
                      <div className="variantLine">
                        Tips: legg QR-kode på disken som peker til <span className="variantPrice">/meny</span>.
                      </div>
                    </div>
                  </div>

                  <div className="itemCard">
                    <div className="itemTop">
                      <h2 className="itemName">📞 Telefon</h2>
                      <div className="itemPricePill">
                        <span className="neonWord">{phoneDisplay}</span>
                      </div>
                    </div>
                    <p className="itemDesc">
                      Ring for bestilling eller spørsmål. Hvis vi har rush: prøv igjen etter et minutt.
                    </p>
                    <div className="ctaRow" style={{ marginTop: 10 }}>
                      <a className="btnPrimary" href={phoneHref}>
                        Ring nå <span aria-hidden="true">›</span>
                      </a>
                      <Link className="btnGhost" href="/meny">
                        Se meny
                      </Link>
                    </div>
                  </div>

                  <div className="itemCard">
                    <div className="itemTop">
                      <h2 className="itemName">✉️ E-post</h2>
                      <div className="itemPricePill">
                        <span style={{ color: "rgba(233,230,242,0.9)" }}>{email}</span>
                      </div>
                    </div>
                    <p className="itemDesc">
                      For booking, samarbeid, eller større bestillinger.
                    </p>
                    <div className="ctaRow" style={{ marginTop: 10 }}>
                      <a className="btnGhost" href={emailHref}>
                        Send e-post
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: hours + about */}
                <div style={{ display: "grid", gap: 14 }}>
                  <div className="itemCard">
                    <div className="itemTop">
                      <h2 className="itemName">🕒 Åpningstider</h2>
                      <div className="itemPricePill">Med forbehold</div>
                    </div>

                    <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 12,
                            padding: "10px 12px",
                            borderRadius: 14,
                            border: "1px solid rgba(255,255,255,0.10)",
                            background: "rgba(255,255,255,0.03)",
                          }}
                        >
                          <div style={{ fontWeight: 900 }}>{h.day}</div>
                          <div style={{ color: "rgba(233,230,242,0.78)" }}>{h.time}</div>
                        </div>
                      ))}
                    </div>

                    <div className="itemBottom">
                      <div className="variantLine">
                        Sjekk også <span className="variantPrice">Facebook</span> for oppdateringer om hvor vi står.
                      </div>
                    </div>
                  </div>

                  <div className="itemCard">
                    <div className="itemTop">
                      <h2 className="itemName">👨‍🍳 Om oss</h2>
                      <div className="itemPricePill">Mysen</div>
                    </div>
                    <p className="itemDesc">
                      Diner 22 er en retro-inspirert foodtruck med fokus på enkle ting gjort skikkelig:
                      saftige burgere, sprø fries og gode dips.
                    </p>
                    <div className="ctaRow" style={{ marginTop: 10 }}>
                      <Link className="btnPrimary" href="/meny">
                        Se meny <span aria-hidden="true">›</span>
                      </Link>
                      <a className="btnGhost" href={mapsHref} target="_blank" rel="noreferrer">
                        Finn oss
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: stack columns */}
              <style>{`
                @media (max-width: 980px) {
                  .menuCard > div {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
            </div>
          </section>

          <footer className="footerBar">
            <div className="container">
              <div className="footerRow">
                <div>
                  © {new Date().getFullYear()} Diner 22 ·{" "}
                  <a href={phoneHref} className="footerPhone">
                    {phoneDisplay}
                  </a>
                </div>
                <div className="footerLinks">
                  <Link href="/meny">Meny</Link>
                  <Link href="/">Forside</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

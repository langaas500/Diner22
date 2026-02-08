"use client";
import { useState } from "react";
import Link from "next/link";

const MENU_DATA = {
  burgers: [
    {
      id: 1,
      name: "Klassikeren",
      allergens: "1,2,3,11,13",
      layers: ["Brioche", "Ketsjup", "Cheddar", "100/170g biffkjøtt", "Tomat", "Rødløk", "Salat", "Dressing", "Brioche"],
      layerColors: ["#D4883A", "#CC2222", "#F5A623", "#6B3A2A", "#E74C3C", "#9B59B6", "#27AE60", "#F0E68C", "#D4883A"],
      prices: { bare: 110, medFrites: 145 },
      weight: "100g"
    },
    {
      id: 2,
      name: "BBQ Burger",
      allergens: "1,2,3,8,9,11,13",
      layers: ["Brioche", "Løkring", "BBQ-saus", "Cheddar", "100/170g biffkjøtt", "Coleslaw", "Brioche"],
      layerColors: ["#D4883A", "#C9A84C", "#8B2500", "#F5A623", "#6B3A2A", "#B8D4A8", "#D4883A"],
      prices: { bare: 110, medFrites: 145 },
      weight: "100g"
    },
    {
      id: 3,
      name: "Jalapeño Burger",
      allergens: "1,2,11",
      layers: ["Brioche", "Ketsjup", "Cheddar", "100/170g biffkjøtt", "Jalapeño", "Tomat", "Rødløk", "Salat", "Dressing", "Brioche"],
      layerColors: ["#D4883A", "#CC2222", "#F5A623", "#6B3A2A", "#2ECC40", "#E74C3C", "#9B59B6", "#27AE60", "#F0E68C", "#D4883A"],
      prices: { bare: 155, medFrites: 195 },
      weight: "170g"
    },
    {
      id: 4,
      name: "The Beast",
      allergens: "1,2,3,8,9,11,13",
      layers: ["Brioche", "BBQ-saus", "Bacon", "Cheddar", "100/170g biffkjøtt", "Rødløk", "Sylteagurk", "Coleslaw", "Brioche"],
      layerColors: ["#D4883A", "#8B2500", "#A0522D", "#F5A623", "#6B3A2A", "#9B59B6", "#6B8E23", "#B8D4A8", "#D4883A"],
      prices: { bare: 155, medFrites: 195 },
      weight: "170g"
    },
  ],
  chicken: {
    id: 6,
    name: "Crispy Chicken Burger",
    allergens: "1,3,13",
    layers: ["Brioche", "Chili mayo", "Salsa", "🍗 Crispy kylling", "Rødløk", "Salat", "Aioli", "Brioche"],
    layerColors: ["#D4883A", "#FF6B6B", "#E74C3C", "#F5A623", "#9B59B6", "#27AE60", "#F0E68C", "#D4883A"],
    prices: { bare: 135, medFrites: 175 },
  },
  friedChicken: {
    id: 7,
    name: "Fried Chicken",
    allergens: "1",
    desc: "Spesiallaget spicy battermix",
    options: [
      { label: "4 biter med pommes og en dip", price: 165 },
      { label: "6 biter med pommes og en dip", price: 185 },
      { label: "8 biter med pommes og en dip", price: 205 },
      { label: "10 biter med to pommes og to dip – perfekt å dele", price: 320 },
    ]
  },
  sides: [
    { id: 8, name: "Sharepack", allergens: "1,2,3", options: [
      { label: "3 chili cheese, mozzarella sticks og løkringer", price: 65 },
      { label: "6 chili cheese, mozzarella sticks og løkringer", price: 85 },
    ]},
    { id: 9, name: "Gryte med marinert kylling", allergens: "1,2,9", price: 175, desc: "Serveres med ris, hakket rødløk, salat og 1/2 baguette" },
    { id: 10, name: "Pommes Frites", options: [
      { label: "Liten 250g", price: 55 },
      { label: "Stor 500g", price: 80 },
    ]},
    { id: 11, name: "Dirty Fries", allergens: "2,3,13", options: [
      { label: "1. m/vårløk, bacon og cheddardressing", price: null },
      { label: "2. m/vårløk, bacon, cheddardressing og bbq-saus", price: null },
      { label: "3. m/bacon, cheddardressing og jalapeño", price: null },
      { label: "Liten", price: 85 },
      { label: "Stor", price: 115 },
    ]},
  ],
  dips: {
    price: 10,
    items: ["Aioli", "Hamburgerdressing", "BBQ-saus", "Sriracha mayo", "Ketsjup", "Sennep", "Hvitløksdressing", "Sweet chili"]
  },
  drinks: {
    id: 12,
    name: "Mineralvann",
    price: 30,
    items: ["Coca Cola", "Coca Cola Zero", "Pepsi Max", "Urge", "Solo", "Vann med kullsyre", "Vann uten kullsyre"]
  },
  kids: {
    id: 13,
    name: "Barnemeny",
    desc: "Serveres med en kuli/solrik",
    options: [
      { label: "Gryte med marinert kylling", price: 120 },
      { label: "100g Hamburger med pommes frites", price: 110 },
      { label: "Fritert kylling, 2 biter med pommes frites og dip", price: 135 },
    ]
  },
  buildYourOwn: {
    id: 5,
    name: "Lag din egen burger",
    desc: "Inntil 5 tilbehør, ost er inklusivt. Utover dette, 10,- pr. valgt tilbehør. Lages med 100g/170g burger og briochebrød.",
    toppings: ["Salat", "Coleslaw", "Tomat", "Rødløk", "Jalapeño", "Sylteagurk", "Cheddarost", "Gulost", "Bacon", "Sprøstekt løk", "Syltet rødløk"],
    sauces: ["Aioli", "Hamburgerdressing", "BBQ-saus", "Sriracha mayo", "Ketsjup", "Sennep", "Hvitløksdressing", "Sweet chili"]
  }
};

const NeonText = ({ children, color = "#FF1493", size = "2rem", className = "" }: { children: React.ReactNode; color?: string; size?: string; className?: string }) => (
  <span
    className={className}
    style={{
      fontFamily: "'Righteous', cursive",
      fontSize: size,
      color: color,
      textShadow: `0 0 7px ${color}, 0 0 10px ${color}, 0 0 21px ${color}, 0 0 42px ${color}40`,
      letterSpacing: "0.05em",
    }}
  >
    {children}
  </span>
);

const BurgerStack = ({ burger, isExpanded, onClick }: { burger: { id: number; name: string; allergens: string; layers: string[]; layerColors: string[]; prices: { bare: number; medFrites: number }; weight?: string }; isExpanded: boolean; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        padding: "20px",
        borderRadius: "16px",
        background: isExpanded
          ? "linear-gradient(135deg, rgba(255,20,147,0.12) 0%, rgba(20,20,40,0.95) 100%)"
          : "linear-gradient(135deg, rgba(30,30,60,0.8) 0%, rgba(15,15,35,0.95) 100%)",
        border: isExpanded ? "1px solid rgba(255,20,147,0.4)" : "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered && !isExpanded ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isExpanded
          ? "0 0 30px rgba(255,20,147,0.2), 0 8px 32px rgba(0,0,0,0.4)"
          : hovered
          ? "0 8px 24px rgba(0,0,0,0.3)"
          : "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
        {/* Stacked burger visual */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "120px",
          paddingTop: "8px",
        }}>
          {burger.layers.map((layer, i) => {
            const isTop = i === 0;
            const isBottom = i === burger.layers.length - 1;
            const isBun = layer === "Brioche";
            const isPatty = layer.includes("biffkjøtt");
            const isChicken = layer.includes("kylling");
            const width = isBun ? 90 : (isPatty || isChicken) ? 95 : 70 + Math.random() * 20;

            if (isChicken) {
              return (
                <div
                  key={i}
                  style={{
                    width: `${width}%`,
                    height: "22px",
                    position: "relative",
                    margin: "-1px 0",
                    transition: "all 0.3s ease",
                    transform: hovered ? `translateX(${(i % 2 === 0 ? 2 : -2)}px)` : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Crispy chicken piece - irregular crunchy shape */}
                  <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #D4883A 0%, #C67B28 30%, #E8A84C 60%, #B8691E 100%)",
                    borderRadius: "40% 35% 45% 30% / 50% 40% 60% 45%",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,220,150,0.3), inset 0 -2px 4px rgba(100,50,0,0.3)",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Crispy texture dots */}
                    {[...Array(8)].map((_, j) => (
                      <div key={j} style={{
                        position: "absolute",
                        width: `${3 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 3}px`,
                        borderRadius: "50%",
                        background: `rgba(${180 + Math.random() * 60}, ${100 + Math.random() * 40}, ${20 + Math.random() * 30}, 0.6)`,
                        top: `${Math.random() * 80}%`,
                        left: `${5 + Math.random() * 85}%`,
                      }} />
                    ))}
                    {/* Drumstick bone sticking out */}
                    <div style={{
                      position: "absolute",
                      right: "-8px",
                      top: "50%",
                      transform: "translateY(-50%) rotate(-15deg)",
                      width: "16px",
                      height: "5px",
                      background: "linear-gradient(90deg, #E8D5B0, #F5ECD9)",
                      borderRadius: "0 6px 6px 0",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}>
                      <div style={{
                        position: "absolute",
                        right: "-2px",
                        top: "-2px",
                        width: "8px",
                        height: "9px",
                        background: "#F5ECD9",
                        borderRadius: "50%",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
                      }} />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={i}
                style={{
                  width: `${width}%`,
                  height: isBun ? "18px" : isPatty ? "14px" : "8px",
                  background: isBun
                    ? isTop
                      ? "linear-gradient(180deg, #E8A84C 0%, #D4883A 50%, #C07830 100%)"
                      : "linear-gradient(180deg, #C07830 0%, #D4883A 50%, #E8A84C 100%)"
                    : isPatty
                    ? "linear-gradient(180deg, #5C2E1A 0%, #6B3A2A 50%, #7A4636 100%)"
                    : `linear-gradient(180deg, ${burger.layerColors[i]}DD 0%, ${burger.layerColors[i]} 100%)`,
                  borderRadius: isTop
                    ? "50% 50% 4px 4px"
                    : isBottom
                    ? "4px 4px 8px 8px"
                    : "3px",
                  margin: isBun ? "0" : "-1px 0",
                  boxShadow: isPatty
                    ? "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.1)"
                    : isBun
                    ? "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)"
                    : "0 1px 2px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  transform: hovered ? `translateX(${(i % 2 === 0 ? 2 : -2)}px)` : "none",
                  position: "relative",
                }}
              >
                {isTop && isBun && (
                  <>
                    <div style={{
                      position: "absolute", top: "4px", left: "25%",
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: "#F5DEB3", opacity: 0.7
                    }} />
                    <div style={{
                      position: "absolute", top: "3px", left: "55%",
                      width: "3px", height: "3px", borderRadius: "50%",
                      background: "#F5DEB3", opacity: 0.6
                    }} />
                    <div style={{
                      position: "absolute", top: "6px", left: "40%",
                      width: "3px", height: "3px", borderRadius: "50%",
                      background: "#F5DEB3", opacity: 0.5
                    }} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div>
              <NeonText size="1.2rem" color={isExpanded ? "#FF1493" : "#FF69B4"}>
                {burger.id}. {burger.name}
              </NeonText>
              <div style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.35)",
                marginTop: "2px",
                fontFamily: "'Space Mono', monospace"
              }}>
                Allergener: {burger.allergens}
              </div>
            </div>
            <div style={{
              fontFamily: "'Righteous', cursive",
              color: "#00FFAA",
              textShadow: "0 0 8px rgba(0,255,170,0.5)",
              textAlign: "right",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}>
              <div>{burger.prices.bare},-</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(0,255,170,0.7)" }}>m/frites {burger.prices.medFrites},-</div>
            </div>
          </div>

          {isExpanded && (
            <div style={{
              marginTop: "12px",
              animation: "fadeIn 0.3s ease",
            }}>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}>
                {burger.layers.map((layer, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "3px 10px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontFamily: "'Space Mono', monospace",
                      background: `${burger.layerColors[i]}25`,
                      color: burger.layerColors[i],
                      border: `1px solid ${burger.layerColors[i]}40`,
                    }}
                  >
                    {layer}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: "10px",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Space Mono', monospace",
              }}>
                Burger {burger.weight} / Burger med 250g pommes frites
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryTab = ({ label, active, onClick, color }: { label: string; active: boolean; onClick: () => void; color: string }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 8px",
      borderRadius: "12px",
      border: active ? `2px solid ${color}` : "2px solid rgba(255,255,255,0.08)",
      background: active
        ? `linear-gradient(135deg, ${color}25 0%, ${color}10 100%)`
        : "linear-gradient(135deg, rgba(30,30,60,0.6) 0%, rgba(15,15,35,0.8) 100%)",
      color: active ? color : "rgba(255,255,255,0.5)",
      fontFamily: "'Righteous', cursive",
      fontSize: "0.8rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textShadow: active ? `0 0 10px ${color}60` : "none",
      whiteSpace: "nowrap",
      width: "100%",
      boxShadow: active ? `0 0 16px ${color}20, inset 0 0 12px ${color}08` : "none",
    }}
  >
    {label}
  </button>
);

const MenuItem = ({ name, desc, price, allergens, options, children }: { name: string; desc?: string; price?: number | null; allergens?: string; options?: { label: string; price: number | null }[]; children?: React.ReactNode }) => (
  <div style={{
    padding: "16px 20px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(30,30,60,0.8) 0%, rgba(15,15,35,0.95) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "10px",
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <span style={{
          fontFamily: "'Righteous', cursive",
          color: "#FF69B4",
          fontSize: "1rem",
          textShadow: "0 0 8px rgba(255,105,180,0.3)",
        }}>
          {name}
        </span>
        {allergens && (
          <span style={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.3)",
            marginLeft: "8px",
            fontFamily: "'Space Mono', monospace",
          }}>
            {allergens}
          </span>
        )}
      </div>
      {price && (
        <span style={{
          fontFamily: "'Righteous', cursive",
          color: "#00FFAA",
          textShadow: "0 0 8px rgba(0,255,170,0.4)",
        }}>
          {price},-
        </span>
      )}
    </div>
    {desc && (
      <p style={{
        fontSize: "0.8rem",
        color: "rgba(255,255,255,0.5)",
        margin: "6px 0 0",
        fontFamily: "'Space Mono', monospace",
        lineHeight: 1.5,
      }}>
        {desc}
      </p>
    )}
    {options && (
      <div style={{ marginTop: "8px" }}>
        {options.map((opt, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 0",
            fontSize: "0.8rem",
            fontFamily: "'Space Mono', monospace",
            color: "rgba(255,255,255,0.6)",
            borderBottom: i < options.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
          }}>
            <span>{opt.label}</span>
            {opt.price && (
              <span style={{ color: "#00FFAA", fontFamily: "'Righteous', cursive" }}>
                {opt.price},-
              </span>
            )}
          </div>
        ))}
      </div>
    )}
    {children}
  </div>
);

const DrinkCard = ({ name, bgColor, textColor, accentColor, logo }: { name: string; bgColor: string; textColor: string; accentColor: string; logo: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "16px 12px",
        borderRadius: "14px",
        background: `linear-gradient(145deg, ${bgColor}CC 0%, ${bgColor}99 100%)`,
        border: `1px solid ${accentColor}50`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-3px) scale(1.02)" : "none",
        boxShadow: hovered
          ? `0 6px 20px ${bgColor}60, 0 0 15px ${accentColor}30`
          : `0 2px 8px rgba(0,0,0,0.3)`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle can/bottle shape in background */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30px",
        height: "55px",
        borderRadius: "4px 4px 6px 6px",
        border: `1px solid ${accentColor}15`,
        opacity: 0.2,
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, calc(-50% - 28px))",
        width: "16px",
        height: "6px",
        borderRadius: "2px 2px 0 0",
        border: `1px solid ${accentColor}15`,
        borderBottom: "none",
        opacity: 0.2,
      }} />

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {logo}
      </div>

      {/* Name */}
      <div style={{
        fontSize: "0.65rem",
        color: `${textColor}AA`,
        fontFamily: "'Space Mono', monospace",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        lineHeight: 1.3,
      }}>
        {name}
      </div>
    </div>
  );
};

const BuildYourOwnSection = () => {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const data = MENU_DATA.buildYourOwn;

  const toggleTopping = (t: string) => {
    setSelectedToppings(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  const freeCount = 5;
  const extraCount = Math.max(0, selectedToppings.length - freeCount);
  const extraCost = extraCount * 10;

  return (
    <div style={{
      padding: "20px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, rgba(0,255,170,0.06) 0%, rgba(15,15,35,0.95) 100%)",
      border: "1px solid rgba(0,255,170,0.2)",
    }}>
      <NeonText size="1.2rem" color="#00FFAA">🍔 {data.name}</NeonText>
      <p style={{
        fontSize: "0.8rem",
        color: "rgba(255,255,255,0.5)",
        marginTop: "8px",
        fontFamily: "'Space Mono', monospace",
        lineHeight: 1.5,
      }}>
        {data.desc}
      </p>

      <div style={{ marginTop: "16px" }}>
        <div style={{
          fontSize: "0.75rem",
          color: "#FF69B4",
          fontFamily: "'Righteous', cursive",
          marginBottom: "8px",
        }}>
          Tilbehør ({selectedToppings.length}/{freeCount} gratis)
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {data.toppings.map(t => {
            const selected = selectedToppings.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTopping(t)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: selected ? "1px solid #00FFAA" : "1px solid rgba(255,255,255,0.15)",
                  background: selected ? "rgba(0,255,170,0.15)" : "rgba(255,255,255,0.05)",
                  color: selected ? "#00FFAA" : "rgba(255,255,255,0.6)",
                  fontSize: "0.75rem",
                  fontFamily: "'Space Mono', monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {selected ? "✓ " : ""}{t}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "14px" }}>
        <div style={{
          fontSize: "0.75rem",
          color: "#FF69B4",
          fontFamily: "'Righteous', cursive",
          marginBottom: "8px",
        }}>
          Sauser
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {data.sauces.map(s => {
            const selected = selectedToppings.includes(s);
            return (
              <button
                key={s}
                onClick={() => toggleTopping(s)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: selected ? "1px solid #FFD700" : "1px solid rgba(255,255,255,0.15)",
                  background: selected ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.05)",
                  color: selected ? "#FFD700" : "rgba(255,255,255,0.6)",
                  fontSize: "0.75rem",
                  fontFamily: "'Space Mono', monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {selected ? "✓ " : ""}{s}
              </button>
            );
          })}
        </div>
      </div>

      {extraCost > 0 && (
        <div style={{
          marginTop: "12px",
          padding: "8px 12px",
          borderRadius: "8px",
          background: "rgba(255,215,0,0.1)",
          border: "1px solid rgba(255,215,0,0.2)",
          fontSize: "0.8rem",
          fontFamily: "'Righteous', cursive",
          color: "#FFD700",
        }}>
          +{extraCost},- for {extraCount} ekstra tilbehør
        </div>
      )}
    </div>
  );
};

export default function Diner22Menu() {
  const [activeTab, setActiveTab] = useState("burgers");
  const [expandedBurger, setExpandedBurger] = useState<number | null>(null);

  const tabs = [
    { id: "burgers", label: "🍔 Burgere", color: "#FF1493" },
    { id: "chicken", label: "🍗 Kylling", color: "#FF8C00" },
    { id: "sides", label: "🍟 Sides", color: "#FFD700" },
    { id: "build", label: "⚡ Bygg din egen", color: "#00FFAA" },
    { id: "drinks", label: "🥤 Drikke", color: "#00BFFF" },
    { id: "kids", label: "👶 Barn", color: "#DA70D6" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0A0A1A 0%, #12082A 50%, #0A0A1A 100%)",
      fontFamily: "'Space Mono', monospace",
      color: "white",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Space+Mono:wght@400;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.97; }
          52% { opacity: 0.9; }
          54% { opacity: 1; }
          80% { opacity: 0.98; }
          82% { opacity: 0.85; }
          84% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }

        * { box-sizing: border-box; }
        body { margin: 0; background: #0A0A1A; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,20,147,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,20,147,0.5); }

        .tab-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .tab-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Background grid effect */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          linear-gradient(rgba(255,20,147,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,20,147,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "fixed",
        top: "-20%",
        left: "30%",
        width: "40%",
        height: "40%",
        background: "radial-gradient(ellipse, rgba(255,20,147,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "pulse 4s ease-in-out infinite",
        zIndex: 0,
      }} />
      <div style={{
        position: "fixed",
        bottom: "-10%",
        right: "20%",
        width: "30%",
        height: "30%",
        background: "radial-gradient(ellipse, rgba(0,255,170,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "pulse 5s ease-in-out infinite 1s",
        zIndex: 0,
      }} />

      {/* Shared header */}
      <header className="neonTop" style={{ position: "relative", zIndex: 2 }}>
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

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "700px",
        margin: "0 auto",
        padding: "24px 16px 60px",
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "32px",
          animation: "fadeIn 0.6s ease",
        }}>
          <div style={{ animation: "flicker 3s infinite" }}>
            <NeonText size="clamp(2.2rem, 6vw, 3.5rem)" color="#FF1493">
              Meny
            </NeonText>
          </div>
          <div style={{
            marginTop: "8px",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}>
            Smash Burgers & Fried Chicken
          </div>
          <div style={{
            marginTop: "12px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,20,147,0.4), transparent)",
          }} />
        </div>

        {/* Category Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginBottom: "24px",
          animation: "fadeIn 0.6s ease 0.1s both",
        }}>
          {tabs.map(tab => (
            <CategoryTab
              key={tab.id}
              label={tab.label}
              active={activeTab === tab.id}
              onClick={() => { setActiveTab(tab.id); setExpandedBurger(null); }}
              color={tab.color}
            />
          ))}
        </div>

        {/* Menu Sections */}
        <div style={{ animation: "fadeIn 0.4s ease" }}>
          {activeTab === "burgers" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{
                padding: "12px 16px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", fontFamily: "'Space Mono', monospace" }}>
                    💡 Trykk på en burger for å se alle ingredienser
                  </span>
                </div>
              </div>
              {MENU_DATA.burgers.map(burger => (
                <BurgerStack
                  key={burger.id}
                  burger={burger}
                  isExpanded={expandedBurger === burger.id}
                  onClick={() => setExpandedBurger(expandedBurger === burger.id ? null : burger.id)}
                />
              ))}
            </div>
          )}

          {activeTab === "chicken" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <BurgerStack
                burger={{
                  ...MENU_DATA.chicken,
                  weight: "kylling",
                }}
                isExpanded={expandedBurger === MENU_DATA.chicken.id}
                onClick={() => setExpandedBurger(expandedBurger === MENU_DATA.chicken.id ? null : MENU_DATA.chicken.id)}
              />
              {/* Fried Chicken */}
              <div style={{
                padding: "20px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(30,30,60,0.8) 0%, rgba(15,15,35,0.95) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                {/* Title row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                  <div>
                    <NeonText size="1.2rem" color="#FF8C00">
                      7. {MENU_DATA.friedChicken.name}
                    </NeonText>
                    <div style={{
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.35)",
                      marginTop: "2px",
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      Allergener: {MENU_DATA.friedChicken.allergens}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Space Mono', monospace",
                  margin: "4px 0 12px",
                }}>
                  {MENU_DATA.friedChicken.desc}
                </div>

                {/* Simple stacked illustration */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px 0 14px",
                }}>
                  {/* Chicken pieces stacked */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                    {[
                      { w: 70, h: 14, radius: "40% 35% 45% 30%", color: "#C47A2A" },
                      { w: 65, h: 13, radius: "35% 45% 30% 40%", color: "#B86A20" },
                      { w: 72, h: 14, radius: "30% 40% 35% 45%", color: "#A85A18" },
                      { w: 60, h: 12, radius: "45% 30% 40% 35%", color: "#C47A2A" },
                    ].map((piece, i) => (
                      <div key={i} style={{
                        width: `${piece.w}px`,
                        height: `${piece.h}px`,
                        background: `linear-gradient(135deg, ${piece.color} 0%, ${piece.color}CC 50%, ${piece.color}AA 100%)`,
                        borderRadius: piece.radius,
                        boxShadow: `0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,200,100,0.2)`,
                      }} />
                    ))}
                  </div>

                  {/* Fries */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "55px" }}>
                    {[38, 45, 50, 42, 35, 44, 48].map((h, i) => (
                      <div key={i} style={{
                        width: "6px",
                        height: `${h}px`,
                        background: "linear-gradient(180deg, #F5D080 0%, #D4A040 100%)",
                        borderRadius: "2px 2px 1px 1px",
                        transform: `rotate(${-8 + i * 2.5}deg)`,
                        boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                      }} />
                    ))}
                  </div>

                  {/* Dip cup */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                    <div style={{
                      width: "28px",
                      height: "22px",
                      background: "linear-gradient(180deg, #E8E0D8 0%, #DDD5C8 100%)",
                      borderRadius: "3px 3px 5px 5px",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}>
                      <div style={{
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        height: "10px",
                        background: "linear-gradient(180deg, #FF6B35 0%, #E84520 100%)",
                        borderRadius: "2px",
                      }} />
                    </div>
                  </div>
                </div>

                {/* Prices */}
                <div>
                  {MENU_DATA.friedChicken.options.map((opt, i) => (
                    <div key={i} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px 0",
                      fontSize: "0.8rem",
                      fontFamily: "'Space Mono', monospace",
                      color: "rgba(255,255,255,0.6)",
                      borderBottom: i < MENU_DATA.friedChicken.options.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}>
                      <span>{opt.label}</span>
                      <span style={{ color: "#00FFAA", fontFamily: "'Righteous', cursive", whiteSpace: "nowrap", marginLeft: "8px" }}>
                        {opt.price},-
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "sides" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {MENU_DATA.sides.map(side => (
                <MenuItem
                  key={side.id}
                  name={`${side.id}. ${side.name}`}
                  desc={side.desc}
                  price={side.price}
                  allergens={side.allergens}
                  options={side.options}
                />
              ))}
              <MenuItem name="Dip" price={MENU_DATA.dips.price}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                  {MENU_DATA.dips.items.map(dip => (
                    <span key={dip} style={{
                      padding: "4px 10px",
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                      background: "rgba(255,215,0,0.08)",
                      border: "1px solid rgba(255,215,0,0.15)",
                      color: "rgba(255,215,0,0.8)",
                      fontFamily: "'Space Mono', monospace",
                    }}>
                      {dip}
                    </span>
                  ))}
                </div>
              </MenuItem>
            </div>
          )}

          {activeTab === "build" && <BuildYourOwnSection />}

          {activeTab === "drinks" && (
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}>
                <NeonText size="1.2rem" color="#00BFFF">12. Mineralvann</NeonText>
                <span style={{
                  fontFamily: "'Righteous', cursive",
                  color: "#00FFAA",
                  textShadow: "0 0 8px rgba(0,255,170,0.4)",
                }}>30,-</span>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}>
                {/* Coca Cola */}
                <DrinkCard
                  name="Coca Cola"
                  bgColor="#E30613"
                  textColor="#FFFFFF"
                  accentColor="#FF4444"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      <text x="40" y="24" textAnchor="middle" fontFamily="'Georgia', serif" fontStyle="italic" fontWeight="bold" fontSize="16" fill="#FFF" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))" }}>
                        Coca-Cola
                      </text>
                    </svg>
                  )}
                />
                {/* Coca Cola Zero */}
                <DrinkCard
                  name="Coca Cola Zero"
                  bgColor="#1A1A1A"
                  textColor="#E30613"
                  accentColor="#E30613"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      <text x="40" y="17" textAnchor="middle" fontFamily="'Georgia', serif" fontStyle="italic" fontWeight="bold" fontSize="11" fill="#E30613" style={{ filter: "drop-shadow(0 0 4px rgba(227,6,19,0.5))" }}>
                        Coca-Cola
                      </text>
                      <text x="40" y="28" textAnchor="middle" fontFamily="'Arial', sans-serif" fontWeight="bold" fontSize="10" fill="#FFF" letterSpacing="3">
                        ZERO
                      </text>
                    </svg>
                  )}
                />
                {/* Pepsi Max */}
                <DrinkCard
                  name="Pepsi Max"
                  bgColor="#002B7F"
                  textColor="#FFFFFF"
                  accentColor="#3B7DD8"
                  logo={(
                    <svg viewBox="0 0 80 36" style={{ width: "70px", height: "32px" }}>
                      <circle cx="40" cy="14" r="10" fill="none" stroke="#E30613" strokeWidth="2" strokeDasharray="16 32" strokeDashoffset="0" />
                      <circle cx="40" cy="14" r="10" fill="none" stroke="#3B7DD8" strokeWidth="2" strokeDasharray="16 32" strokeDashoffset="16" />
                      <circle cx="40" cy="14" r="10" fill="none" stroke="#FFF" strokeWidth="1" strokeDasharray="16 32" strokeDashoffset="32" />
                      <text x="40" y="32" textAnchor="middle" fontFamily="'Arial', sans-serif" fontWeight="bold" fontSize="9" fill="#FFF" letterSpacing="1">
                        PEPSI MAX
                      </text>
                    </svg>
                  )}
                />
                {/* Urge */}
                <DrinkCard
                  name="Urge"
                  bgColor="#1B5E20"
                  textColor="#FFEB3B"
                  accentColor="#4CAF50"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      <defs>
                        <linearGradient id="urgeGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFEB3B" />
                          <stop offset="100%" stopColor="#FF9800" />
                        </linearGradient>
                      </defs>
                      <text x="40" y="23" textAnchor="middle" fontFamily="'Impact', sans-serif" fontSize="20" fill="url(#urgeGrad)" letterSpacing="2" style={{ filter: "drop-shadow(0 0 4px rgba(255,235,59,0.6))" }}>
                        URGE
                      </text>
                    </svg>
                  )}
                />
                {/* Solo */}
                <DrinkCard
                  name="Solo"
                  bgColor="#F57C00"
                  textColor="#FFFFFF"
                  accentColor="#FFB74D"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      <text x="40" y="24" textAnchor="middle" fontFamily="'Arial Rounded MT Bold', 'Arial', sans-serif" fontWeight="bold" fontSize="20" fill="#FFF" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.4))" }}>
                        Solo
                      </text>
                    </svg>
                  )}
                />
                {/* Vann med kullsyre */}
                <DrinkCard
                  name="Vann m/kullsyre"
                  bgColor="#0D47A1"
                  textColor="#90CAF9"
                  accentColor="#42A5F5"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      {[...Array(5)].map((_, i) => (
                        <circle key={i} cx={20 + i * 10} cy={16 + Math.sin(i) * 5} r={2 + Math.random()} fill="rgba(144,202,249,0.6)">
                          <animate attributeName="cy" values={`${16 + Math.sin(i) * 5};${10 + Math.sin(i) * 5};${16 + Math.sin(i) * 5}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                        </circle>
                      ))}
                      <text x="40" y="28" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="6" fill="#90CAF9" letterSpacing="0.5">
                        SPARKLING
                      </text>
                    </svg>
                  )}
                />
                {/* Vann uten kullsyre */}
                <DrinkCard
                  name="Vann u/kullsyre"
                  bgColor="#0D47A1"
                  textColor="#90CAF9"
                  accentColor="#1565C0"
                  logo={(
                    <svg viewBox="0 0 80 32" style={{ width: "70px", height: "28px" }}>
                      <path d="M15 18 Q25 12 35 18 Q45 24 55 18 Q65 12 75 18" fill="none" stroke="#90CAF9" strokeWidth="1.5" opacity="0.5">
                        <animate attributeName="d" values="M15 18 Q25 12 35 18 Q45 24 55 18 Q65 12 75 18;M15 18 Q25 24 35 18 Q45 12 55 18 Q65 24 75 18;M15 18 Q25 12 35 18 Q45 24 55 18 Q65 12 75 18" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M15 22 Q25 16 35 22 Q45 28 55 22 Q65 16 75 22" fill="none" stroke="#90CAF9" strokeWidth="1" opacity="0.3">
                        <animate attributeName="d" values="M15 22 Q25 28 35 22 Q45 16 55 22 Q65 28 75 22;M15 22 Q25 16 35 22 Q45 28 55 22 Q65 16 75 22;M15 22 Q25 28 35 22 Q45 16 55 22 Q65 28 75 22" dur="4s" repeatCount="indefinite" />
                      </path>
                      <text x="40" y="14" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="6" fill="#90CAF9" letterSpacing="0.5">
                        STILL
                      </text>
                    </svg>
                  )}
                />
              </div>
            </div>
          )}

          {activeTab === "kids" && (
            <MenuItem
              name={`${MENU_DATA.kids.id}. ${MENU_DATA.kids.name}`}
              desc={MENU_DATA.kids.desc}
              options={MENU_DATA.kids.options}
            />
          )}
        </div>

        {/* Allergen footer */}
        <div style={{
          marginTop: "40px",
          padding: "16px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Space Mono', monospace",
            lineHeight: 1.8,
          }}>
            <span style={{ color: "#FF69B4", fontFamily: "'Righteous', cursive", fontSize: "0.8rem" }}>Allergener</span>
            <br />
            1: Gluten · 2: Melk · 3: Egg · 4: Selleri · 5: Nøtter · 6: Skalldyr · 7: Fisk · 8: Peanøtt · 9: Soya · 10: Lupin · 11: Sesamfrø · 12: Rapsolje · 13: Sennep · 14: Sulfitt
          </div>
        </div>
      </div>
    </div>
  );
}
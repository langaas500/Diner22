export interface PriceOption {
  label: string;
  value: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  category: string;
  price?: number;
  prices?: PriceOption[];
  popular?: boolean;
  allergens?: number[];
}

export interface Category {
  id: string;
  name: string;
}

/**
 * Allergener (samme som før)
 * 1 Gluten, 3 Egg, 7 Melk osv.
 */
export const allergenMap: Record<number, string> = {
  1: "Gluten",
  2: "Skalldyr",
  3: "Egg",
  4: "Fisk",
  5: "Peanøtter",
  6: "Soya",
  7: "Melk",
  8: "Nøtter",
  9: "Selleri",
  10: "Sennep",
  11: "Sesam",
  12: "Sulfitt",
  13: "Lupin",
  14: "Bløtdyr",
};

/**
 * Kategorier for foodtruck (burger/fritert/snacks/dip/drikke)
 */
export const categories: Category[] = [
  { id: "burger", name: "Burger" },
  { id: "chicken", name: "Kylling" },
  { id: "snacks", name: "Snacks" },
  { id: "fries", name: "Pommes" },
  { id: "dip", name: "Dip" },
  { id: "drikke", name: "Drikke" },
  { id: "barn", name: "Barnemeny" },
];

/**
 * Meny-items
 * - prices[] brukes for “valg” (Small/Medium/Large, 6 pcs / 10 pcs osv.)
 * - price brukes for fast pris
 * - popular: true for “populær”-badge
 */
export const menuItems: MenuItem[] = [
  // ===== BURGER =====
  {
    id: 1,
    name: "1. Classic Burger",
    description: "Brioche, 100/170g biff, cheddar, salat, tomat, rødløk, ketchup",
    category: "burger",
    prices: [
      { label: "100g", value: 135 },
      { label: "170g", value: 175 },
    ],
    popular: true,
    allergens: [1, 7, 10],
  },
  {
    id: 2,
    name: "2. BBQ Burger",
    description: "Brioche, 100/170g biff, cheddar, rødløk, salat, BBQ-saus",
    category: "burger",
    prices: [
      { label: "100g", value: 135 },
      { label: "170g", value: 175 },
    ],
    allergens: [1, 7, 10],
  },
  {
    id: 3,
    name: "3. Jalapeño Burger",
    description: "Brioche, 100/170g biff, cheddar, jalapeño, rødløk, salat, sriracha mayo",
    category: "burger",
    prices: [
      { label: "100g", value: 139 },
      { label: "170g", value: 179 },
    ],
    popular: true,
    allergens: [1, 3, 7, 10],
  },

  // ===== KYLLING =====
  {
    id: 20,
    name: "4. Crispy Chicken Burger",
    description: "Brioche, crispy kylling, salat, syltet agurk, chilli mayo",
    category: "chicken",
    price: 165,
    popular: true,
    allergens: [1, 3, 7, 10],
  },
  {
    id: 21,
    name: "5. Crispy Chicken XL",
    description: "Crispy kylling + ekstra ost og bacon, chilli mayo",
    category: "chicken",
    price: 189,
    allergens: [1, 3, 7, 10],
  },

  // ===== SNACKS =====
  {
    id: 40,
    name: "6. Mozzarella sticks",
    description: "6 stk, serveres med dip",
    category: "snacks",
    price: 89,
    allergens: [1, 7],
  },
  {
    id: 41,
    name: "7. Løkringer",
    description: "6 stk, serveres med dip",
    category: "snacks",
    price: 79,
    allergens: [1],
  },
  {
    id: 42,
    name: "8. Chilli cheese",
    description: "6 stk, serveres med dip",
    category: "snacks",
    price: 89,
    allergens: [1, 7],
  },

  // ===== POMMES =====
  {
    id: 60,
    name: "9. Pommes frites",
    description: "Sprø og salt, klar for dip",
    category: "fries",
    prices: [
      { label: "Small", value: 45 },
      { label: "Medium", value: 55 },
      { label: "Large", value: 69 },
    ],
    popular: true,
  },
  {
    id: 61,
    name: "10. Loaded fries",
    description: "Pommes + cheddar + bacon + dressing",
    category: "fries",
    price: 99,
    allergens: [7, 10],
  },

  // ===== DIP =====
  {
    id: 80,
    name: "11. Aioli",
    category: "dip",
    price: 15,
    allergens: [3, 10],
  },
  {
    id: 81,
    name: "12. Burgerdressing",
    category: "dip",
    price: 15,
    allergens: [3, 10],
  },
  {
    id: 82,
    name: "13. BBQ-saus",
    category: "dip",
    price: 15,
  },
  {
    id: 83,
    name: "14. Sriracha mayo",
    category: "dip",
    price: 15,
    allergens: [3, 10],
  },
  {
    id: 84,
    name: "15. Sweet chilli",
    category: "dip",
    price: 15,
  },
  {
    id: 85,
    name: "16. Ketchup",
    category: "dip",
    price: 10,
  },

  // ===== DRIKKE =====
  {
    id: 100,
    name: "Coca-Cola",
    category: "drikke",
    price: 35,
  },
  {
    id: 101,
    name: "Coca-Cola Zero",
    category: "drikke",
    price: 35,
  },
  {
    id: 102,
    name: "Fanta",
    category: "drikke",
    price: 35,
  },
  {
    id: 103,
    name: "Sprite",
    category: "drikke",
    price: 35,
  },
  {
    id: 104,
    name: "Vann",
    category: "drikke",
    price: 25,
  },

  // ===== BARNEMENY =====
  {
    id: 120,
    name: "Barnemeny burger",
    description: "Mini burger + små pommes + ketchup",
    category: "barn",
    price: 99,
    allergens: [1, 7, 10],
  },
  {
    id: 121,
    name: "Barnemeny nuggets",
    description: "6 nuggets + små pommes + ketchup",
    category: "barn",
    price: 99,
    allergens: [1, 3],
  },
];

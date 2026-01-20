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

export const categories: Category[] = [
  { id: 'pizza', name: 'Pizza' },
  { id: 'tillegg', name: 'Tillegg' },
];

export const allergenMap: Record<number, string> = {
  1: 'Gluten',
  2: 'Skalldyr',
  3: 'Egg',
  4: 'Fisk',
  5: 'Peanøtter',
  6: 'Soya',
  7: 'Melk',
  8: 'Nøtter',
  9: 'Selleri',
  10: 'Sennep',
  11: 'Sesam',
  12: 'Sulfitt',
  13: 'Lupin',
  14: 'Bløtdyr',
};

export const menuItems: MenuItem[] = [
  // PIZZA
  {
    id: 1,
    name: '1. On Fife',
    description: 'Marinert biff, salami, løk, paprika',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 2,
    name: '2. Delicateeso',
    description: 'Biff, løk, paprika, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 3,
    name: '3. American Way',
    description: 'Peppermix, marinert biff, pepperoni, paprika',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 4,
    name: '4. Mix',
    description: 'Skinke, hvitløksboller, tomat, ananas',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 5,
    name: '5. Kylling',
    description: 'Marinert kylling, hvitløks-boller, løk, paprika',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 6,
    name: '6. Viking',
    description: 'Marinert biff, løk, paprika, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 7,
    name: '7. Marinert',
    description: 'Marinert biff, marinert kylling, løk, peppermix',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 8,
    name: '8. Caramba',
    description: 'Skinke, løk, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 9,
    name: '9. Taco',
    description: 'Tacokjøtt, løk, paprika, mais, krydder',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    popular: true,
    allergens: [1, 7],
  },
  {
    id: 10,
    name: '10. Napoli',
    description: 'Skinke',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 11,
    name: '11. Spesial',
    description: 'Skinke, kjøttdeig, salami, løk, paprika',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    popular: true,
    allergens: [1, 7],
  },
  {
    id: 12,
    name: '12. Bavin',
    description: 'Marinert biff, løk, jalapenos, tomat',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 13,
    name: '13. Sterk',
    description: 'Skinke, marinert biff, løk, purreløk, tomat, peppermix',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 14,
    name: '14. Kebab',
    description: 'Kebabkjøtt, paprika, mais, krydder',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    popular: true,
    allergens: [1, 7],
  },
  {
    id: 15,
    name: '15. Vegetarian',
    description: 'Purreløk, champignon, ananas, tomat',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 16,
    name: '16. Norwegian',
    description: 'Skinke, biff, løk, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 17,
    name: '17. Hawaii',
    description: 'Biff, pepperoni, tomat, ananas',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 18,
    name: '18. Milano',
    description: 'Skinke, kjøttdeig',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 19,
    name: '19. Slitu',
    description: 'Skinke, marinert biff, salami, pepperoni, kjøttdeig',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    popular: true,
    allergens: [1, 7],
  },
  {
    id: 20,
    name: '20. Valgfri',
    description: 'Sett sammen din egen valgfrie pizza',
    category: 'pizza',
    prices: [
      { label: 'Valgfri', value: 229 },
    ],
    allergens: [1, 7],
  },
  {
    id: 21,
    name: '21. Indiana',
    description: 'Marinert kylling, bacon, løk, paprika, jalapenos',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 22,
    name: '22. Master',
    description: 'Pepperoni, salami, marinert kylling, jalapenos, tomat',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 23,
    name: '23. Favoritt',
    description: 'Marinert biff, marinert kylling, jalapenos, tomat, løk',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 24,
    name: '24. Atlas',
    description: 'Biff, salami, pepperoni, marinert kylling, skinke, løk',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 25,
    name: '25. Luksus',
    description: 'Marinert biff, marinert kylling, pepperoni, salami, kjøttdeig, skinke, løk',
    category: 'pizza',
    prices: [
      { label: 'Luksus', value: 249 },
    ],
    popular: true,
    allergens: [1, 7],
  },
  {
    id: 26,
    name: '26. Hot Mexican',
    description: 'Kjøttdeig, jalapenos, løk, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 27,
    name: '27. Margarita',
    description: 'Ost, tomat, saus',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 28,
    name: '28. Regatta',
    description: 'Tomat, bacon, løk, pepperoni',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 29,
    name: '29. Paradiso',
    description: 'Skinke, pepperoni',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 30,
    name: '30. Rahen',
    description: 'Salami, skinke',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 31,
    name: '31. Hot Kebab',
    description: 'Hot mix, kebab, tomat, løk, jalapenos',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 32,
    name: '32. Fifty Fifty',
    description: 'Biff, pepperoni, champignon',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 33,
    name: '33. Best i test',
    description: 'Kjøttdeig, kylling, bacon, løk, tomat',
    category: 'pizza',
    prices: [
      { label: 'Medium', value: 165 },
      { label: 'Stor', value: 199 },
    ],
    allergens: [1, 7],
  },
  {
    id: 34,
    name: 'Glutenfri Pizza',
    description: 'Bestem selv, kun medium',
    category: 'pizza',
    price: 199,
    allergens: [7],
  },
  // TILLEGG
  {
    id: 100,
    name: 'Ekstra ost',
    category: 'tillegg',
    price: 40,
    allergens: [7],
  },
  {
    id: 101,
    name: 'Ekstra kjøtt',
    category: 'tillegg',
    price: 40,
  },
  {
    id: 102,
    name: 'Rømmedressing',
    category: 'tillegg',
    price: 20,
    allergens: [7],
  },
  {
    id: 103,
    name: 'Tomatsaus',
    category: 'tillegg',
    price: 20,
  },
];

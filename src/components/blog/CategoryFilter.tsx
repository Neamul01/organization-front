'use client';

import { useState } from 'react';

const categories = [
  'Health',
  'EHR',
  'Medplum',
  'Security',
  'Next.js',
  'React',
  'People',
  'Open Source',
  'API',
];

export default function CategoryFilter({
  selected = 'Health',
  onChange,
}: {
  selected?: string;
  onChange?: (cat: string) => void;
}) {
  const [active, setActive] = useState(selected);

  const handleClick = (cat: string) => {
    setActive(cat);
    onChange?.(cat);
  };

  return (
    <nav
      aria-label="Blog categories"
      className="flex w-full justify-center bg-white py-4"
    >
      <ul className="flex gap-2 overflow-x-auto px-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              type="button"
              className={`rounded-full border px-5 py-2 font-medium whitespace-nowrap transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                active === cat
                  ? 'border-blue-600 bg-blue-600 text-white shadow'
                  : 'border-blue-200 bg-white text-blue-600 hover:bg-blue-50'
              }`}
              aria-pressed={active === cat}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  const pills = ["All", ...categories.map((category) => category.name)];

  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2">
      <div className="flex min-w-max gap-3">
        {pills.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "border-primary bg-primary text-surface"
                : "border-border bg-surface text-textDark hover:border-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

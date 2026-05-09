"use client";

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  const pills = ["All", ...categories.map((category) => category.name)];

  return (
    <div 
      className="sticky top-[108px] z-40 py-5 px-6 lg:px-8 mb-8 -mx-6 lg:-mx-8"
      style={{ 
        background: 'var(--choc-ivory)',
        borderBottom: '1px solid var(--choc-light)'
      }}
    >
      <div className="flex flex-wrap gap-3 max-w-7xl mx-auto">
        {pills.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onChange(category)}
              className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
              style={{
                background: isActive ? 'var(--choc-primary)' : 'white',
                color: isActive ? 'white' : 'var(--choc-medium)',
                border: isActive ? 'none' : '1px solid var(--choc-light)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

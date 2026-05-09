"use client";

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  const pills = ["All", ...categories.map((category) => category.name)];

  return (
    <div 
      className="sticky top-[106px] z-40 py-5 px-6 lg:px-8 mb-8 -mx-6 lg:-mx-8"
      style={{ 
        background: 'white',
        borderBottom: '1px solid var(--border-soft)'
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
                background: isActive ? 'var(--lavender-deep)' : 'white',
                color: isActive ? 'white' : 'var(--text-medium)',
                border: isActive ? 'none' : '1px solid var(--border-soft)',
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

export const sampleCategories = ["Cakes", "Cookies", "Pastries", "Cupcakes", "Brownies"].map((name, index) => ({
  id: `sample-category-${index + 1}`,
  name
}));

export const sampleProducts = [
  {
    id: "sample-product-1",
    name: "Chocolate Fudge Cake",
    category: "Cakes",
    description: "Rich layered chocolate cake with silky fudge frosting.",
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    id: "sample-product-2",
    name: "Red Velvet Cake",
    category: "Cakes",
    description: "Soft cocoa sponge with cream cheese frosting.",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    id: "sample-product-3",
    name: "Choco Chip Cookies (12 pcs)",
    category: "Cookies",
    description: "Golden cookies packed with chocolate chips.",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  },
  {
    id: "sample-product-4",
    name: "Butter Cookies Box",
    category: "Cookies",
    description: "Classic buttery cookies packed for gifting.",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  },
  {
    id: "sample-product-5",
    name: "Croissant (4 pcs)",
    category: "Pastries",
    description: "Flaky butter croissants baked fresh in batches.",
    price: 480,
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    id: "sample-product-6",
    name: "Dark Chocolate Brownies",
    category: "Brownies",
    description: "Dense cocoa brownies with a fudgy center.",
    price: 700,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    id: "sample-product-7",
    name: "Vanilla Cupcakes (6 pcs)",
    category: "Cupcakes",
    description: "Vanilla cupcakes with creamy swirled frosting.",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  }
];

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(fileName) {
  const filePath = resolve(process.cwd(), fileName);
  if (!existsSync(filePath)) return;

  const contents = readFileSync(filePath, "utf8");
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator);
    const value = trimmed.slice(separator + 1);
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const requiredEnv = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID"
];

const missingKeys = requiredEnv.filter((key) => !process.env[key]);
if (missingKeys.length) {
  console.error(`Missing Firebase env values: ${missingKeys.join(", ")}`);
  console.error("Fill .env.local or Vercel env vars, then run npm run seed again.");
  process.exit(1);
}

const categories = ["Cakes", "Cookies", "Pastries", "Cupcakes", "Brownies"];

const products = [
  {
    name: "Chocolate Fudge Cake",
    category: "Cakes",
    description: "Rich layered chocolate cake with silky fudge frosting.",
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    name: "Red Velvet Cake",
    category: "Cakes",
    description: "Soft cocoa sponge with cream cheese frosting.",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    name: "Choco Chip Cookies (12 pcs)",
    category: "Cookies",
    description: "Golden cookies packed with chocolate chips.",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  },
  {
    name: "Butter Cookies Box",
    category: "Cookies",
    description: "Classic buttery cookies packed for gifting.",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  },
  {
    name: "Croissant (4 pcs)",
    category: "Pastries",
    description: "Flaky butter croissants baked fresh in batches.",
    price: 480,
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    name: "Dark Chocolate Brownies",
    category: "Brownies",
    description: "Dense cocoa brownies with a fudgy center.",
    price: 700,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: true
  },
  {
    name: "Vanilla Cupcakes (6 pcs)",
    category: "Cupcakes",
    description: "Vanilla cupcakes with creamy swirled frosting.",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1200&q=80",
    visible: true,
    featured: false
  }
];

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

function firestoreFields(data) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (typeof value === "string") return [key, { stringValue: value }];
      if (typeof value === "number") return [key, { integerValue: String(value) }];
      if (typeof value === "boolean") return [key, { booleanValue: value }];
      return [key, { stringValue: String(value) }];
    })
  );
}

async function request(url, options = {}) {
  const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}key=${apiKey}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body}`);
  }

  return response.json();
}

async function documentExists(collectionName, documentId) {
  const response = await fetch(`${baseUrl}/${collectionName}/${documentId}?key=${apiKey}`);
  if (response.status === 404) return false;
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body}`);
  }
  return true;
}

async function putDocument(collectionName, documentId, data) {
  if (await documentExists(collectionName, documentId)) return false;

  await request(`${baseUrl}/${collectionName}/${documentId}`, {
    method: "PATCH",
    body: JSON.stringify({
      fields: {
        ...firestoreFields(data),
        createdAt: { timestampValue: new Date().toISOString() }
      }
    })
  });

  return true;
}

let createdCategories = 0;
let createdProducts = 0;

for (const category of categories) {
  const created = await putDocument("categories", category.toLowerCase(), { name: category });
  if (created) createdCategories += 1;
}

for (const [index, product] of products.entries()) {
  const created = await putDocument("products", `sample-product-${index + 1}`, product);
  if (created) createdProducts += 1;
}

console.log(
  `Seed complete: ${createdCategories} new categories and ${createdProducts} new products added. Existing documents were left unchanged.`
);

// utils/api.ts
export const fetchProducts = async () => {
  const res = await fetch(
    "https://agrostar-api-1.onrender.com/products"
  );

  
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data || [];
};

const getProductSlug = (name: string): string => {
    if (!name) return "";
    // Replicating the logic from ProductCard.tsx:
    return name.toLowerCase().replace(/\s+/g, "-"); 
}

export const fetchProductBySlug = async (slug: string) => {
  // 1. Fetch all products first
  const products = await fetchProducts();

  // 2. Find the product that matches the slug
  const product = products.find(
    (p: { slug: string }) => p.slug === slug
  );
   console.log(product)
  // The .find() method returns the first element that satisfies the condition,
  // or undefined if no elements satisfy the condition.
  return product || null;

  
};
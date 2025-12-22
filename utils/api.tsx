// utils/api.ts
export const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://agrostar-api-1.onrender.com/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // good for fresh data in Next.js
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("fetchProducts error:", error);
    return [];
  }
};







const getProductSlug = (name: string): string => {
  if (!name) return "";
  // Replicating the logic from ProductCard.tsx:
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const fetchProductBySlug = async (slug: string) => {
  const products = await fetchProducts();
  const product = products.find((p: any) => {
    const generatedSlug = p.name.toLowerCase().replace(/\s+/g, "-");
    return generatedSlug === slug;
  });

  return product || null;
};

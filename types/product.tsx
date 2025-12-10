// types/product.ts

export interface Product {
  id: number; // Changed to number assuming it's a numeric ID
  name: string;
    // CRITICAL: Add the computed 'slug' property used for navigation
    slug: string; 
    
    // CRITICAL: Match the field names used in ProductCard and the API
  orignal_price: number; // Assuming prices are numbers for calculations
  discount_price: number; // Assuming prices are numbers for calculations
    
  image: string;
  category: string;
  brand: string;
  ingredients: string;
  discription: string; // Keep as 'discription' to match your API data 
    
    // CRITICAL: Add the boolean flag
    is_sold_out?: boolean; 
    
    // CRITICAL: Add the optional size field
    size?: string; 
}

// Interface for the props of your dynamic page component
export interface ProductPageProps {
  params: {
    // The slug should be a string, as it's a URL parameter (e.g., 'mango-20kg')
    slug: string; 
  };
}
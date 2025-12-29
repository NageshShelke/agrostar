// types/product.ts

export interface Product {
    id: number; 
    name: string;
    slug: string;
    orignal_price: number; 
    discount_price: number; 
    image: string;
    category: string;
    brand: string;
    ingredients: string;
    discription: string;
    is_sold_out?: boolean;
    size?: string;
    quantity?: number | 0;
}
export interface ProductPageProps {
    params: {
        slug: string;
    };
}
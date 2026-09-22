export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string | null;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  original_price: string;
  selling_price: string;
  discount_percentage: number | null;
  image: string | null;
  created_at: string;
  category: Category;
}

// Keeping a blank PRODUCTS array just to prevent import errors before we remove them from everywhere
export const PRODUCTS: Product[] = [];



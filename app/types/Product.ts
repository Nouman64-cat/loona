export type Product = {
    name: string;
    id: string;
    price: number;
    brand: string;
    color: {
      hex: string;
    };
    quality: string;
    size: number;
    dimensions: string;
  };
  
export type ProductsResponse = Product[];
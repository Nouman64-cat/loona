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
    image: {
      url: string; // URL of the product image
    };
  };
  
  export type ProductsResponse = Product[];
  
"use client";

import { useState, useEffect } from "react";
import { fetchProductById } from "@/app/graphql"; // Import your fetch function
import { Product } from "@/app/types/Product";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productData = await fetchProductById(id as string); // Use params.id to fetch product
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center font-work_sans">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center font-work_sans">Product not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-mochiy text-heading mb-6">{product.name}</h1>
      <img
        src={product.image.url}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <div className="text-lg font-work_sans space-y-2">
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price}</p>
        <p>Size: {product.size}</p>
        <p>Dimensions: {product.dimensions}</p>
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: product.color.hex }}
        ></div>
      </div>
    </div>
  );
};

export default ProductPage;

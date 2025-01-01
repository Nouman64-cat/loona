"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/app/graphql"; // Import fetchProducts function
import { Product } from "@/app/types/Product"; // Import Product type

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-mochiy text-center text-heading mb-6">
        All Products
      </h1>
      {loading ? (
        <p className="text-center font-work_sans text-heading">Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image.url}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-mochiy text-heading mb-2">
                {product.name}
              </h2>
              <p className="text-sm font-work_sans text-paragraph mb-1">
                Brand: {product.brand}
              </p>
              <p className="text-sm font-work_sans text-paragraph mb-1">
                Price: ${product.price}
              </p>
              <p className="text-sm font-work_sans text-paragraph mb-1">
                Quality: {product.quality}
              </p>
              <p className="text-sm font-work_sans text-paragraph mb-1">
                Size: {product.size}
              </p>
              <p className="text-sm font-work_sans text-paragraph mb-1">
                Dimensions: {product.dimensions}
              </p>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: product.color.hex }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-work_sans text-heading">
          No products available.
        </p>
      )}
    </div>
  );
};

export default AllProducts;

"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/app/graphql"; // Import fetchProducts function
import { Product } from "@/app/types/Product"; // Import Product type
import Link from "next/link";
import SearchBar from "../search-and-filter/SearchBar";


const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData); // Initially display all products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.brand.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="px-4 py-6">

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <p className="text-center font-work_sans text-heading">Loading...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <Link href={`/products/${product.id}`}>
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
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-work_sans text-heading">
          No products found.
        </p>
      )}
    </div>
  );
};

export default AllProducts;

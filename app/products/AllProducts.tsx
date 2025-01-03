"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/app/graphql"; // Import fetchProducts function
import { Product } from "@/app/types/Product"; // Import Product type
import SearchBar from "../search-and-filter/SearchBar";
import Footer from "../components/footer/Footer";
import ProductCard from "./ProductCard";
import Loader from "../components/loader/Loader";

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
    <>
      <div className="px-4 py-6">
        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {loading ? (
          <Loader /> // Use the Loader component here
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center font-work_sans text-heading">
            No products found.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;

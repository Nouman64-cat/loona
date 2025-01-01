"use client";

import { fetchProducts } from "@/app/graphql";
import { ProductsResponse } from "@/app/types/Product";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";


const ShopnowCTA = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductsResponse>([]);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const productsData = await fetchProducts();
      setProducts(productsData);
      console.log("Fetched Products:", productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("product: ",products);
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={handleButtonClick}
        className="flex gap-3 text-white px-10 py-4 rounded-full border-2 font-mochiy hover:bg-white hover:text-gradient-peach-purple transition"
        disabled={loading} // Disable button while loading
      >
        <HiOutlineShoppingCart size={28} />
        {loading ? "Loading..." : "Shop Now"}
      </button>
    </div>
  );
};

export default ShopnowCTA;

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useRouter
import { fetchProductById } from "@/app/graphql";
import { Product } from "@/app/types/Product";
import Loader from "@/app/components/loader/Loader";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { HiArrowLeft } from "react-icons/hi"; // Import an arrow icon for the back button
import PersonalDetailsForm from "./PersonalDetailsForm";
import MobileNav from "@/app/components/navbar/MobileNav";

const PurchasePage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product data for ID:", id);
        const productData = await fetchProductById(id as string);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleFormSubmit = (details: { name: string; address: string; phone: string }) => {
    console.log("User Details:", details);
  };

  if (loading) return <Loader />;
  if (!product) return <p className="text-center">Product not found.</p>;

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div>
      <MobileNav />
      <div className="p-6">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-heading  hover:scale-105 duration-300  font-work_sans mb-4"
        >
          <HiArrowLeft size={20} />
          Back
        </button>

        {/* Product Details */}
        <h1 className="text-3xl font-bold">{product?.name}</h1>
        <img
          src={product?.image?.url || "/placeholder.jpg"}
          alt={product?.name || "Product Image"}
          className="w-full h-auto mt-4"
        />
        <p className="mt-4">Price: ${product?.price}</p>
        <p>Brand: {product?.brand}</p>
      </div>
      <PersonalDetailsForm onSubmit={handleFormSubmit} />
      <Footer />
    </div>
  );
};

export default PurchasePage;

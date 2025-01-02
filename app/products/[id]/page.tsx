"use client";

import { useState, useEffect } from "react";
import { fetchProductById } from "@/app/graphql";
import { Product } from "@/app/types/Product";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar/Navbar";
import MobileNav from "@/app/components/navbar/MobileNav";
import Footer from "@/app/components/footer/Footer";
import ProductImageMagnifier from "../ProductImageMagnifier";
import { HiArrowLeft } from "react-icons/hi"; // Import a back arrow icon

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
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

  const handleBackClick = () => {
    router.push("/products"); // Navigate back to the products page
  };

  if (loading) {
    return <p className="text-center font-work_sans">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center font-work_sans">Product not found.</p>;
  }

  return (
    <div>
      {/* Navbar for Desktop */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* MobileNav for Mobile */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-heading hover:scale-105 transition-transform duration-300 ease-in-out mt-5 mb-5 ml-2"
        >
          <HiArrowLeft size={20} />
          Back to Products
        </button>
      <div className="px-10 py-5">

        {/* Product Details */}
        <h1 className="text-3xl font-mochiy text-heading mb-6">
          {product.name}
        </h1>
        <ProductImageMagnifier imageUrl={product.image.url} />

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
      <Footer />
    </div>
  );
};

export default ProductPage;

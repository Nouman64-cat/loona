import React from "react";
import Link from "next/link";
import { Product } from "@/app/types/Product"; // Import Product type

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <Link href={`/products/${product.id}`} legacyBehavior>
        <a>
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
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;

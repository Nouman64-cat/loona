import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ShopnowCTA = () => {
  return (
    <div className="flex w-full justify-center">
      <Link href="/products">
        <button className="flex gap-3 text-white px-10 py-4 rounded-full border-2 font-mochiy hover:bg-white hover:text-heading hover:scale-105 transition duration-300">
          <HiOutlineShoppingCart size={28} />
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default ShopnowCTA;

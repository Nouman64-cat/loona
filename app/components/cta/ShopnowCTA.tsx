import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ShopnowCTA = () => {
  return (
    <div className="flex w-full justify-center">
      <button className="flex gap-3 text-white px-10 py-4 rounded-full border-2 font-mochiy">
        <HiOutlineShoppingCart size={28} />
        Shop Now
      </button>
    </div>
  );
};

export default ShopnowCTA;

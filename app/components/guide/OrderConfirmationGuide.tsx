"use client";

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // Icons for dropdown

const OrderConfirmationGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full ">
      {/* Dropdown Header */}
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full text-heading font-work_sans text-sm py-2 "
      >
        Online Payment Confirmaiton
        {isOpen ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-md p-4 shadow-inner space-y-2 text-sm">
          <p className="text-paragraph font-work_sans">
            1. Pay the amount on either Easypaisa or JazzCash account number.
          </p>
          <p className="text-paragraph font-work_sans">
            2. Send the payment screenshot to WhatsApp number: <strong>34543234543</strong>.
          </p>
          <p className="text-paragraph font-work_sans">
            3. Click on the "Submit" button to confirm your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationGuide;

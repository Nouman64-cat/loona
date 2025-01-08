"use client";

import React, { useState } from "react";
import OrderConfirmationGuide from "@/app/components/guide/OrderConfirmationGuide";
import { HiCheckCircle } from "react-icons/hi"; // Icon for the tick
import { useRouter } from "next/navigation"; // For navigation
import { BsCart } from "react-icons/bs";
import { supabase } from "@/app/lib/supabaseClient";

interface PersonalDetailsFormProps {
  onSubmit: (details: {
    name: string;
    address: string;
    phone: string;
    paymentMethod: string;
  }) => void;
  product_name: string;
  product_price: number;
  product_brand: string;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ onSubmit, product_name, product_price, product_brand }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const router = useRouter(); // Router instance

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate the form fields (optional, to avoid empty inputs)
    if (!name || !address || !phone) {
      alert("All fields are required!");
      return;
    }
  
    try {
      // Insert the data into the "personal_details" table
      const { data, error } = await supabase.from("personal_details").insert([
        {
          name,
          address,
          phone,
          payment_method: paymentMethod,
          product_name,
          product_price,
          product_brand
        },
      ]);
  
      if (error) {
        console.error("Error saving details to database:", error);
        alert("An error occurred while saving your details. Please try again.");
        return;
      }
  
      console.log("Details saved successfully:", data);
      setIsModalOpen(true); // Show modal on successful submission
      onSubmit({ name, address, phone, paymentMethod }); // Trigger parent onSubmit callback
    } catch (error) {
      console.error("Unexpected error during submission:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  

  const handleContinueShopping = () => {
    setIsModalOpen(false); // Close the modal
    router.push("/products"); // Navigate to products page
  };

  return (
    <div>
        <div className="px-6">
            <h2 className="text-xl font-mochiy text-heading">Enter Details</h2>
            <OrderConfirmationGuide />
        </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">

        <div>
          <label htmlFor="name" className="block text-heading font-work_sans mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-peach"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-heading font-work_sans mb-2">
            Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-peach"
            rows={3}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-heading font-work_sans mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-peach"
            required
          />
        </div>

        

        <div>
          <label htmlFor="paymentMethod" className="block text-heading font-work_sans mb-2">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-peach"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>

        {/* Payment Account Numbers */}
        {paymentMethod === "Online Payment" && (
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mt-4">
            <h3 className="text-heading font-mochiy mb-2">Account Details</h3>
            <p className="text-paragraph font-work_sans">
              <strong>Easypaisa:</strong> 1234-5678-9012
            </p>
            <p className="text-paragraph font-work_sans">
              <strong>JazzCash:</strong> 9876-5432-1098
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-peach to-purple text-white py-2 px-4 rounded-lg shadow hover:scale-105 transition-transform duration-300"
        >
          Submit
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="  fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 w-[90%]">
            <HiCheckCircle className="text-peach w-16 h-16 mx-auto" />
            <h2 className="text-heading font-mochiy text-2xl">Thank you for your order!</h2>
            <p className="text-paragraph font-work_sans">
              Your order has been placed successfully.
            </p>
            <div className="flex w-full justify-center">
                <button
                onClick={handleContinueShopping}
                className="flex items-center  gap-3 bg-gradient-to-r from-peach to-purple text-white py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform duration-300"
                >
                    <BsCart size={20} />
                Continue Shopping
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalDetailsForm;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToOrderDetails } from "../redux/Orderreducer";

// Define an interface for the user details
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  code: string;
  cardNumber: string;
  exp: string;
  cvv: string;
}

const Checkout = () => {
  const [formData, setFormData] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    code: "",
    cardNumber: "",
    exp: "",
    cvv: "",
  });

  const [selectedPayment, setSelectedPayment] = useState<string>("card");
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);

  // Handle input changes correctly
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle radio button changes
  const handlePaymentChange = (value: string) => {
    setSelectedPayment(value);
  };

  const hanldeDataorder = () => {
    // cart.forEach((ele, id) => {
    //   dispatch(addToOrderDetails(ele));
    //   // dispatch(incrementOrders(id));
    // });

    const cloned = cart.map((i) => ({ ...i }));
    dispatch(addToOrderDetails(cloned));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.code ||
      (selectedPayment === "card" &&
        (!formData.cardNumber || !formData.exp || !formData.cvv))
    ) {
      alert("All fields are required.");
      return;
    }

    // Redirect to order details page
    hanldeDataorder();

    router.push("/order-details");
  };

  return (
    <div className="font-sans bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
            Checkout
          </h2>
        </div>

        {/* Personal Details */}
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Personal Details
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["firstName", "lastName", "email", "phone"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  ))}
                </div>
              </form>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Shipping Address
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["address", "city", "state", "code"].map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  ))}
                </div>
              </form>
            </div>
          </div>

          {/* Payment Method */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">03</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Payment Method
              </h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    checked={selectedPayment === "card"}
                    onChange={() => handlePaymentChange("card")}
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="Visa"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="MasterCard"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                    checked={selectedPayment === "paypal"}
                    onChange={() => handlePaymentChange("paypal")}
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="PayPal"
                    />
                  </label>
                </div>
              </div>

              {selectedPayment === "card" && (
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  {["cardNumber", "exp", "cvv"].map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  ))}
                </div>
              )}
              {selectedPayment === "paypal" && (
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  {["cardNumber", "exp", "cvv"].map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <Link href="/cart">
              <button className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">
                Pay Later
              </button>
            </Link>
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

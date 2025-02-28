"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";

function Orderdetails() {
  const cart = useSelector((state: RootState) => state.cart);
  const newData = cart.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
  return (
    <div className="w-full flex justify-center items-center h-screen">
      {/*  */}
      <div className="w-[70%] h-[600px] border-2 rounded-lg">
        {/*  */}
        <div className="flex justify-between px-10 py-5 items-center">
          <div>
            <p className="font-bold text-[20px]">Order details</p>
            <p className="text-gray-400 text-[18px]">
              Your order will be with you soon
            </p>
          </div>
          <div className="text-[15px] font-semibold text-gray-500">
            <p>Order Number: #HD8845</p>
            <p>Order Placement: 07th March, 2025</p>
          </div>
        </div>
        {/*  */}

        <div className="h-[380px] overflow-y-auto no-scrollbar border-b-2">
          <table className="w-full mt-10">
            <thead>
              <tr className="border-y-2 h-12">
                <th className="w-[40%] text-left px-10">Item</th>
                <th className="">Quantity</th>
                <th>Price</th>
                <th className="w-[30%] text-right px-10">Delivery Expected</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((ele, id) => (
                <tr
                  key={id}
                  className={`h-20 ${
                    id === cart.length ? "" : "border-b-2"
                  } hover:bg-gray-100`}
                >
                  <td className="text-center px-5">
                    <div className="flex items-center gap-5">
                      <img
                        src={ele.image}
                        alt=""
                        className="w-16 h-16 object-contain"
                      />
                      <div>
                        <p className="font-medium">{ele.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">Qty: {ele.quantity}</td>
                  <td className="text-center">₹{ele.price}</td>
                  <td className="text-right px-10">23th Dec, 2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between  px-10 pt-2 items-center">
          <div className="flex gap-5 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
              Track Your Order
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg">
              Cancel Order
            </button>
            <Link
              href="/"
              className="flex font-semibold text-indigo-600 text-sm  w-44 my-10 "
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <p>
            Total: ₹<span>{newData + 40}</span>
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Orderdetails;

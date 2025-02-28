"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  incSubTotal,
  decSubTotal,
} from "../redux/Productreducer";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeData = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const incQuant = (id: number) => {
    dispatch(incrementQuantity(id));
    dispatch(incSubTotal(id));
  };

  const decQuant = (id: number) => {
    dispatch(decrementQuantity(id));
    dispatch(decSubTotal(id));
  };

  const newData = cart.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex">
          <div className="w-3/4 bg-white px-10">
            <div className="flex justify-between border-b pb-8 ">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Total
              </h3>
            </div>
            <div className="h-[400px] overflow-y-auto no-scrollbar">
              {cart.map((ele, id) => (
                <div
                  className="flex items-center hover:bg-gray-100  -mx-8 px-6 py-5"
                  key={id}
                >
                  <div className="flex w-2/5">
                    <div className="w-20 ml-4">
                      <img
                        className="h-24"
                        src={ele.image}
                        alt="not displayed"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{ele.name}</span>
                      <span className="text-red-500 text-xs">Shirts</span>
                      <button
                        onClick={() => removeData(id)}
                        // href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                      onClick={() => decQuant(id)}
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <p
                      className="mx-2 border text-center w-8"
                      //   type="number"
                      //   value="1"
                    >
                      {ele.quantity}
                    </p>

                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                      onClick={() => incQuant(id)}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹{ele.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹{ele.price * ele.quantity}
                  </span>
                </div>
              ))}
              {cart.length === 0 && (
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                  alt=""
                  className="m-auto w-[50%]"
                />
              )}
            </div>

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

          <div id="summary" className="w-1/4 px-8 fixed right-0">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart.length}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{cart.reduce((acc, curr) => acc + curr["total"], 0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span className="line-through">₹{}.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₹40</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">
                ₹{newData === 0 ? 0 : newData + 40}
              </span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{newData === 0 ? 0 : newData + 40}</span>
              </div>
              <Link href="/checkout">
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

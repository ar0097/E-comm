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
import { useRouter } from "next/navigation";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const removeData = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    if (cart.length !== 0) {
      router.push("/checkout");
    } else {
      setAlert(true);
    }
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
      <div
        className={`flex items-center justify-between p-5 w-[500px] absolute right-[550px] top-1 -translate-y-48 duration-500 ${
          alert && "translate-y-2"
        }  leading-normal text-blue-600 bg-blue-100 rounded-lg`}
        role="alert"
      >
        <p>Add Some Product in Cart</p>

        <svg
          onClick={() => setAlert(false)}
          className="inline w-4 h-4 fill-current ml-2 hover:opacity-80 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM359.5 133.7c-10.11-8.578-25.28-7.297-33.83 2.828L256 218.8L186.3 136.5C177.8 126.4 162.6 125.1 152.5 133.7C142.4 142.2 141.1 157.4 149.7 167.5L224.6 256l-74.88 88.5c-8.562 10.11-7.297 25.27 2.828 33.83C157 382.1 162.5 384 167.1 384c6.812 0 13.59-2.891 18.34-8.5L256 293.2l69.67 82.34C330.4 381.1 337.2 384 344 384c5.469 0 10.98-1.859 15.48-5.672c10.12-8.562 11.39-23.72 2.828-33.83L287.4 256l74.88-88.5C370.9 157.4 369.6 142.2 359.5 133.7z" />
        </svg>
      </div>
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
            <div className="h-[400px] overflow-y-auto no-scrollbar overflow-x-hidden">
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
                      <span className="text-red-500 text-xs">{ele.type}</span>
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
              <button
                onClick={handleCheckout}
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

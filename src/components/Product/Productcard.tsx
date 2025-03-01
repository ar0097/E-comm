"use client";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { product } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Productreducer";
import { RootState } from "../redux/store";
import Quickview from "../Quickview/Quickview";

interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
  quantity: number;
  total: number;
  tax: number;
  order: boolean;
}

function Productcard() {
  const [index, setIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  // console.log(cart);

  const addData = (data: Product) => {
    dispatch(addToCart(data));
  };

  const handleIndex = (idx: number) => {
    setIndex(idx);
  };
  return (
    <div className="relative">
      <h1 className="capitalize font-bold text-[40px]  my-5 text-center">
        Our <strong className="text-blue-900">Products</strong>
      </h1>
      <div className="flex justify-around flex-wrap">
        {product.map((ele, id) => (
          <div
            className="border-[1px] w-72 border-[#9ca3af55] my-2 rounded-xl"
            key={id}
          >
            <div className="h-[200px] w-full">
              <img
                src={ele.image}
                alt=""
                className="w-full rounded-t-xl h-[200px] object-contain my-5"
              />
            </div>
            {/* <div className="flex gap-3 mx-5 mt-3 mb-1">
          <p className="bg-gray-200 py-[1px] px-3 rounded-2xl">Stock ready</p>
          <p className="bg-gray-200 py-[1px] px-3 rounded-2xl ">
            official shore
          </p>
        </div> */}
            <h1 className="mx-5 font-semibold text-[25px]">
              {ele.name.length > 16 ? ele.name.slice(0, 16) + "..." : ele.name}
            </h1>
            <div className="mx-5 my-1 space-y-1">
              <p className="font-semibold text-[18px] tracking-wider">
                ₹{ele.price}
              </p>
              <div className="flex gap-2">
                <p className="text-gray-400 line-through text-[15px]">
                  ₹{ele.price + 116}
                </p>
                <div className="bg-[#3bd2a0] text-white rounded-2xl py-[1px] font-medium px-3">
                  save {ele.save}%
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center mx-5 my-3">
              <div className="flex gap-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i !== 4 ? (
                    <FaStar color="#FFD700" key={i} />
                  ) : (
                    <FaStarHalf color="#FFD700" key={i} />
                  )
                )}
              </div>
              <p className="text-[13px] text-gray-700 font-extrabold">
                {ele.reviews}k reviews
              </p>
            </div>
            <div className="mx-5 flex gap-3 pb-3 pt-2">
              <button
                onClick={() => addData(ele)}
                className="w-[50%] ring-blue-500 hover:ring-1 duration-300  bg-gray-300  font-medium  rounded-lg py-1"
              >
                Add to cart
              </button>
              <button
                className="w-[50%] bg-gray-300 ring-blue-500 hover:ring-1 duration-300 font-medium  rounded-lg"
                onClick={() => handleIndex(id)}
              >
                Quick View
              </button>
            </div>
            {index === id && <Quickview index={index} setIndex={setIndex} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcard;

// http://makeup-api.herokuapp.com/api/v1/products.json

"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { product } from "../data/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Productreducer";

interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
  quantity: number;
}

interface Indexes {
  setIndex(arg0: null): void;
  index: number;
}

function Quickview({ index, setIndex }: Indexes) {
  const dispatch = useDispatch();

  const addData = (data: Product) => {
    dispatch(addToCart(data));
  };
  return (
    <div className="fixed z-50 top-32 left-96 w-[50%] h-[65%] border-2 bg-white">
      <div className="relative">
        <button
          className="absolute top-3 text-[30px] right-10"
          onClick={() => setIndex(null)}
        >
          x
        </button>
      </div>
      <div className="flex items-center mt-3">
        <div className="w-[40%] h-96 m-5">
          <img
            src={product[index].image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/2 space-y-3">
          <p className="font-semibold text-[20px]">Shirts</p>
          <h1 className="font-bold text-[25px]/[30px]">
            {product[index].name}
          </h1>
          <p className="font-bold text-[20px]">₹{product[index].price}</p>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            sed ea itaque quidem tempora debitis, consequatur pariatur labore
            suscipit nihil repudiandae repellat amet reprehenderit, culpa
            mollitia fuga consequuntur! Ratione, labore.
          </p>
          {/* <p>quantity</p> */}
          <div className="flex gap-5 my-5">
            <button className="flex justify-center items-center gap-2 border-[1px] rounded-lg border-red-300 hover:border-2 w-32 h-9">
              <FaRegHeart size={20} color="#000000" />
              <p className="text-[16px] font-normal text-gray-600">Favorites</p>
            </button>
            <button
              onClick={() => addData(product[index])}
              className="flex justify-center items-center text-[#ffffff]/[0.8] bg-rose-500 rounded-lg gap-2 border-[1px] border-red-300 hover:border-2 w-32 h-9"
            >
              <AiOutlineShoppingCart size={20} color="#ffffff" />
              <p className="text-[16px] font-normal ">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quickview;

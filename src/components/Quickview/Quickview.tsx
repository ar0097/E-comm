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
  total: number;
  tax: number;
  order: boolean;
  type: string;
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
    <div className="fixed z-50 top-32 md:left-96 left-12 md:w-[50%] md:h-[65%] w-[80%] h-[55%] border-2 bg-white">
      <div className="relative">
        <button
          className="absolute top-3  text-[30px] right-5 text-rose-500"
          onClick={() => setIndex(null)}
        >
          <img
            src="https://tse3.mm.bing.net/th?id=OIP._JoQE39Qo96ip_N95hi_tgHaHa&pid=Api&P=0&h=180"
            alt=""
            className="w-8 h-8"
          />
        </button>
      </div>
      <div className="md:flex items-center mt-3">
        <div className="md:w-[40%] w-[80%] md:h-96 h-72 m-auto md:m-5">
          <img
            src={product[index].image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-1/2 space-y-3 ml-6">
          <p className="font-semibold text-[20px]">{product[index].type}</p>
          <h1 className="font-bold md:block hidden text-[25px]/[30px]">
            {product[index].name}
          </h1>
          <h1 className="font-bold text-[25px]/[30px]">
            {product[index].name.slice(0,20)}
          </h1>
          <p className="font-bold text-[20px]">₹{product[index].price}</p>
          <p className="tracking-wider md:block hidden">
            At Our Shop, we bring you a curated selection of{" "}
            <strong>high-quality products</strong> ranging from{" "}
            <strong>electronics, fashion, accessories, and more</strong>. Each
            product is carefully selected to offer the best in design,
            durability, and functionality.
          </p>
          {/* <p>quantity</p> */}
          <div className="flex gap-5 my-5">
            <button className="flex justify-center items-center my-5 gap-2 border-[1px] rounded-lg border-red-300 hover:border-2 w-32 h-9">
              <FaRegHeart size={20} color="#000000" />
              <p className="text-[16px] font-normal text-gray-600">Favorites</p>
            </button>
            <button
              onClick={() => addData(product[index])}
              className="flex justify-center items-center my-5 text-[#ffffff]/[0.8] bg-rose-500 rounded-lg gap-2   hover:border-2 w-32 h-9"
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

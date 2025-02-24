"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Navbar() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="border-b-[1px] border-b-[#9ca3af55]">
      <div className="flex justify-between items-center px-24 py-3 text-[#9ca3af] font-normal border-b-[1px] border-b-[#9ca3af55]">
        <ul className="flex gap-10">
          <li>About Us</li>
          <li>Order Tracking</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
        <ul className="flex gap-10">
          <ol className="flex gap-3 items-center">
            <li>English</li>
            <MdKeyboardArrowDown />
          </ol>
          <ol className="flex gap-3 items-center">
            <li>USD</li>
            <MdKeyboardArrowDown />
          </ol>
        </ul>
      </div>
      <div className="flex justify-between items-center px-20 h-16 font-normal">
        <div className="flex gap-20 items-center">
          <Link href="/">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/09/16/08/54/shop-942399_1280.png"
                className="w-[150px] h-[100px]"
                alt=""
              />
            </div>
          </Link>
          <ul className="flex gap-10 text-[16px]">
            <li>Home</li>
            <li>Shop</li>
            <ol className="flex items-center gap-1">
              <li>Products</li>
              <MdKeyboardArrowDown size={20} />
            </ol>
            <li>Accessories</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="border-[1px] w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.bwreUdSSypsDw7rStNUguQHaGT&pid=Api&P=0&h=20"
                alt=""
              />
            </div>
            <div className=" text-[15px]/[20px] font-medium">
              <p className="">Need Help?</p>
              <p>+001 123 456 789</p>
            </div>
          </div>
          <div className="border-[1px] w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
            <RiAccountCircleLine size={30} color="#00000099" />
          </div>
          <div className="border-[1px] relative w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
            <FiHeart size={20} color="#00000099" />
            <span className="bg-blue-800 absolute rounded-full flex items-center px-[5px] -top-2 w-5 h-5 -right-1 text-white font-semibold">
              3
            </span>
          </div>

          <Link href="/cart">
            <div className="border-[1px] relative w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
              <AiOutlineShoppingCart size={25} color="#00000099" />
              <div className="bg-blue-800 absolute rounded-full flex items-center justify-center -top-2 w-5 h-5 -right-1 text-white font-medium">
                <p>{cart.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// https://tailgrids.com/components/ecommerce-navbars

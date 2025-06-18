"use client";
import React, { useRef, useState } from "react";
import { devices, kidsClothingProducts, product } from "../data/data";
import { FiZap } from "react-icons/fi";
import { LuClock, LuTag } from "react-icons/lu";
import { GoTag } from "react-icons/go";
import { BiChevronLeft, BiChevronRight, BiStar } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import Productslider from "../slider/Productslider";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

function Deals() {
  return (
    <div className="md:h-full h-fit  bg-gradient-to-br from-slate-50 to-blue-50">
      {/*  */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FiZap className="h-8 w-8 mr-2 text-yellow-300" />
              <h1 className="text-4xl md:text-6xl font-bold">Today's Deals</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Limited time offers - Save up to 70% on selected items
            </p>

            <div className="flex items-center justify-center mb-8">
              <LuClock className="h-6 w-6 mr-2 text-yellow-300" />

              {/* <CgLock className="h-6 w-6 mr-2 text-yellow-300" /> */}
              <span className="text-lg font-semibold">
                Deals end at midnight!
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <LuTag className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h3 className="text-lg font-semibold mb-2">Up to 70% Off</h3>
                <p className="text-red-100">Electronics & Gadgets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FiZap className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h3 className="text-lg font-semibold mb-2">Flash Sales</h3>
                <p className="text-red-100">Every 2 Hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <LuClock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h3 className="text-lg font-semibold mb-2">24 Hours Only</h3>
                <p className="text-red-100">Don't Miss Out</p>
              </div>
            </div>

            <button
              // size="lg"
              className="mt-8 bg-yellow-500 px-7 py-3 rounded-lg hover:bg-yellow-600 text-black font-bold"
            >
              Shop All Deals
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Deals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these incredible offers. Limited quantities
            available!
          </p>
        </div>

        <Productslider data={devices} title="Electronics & Laptops" />
        <Productslider data={kidsClothingProducts} title="Kids Clothing" />
        <Productslider data={product} title="Mens Clothing" />
      </div>
    </div>
  );
}

export default Deals;

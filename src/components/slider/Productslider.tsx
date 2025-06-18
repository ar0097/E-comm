"use client";
import React, { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiStar } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
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

function Productslider({ data, title }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addData = (data: Product) => {
    dispatch(addToCart({ ...data }));
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-white p-10 my-5">
        <h1 className="text-2xl font-bold text-gray-900 pb-5">{title}</h1>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
          >
            <BiChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
          >
            <BiChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data.map((product: any, id: any) => (
              <div
                key={id}
                className="min-w-[250px] bg-white border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">
                    40 % OFF
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">
                    {product.name}
                  </h4>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
                      <span className="font-semibold">{product.rating}</span>
                      <BiStar className="w-2.5 h-2.5 ml-0.5 fill-current" />
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>

                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.price + 100}
                    </span>
                  </div>

                  <button
                    onClick={() => addData(product)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-4 rounded flex items-center justify-center gap-1 transition-colors"
                  >
                    <CgShoppingCart className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productslider;

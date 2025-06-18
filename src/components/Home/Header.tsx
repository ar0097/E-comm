import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

function Header() {
  return (
    <div className="md:h-screen h-fit md:flex justify-center gap-20  bg-gradient-to-br from-blue-50 to-indigo-100 py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="md:w-[600px]">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((_) => (
            <FaStar color="#ffd700 " />
          ))}
          <h1 className="font-normal text-sm text-gray-600">
            Trusted by 10,000+ customers
          </h1>
        </div>
        <div className="space-y-5 mt-5">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Your <br />{" "}
            <span className="text-blue-600">Perfect Style</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed md:w-[580px]">
            Explore our curated collection of premium products designed to
            elevate your lifestyle. From fashion to tech, we have everything you
            need.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a href="#shop-now">
            <button className="flex items-center w-full justify-center gap-4 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-blue-600 hover:bg-blue-700 text-white">
              shop now
              <IoMdArrowForward size={5} />
            </button>
          </a>
          <Link href="/todays-deal">
            <button className=" bg-white px-8 py-2 w-full font-semibold rounded border-[1px] text-lg hover:bg-[#eff6ff]">
              View Collection
            </button>
          </Link>
        </div>

        <div className="flex md:flex-wrap gap-8 pt-8 border-t border-gray-200 my-5">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">10K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">5K+</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_) => (
                <FaStar color="#ffd700 " />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">4.9/5 Rating</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="shadow-all-sides md:w-[600px] h-[500px] rounded-lg relative">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="w-[600px] h-[500px] rounded-lg object-cover shadow-lg"
        />
        <div className="absolute -bottom-6 md:-left-6 -left-2 bg-white rounded-xl shadow-lg p-4 border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <LuShoppingBag size={25} color="#43A047" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Free Shipping</div>
              <div className="text-sm text-gray-600">On orders over $50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <div className="bg-[#9ca3af25] h-screen flex justify-center gap-20 items-center">
      <div className="w-[800px] flex flex-col  justify-center space-y-5">
        <h1 className="font-bold text-[35px] leading-10 text-[rgba(0,0,0,0.8)]">
          Mega Sale Up To 50% Off For All
        </h1>
        <p className="text-[#9ca3af] leading-6 w-[600px]">
          At Our Shop, we bring you a curated selection of{" "}
          <strong>high-quality products</strong> ranging from{" "}
          <strong>electronics, fashion, accessories, and more</strong>. Each
          product is carefully selected to offer the best in design, durability,
          and functionality.
        </p>
        <div className="bg-blue-700 w-fit cursor-pointer px-5 py-2 text-white font-bold rounded-md">
          <button>Shop Now</button>
        </div>
      </div>
      <div className="w-[430px] h-[600px] flex justify-between">
        <img
          src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/header.png?raw=true"
          alt=""
          className="full object-contain"
        />
      </div>
    </div>
  );
}

export default Header;

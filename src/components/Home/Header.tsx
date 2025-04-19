import React from "react";

function Header() {
  return (
    <div>
      <div className="px-10 mt-8 hidden md:flex gap-10 h-fit">
        <div className="w-[65%] ml-5 flex  justify-between items-center px-10 bg-[#9ca3af25]">
          <div className="w-[400px] flex flex-col justify-center space-y-5">
            <h1 className="font-bold text-[35px] leading-10 text-[rgba(0,0,0,0.8)]">
              Mega Sale Up To 50% Off For All
            </h1>
            <p className="text-[#9ca3af] leading-6">
              At Our Shop, we bring you a curated selection of{" "}
              <strong>high-quality products</strong> ranging from{" "}
              <strong>electronics, fashion, accessories, and more</strong>. Each
              product is carefully selected to offer the best in design,
              durability, and functionality.
            </p>
            <div className="bg-blue-700 w-fit cursor-pointer px-5 py-2 text-white font-bold rounded-md">
              <button>Shop Now</button>
            </div>
          </div>
          <div className="py-10">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFnZDdla3VtbW9rMXU3ZnFkeXdtcTRoaHZnaXhkNXl0N3gzbHpqaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZY98SeDTpZPAYz8tkM/giphy.webp"
              alt=""
              className="border-2 border-[#9ca3af25] w-64  m-auto"
            />
          </div>
        </div>
        {/*  */}
        <div className="space-y-6">
          <div className="w-[430px] h-[272px] bg-[#9ca3af25] flex justify-between">
            <img
              src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/musthave-6.png?raw=true"
              alt=""
              className="w-1/2 object-contain"
            />
            <div className="w-1/2 flex justify-center flex-col space-y-2 ml-[8px]">
              <h1 className="text-blue-900 font-semibold text-[20px]">
                Trending Products
              </h1>
              <p className="text-[15px] font-semibold">
                New Arrival From Mans Collections
              </p>
              <p className="mr-4">
                Discover our trending products, handpicked for their style,
                quality, and popularity, ensuring you stay ahead with the latest
                must-haves!
              </p>
            </div>
          </div>
          <div className="w-[430px] h-[272px] bg-[#9ca3af25] flex justify-between">
            <img
              src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/header.png?raw=true"
              alt=""
              className="w-1/2 object-contain"
            />
            <div className="w-1/2 flex justify-center flex-col space-y-3">
              <h1 className="text-blue-900 font-semibold text-[20px]">
                Trending Products
              </h1>
              <p className="text-[15px] font-semibold">
                New Arrival From Mans Collections
              </p>
              <p className="mr-4">
                Explore our trending products—top-rated, best-selling, and
                most-loved items, all in one place!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden flex justify-center items-center w-full">
        <p>Work in progress</p>
      </div> */}
    </div>
  );
}

export default Header;

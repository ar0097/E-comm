import React from "react";

function Header() {
  return (
    <div className="px-10 mt-2 flex gap-10 h-fit">
      <div className="w-[65%] border-2 border-[#9ca3af55] flex  justify-between px-10 bg-[#9ca3af25]">
        <div className="w-[400px] flex flex-col justify-center space-y-5">
          <h1 className="font-bold text-[35px] leading-10 text-[rgba(0,0,0,0.8)]">
            Mega Sale Up To 50% Off For All
          </h1>
          <p className="text-[#9ca3af] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reiciendis accusamus, quos recusandae vitae minima adipisci
            excepturi, maiores, officia doloribus nihil non optio reprehenderit.
          </p>
          <div className="bg-blue-700 w-fit cursor-pointer px-5 py-2 text-white font-bold rounded-md">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="py-10">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFnZDdla3VtbW9rMXU3ZnFkeXdtcTRoaHZnaXhkNXl0N3gzbHpqaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZY98SeDTpZPAYz8tkM/giphy.webp"
            alt=""
            className="border-2 border-[#9ca3af25]"
          />
        </div>
      </div>
      {/*  */}
      <div className="space-y-6">
        <div className="w-[430px] h-[272px] bg-[#9ca3af44] flex justify-between">
          <img
            src="https://www.snitch.co.in/cdn/shop/files/4MSS3955-02_1_0e952df3-790d-41cb-8d12-113e89df9e22.jpg"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              consequatur asperiores laudantium, fugiat impedit.
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[272px] bg-[#9ca3af84] flex justify-between">
          <img
            src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSO4594-01_1_792449c1-5044-4458-8df2-b76d065d67e6.jpg?v=1738652090&quality=50"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              consequatur asperiores laudantium, fugiat impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

// https://tailgrids.com/components/ecommerce-headers
// https://pixabay.com/images/search/e%20commerce/?pagi=8

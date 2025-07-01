"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";
import { deleteOrder } from "../redux/Orderreducer";
import { RxCross2 } from "react-icons/rx";

function Orderdetails() {
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();
  const newData = order.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);

  const deletDataFromOrder = () => {
    order.forEach((ele) => dispatch(deleteOrder(ele)));
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <div className="w-full md:flex hidden justify-center items-center h-screen">
        {/*  */}
        <div className="w-[70%] h-[600px] border-2 rounded-lg">
          {/*  */}
          <div className="flex justify-between px-10 py-5 items-center">
            <div>
              <p className="font-bold text-[20px]">Order details</p>
              <p className="text-gray-400 text-[18px]">
                Your order will be with you soon
              </p>
            </div>
            <div className="text-[15px] font-semibold text-gray-500">
              <p>
                Order Number:{" "}
                {order.length > 0 ? (
                  "#HD8845"
                ) : (
                  <span className=" text-gray-500 w-full h-1">---------</span>
                )}
              </p>
              <p>
                Order Placement:{" "}
                {order.length > 0 ? (
                  `
                  ${
                    new Date().getDate() > 22
                      ? new Date().getDate() - 22 + "th"
                      : ""
                  } ${
                    new Date().getDate() < 22
                      ? new Date().getDate() + 7 + "th"
                      : ""
                  }
                    ${
                      new Date().getDate() > 22
                        ? months[new Date().getMonth() + 1]
                        : months[new Date().getMonth()]
                    },
                ${new Date().getFullYear()}`
                ) : (
                  <span className=" text-gray-500 w-full h-1">---------</span>
                )}
              </p>
            </div>
          </div>
          {/*  */}

          <div className="h-[380px] overflow-y-auto no-scrollbar border-b-2">
            <table className="w-full mt-10">
              <thead>
                <tr className="border-y-2 h-12">
                  <th className="w-[40%] text-left px-10">Item</th>
                  <th className="">Quantity</th>
                  <th>Price</th>
                  <th className="w-[30%] text-right px-10">
                    Delivery Expected
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((ele, id) => (
                  <tr
                    key={id}
                    className={`h-20 ${
                      id === order.length ? "" : "border-b-2"
                    } hover:bg-gray-100`}
                  >
                    <td className="text-center px-5">
                      <div className="flex items-center gap-5">
                        <img
                          src={ele.image}
                          alt=""
                          className="w-16 h-16 object-contain"
                        />
                        <div>
                          <p className="font-medium">{ele.name}</p>
                          <span className="text-red-500 text-xs">
                            {ele.type}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">Qty: {ele.quantity}</td>
                    <td className="text-center">₹{ele.price}</td>
                    {/* <td className="text-right px-10">23th Dec, 2025</td> */}
                    <td className="text-right px-10">
                      {`${
                        new Date().getDate() > 22
                          ? new Date().getDate() - 22 + "th"
                          : ""
                      } ${
                        new Date().getDate() < 22
                          ? new Date().getDate() + 7 + "th"
                          : ""
                      }  ${
                        new Date().getDate() > 22
                          ? months[new Date().getMonth() + 1]
                          : months[new Date().getMonth()]
                      },
                ${new Date().getFullYear()}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {order.length === 0 && (
              <div className="flex justify-center items-center mt-12">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.PcuQZuTqw5GbmEk1EKJeBQHaHa&pid=Api&P=0&h=180"
                  alt=""
                  className=""
                />
              </div>
            )}
          </div>

          <div className="flex justify-between  md:px-10 pt-2 items-center">
            <div className="flex gap-5 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Track Your Order
              </button>
              <button
                onClick={deletDataFromOrder}
                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
              >
                Cancel Order
              </button>
              <Link
                href="/"
                className="flex font-semibold text-indigo-600 text-sm  w-44 my-10 "
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>
            <p>
              Total: ₹<span>{order.length > 0 ? newData + 40 : 0}</span>
            </p>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="md:hidden block relative">
        <div className="flex justify-between items-center gap-3 text-[20px] m-5">
          <div>
            <p className="font-bold text-[20px]">Order details</p>
            <p className="text-gray-400 text-[12px] w-[170px]">
              Your order will be with you soon
            </p>
          </div>
          <div className="text-[12px] font-semibold text-gray-500">
            <p>
              Order Number:{" "}
              {order.length > 0 ? (
                "#HD8845"
              ) : (
                <span className=" text-gray-500 w-full h-1">---------</span>
              )}
            </p>
            <p>
              Order Placement:{" "}
              {order.length > 0 ? (
                `${
                  new Date().getDate() > 22
                    ? new Date().getDate() - 22 + "th"
                    : ""
                } ${
                  new Date().getDate() < 22
                    ? new Date().getDate() + 7 + "th"
                    : ""
                }  ${
                  new Date().getDate() > 22
                    ? months[new Date().getMonth() + 1]
                    : months[new Date().getMonth()]
                },
                ${new Date().getFullYear()}`
              ) : (
                <span className=" text-gray-500 w-full h-1">---------</span>
              )}
            </p>
          </div>
        </div>
        {order.length === 0 && (
          <div className="flex justify-center items-center mt-12">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.PcuQZuTqw5GbmEk1EKJeBQHaHa&pid=Api&P=0&h=180"
              alt=""
              className=""
            />
          </div>
        )}
        <div className="m-5">
          {order.map((ele, id) => (
            <div className="flex gap-7 my-5 border-[1px] p-2 h-36 rounded-lg shadow-lg">
              <img src={ele.image} alt="" className="w-28 object-contain" />
              <div className="flex justify-between flex-col">
                <div className="space-y-1">
                  <p>
                    {ele.name.length > 25
                      ? ele.name.slice(0, 18) + "..."
                      : ele.name}
                  </p>
                  <span className="text-red-500 text-xs">{ele.type}</span>
                  <p>Price: ₹{ele.price}</p>
                  <p className="">Quantity: {ele.quantity}</p>
                </div>
                <p className="text-[10px]">
                  Delivery Expected:{" "}
                  {`${
                    new Date().getDate() > 22
                      ? new Date().getDate() - 22 + "th"
                      : ""
                  } ${
                    new Date().getDate() < 22
                      ? new Date().getDate() + 7 + "th"
                      : ""
                  }  ${
                    new Date().getDate() > 22
                      ? months[new Date().getMonth() + 1]
                      : months[new Date().getMonth()]
                  },
                ${new Date().getFullYear()}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="flex font-semibold m-5 bg-white text-indigo-600 text-sm  w-44 my-10 "
        >
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>

        {order.length !== 0 && (
          <div className="flex items-center sticky bottom-0 mx-5 bg-white">
            <p className="w-[300px] px-5 text-[20px]">
              <span className="font-bold">Total:</span> ₹{newData}
            </p>
            <button
              onClick={deletDataFromOrder}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-lg"
            >
              Cancel Order
            </button>
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
}

export default Orderdetails;

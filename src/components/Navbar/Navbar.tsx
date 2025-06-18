"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../firebase";
import firebase from "firebase/compat/app";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const cart = useSelector((state: RootState) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log("user", user?.photoURL);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in with Google:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div className="border-b-[1px] border-b-[#9ca3af55] hidden md:block bg-white w-fit md:w-full sticky top-0 z-50">
        {/* <div className="flex justify-between items-center px-24 py-3 text-[#9ca3af] font-normal border-b-[1px] border-b-[#9ca3af55]">
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
      </div> */}
        <div className="flex justify-between items-center px-20 h-16 font-normal">
          <div className="flex gap-20 items-center">
            <Link href="/">
              <div className="md:block hidden">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.ZxbnQQLkb77m_RHJzuZSoQHaCX&pid=Api&P=0&h=180"
                  className="w-[150px] h-[50px]"
                  alt=""
                />
              </div>
              <div className="md:hidden w-[70px] md:w-0">E-Comm</div>
            </Link>
            <ul className="flex gap-10 items-center text-[20px] md:w-[550px] w-[250px] px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 ">
              <Link href="/">
                <li className="hover:text-blue-600">Home</li>
              </Link>
              <Link href="/todays-deal">
                <li className="hover:text-blue-600">Today's Deals</li>
              </Link>
              <Link href="accessories" className="md:block hidden">
                <li className="hover:text-blue-600">Accessories</li>
              </Link>
              <Link href="/contact" className="md:block hidden">
                <li className="hover:text-blue-600">Contact</li>
              </Link>
              <Link href="/order-details">
                <li className="hover:text-blue-600">orders</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            {/* <div className="md:flex items-center gap-3 hidden">
              <div className="w-10  h-10 flex justify-center items-center rounded-full">
                <img
                  src="https://up.yimg.com/ib/th?id=OIP.xqlfKo7mhxHwkzr-6NSV1AHaH0&pid=Api&rs=1&c=1&qlt=95&w=116&h=122"
                  alt=""
                />
              </div>
              <div className=" text-[15px]/[20px] font-medium">
                <p className="">Need Help?</p>
                <p>+001 123 456 789</p>
              </div>
            </div> */}
            {user ? (
              <div
                onClick={handleSignOut}
                className="border-[1px] w-10 bg-[#9ca3af24] hover:border-2 hover:border-[#424234] h-10 flex justify-center items-center rounded-full"
              >
                <img
                  src={user.photoURL as string}
                  alt={
                    user.displayName
                      ?.split(" ")
                      .map((ele) => ele.slice(0, 1))
                      .join("") as unknown as string
                  }
                  className="rounded-full w-8 h-8"
                />
              </div>
            ) : (
              <div
                onClick={handleSignIn}
                className="border-[1px] w-10 bg-[#9ca3af24] hover:border-2 hover:border-[#424234] h-10 flex justify-center items-center rounded-full"
              >
                <RiAccountCircleLine size={30} color="#00000099" />
              </div>
            )}

            <Link href="/cart">
              <div className="border-[1px] relative w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
                <AiOutlineShoppingCart size={25} color="#00000099" />
                {cart.length > 0 && (
                  <div className="bg-blue-800 absolute rounded-full flex items-center justify-center -top-2 w-5 h-5 -right-1 text-white font-medium">
                    <p>{cart.length}</p>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 border-b-[1px] md:hidden sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.ZxbnQQLkb77m_RHJzuZSoQHaCX&pid=Api&P=0&h=180"
                className="w-[120px] h-[40px] rounded-lg"
                alt=""
              />
            </div>
            {/* <div className="md:hidden w-[70px] md:w-0">E-Comm</div> */}
          </Link>
          <div className="lg:hidden flex items-center text-[#0eb48d] gap-3">
            {user ? (
              <div
                onClick={handleSignOut}
                className="border-[1px] w-8 bg-[#9ca3af24] hover:border-2 hover:border-[#424234] h-8 flex justify-center items-center rounded-full"
              >
                <img
                  src={user.photoURL as string}
                  alt={
                    user.displayName
                      ?.split(" ")
                      .map((ele) => ele.slice(0, 1))
                      .join("") as unknown as string
                  }
                  className="rounded-full w-6 h-6"
                />
              </div>
            ) : (
              <div
                onClick={handleSignIn}
                className="border-[1px] w-8 bg-[#9ca3af24] hover:border-2 hover:border-[#424234] h-8 flex justify-center items-center rounded-full"
              >
                <RiAccountCircleLine size={25} color="#00000099" />
              </div>
            )}
            <Link href="/cart">
              <div className="border-[1px] relative w-8 bg-[#9ca3af24] h-8 flex justify-center items-center rounded-full">
                <AiOutlineShoppingCart size={20} color="#00000099" />
                {cart.length > 0 && (
                  <div className="bg-blue-800 absolute rounded-full flex items-center justify-center -top-2 w-5 h-5 -right-1 text-white font-medium">
                    <p>{cart.length}</p>
                  </div>
                )}
              </div>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <HiX size={34} /> : <HiMenu size={34} />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="border-b-[1px] absolute z-50 bg-white w-full px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600">
          <ul className="text-[16px]">
            <Link href="/">
              <li className="border-b-[1px] p-2">Home</li>
            </Link>
            <Link href="/todays-deal">
              <li className="border-b-[1px] p-2">Today's Deals</li>
            </Link>
            <Link href="accessories" className="">
              <li className="border-b-[1px] p-2">Accessories</li>
            </Link>
            <Link href="/contact" className="">
              <li className="border-b-[1px] p-2">Contact</li>
            </Link>
            <Link href="/order-details">
              <li className="border-b-[1px] p-2">Orders</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

// https://tailgrids.com/components/ecommerce-navbars

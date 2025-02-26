"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
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

function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const cart = useSelector((state: RootState) => state.cart);

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
    <div className="border-b-[1px] border-b-[#9ca3af55] bg-white sticky top-0 z-50">
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
                src="https://tse2.mm.bing.net/th?id=OIP.ZxbnQQLkb77m_RHJzuZSoQHaCX&pid=Api&P=0&h=180"
                className="w-[150px] h-[50px]"
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
          <div className="border-[1px] relative w-10 bg-[#9ca3af24] h-10 flex justify-center items-center rounded-full">
            <FiHeart size={20} color="#00000099" />
            <span className="bg-blue-800 absolute rounded-full flex items-center px-[5px] -top-2 w-5 h-5 -right-1 text-white font-semibold">
              3
            </span>
          </div>

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
  );
}

export default Navbar;

// https://tailgrids.com/components/ecommerce-navbars

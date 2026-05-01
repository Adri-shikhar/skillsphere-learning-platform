import Link from "next/link";
import React from "react";
import Mylink from "./Mylink";

const Navbar = () => {
  return (
    <div className="border-b-1 border-gray-500 py-2 mb-5">
      <div className="py-4 un" >
        <div className="mx-auto container grid grid-cols-3 items-center">
          <div />
          <div className="flex gap-4 justify-center">
            <Mylink href="/">Home</Mylink>
            <Mylink href="/Courses">Courses</Mylink>
            <Mylink href="/Wishlist">Wishlist</Mylink>
          </div>
          <div className="flex justify-end text-center">
            <p className="text-gray-800 pr-4 text-center"></p>
            <button className="btn btn-sm btn-outline btn-primary">
              <Link href="/Login">Login</Link>
            </button>
            <button className="btn btn-sm btn-primary ml-2">
              <Link href="/Registration">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

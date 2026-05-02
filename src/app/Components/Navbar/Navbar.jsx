import Link from "next/link";
import React from "react";
import Mylink from "./Mylink";
import { MdSchool, MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center shadow-md group-hover:bg-purple-700 transition-colors">
            <MdSchool className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold text-purple-700 tracking-tight">
            Skill<span className="text-gray-800">Sphere</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Mylink href="/">Home</Mylink>
          <Mylink href="/Courses">Courses</Mylink>
          <Mylink href="/Wishlist">Wishlist</Mylink>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/Login"
            className="px-4 py-2 text-sm font-semibold text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/Registration"
            className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-purple-200"
          >
            Register
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <MdMenu className="text-2xl text-gray-700" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Courses">Courses</Link></li>
              <li><Link href="/Wishlist">Wishlist</Link></li>
              <li><Link href="/Login">Login</Link></li>
              <li><Link href="/Registration">Register</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mylink = ({ href, children }) => {
  const path = usePathname();
  const active = path === href;
  return (
    <Link
      href={href}
      className={`relative px-3 py-1.5 text-sm font-semibold transition-colors duration-200 rounded-lg
        ${active
          ? "text-purple-700 bg-purple-50"
          : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
        }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-purple-600" />
      )}
    </Link>
  );
};

export default Mylink;

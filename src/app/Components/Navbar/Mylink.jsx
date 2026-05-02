"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Mylink = ({ href, children }) => {
    const path = usePathname();
    const active = path === href;
    return (
        <div className={`border-b-2 pb-1 px-3 transition-colors duration-200 ${active ? 'border-purple-600' : 'border-transparent'}`}>
            <Link
                href={href}
                className={`text-sm font-semibold hover:text-purple-600 transition-colors duration-200 ${active ? 'text-purple-600' : 'text-gray-600'}`}
            >
                {children}
            </Link>
        </div>
    );
};

export default Mylink;
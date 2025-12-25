"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [year, setYear] = useState("2025"); // Default to current year string

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className='h-16 bg-[#36454F] flex justify-between px-3 items-center text-white border-t border-white/5'>
            {/* Logo: Identical size (text-2xl) and formation to Navbar */}
            <Link href="/" className="cursor-pointer">
                <div className="logo font-extrabold text-2xl tracking-tighter transition-all duration-300 hover:opacity-80">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#434343] to-[#000000] antialiased">
                        Mini
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#979797] via-[#ebebeb] to-[#adb5bd] drop-shadow-sm">
                        Links
                    </span>
                </div>
            </Link>

            <div className='absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1'>
                <p className="text-[#adb5bd] text-lg font-black uppercase tracking-[0.2em] opacity-40 leading-none">
                    Professional Link Management
                </p>
                <p className="text-white/30 text-sm font-medium leading-none">
                    &copy; {year} MiniLinks. All rights reserved.
                </p>
            </div>

          
            <div className="hidden md:block w-[150px] z-10">
               
            </div>
        </footer>
    );
};

export default Footer;
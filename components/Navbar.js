import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-[#36454F] flex justify-between px-3 items-center text-white'>
            <Link href="/" className="cursor-pointer">
            <div className="logo font-extrabold text-2xl tracking-tighter transition-all duration-300 hover:opacity-80">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#434343] to-[#000000] antialiased">
                    Mini
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#979797] via-[#ebebeb] to-[#adb5bd] drop-shadow-sm">
                    Links
                </span>
            </div></Link>
            <ul className='flex justify-center gap-6 items-center font-medium text-sm'>
                <Link href="/"><li className='hover:text-[#adb5bd] transition-colors'>Home</li></Link>
                <Link href="/about"><li className='hover:text-[#adb5bd] transition-colors'>About</li></Link>
                <Link href="/shorten"><li className='hover:text-[#adb5bd] transition-colors'>Shorten</li></Link>
                <Link href="/contact"><li className='hover:text-[#adb5bd] transition-colors'>Contact Us</li></Link>
                <li className='flex gap-3 ml-4'>
                    <Link href="/shorten"><button className='bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-[#E5E4E2] transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)]'> Try Now</button></Link>
                    <Link href="/github">
                        <button className='bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-all active:scale-95 flex items-center gap-2'>
                            GitHub
                        </button>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar

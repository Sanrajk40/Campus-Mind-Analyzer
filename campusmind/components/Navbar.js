"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import AnimatedText from './AnimatedText'; // adjust import path if needed

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar md:px-60 mb-10 flex w-full h-[8vh] items-center justify-between border-b border-white/10 px-4">
            <h1 className='text-xl flex'>
                <span><AnimatedText text="Aritrik's" /></span>
                <span className="text-purple-700 pl-2"><AnimatedText text="Portfolio" /></span>
            </h1>

            {/* Hamburger Icon - visible only on mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/contactme"}>Contact Me</Link>
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-[8vh] left-[61vw] w-[38%] bg-violet-900 z-50 flex flex-col items-start gap-4 py-6 px-5 text-xl font-medium md:hidden">
                    <Link href={"/"} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href={"/about"} onClick={() => setIsOpen(false)}>About</Link>
                    <Link href={"/services"} onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href={"/projects"} onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href={"/contactme"} onClick={() => setIsOpen(false)}>Contact Me</Link>
                </ul>
            )}
        </nav>
    );
}
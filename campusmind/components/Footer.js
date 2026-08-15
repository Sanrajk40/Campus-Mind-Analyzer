'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext'; // Import the global hook

const Footer = () => {
    const theme = useTheme(); // Consume your global theme variables

    return (
        <div className={`w-full ${theme.navBg} transition-all duration-1000 mt-20`}>
            {/* Divider line utilizing current theme accent boundaries */}
            <hr className="border-t border-white/10 w-full" />
            
            <footer className={`flex flex-col md:flex-row md:gap-44 gap-12 px-6 md:px-44 py-10 w-full ${theme.navText}`}>
                {/* Brand Title Area */}
                <div className={`text font-bold flex flex-col min-w-[150px] text-lg ${theme.titleText}`}>
                    <span>Campus Mind</span>
                    <span>Analyzer</span>
                </div>
                
                {/* Links Container */}
                <div className="footer flex flex-wrap md:flex-nowrap justify-between w-full gap-8">
                    {/* Navigation Category */}
                    <div className="main flex flex-col gap-2 min-w-[100px]">
                        <h1 className={`text-md font-bold ${theme.titleText}`}>Main</h1>
                        <div className={`body text-sm flex flex-col gap-1 items-start ${theme.bodyText}`}>
                            <Link href={"/"} className="hover:underline opacity-90 hover:opacity-100">Home</Link>
                            <Link href={"/contact"} className="hover:underline opacity-90 hover:opacity-100">Contact</Link>
                            <Link href={"/services"} className="hover:underline opacity-90 hover:opacity-100">Services</Link>
                        </div>
                    </div>

                    {/* Legal Links Category */}
                    <div className="legal flex flex-col gap-2 min-w-[100px]">
                        <h1 className={`text-md font-bold ${theme.titleText}`}>Legal</h1>
                        <div className={`body text-sm flex flex-col gap-1 items-start ${theme.bodyText}`}>
                            <Link href={"/terms"} className="hover:underline opacity-90 hover:opacity-100">Terms</Link>
                            <Link href={"/privacy"} className="hover:underline opacity-90 hover:opacity-100">Privacy</Link>
                        </div>
                    </div>

                    {/* Social Channels Links */}
                    <div className="social flex flex-col gap-2 min-w-[120px]">
                        <h1 className={`text-md font-bold ${theme.titleText}`}>Social</h1>
                        <div className={`body text-sm flex flex-col gap-2 items-start ${theme.bodyText}`}>
                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                            <a
                                href="https://twitter.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
                            >
                                <FaTwitter size={18} />
                                Twitter
                            </a>
                            <a
                                href="https://youtube.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
                            >
                                <FaYoutube size={18} />
                                YouTube
                            </a>
                            <a
                                href="https://facebook.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
                            >
                                <FaFacebook size={18} />
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

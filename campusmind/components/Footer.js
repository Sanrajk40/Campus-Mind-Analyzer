import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <h1 className="border-b border-violet-600 mt-[60vh] mb-6"></h1>
            <footer className="flex md:gap-44 gap-12 md:px-45 my-6">
                <div className="text text-violet-300 font-bold flex flex-col w-[13vw]">
                    <span className="">Campus Mind</span>
                    <span className="">Analyzer</span>
                </div>
                <div className="footer flex justify-between w-full">
                    <div className="main flex flex-col gap-2">
                        <h1 className="text-md text-violet-300 font-bold">Main</h1>
                        <div className="body text-sm text-violet-700  flex flex-col gap-1 items-start">
                            <Link href={"/"} className="">Home</Link>
                            <Link href={"/contact"} className="">Contact</Link>
                            <Link href={"/services"} className="">Services</Link>
                            </div>
                    </div>
                    <div className="legal flex flex-col gap-2">
                        <h1 className="text-md text-violet-300 font-bold">Legal</h1>
                        <div className="body text-sm text-violet-700  flex flex-col gap-1 items-start">
                            <Link href={"/terms"} className="">Terms</Link>
                            <Link href={"/privacy"} className="">Privacy</Link>
                            </div>
                    </div>
                    <div className="social flex flex-col gap-2">
                        <h1 className="text-md text-violet-300 font-bold">Social</h1>
                        <div className="body text-sm text-violet-700  flex flex-col gap-1.5 items-start">
                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaGithub size={20} />
                                GitHub
                            </a>
                            <a
                                href="https://twitter.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaTwitter size={20} />
                                Twitter
                            </a>
                            <a
                                href="https://youtube.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaYoutube size={20} />
                                YouTube
                            </a>
                            <a
                                href="https://facebook.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaFacebook size={20} />
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
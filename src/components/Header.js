import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const Header = () => {
    return (
        <section className="bg-gray-100 absolute left-0 right-0">
            <div className="flex justify-between">
                <a href="/" className="text-lg xl:text-xl h-12 px-6 bg-green-600 text-white tracking-wider flex items-center"><h1 className="logo">jjung</h1></a>
                <ul className="flex items-center py-4 lg:pt-12 lg:pb-4">
                    <li className="pl-4 lg:pl-6"><a href="#about">About</a></li>
                    <li className="pl-4 lg:pl-6"><a href="#projects">Projects</a></li>
                    <li className="pl-4 lg:pl-6"><a href="#contact">Contact</a></li>
                    <li className="pl-4 lg:pl-6 text-lg"><MdSubdirectoryArrowLeft className="text-gray-800"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Header

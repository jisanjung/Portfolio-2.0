import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import logo_bold from "../images/logo_bold.png";

const Header = () => {
    return (
        <section className="bg-gray-100 absolute left-0 right-0">
            <div className="flex justify-between">
                <a href="/" className="text-2xl h-12 px-6 bg-green-600 text-white tracking-wider flex items-center"><img src={logo_bold} alt="Logo" className="w-10"/></a>
                <ul className="flex items-center py-4">
                    <li className="pl-4"><a href="/">About</a></li>
                    <li className="pl-4"><a href="/">Projects</a></li>
                    <li className="pl-4"><a href="/">Contact</a></li>
                    <li className="pl-4 text-lg"><MdSubdirectoryArrowLeft className="text-gray-800"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Header

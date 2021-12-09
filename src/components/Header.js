import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { Link } from 'react-scroll';

const Header = () => {

    return (
        <section className="bg-gray-100 absolute left-0 right-0">
            <div className="flex justify-between">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}  className="text-lg xl:text-xl h-12 px-6 bg-green-600 text-white tracking-wider flex items-center cursor-pointer">
                    <h1 className="logo">jjung</h1>
                </Link>
                <ul className="flex items-center py-4 lg:pt-12 lg:pb-4">
                    <li className="ml-4 lg:ml-6">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>About</Link>
                    </li>
                    <li className="ml-4 lg:ml-6">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Projects</Link>
                    </li>
                    <li className="ml-4 lg:ml-6">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Contact</Link>
                    </li>
                    <li className="ml-4 lg:ml-6 text-lg"><MdSubdirectoryArrowLeft className="text-gray-800"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Header

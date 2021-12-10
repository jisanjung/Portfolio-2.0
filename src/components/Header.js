import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react/cjs/react.development';

const Header = () => {

    const [shrinkHeader, setShrinkHeader] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function(e) {
            const winScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (winScroll > 0) setShrinkHeader(true);
            if (winScroll === 0) setShrinkHeader(false);
        });
    }, []);

    return (
        <section className="bg-gray-100 fixed left-0 right-0 z-10">
            <div className="flex justify-between container mx-auto px-4 md:px-12 lg:px-0 lg:w-4/5 xl:w-auto w-1000px">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}  className="text-lg xl:text-xl h-12 px-6 bg-green-600 text-white tracking-wider flex items-center md:cursor-pointer">
                    <h1 className="logo">jjung</h1>
                </Link>
                <ul className={`transition-all flex items-center py-4 lg:pb-4 ${shrinkHeader ? "lg:pt-4" : "lg:pt-12"}`}>
                    <li className="ml-4 lg:ml-6 relative">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='md:cursor-pointer'>About</Link>
                    </li>
                    <li className="ml-4 lg:ml-6">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} className='md:cursor-pointer'>Projects</Link>
                    </li>
                    <li className="ml-4 lg:ml-6">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className='md:cursor-pointer'>Contact</Link>
                    </li>
                    <li className="ml-4 lg:ml-6 text-lg"><MdSubdirectoryArrowLeft className="text-gray-800"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Header

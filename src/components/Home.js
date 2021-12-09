import React from 'react';
import memoji from "../images/memoji.png";
import Button from './Button';
import { BsChevronCompactDown, BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
    return (
        <section id="home" className="container mx-auto h-auto md:h-screen py-28 flex justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full w-28 md:w-36 flex justify-center items-center">
                    <img src={memoji} alt="Memoji" className="relative top-1"/>
                </div>
                <ul className="flex mt-6">
                    <li><a href="https://www.linkedin.com/in/jisan-jung-33129b179/" target="_blank" rel="noopener noreferrer"><BsLinkedin className="text-gray-800 text-2xl md:text-3xl mr-1"/></a></li>
                    <li><a href="https://github.com/jisanjung" target="_blank" rel="noopener noreferrer"><BsGithub className="text-gray-800 text-2xl md:text-3xl ml-2"/></a></li>
                </ul>
                <a href="#home">
                    <h3 className="text-2xl md:text-3xl text-center py-4">Jisan Jung</h3>
                </a>
                <h1 className="text-6xl md:text-7xl xl:text-8xl text-center">Software Engineer</h1>
                <p className="py-8 px-8 md:px-24 lg:px-36 md:text-lg xl:text-2xl text-center">What I love doing most is solving business problems by implementing simple, friendly user interfaces.</p>
                <a href="#projects">
                    <Button color="dark"><span>See my work</span></Button>
                </a>
                <BsChevronCompactDown className="text-4xl text-gray-800 chevron relative"/>
            </div>
        </section>
    )
}

export default Home

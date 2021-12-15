import React from 'react';
import Title from './Title';
import Slider from "react-slick";
import paypal from "../images/paypal.png";
import islandnetworks from "../images/islandnetworks.png";
import iconplc from "../images/iconplc.png";
import equisearch from "../images/equisearch.png";
import { VscRecord } from "react-icons/vsc";
import { Element } from 'react-scroll';

const About = () => {

    const settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplaySpeed: 2000
    };

    return (
        <Element name="about">
            <section id="about" className="pt-12 pb-28 md:pb-36 lg:pb-48">
                <Title text="About"/>
                <div className="flex flex-col md:flex-row">
                    <div className="flex mt-8 md:mt-12 xl:mt-14 w-auto md:w-2/5">
                        <VscRecord className="text-sm md:text-base xl:text-xl mr-4 mt-1"/>
                        <ul className="text-2xl md:text-3xl xl:text-4xl">
                            <li>Make it work.</li>
                            <li>Make it right.</li>
                            <li>Make it fast.</li>
                        </ul>
                    </div>
                    <div className="w-auto md:w-3/5">
                        <p className="mt-8 md:mt-12 xl:mt-14 md:text-lg xl:text-xl">
                        The ability to adapt to different environments is a key skill, especially in software development. Because of this, I have grown a passion for learning up-to-date
                        technologies and developing my skills which has opened up many opportunities. Here are some companies and startups I've worked for:
                        </p>
                        <div className="mt-8 xl:mt-12">
                            <Slider {...settings}>
                                <img src={paypal} alt="PayPal logo" className="px-3 lg:px-5"/>
                                <img src={islandnetworks} alt="Island Networks logo" className="px-3 lg:px-5"/>
                                <img src={iconplc} alt="ICON plc logo" className="px-3 lg:px-5"/>
                                <img src={equisearch} alt="equiSearch logo" className="px-3 lg:px-5"/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About

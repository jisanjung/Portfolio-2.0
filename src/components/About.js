import React from 'react';
import Title from './Title';
import Slider from "react-slick";
import paypal from "../images/paypal.png";
import islandnetworks from "../images/islandnetworks.png";
import iconplc from "../images/iconplc.png";
import equisearch from "../images/equisearch.png";
import { VscRecord } from "react-icons/vsc";

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
        <section className="py-12">
            <Title text="About"/>
            <div className="flex mt-8">
                <VscRecord className="text-sm mr-4 mt-1"/>
                <ul className="text-2xl">
                    <li>Make it work.</li>
                    <li>Make it right.</li>
                    <li>Make it fast.</li>
                </ul>
            </div>
            <p className="mt-8">
            The ability to adapt to different environments is a key skill, especially in software development. Because of this, I have grown a passion for learning up-to-date
            technologies and developing my skills which has opened up many opportunities. Here are some companies and startups I've worked for:
            </p>
            <div className="mt-8">
                <Slider {...settings}>
                    <img src={paypal} alt="PayPal logo" className="px-3"/>
                    <img src={islandnetworks} alt="Island Networks logo" className="px-3"/>
                    <img src={iconplc} alt="ICON plc logo" className="px-3"/>
                    <img src={equisearch} alt="equiSearch logo" className="px-3"/>
                </Slider>
            </div>
        </section>
    )
}

export default About

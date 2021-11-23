import React from 'react';
import Title from './Title';
import Slider from "react-slick";

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
        <section>
            <Title text="About"/>
            <ul className="text-2xl">
                <li>Make it work.</li>
                <li>Make it right.</li>
                <li>Make it fast.</li>
            </ul>
            <p>
            The ability to adapt to different environments is a key skill, especially in software development. Because of this, I have grown a passion for learning up-to-date
            technologies and developing my skills which has opened up many opportunities. Here are some companies and startups I've worked for:
            </p>
            <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Slider>
        </section>
    )
}

export default About

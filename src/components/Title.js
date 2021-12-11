import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { useEffect } from 'react/cjs/react.development';
import AOS from "aos";

const Title = (props) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <h1 className="text-6xl md:text-8xl xl:text-9xl flex items-center" data-aos="fade-right">
            <span>{props.text}</span>
            <MdSubdirectoryArrowLeft className="transform -rotate-90 text-xl md:text-2xl xl:text-3xl relative top-3 left-2 xl:top-4 xl:left-3"/>
        </h1>
    )
}

export default Title

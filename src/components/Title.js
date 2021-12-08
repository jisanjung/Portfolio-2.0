import React from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const Title = (props) => {
    return (
        <h1 className="text-6xl md:text-8xl xl:text-9xl flex items-center">
            <span>{props.text}</span>
            <MdSubdirectoryArrowLeft className="transform -rotate-90 text-xl md:text-2xl xl:text-3xl relative top-3 left-2 xl:top-4 xl:left-3"/>
        </h1>
    )
}

export default Title

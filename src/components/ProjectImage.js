import React from 'react';
import pr from "../images/projects/pr2.PNG";
import glitter from "../images/projects/glitter1.PNG";
import joos from "../images/projects/joos1.PNG";
import covid from "../images/projects/covid.PNG";
import jobify from "../images/projects/jobify.PNG";

const ProjectImage = (props) => {

    let projectImg;

    if (props.title === "Pull Request App") projectImg = pr;
    if (props.title === "Glitter and Polish") projectImg = glitter;
    if (props.title === "Joo's Burgers") projectImg = joos;
    if (props.title === "COVID-19 Tracker") projectImg = covid;
    if (props.title === "Jobify") projectImg = jobify;

    return (
        <div className={`w-full h-56 lg:h-72 overflow-hidden ${props.className}`}>
            <img src={projectImg} alt={props.title} className="w-full h-full object-cover object-center md:bg-black"/>
        </div>
    )
}

export default ProjectImage

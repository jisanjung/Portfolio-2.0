import React from 'react';
import pr from "../images/projects/pr2.PNG";
import glitter from "../images/projects/glitter1.PNG";
import joos from "../images/projects/joos1.PNG";
import covid from "../images/projects/covid.PNG";
import equisearch from "../images/projects/equisearch1.PNG";

const ProjectImage = (props) => {

    let projectImg;

    if (props.title === "Pull Request App") projectImg = pr;
    if (props.title === "Glitter and Polish") projectImg = glitter;
    if (props.title === "Joo's Burgers") projectImg = joos;
    if (props.title === "COVID-19 Tracker") projectImg = covid;
    if (props.title === "EquiSearch") projectImg = equisearch;

    return (
        <div className="w-full h-full">
            <img src={projectImg} alt={props.title} className="w-full h-full object-cover object-center"/>
        </div>
    )
}

export default ProjectImage

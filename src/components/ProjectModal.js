import React from 'react';
import { GrClose } from "react-icons/gr";
import joos1 from "../images/projects/joos1.PNG";
import joos2 from "../images/projects/joos2.PNG";
import joos3 from "../images/projects/joos3.PNG";
import glitter1 from "../images/projects/glitter1.PNG";
import glitter2 from "../images/projects/glitter2.PNG";
import glitter3 from "../images/projects/glitter3.PNG";
import pr1 from "../images/projects/pr1.PNG";
import pr2 from "../images/projects/pr2.PNG";
import pr3 from "../images/projects/pr3.PNG";
import covid from "../images/projects/covid.PNG";
import equisearch1 from "../images/projects/equisearch1.PNG";
import equisearch2 from "../images/projects/equisearch2.PNG";
import equisearch3 from "../images/projects/equisearch3.PNG";
import Slider from "react-slick";

const ProjectModal = (props) => {

    let imageList;
    
    if (props.project.title === "Joo's Burgers") imageList = [joos1, joos2, joos3];
    if (props.project.title === "Glitter and Polish") imageList = [glitter1, glitter2, glitter3];
    if (props.project.title === "Pull Request App") imageList = [pr1, pr2, pr3];
    if (props.project.title === "COVID-19 Tracker") imageList = [covid];
    if (props.project.title === "EquiSearch") imageList = [equisearch1, equisearch2, equisearch3];

    const settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        fade: true
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center px-4">
            <div className="bg-white w-full bg-gray-100 relative pt-4">
                <button className="absolute right-4" onClick={() => props.setModal(false)}>
                    <GrClose className="text-lg"/>
                </button>
                <div className="pt-8">
                    <Slider {...settings}>
                        {imageList.map((item, i) => <img src={item} alt={`Project ${i + 1}`} key={i} className="h-56 object-cover"/>)}
                    </Slider>
                </div>
                <div className="p-4">
                    <h1>{props.project.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal

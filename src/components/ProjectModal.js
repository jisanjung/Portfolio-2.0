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
import Button from './Button';

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center px-4 md:px-12 lg:px-0">
            <div className="bg-white w-full bg-gray-100 relative pt-4 lg:container lg:mx-auto lg:w-auto w-500px w-700px">
                <button className="absolute right-4" onClick={() => props.setModal(false)}>
                    <GrClose className="text-lg"/>
                </button>
                <div className="pt-8">
                    <Slider {...settings}>
                        {imageList.map((item, i) => <img src={item} alt={`Project ${i + 1}`} key={i} className="h-72 object-cover"/>)}
                    </Slider>
                </div>
                <div className="p-4 md:p-8">
                    <h1 className="text-xl">{props.project.title}</h1>
                    <p className="mt-6">
                        {props.project.description}
                    </p>
                    <p className="text-sm mt-6 text-gray-500">{props.project.stack.join(", ")}</p>
                    <div className="mt-6">
                        {!props.project.links.length ? <h4 className="text-xs mb-2 text-red-700">Links are not available due to privacy reasons</h4> : <></>}
                        <div className="flex">
                            <Button className={!props.project.links.length ? "opacity-50" : ""}>
                                {!props.project.links.length ? <span>View Code</span> : <a href={props.project.links.length ? props.project.links[0] : "#"} target="_blank" rel="noopener noreferrer">View Code</a>}
                            </Button>
                            <span className="ml-2"></span>
                            <Button color="dark" className={!props.project.links.length ? "opacity-50" : ""}>
                            {!props.project.links.length ? <span>See Project</span> : <a href={props.project.links.length ? props.project.links[1] : "#"} target="_blank" rel="noopener noreferrer">See Project</a>}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal

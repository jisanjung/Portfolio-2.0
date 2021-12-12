import React from 'react';
import { FaMinus } from "react-icons/fa";
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
        <div className="z-10 fixed inset-0 bg-black bg-opacity-50 px-4 md:px-12 lg:px-0">
            <div className="relative inset-0 h-full flex items-center">
                <div className="w-full  bg-gray-100 relative lg:container lg:mx-auto lg:w-auto w-500px w-600px h-96">
                    <div className='relative'>
                        <button className="rounded-full bg-red-400 p-1 absolute -right-2 -top-2 z-20" onClick={() => props.setModal(false)}>
                            <FaMinus className="text-white"/>
                        </button>
                        <div className='z-10 absolute inset-0 bg-black opacity-20'>
                        </div>
                        <h1 className='z-20 p-4 md:p-6 absolute text-white opacity-100 text-2xl font-bold drop-shadow' style={{"textShadow": "2px 3px 14px #000"}}>{props.project.title}</h1>
                        <Slider {...settings}>
                            {imageList.map((item, i) => <img src={item} alt={`Project ${i + 1}`} key={i} className="h-72 object-cover"/>)}
                        </Slider>
                    </div>
                    <div className="z-20 absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gray-100">
                        <p className="text-sm text-gray-500">{props.project.stack.join(", ")}</p>
                        <p className="mt-4">
                            {props.project.description}
                        </p>
                        <div className="mt-4">
                            {!props.project.links.length ? <h4 className="text-xs mb-2 text-red-700">Links are not available due to privacy reasons</h4> : <></>}
                            <div className="flex">
                                {props.project.links.length ? (
                                <a href={props.project.links[0]} target="_blank" rel="noopener noreferrer">
                                    <Button className="px-4">
                                        <span>View Code</span>
                                    </Button>
                                </a>
                                ) : (
                                    <Button className="opacity-50 px-4">
                                        <span>View Code</span>
                                    </Button>
                                )}
                                <span className="ml-2"></span>
                                {props.project.links.length ? (
                                    <a href={props.project.links[1]} target="_blank" rel="noopener noreferrer">
                                        <Button color="dark" className="px-4">
                                            <span>See Project</span>
                                        </Button>
                                    </a>
                                ) : (
                                    <Button color="dark" className="opacity-50 px-4">
                                        <span>See Project</span>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal

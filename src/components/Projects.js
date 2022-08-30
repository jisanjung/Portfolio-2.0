import React, { useState, useEffect } from 'react';
import Title from './Title';
import { VscRecord } from "react-icons/vsc";
import ProjectImage from './ProjectImage';
import Project from './Project';
import { Element } from 'react-scroll';
import AOS from 'aos';

const Projects = () => {

    const [type, setType] = useState("All");
 
    let projectList = [
        {
            id: 1,
            title: "Jobify",
            stack: ["ReactJS", "Material UI", "Easy Peasy", "Mapbox", "Adzuna API"],
            type: "Dashboard",
            images: ["../images/projects/jobify.PNG"],
            description: "Jobify is intended to assist with the job searching process by looking exactly where a job would be located by simply using your zip code and a keyword.",
            links: ["https://github.com/jisanjung/Jobify", "https://jobifyus.netlify.app/"]
        },
        {
            id: 2,
            title: "Joo's Burgers",
            stack: ["HTML", "SASS", "JavaScript"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Site designed for potential clients and/or restaurant owners.",
            links: ["https://github.com/jisanjung/Joos", "https://jisanjung.github.io/Joos/"]
        },
        {
            id: 3,
            title: "Glitter and Polish",
            stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Site and booking system for a local nail salon owner. Improved owner's customer management and simplified process for customers making appointments.",
            links: ["https://github.com/jisanjung/Glitter-and-Polish", "https://glitterpolishnails.com/"]
        },
    ];

    projectList = projectList.filter(item => {
        if (type === "All" || type === "") return projectList
        return item.type === type;
    });

    // allow elements to appear when when state is changed
    useEffect(() => {
        AOS.refresh();
    }, [type]);

    return (
        <Element name="projects">
            <section id="projects" className="pt-12 pb-28 md:pb-36 lg:pb-48">
            <Title text="Projects"/>
            <div className="flex mt-12 xl:mt-14">
                <VscRecord className="text-sm mr-4 mt-1 md:text-base xl:text-xl"/>
                <div className="flex w-full justify-between border-t border-solid border-gray-300">
                    <h4 className="w-1/5 pl-2">Filter:</h4>
                    <div className="w-1/2 border-l border-r border-solid border-gray-300">
                        <select name="project" className="w-full bg-transparent font-bold md:cursor-pointer" onChange={e => setType(e.target.value)}>
                            <option>All</option>
                            <option>Dashboard</option>
                            <option>Client Site</option>
                        </select>
                    </div>
                    <span className="w-1/4">{projectList.length} items</span>
                </div>
            </div>
            <ul className="mt-8 lg:mt-12 block">
                {projectList.map(project => {
                    return (
                        <Project key={project.id} title={project.title} project={project}>
                            <ProjectImage title={project.title}/>
                        </Project>
                    )
                })}
            </ul>
            </section>
        </Element>
    )
}

export default Projects

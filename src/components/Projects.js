import React, { useState } from 'react';
import Title from './Title';
import { VscRecord } from "react-icons/vsc";
import ProjectImage from './ProjectImage';
import Project from './Project';
import ProjectModal from './ProjectModal';

const Projects = () => {

    const [type, setType] = useState("All");
    const [currentProject, setCurrentProject] = useState({});
    const [openModal, setOpenModal] = useState(false);
 
    let projectList = [
        {
            id: 1,
            title: "Joo's Burgers",
            stack: ["HTML", "SASS", "JavaScript"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Site designed for potential clients and/or restaurant owners.",
            links: ["https://github.com/jisanjung/Joos", "https://jisanjung.github.io/Joos/"]
        },
        {
            id: 2,
            title: "Glitter and Polish",
            stack: ["HTML", "CSS", "JavaScript"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Site and booking system for a local nail salon owner. Improved owner's customer management and simplified process for customers making appointments.",
            links: ["https://github.com/jisanjung/Glitter-and-Polish", "https://glitterpolishnails.com/"]
        },
        {
            id: 3,
            title: "Pull Request App",
            stack: ["ReactJS", "GraphQL", "TailwindCSS", "Github API"],
            type: "Dashboard",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Internship project: improved the team’s pull request close times by designing, developing, and deploying a dashboard tool to assist with analysis and assignment automation.",
            links: []
        },
        {
            id: 4,
            title: "COVID-19 Tracker",
            stack: ["ReactJS", "ChartJS", "SASS"],
            type: "Dashboard",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Tracking live global covid numbers for each country. Tracks new cases, deaths, and recovered.",
            links: ["https://github.com/jisanjung/COVID-19-Data-Reports", "https://jisanjung.github.io/COVID-19-Data-Reports/"]
        },
        {
            id: 5,
            title: "EquiSearch",
            stack: ["ReactJS", "SASS"],
            type: "Landing Page",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"],
            description: "Established a startup's brand and purpose by implementing the landing page designed by the UI/UX team",
            links: ["https://github.com/equisearch/EquiSearch-Landing-Page", "https://equisearch.io/"]
        }
    ];

    projectList = projectList.filter(item => {
        if (type === "All" || type === "") return projectList
        return item.type === type;
    });

    return (
        <section className="pt-12 pb-28">
            <Title text="Projects"/>
            <div className="flex mt-12">
                <VscRecord className="text-sm mr-4 mt-1"/>
                <div className="flex w-full justify-between border-t border-solid border-gray-300">
                    <h4 className="w-1/5 pl-2">Filter:</h4>
                    <div className="w-1/2 border-l border-r border-solid border-gray-300">
                        <select name="project" className="w-full bg-transparent font-bold" onChange={e => setType(e.target.value)}>
                            <option>All</option>
                            <option>Dashboard</option>
                            <option>Client Site</option>
                            <option>Landing Page</option>
                        </select>
                    </div>
                    <span className="w-1/4">{projectList.length} items</span>
                </div>
            </div>
            <ul className="mt-8">
                {projectList.map(project => {
                    return (
                        <Project key={project.id} title={project.title} project={project} setCurrentProject={setCurrentProject} setOpenModal={setOpenModal}>
                            <ProjectImage title={project.title}/>
                        </Project>
                    )
                })}
            </ul>
            {openModal ? <ProjectModal project={currentProject} setModal={setOpenModal} modal={openModal}/> : <></>}
        </section>
    )
}

export default Projects

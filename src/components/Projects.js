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
            stack: ["HTML", "CSS", "JavaScript", "SASS"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"]
        },
        {
            id: 2,
            title: "Glitter and Polish",
            stack: ["HTML", "CSS", "JavaScript"],
            type: "Client Site",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"]
        },
        {
            id: 3,
            title: "Pull Request App",
            stack: ["ReactJS", "GraphQL", "TailwindCSS", "Github API"],
            type: "Dashboard",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"]
        },
        {
            id: 4,
            title: "COVID-19 Tracker",
            stack: ["ReactJS", "ChartJS", "SASS"],
            type: "Dashboard",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"]
        },
        {
            id: 5,
            title: "EquiSearch",
            stack: ["ReactJS", "SASS"],
            type: "Landing Page",
            images: ["../images/projects/pr1.PNG", "../images/projects/pr2.PNG", "../images/projects/pr3.PNG"]
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

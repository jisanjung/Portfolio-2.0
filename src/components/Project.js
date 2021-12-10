import React from 'react';

const Project = (props) => {

    return (
        <li className={`w-full md:w-1/2 h-56 lg:h-72 xl:h-80 mb-8 xl:mb-12 px-4 xl:px-6`} onClick={() => {
            props.setCurrentProject(props.project);
            props.setOpenModal(true);
        }}>
            {props.children}
        </li>
    )
}

export default Project

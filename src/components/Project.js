import React from 'react';

const Project = (props) => {
    
    return (
        <li className={`w-full md:w-1/2 h-56 mb-8`} onClick={() => {
            props.setCurrentProject(props.project);
            props.setOpenModal(true);
        }}>
            {props.children}
        </li>
    )
}

export default Project

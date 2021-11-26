import React from 'react';

const Project = (props) => {

    return (
        <li className={`w-full h-56 bg-gray-300 mb-4`} onClick={() => {
            props.setCurrentProject(props.project);
            props.setOpenModal(true);
        }}>
            {props.children}
        </li>
    )
}

export default Project

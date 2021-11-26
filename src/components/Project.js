import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Project = (props) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <li className={`w-full h-56 bg-gray-300 mb-4`} onClick={() => setOpenModal(true)}>
            {props.children}
        {openModal ? <ProjectModal /> : <></>}
        </li>
    )
}

export default Project

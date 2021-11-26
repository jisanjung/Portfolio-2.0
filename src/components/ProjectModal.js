import React from 'react';
import { GrClose } from "react-icons/gr";

const ProjectModal = (props) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="bg-white mx-4 w-full bg-gray-100 relative p-4">
                <button className="absolute right-4" onClick={() => props.setModal(false)}>
                    <GrClose/>
                </button>
                <h1>{props.project.title}</h1>
            </div>
        </div>
    )
}

export default ProjectModal

import React from 'react';
import ProjectImage from './ProjectImage';
import Button from './Button';

const Project = (props) => {

    return (
        <li className={`w-full mb-12 md:px-4 xl:px-6 relative flex flex-col md:flex-row`}>
            <ProjectImage title={props.project.title} className="md:w-1/2"/>
            <div className='relative pt-2 md:pt-0 md:w-1/2 md:ml-6 lg:ml-8'>
                <h1 className='text-xl lg:text-2xl'>{props.project.title}</h1>
                <ul className='py-2 lg:py-3 xl:py-4 flex flex-wrap'>
                    {props.project.stack.map((skill, i) => {
                        return <li key={i} className='text-xs text-white p-1 mr-1 bg-gray-400 rounded mt-1'>{skill}</li>
                    })}
                </ul>
                <p className='pb-2 lg:pb-3 xl:pb-4'>
                    {props.project.description}
                </p>
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
        </li>
    )
}

export default Project

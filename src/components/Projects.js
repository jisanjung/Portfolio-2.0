import React from 'react';
import Title from './Title';
import { VscRecord } from "react-icons/vsc";

const Projects = () => {
    return (
        <section className="py-12">
            <Title text="Projects"/>
            <div className="flex mt-8">
                <VscRecord className="text-sm mr-4 mt-1"/>
                <div className="flex w-full justify-between">
                    <h4 className="w-1/5">Filter:</h4>
                    <div className="w-1/2">
                        <select name="project" className="w-full">
                            <option>All</option>
                        </select>
                    </div>
                    <span className="w-1/4">4 items</span>
                </div>
            </div>
        </section>
    )
}

export default Projects

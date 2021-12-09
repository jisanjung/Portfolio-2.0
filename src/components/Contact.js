import React from 'react'
import Title from './Title';
import { VscRecord } from "react-icons/vsc";
import { GrMailOption, GrLocationPin } from "react-icons/gr";
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';

const Contact = () => {

    return (
        <Element name="contact">
            <section id="contact" className="pt-12 pb-28 md:pb-36 lg:pb-48">
                <Title text="Contact"/>
                <div className="flex mt-8 xl:mt-14">
                    <VscRecord className="text-sm mr-4 mt-1 md:text-base xl:text-xl"/>
                    <h3 className="text-2xl xl:text-3xl">Let's talk.</h3>
                </div>
                <div className="flex flex-col md:flex-row mt-12">
                    <div className="w-full md:w-1/2 xl:text-lg">
                        <h4 className="flex items-center text-gray-500"><GrMailOption className="mr-3 text-lg"/>jisan.jung@temple.edu</h4>
                        <h4 className="flex items-center mt-2 text-gray-500"><GrLocationPin className="mr-3 text-lg"/>Philadelphia, PA</h4>
                    </div>
                    <ContactForm/>
                </div>
            </section>
        </Element>
    )
}

export default Contact

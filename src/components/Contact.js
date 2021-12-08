import React from 'react'
import Title from './Title';
import { VscRecord } from "react-icons/vsc";
import { GrMailOption, GrLocationPin } from "react-icons/gr";
import Button from './Button';

const Contact = () => {
    return (
        <section className="pt-12 pb-28">
            <Title text="Contact"/>
            <div className="flex mt-8">
                <VscRecord className="text-sm mr-4 mt-1"/>
                <h3 className="text-2xl">Let's talk.</h3>
            </div>
            <div className="flex flex-col md:flex-row mt-12">
                <div className="w-full md:w-1/2">
                    <h4 className="flex items-center text-gray-500"><GrMailOption className="mr-3 text-lg"/>jisan.jung@temple.edu</h4>
                    <h4 className="flex items-center mt-2 text-gray-500"><GrLocationPin className="mr-3 text-lg"/>Philadelphia, PA</h4>
                </div>
                <form className="mt-12 md:mt-auto w-full md:w-1/2">
                    <div className="mb-8">
                        <label htmlFor="name" className="block text-sm font-bold">Name</label>
                        <input type="text" name="name" className="bg-transparent border-b border-gray-400 w-full py-2" placeholder="Full name"/>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="email" className="block text-sm font-bold">Email</label>
                        <input type="email" name="email" className="bg-transparent border-b border-gray-400 w-full py-2" placeholder="Email Address"/>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-sm font-bold">Message</label>
                        <textarea className="bg-transparent border-b border-gray-400 w-full py-2" name="message" placeholder="Start typing here" rows={5}></textarea>
                    </div>
                    <Button type="submit" color="dark" className="w-full">
                        Send message
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact

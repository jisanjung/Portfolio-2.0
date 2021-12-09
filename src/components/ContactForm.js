import React from 'react';
import Button from './Button';
import { useForm, ValidationError } from '@formspree/react';
import { FcCheckmark } from "react-icons/fc";

const ContactForm = () => {

    const [submit, handleSubmit] = useForm("xyyoykke");

    if (submit.succeeded) return (
        <div className="mt-12 md:mt-auto xl:text-lg">
            <h2 className="flex items-center">Thanks for your response!
                <FcCheckmark className="ml-2 text-lg xl:text-xl"/>
            </h2>
            <h3>Connect with me on <a href="https://www.linkedin.com/in/jisan-jung-33129b179/" className="font-bold lg:hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</h3>
        </div>
    )

    return (
        <form className="mt-12 md:mt-auto w-full md:w-1/2" onSubmit={handleSubmit}>
            <div className="mb-8">
                <label htmlFor="name" className="block text-sm font-bold">Name</label>
                <input type="text" name="name" className="bg-transparent border-b border-gray-400 w-full py-2" placeholder="Full name" required/>
                <ValidationError field="name" prefix="Full name" errors={submit.errors}/>
            </div>
            <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-bold">Email</label>
                <input type="email" name="email" className="bg-transparent border-b border-gray-400 w-full py-2" placeholder="Email Address" required/>
                <ValidationError field="email" prefix="Email address" errors={submit.errors}/>
            </div>
            <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold">Message</label>
                <textarea className="bg-transparent border-b border-gray-400 w-full py-2" name="message" placeholder="Start typing here" rows={5}></textarea>
                <ValidationError field="message" prefix="Your message" errors={submit.errors}/>
            </div>
            <Button type="submit" color="dark" className="w-full" disabled={submit.submitting}>
                Send message
            </Button>
        </form>
    )
}

export default ContactForm

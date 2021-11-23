import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <section>
            <Title text="About"/>
            <ul className="text-xl">
                <li>Make it work.</li>
                <li>Make it right.</li>
                <li>Make it fast.</li>
            </ul>
            <p>
            The ability to adapt to different environments is a key skill, especially in software development. Because of this, I have grown a passion for learning up-to-date
            technologies and developing my skills which has opened up many opportunities. Here are some companies and startups I've worked for:
            </p>
        </section>
    )
}

export default About

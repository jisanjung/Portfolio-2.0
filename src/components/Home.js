import React from 'react';
import memoji from "../images/memoji.png";
import Button from './Button';

const Home = () => {
    return (
        <section className="container mx-auto py-16 h-screen">
            <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full w-28 flex justify-center items-center">
                    <img src={memoji} alt="Memoji" className="relative top-1"/>
                </div>
                <h3 className="text-2xl text-center py-6">Jisan Jung</h3>
                <h1 className="text-6xl text-center">Software Engineer</h1>
                <p className="py-8 px-8 text-center">What I love doing most is solving business problems by implementing simple, friendly user interfaces.</p>
                <Button text="See my work"/>
            </div>
        </section>
    )
}

export default Home

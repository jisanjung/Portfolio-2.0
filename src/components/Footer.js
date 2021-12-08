import React from 'react';

const Footer = () => {
    return (
        <section className="py-12 lg:pb-16">
            <h1 className="logo text-center text-2xl xl:text-4xl xl:mb-4">jjung</h1>
            <h3 className="text-center mt-2">&copy; {new Date().getFullYear()} Jisan Jung</h3>
        </section>
    )
}

export default Footer

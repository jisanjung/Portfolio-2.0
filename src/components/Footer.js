import React from 'react';
import logo_black from "../images/logo_black.png";

const Footer = () => {
    return (
        <section className="py-12">
            <div className="flex justify-center">
                <img src={logo_black} alt="Logo" className="w-12"/>
            </div>
            <h3 className="text-center mt-2">&copy; {new Date().getFullYear()} Jisan Jung</h3>
        </section>
    )
}

export default Footer

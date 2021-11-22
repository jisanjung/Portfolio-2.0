import React from 'react'

const Header = () => {
    return (
        <section>
            <div className="flex justify-between">
                <a href="/" className="text-2xl py-2 px-6 bg-green-600 text-white tracking-wider">JJ</a>
                <ul className="flex items-center">
                    <li className="pl-4"><a href="/">About</a></li>
                    <li className="pl-4"><a href="/">Projects</a></li>
                    <li className="pl-4"><a href="/">Contact</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Header

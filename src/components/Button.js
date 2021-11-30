import React from 'react'

const Button = (props) => {
    return (
        <button className={props.type === "dark" ? "text-white bg-gray-800 py-2 px-8 rounded-full" : "text-gray-800 bg-gray-100 py-2 px-8 rounded-full border border-gray-800"}>
            {props.children}
        </button>
    )
}

export default Button

import React from 'react'

const Button = (props) => {
    return (
        <button type={props.type ? props.type : "button"} className={`${props.color === "dark" ? "text-white bg-gray-800 md:hover:bg-gray-600" : "md:hover:bg-gray-600 text-gray-800 md:hover:text-gray-100 bg-gray-100 border border-gray-800"} transition-all py-2 rounded-full ${props.className}`} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button

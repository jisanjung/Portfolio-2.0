import React from 'react'

const Button = (props) => {
    return (
        <button type={props.type ? props.type : "button"} className={`${props.color === "dark" ? "text-white bg-gray-800" : "text-gray-800 bg-gray-100 border border-gray-800"} py-2 px-8 rounded-full ${props.className}`} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button

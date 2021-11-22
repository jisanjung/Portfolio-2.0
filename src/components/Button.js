import React from 'react'

const Button = (props) => {
    return (
        <button className="text-white bg-gray-800 py-2 px-8 rounded-full">
            {props.text}
        </button>
    )
}

export default Button

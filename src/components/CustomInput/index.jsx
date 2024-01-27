import React from 'react'

const CustomInput = ({ type, name, placeholder, className, onChange, onBlur }) => {

    return (
        <div>
            <input 
                type={type} 
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default CustomInput
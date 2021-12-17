import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto
        if(inputValue.trim().length > 2){
            setCategories(catg => [inputValue, ...catg ])
            setInputValue('');
        }

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
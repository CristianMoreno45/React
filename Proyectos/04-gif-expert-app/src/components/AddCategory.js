import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const inputHandler = (e) => {
        setInputValue(e.target.value);
        console.log('Esto es un log en inputHandler');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esto es un log en handleSubmit');
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={inputHandler}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

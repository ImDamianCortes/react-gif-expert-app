import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            //console.log(inputValue);
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='py-3 w-75 mx-auto bg-success'>
            <h2 className='mb-3'>AddCategory</h2>

            <input
                className='d-block mx-auto'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

            <h3 className=''>{ inputValue }</h3>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
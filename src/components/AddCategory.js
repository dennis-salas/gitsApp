import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length > 2){
      setCategories(cats => [inputValue, ...cats] );
      setinputValue('');
      }
  };

  return (
    <div>
      <p>{inputValue}</p>
      <form onSubmit={handleSubmit}> 
        <input 
            type="text" 
            value={inputValue} 
            placeholder = "Haz una búsqueda"
            onChange={handleInputChange} />

      </form>
    </div>
  );
};

AddCategory.propTypes = {
  
  setCategories: PropTypes.func.isRequired
}

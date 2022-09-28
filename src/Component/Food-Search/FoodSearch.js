import React, { useRef } from 'react';

const FoodSearch = ({setFoodName}) => {
  const inputRef = useRef(null);
  const handleAddToCart = () => {
    setFoodName(inputRef.current.value);
    inputRef.current.value = ''
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleAddToCart}>
        Search
      </button>
    </div>
  );
};

export default FoodSearch;
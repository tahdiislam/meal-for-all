import React, { useState } from 'react';
import FoodSearch from '../Food-Search/FoodSearch';

const Food = () => {
    const [foodName, setFoodName] = useState('')
    return (
      <section>
        <div>
          <FoodSearch setFoodName={setFoodName}></FoodSearch>
        </div>
        <div className='show-food-via-search'>
            <h1>{foodName}</h1>
        </div>
      </section>
    );
};

export default Food;
import React from 'react';

const FoodComponent = ({ foodName, image_url }) => {
  return (
    <div className="food-component">
      <img src={image_url} alt={foodName} className="food-image" />
      <h3 className="food-name">{foodName}</h3>
      {/* <p className="food-description">{description}</p> */}
    </div>
  );
};

export default FoodComponent;

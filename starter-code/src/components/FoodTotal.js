import React from "react";

const Foodtotal = (props) => {
  let chooseFood;
  if (props.quantity >= 1) {
    chooseFood = (
      <h5>
        - {props.quantity} {props.name} = {props.calories} cal
      </h5>
    );
  }
  return (
    <div className="movies-list-item">
      {chooseFood}
    </div>
  );
};

export default Foodtotal;

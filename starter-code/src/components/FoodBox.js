import React, { Component } from "react";
import Foodplate from "./FoodPlate.js";
import Foodtotal from "./FoodTotal.js"
import foodsB from "../foods.json";
import "bulma/css/bulma.css";

class Foodbox extends Component {
  constructor() {
    super();
    const foods = foodsB;
    this.state = {
      foods
    };
  }

  AddFood = (indexF) => {
    const foodsCopy = [...this.state.foods]; 
    foodsCopy[indexF].quantity =  foodsCopy[indexF].quantity+ 1
    console.log(foodsCopy[indexF].quantity )
    this.setState({
      foods: foodsCopy
    })
  }

  render() {
    return (
      
      <div className="container">
        <div>
          <h1 className="title">IronNutrition</h1>
        </div>
        <div>
          <input type="text" className="input search-bar" placeholder="Search" />
        </div>
        <div className="columns">
          <div className="column">
            {this.state.foods.map((foodP, indexF) => (
              <Foodplate
                key={indexF}
                name={foodP.name}
                image={foodP.image}
                calories={foodP.calories}
                quantity={foodP.quantity}
                clickToAdd={() => this.AddFood(indexF)} 
              />
            ))}
          </div>
          <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <Foodtotal></Foodtotal>
              <strong>Total:</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Foodbox;

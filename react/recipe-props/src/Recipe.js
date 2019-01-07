import React, { Component } from "react";
import "./Recipe.css";
import IngridientList from "./IngredientList";
class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">Recipe for {title}</h3>
          <h4>Ingredients:</h4>
          <IngridientList ingredients={this.props.ingredients} />
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;

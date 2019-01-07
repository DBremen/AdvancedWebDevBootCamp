import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        ingredients: [
          "2 Scoops ice creeam", 
          "8 ounce milk"
        ],
        instructions: "Combine ice cream and Milk. Blend until creamy",
        img: "milkshake.jpg"

      },
      {
        title: "Avocado Toast",
        ingredients: [
          "2 slices of bread", 
          "1 avocado",
          "oil + salt + pepper"
        ],
        instructions: "Toast bread. Slice avocado and spread on bread.",
        img: "avocado_toast.jpg"

      }
    ]
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="RecipeList">
          {this.props.recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeApp;

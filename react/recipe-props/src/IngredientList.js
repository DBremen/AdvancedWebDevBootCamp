import React, { Component } from "react";
import PropTypes from 'prop-types';
/*
npm i prop-types --save to work with PropTypes (typed values)
replaces:
 static defaultProps = {
    ingredients: []
  };

with a required array of strings
only throws a warning in the console during development time
*/
class IngredientList extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  render() {
    return (
      <ul>
        {this.props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    );
  }
}

export default IngredientList;

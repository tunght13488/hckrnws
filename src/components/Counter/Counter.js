import PropTypes from "prop-types";
import React from "react";

const Counter = ({counter, onIncrementClick, onDecrementClick}) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => onIncrementClick()}>Increment</button>
    <button onClick={() => onDecrementClick()}>Decrement</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
};

export default Counter;

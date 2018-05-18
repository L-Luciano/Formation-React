import React from "react";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../actions/counterAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Counter = ({currentCounter, actions}) => {
  return (
    <h2>
      <button onClick={() => actions.decrement()}>-</button>
      <button onClick={() => actions.reset()}>RESET</button>
      <button onClick={() => actions.increment()}>+</button>
    </h2>
  );
};

const mapStateToProp = ({counterState}) => {
  return {
    counterState,
  };
};

const mapDispatchToProps = dispatch => {
  const actions = {
    increment: bindActionCreators(incrementCounter, dispatch),
    decrement: bindActionCreators(decrementCounter, dispatch),
    reset: bindActionCreators(resetCounter, dispatch),
  };
  return {actions};
};

export default connect(mapStateToProp, mapDispatchToProps)(Counter);

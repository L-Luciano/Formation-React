import React from "react";
import {connect} from "react-redux";

const CounterDisplay = ({currentCounter}) => {
  return <h2>{currentCounter}</h2>;
};

const mapStateToProp = ({counterState}) => {
  return {currentCounter: counterState.currentCounter};
};

export default connect(mapStateToProp)(CounterDisplay);

import React from "react";

const DateInput = props => (
  <input type="date" pattern="^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$" {...props} />
);

export default DateInput;

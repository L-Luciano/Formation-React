import React from "react";
import PropTypes from "prop-types";

const RentingItem = props => {
  const {data, onDelete} = props;
  return (
    <tr>
      <td>{data.clientName}</td>
      <td>{data.inventoryName}</td>
      <td>{data.start}</td>
      <td>{data.end}</td>
      <td>{onDelete && <button onClick={onDelete}>Delete</button>}</td>
    </tr>
  );
};

RentingItem.propTypes = {
  onDelete: PropTypes.func,
};

export default RentingItem;

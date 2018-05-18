import React from "react";
import {connect} from "react-redux";
import SelectInput from "./SelectInput";

const ClientSelect = props => {
  const {clients} = props;

  return (
    <div>
      <label htmlFor={props.id}>Client</label>
      <SelectInput items={clients} optionLabel="name" optionValue="id" {...props} />
    </div>
  );
};

const mapStateToProps = ({clientState}) => {
  return {clients: clientState};
};

export default connect(mapStateToProps)(ClientSelect);

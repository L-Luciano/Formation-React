import React from "react";
const SelectInput = props => {
  const {items, optionLabel = "label", optionValue = "id", value, onChange, id} = props;
  return (
    <select onChange={onChange} id={id} value={value}>
      <option value=""> Selectionnez une valeur</option>
      {items.map(item => (
        <option key={item[optionValue]} value={item[optionValue]}>
          {item[optionLabel]}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;

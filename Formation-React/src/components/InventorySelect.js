import React, {Component} from "react";
import {connect} from "react-redux";
import SelectInput from "./SelectInput";
import {bindActionCreators} from "redux";
import * as inventoryActions from "../actions/inventoryActions";

class InventorySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: this.props.inventory.filter(item => item.type === props.defaultType),
    };
  }

  changeType = e => {
    const {target: {value}} = e;
    this.setState({
      inventory: this.props.inventory.filter(item => item.type === value),
    });
  };

  render() {
    const {types} = this.props;
    return (
      <div>
        <label htmlFor="types">Type</label>
        <SelectInput items={types} optionValue="type" optionLabel="type" onChange={this.changeType} id="types" />
        <label htmlFor={this.props.id}>Matos</label>
        <SelectInput items={this.state.inventory} optionValue="id" optionLabel="label" {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({inventoryState}) => {
  return {
    types: [...new Set(inventoryState.map(item => item.type))].map(type => ({
      type,
    })),
    inventory: inventoryState,
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(inventoryActions, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(InventorySelect);

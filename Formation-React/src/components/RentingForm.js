import React, {Component} from "react";
import ClientSelect from "./ClientSelect";
import InventorySelect from "./InventorySelect";
import DateInput from "./DateInput";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as rentingActions from "../actions/rentingActions";

class RentingForm extends Component {
  state = {
    clientId: "",
    inventoryId: "",
    start: "",
    end: "",
  };

  enabledAdd = () => {
    return (
      this.state.clientId !== "" && this.state.inventoryId !== "" && this.state.start !== "" && this.state.end !== ""
    );
  };

  onChange = e => {
    const {target: {value, id}} = e;
    this.setState({
      [id]: value,
    });
  };

  onChangeSelect = e => {
    const {target: {value, id}} = e;
    this.setState({
      [id]: Number.parseInt(value, 10),
    });
  };

  addRenting = e => {
    e.preventDefault();
    this.props.actions.addRenting(this.state);
  };

  render() {
    return (
      <form>
        <ClientSelect id="clientId" onChange={this.onChangeSelect} value={this.state.clientId} />
        <InventorySelect id="inventoryId" onChange={this.onChangeSelect} value={this.state.inventoryId} />
        <div>
          <label htmlFor="start">Start Date</label>
          <DateInput id="start" onChange={this.onChange} />
        </div>
        {this.state.start && (
          <div>
            <label htmlFor="end">End Date</label>
            <DateInput id="end" onChange={this.onChange} min={this.state.start} />
          </div>
        )}
        <button onClick={this.addRenting} disabled={this.enabledAdd() ? "" : "disabled"}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({rentingState}) => {
  return {rentings: rentingState};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(rentingActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RentingForm);

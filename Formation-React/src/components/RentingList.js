import React, {Component} from "react";
import RentingItem from "./RentingItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as rentingActions from "../actions/rentingActions";

class RentingList extends Component {
  onDelete = id => {
    this.props.actions.deleteRenting(id);
  };

  loadRentings = () => {
    this.props.actions.loadRentings();
  };

  render() {
    return (
      <div>
        <button onClick={this.loadRentings}>Load datas</button>
        <table border="1" style={{width: "100%"}}>
          <thead>
            <tr>
              <th>ClientName</th>
              <th>Matos</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.rentings.map(renting => (
              <RentingItem key={renting.id} data={renting} onDelete={() => this.onDelete(renting.id)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RentingList.propTypes = {
  rentings: PropTypes.array.isRequired,
};

const mapStateToProps = ({clientState, inventoryState, rentingState}) => {
  const clients = [];
  clientState.forEach(client => {
    clients[client.id] = client;
  });

  const inventory = [];
  inventoryState.forEach(item => {
    inventory[item.id] = item;
  });

  return {
    rentings: rentingState.map(renting => ({
      ...renting,
      clientName: clients[renting.clientId].name,
      inventoryName: inventory[renting.inventoryId].label,
    })),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(rentingActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RentingList);

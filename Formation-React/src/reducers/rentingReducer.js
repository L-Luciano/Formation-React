import {ADD_RENTING, DELETE_RENTING, LOAD_RENTING} from "../actions/rentingActions";

const rentingReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD_RENTING:
      const renting = action.payload.renting;
      return [...previousState, Object.assign({}, renting)];
    case DELETE_RENTING:
      const id = action.payload.rentingId;
      const state = previousState.filter(item => {
        return item.id !== id;
      });
      return state;
    case LOAD_RENTING:
      const rentings = action.payload.rentings;
      return rentings;
    default:
      return previousState;
  }
};

export default rentingReducer;

import {INCREMENT, DECREMENT, RESET} from "../actions/counterAction";

const initialState = {
  currentCounter: 0,
};

const counterReducer = (previousState = initialState, action) => {
  const {type, payload} = action;
  const {currentCounter} = previousState;

  switch (type) {
    case INCREMENT:
      return {currentCounter: currentCounter + payload.changeNumber};
    case DECREMENT:
      return {currentCounter: currentCounter - payload.changeNumber};
    case RESET:
      return {currentCounter: payload.changeNumber};
    default:
      return previousState;
  }
};

export default counterReducer;

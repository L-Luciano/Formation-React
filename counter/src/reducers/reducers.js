import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  counterState: counterReducer,
});

export default reducers;

import {createStore} from "redux";
import reducers from "./reducers/reducers";

const initialStore = {
  counterState: {
    currentCounter: 6,
  },
};
let store = createStore(reducers, initialStore);

export default store;

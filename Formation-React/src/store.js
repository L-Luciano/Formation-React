import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/reducers";
import clients from "./datas/clients.json";
import inventory from "./datas/inventory.json";
import rentings from "./datas/rentings.json";
import thunk from "redux-thunk";

const initialStore = {
  clientState: clients,
  inventoryState: inventory,
  // rentingState: rentings,
};

let store = createStore(reducers, initialStore, applyMiddleware(thunk));
export default store;

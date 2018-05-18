export const CREATE_INVENTORY = "CREATE_INVENTORY";
export const DELETE_INVENTORY = "DELETE_INVENTORY";
export const UPDATE_INVENTORY = "UPDATE_INVENTORY";
export const GET_INVENTORY = "GET_INVENTORY";
export const GET_INVENTORY_BY_TYPE = "GET_INVENTORY_BY_TYPE";
export const GET_INVENTORY_TYPE = "GET_INVENTORY_TYPE";

const getInventoryByType = type => ({
  type: GET_INVENTORY_BY_TYPE,
  payload: {
    type,
  },
});

const getInventoryTypes = () => ({
  type: GET_INVENTORY_TYPE,
});

export {getInventoryByType, getInventoryTypes};

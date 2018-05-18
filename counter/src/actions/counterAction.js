export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function incrementCounter() {
  return {
    type: INCREMENT,
    payload: {
      changeNumber: 1,
    },
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT,
    payload: {
      changeNumber: 1,
    },
  };
}

export function resetCounter() {
  return {
    type: RESET,
    payload: {
      changeNumber: 0,
    },
  };
}

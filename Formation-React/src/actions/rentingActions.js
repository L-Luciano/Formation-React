export const ADD_RENTING = "CREATE_RENTING";
export const DELETE_RENTING = "DELETE_RENTING";
export const UPDATE_RENTING = "UPDATE_RENTING";
export const LOAD_RENTING = "LOAD_RENTING";
export const GET_RENTING = "GET_RENTING";

export const addRenting = renting => {
  return (dispatch, getState) => {
    const {rentingState} = getState();

    const sameRenting = rentingState.find(
      item => item.inventoryId === renting.inventoryId && !(renting.start >= item.end || renting.end <= item.start),
    );

    if (sameRenting) {
      window.alert("Déjà pris");
      return;
    }

    renting.id = Date.now();
    dispatch({
      type: ADD_RENTING,
      payload: {renting},
    });
  };
};

export const deleteRenting = rentingId => {
  return {
    type: DELETE_RENTING,
    payload: {rentingId},
  };
};

export const loadRentings = () => {
  return (dispatch, getState) => {
    const onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          const rentings = JSON.parse(this.responseText);
          dispatch({
            type: LOAD_RENTING,
            payload: {rentings},
          });
        }
      }
    };

    const request = new XMLHttpRequest();
    request.onreadystatechange = onreadystatechange;
    request.open("GET", "http://localhost:5000/datas/rentings.json", true);
    request.send(null);

    // fetch("http://localhost:5000/datas/rentings.json")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(rentings => {
    //     dispatch({
    //       type: LOAD_RENTING,
    //       payload: {rentings},
    //     });
    //   });
  };
};

const initialState = {
  totalNumOfCakesBought: 0,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === "BUY_CAKE") {
    return {
      ...state,
      totalNumOfCakesBought: state.totalNumOfCakesBought + 1,
    };
  } else {
    return state;
  }
};

export default cakeReducer;

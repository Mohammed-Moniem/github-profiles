const INIT_STATE = {
  user: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_PROFILE_LOADED":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "USER_PROFILE_LOADING_FAILED":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;

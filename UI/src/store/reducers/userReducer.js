const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CURRENT_USER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_CURRENT_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

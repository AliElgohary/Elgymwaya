const initialState = {
  loading: false,
  reservations: [],
  error: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESERVATIONS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_RESERVATIONS_SUCCESS":
      return { ...state, loading: false, reservations: action.payload };
    case "FETCH_RESERVATIONS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "MAKE_RESERVATION_SUCCESS":
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
};
export default reservationsReducer;

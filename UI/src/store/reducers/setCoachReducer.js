import {
  SET_COACH_FAILURE,
  SET_COACH_REQUEST,
  SET_COACH_SUCCESS,
} from "../action/setCoachActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COACH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case SET_COACH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case SET_COACH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;

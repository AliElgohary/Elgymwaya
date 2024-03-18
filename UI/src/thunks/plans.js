import { api } from "./../api/http";
import { GetAllPlansAction } from "./../store/action/planActions";

export const getAllPlans = () => async (dispatch, getState) => {
  const response = await api.get("/plans");
  const plans = response.data.plans;
  dispatch({
    type: GetAllPlansAction.type,
    payload: plans,
  });
};

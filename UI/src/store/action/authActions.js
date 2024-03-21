export const loginInit = () => ({
  type: "LOGIN_INIT",
})

export const loginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
export const logout = () => ({
  type: "LOGOUT",
});

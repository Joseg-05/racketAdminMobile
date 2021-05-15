import { login, logout } from "../../api/post";

export const loginUser = (email, password) => async (dispatch, getState) => {
    const response = await login(email, password);

    dispatch({
        type: "LOGIN_USER",
        payload: response,
    });
};

export const logoutUser = (user) => async (dispatch, getState) => {
    await SecureStore.deleteItemAsync("user");
    await logout(user.token);
    dispatch({ type: "LOGOUT_USER" });
};

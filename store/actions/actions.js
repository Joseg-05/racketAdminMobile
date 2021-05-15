import { login, logout } from "../../api/post";
import * as SecureStore from "expo-secure-store";

export const loginUser = (email, password) => async (dispatch, getState) => {
    const response = await login(email, password);
    await SecureStore.setItemAsync("user", JSON.stringify(response));
    dispatch({
        type: "LOGIN_USER",
        payload: response,
    });
};

export const logoutUser = (user) => async (dispatch, getState) => {
    await logout(user.token);
    dispatch({ type: "LOGOUT_USER" });
};

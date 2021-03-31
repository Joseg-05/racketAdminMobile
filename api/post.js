import axios from "axios";
import { BASE_URL } from "../config/index";

export const login = async (email, password) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
        email,
        password,
    });
    const user = {
        ...data,
    };

    return user;
};

export const logout = async () => {
    await axios.post(`${BASE_URL}/users/logout`);
};

export const register = async (email, password) => {
    try {
        await axios.post(`${BASE_URL}/users`, {
            email,
            password,
        });
    } catch (error) {
        console.log(error);
    }
};

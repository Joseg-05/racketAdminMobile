import axios from "axios";
import { BASE_URL } from "../config/index";

//Login User
export const login = async (email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/users/login`, {
            email,
            password,
        });

        const user = {
            token: data.token,
            ...data.user,
        };

        return { user: { ...user } };
    } catch (e) {
        console.log(e);
    }
};

//Logout User
export const logout = async (token) => {
    try {
        await axios.post(`${BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (e) {
        console.log(e);
    }
};

//Create a User
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

//Create Customer
export const customersPost = async (user, data) => {
    try {
        const result = await axios.post(
            `${BASE_URL}/customers`,

            {
                ...data,
            },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Create order
export const orderPost = async (user, data) => {
    try {
        const result = await axios.post(
            `${BASE_URL}/orders/609ac88529e90800157ecdda`,
            { ...data },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

//create stock
export const stockPost = async (user, data) => {
    try {
        const result = await axios.post(
            `${BASE_URL}/stock`,
            { ...data },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

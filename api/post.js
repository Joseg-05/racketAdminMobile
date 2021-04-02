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
            ...data,
        };

        return user;
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
export const createCustomers = async (user) => {
    try {
        const result = await axios.post(
            `${BASE_URL}/customers`,

            {
                name: `customer test with orders for user ${user.user.email}`,
                phoneNumber: "805-268-2192",
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

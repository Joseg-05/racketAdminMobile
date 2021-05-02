import axios from "axios";
import { BASE_URL } from "../config/index";

export const customersGet = async (user) => {
    const results = await axios.get(`${BASE_URL}/customers`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
    return results;
};

export const ordersGet = async (user) => {
    try {
        const result = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const stockGet = async (user) => {
    try {
        const result = await axios.get(`${BASE_URL}/stock`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

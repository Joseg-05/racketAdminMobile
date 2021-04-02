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

import axios from "axios";
import { BASE_URL } from "../config/index";

export const ordersPut = async (user, id, data) => {
    const results = await axios.put(
        `${BASE_URL}/orders/${id}`,
        { ...data },
        {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
    return results;
};

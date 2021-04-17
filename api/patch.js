import axios from "axios";
import { BASE_URL } from "../config/index";
export const ordersPatch = async (user, id) => {
    const results = await axios.patch(
        `${BASE_URL}/orders/${id}`,
        { racketBrand: "test with mobile application" },
        {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
    return results;
};

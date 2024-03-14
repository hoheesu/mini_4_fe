import axios from "axios";
import { setCookie } from "../cookies/cookies";

export const login = async (id, pw, navigate) => {
    try {
        const result = await axios.post("/log-in", { email: id , password: pw });
        console.log(result);
        const { accessToken, refreshToken } = result;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setCookie("accessToken", "Bearer " + accessToken);
        navigate("/posts");
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
        return error.response;
    }
};
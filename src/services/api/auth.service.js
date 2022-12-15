import { http } from "../http";
import { loginUrl, registerUrl, getUserUrl } from "../url";

export const postLoginService = async (loginPayload) => {
    const { data } = await http.post(loginUrl, loginPayload);
    return data;
}

export const postRegisterService = async (registerPayload) => {
    const { data } = await http.post(registerUrl, registerPayload);
    return data;
}
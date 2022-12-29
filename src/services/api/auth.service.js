import { http } from "../http";
import { generateUrl, loginUrl, registerUrl, usersUrl, userWithAuthUrl } from "../url";

export const postLoginService = async (loginPayload) => {
    const { data } = await http.post(loginUrl, loginPayload);
    return data;
}

export const postRegisterService = async (registerPayload) => {
    const { data } = await http.post(registerUrl, registerPayload);
    return data;
}

export const getUserService = async (key, value) => {

    const params = [
        {key: key, value: value},
        {key: '_embed', value: 'posts'},
    ];

    const url = generateUrl(usersUrl, params);

    const { data } = await http.get(url);
    return data;
}

export const patchTokenService = async (id, user) => {
    const url = `${usersUrl}/${id}`;
    const { data } = await http.patch(url, user);
    return data;
}

export const postWithAuthService = async (userId, service, dataPayload) => {
    const url = `${userWithAuthUrl}/${userId}/${service}`;
    const { data } = await http.post(url, dataPayload);
    return { data };
}
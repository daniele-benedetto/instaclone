import { http } from "../http";
import { generateUrl, usersUrl, userWithAuthUrl } from "../url";

export const getUserFollows = async (id) => {
    const params = [
        {key: '_expand', value: 'follow'},
    ];

    const url = `${usersUrl}/${id}/followers`;
    const urlComplete = generateUrl(url, params);

    const { data } = await http.get(urlComplete);
    return data;
};

export const postFollowerService = async (userId, dataToPayload) => {

    const url = `${userWithAuthUrl}/${userId}/followers`;

    const { data } = await http.post(url, dataToPayload);

    return { data };
};

export const postFollowService = async (userId, dataToPayload) => {

    const url = `followers/${userId}/follows`;

    const { data } = await http.post(url, dataToPayload);

    return { data };
};


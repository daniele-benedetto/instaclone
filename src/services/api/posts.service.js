import { http } from "../http";
import { postsUrl, likesUrl, generateUrl, usersUrl } from "../url";

export const getPostsService = async () => {

    const params = [
        {key: '_expand', value: 'user'},
        {key: '_embed', value: 'likes'},
        {key: '_embed', value: 'comments'},
        {key: '_sort', value: 'id'},
        {key: '_order', value: 'desc'},
    ];

    const url = generateUrl(postsUrl, params);

    const { data } = await http.get(url);
    return data;
}

export const getPostElementService = async (id, service) => {
    const url = `${postsUrl}/${id}/${service}`;

    const params = [
        {key: '_expand', value: 'user'},
    ];

    const urlWithParams = generateUrl(url, params);

    const { data } = await http.get(urlWithParams);
    return data;
}

export const getUserElementService = async (id, service) => {
    const url = `${usersUrl}/${id}/${service}`;

    const { data } = await http.get(url);
    return data;
}

export const patchPostService = async (id, user) => {
    const url = `${postsUrl}/${id}`;
    const { data } = await http.patch(url, user);
    return data;
}

export const removeLikeService = async (id) => {
    const url = `${likesUrl}/${id}`;
    const { data } = await http.delete(url);
    return data;
}
import { http } from "../http";
import { postsUrlExpand, postsUrl, likesUrl } from "../url";


export const getPostService = async () => {
    const { data } = await http.get(postsUrlExpand);
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
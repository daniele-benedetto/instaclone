import { http } from "../http";
import { postsUrlExpandUser, postsUrl } from "../url";


export const getPostService = async () => {
    const { data } = await http.get(postsUrlExpandUser);
    return data;
}

export const patchPostService = async (id, user) => {
    const url = `${postsUrl}/${id}`;
    const { data } = await http.patch(url, user);
    return data;
}
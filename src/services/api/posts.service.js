import { http } from "../http";
import { postsUrl } from "../url";

export const postRegisterPost = async (postPayload) => {
    const { data } = await http.post(postsUrl, postPayload);
    return data;
}

export const getPost = async () => {
    const { data } = await http.get(postsUrl);
    return data;
}
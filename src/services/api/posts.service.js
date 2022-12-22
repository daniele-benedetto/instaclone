import { http } from "../http";
import { postsUrl } from "../url";


export const getPost = async () => {
    const { data } = await http.get(postsUrl);
    return data;
}
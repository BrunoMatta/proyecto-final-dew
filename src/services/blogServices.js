import { BASE_URL } from "../environments/environment";

export const getPosts = async () => {
    const res = await fetch(`${BASE_URL}posts`);
    if (!res.ok) throw new Error('Error al obtener posts');
    return await res.json();
  };


  export const getPostsById = async (id) => {
    const res = await fetch(`${BASE_URL}posts/${id}`);
    if (!res.ok) throw new Error('Error al obtener post');
    return await res.json();
  };
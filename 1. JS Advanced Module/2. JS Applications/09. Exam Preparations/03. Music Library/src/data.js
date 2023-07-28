import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllItems() {
    return await api.get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getDetails(id) {
    return await api.get(`/data/albums/${id}`);
}

export async function likeAlbum(albumId) {
    return await api.post(`/data/likes`, {albumId});
}

export async function getTotalLikes(albumId) {
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function isLiked(albumId, userId) {
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
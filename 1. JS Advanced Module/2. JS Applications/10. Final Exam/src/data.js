import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllData() {
    return await api.get('/data/facts?sortBy=_createdOn%20desc');
}

export async function likeFact(factId) {
    return await api.post('/data/likes', {factId});
}

export async function likeCount(factId) {
    return await api.get(`/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);
}

export async function isLiked(factId, userId) {
    return await api.get(`/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
} // returns 0 or 1
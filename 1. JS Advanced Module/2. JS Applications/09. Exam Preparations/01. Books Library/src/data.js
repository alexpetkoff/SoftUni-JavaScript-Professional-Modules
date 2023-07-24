import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export function getAllBooks() {
    return api.get(`/data/books?sortBy=_createdOn%20desc`);
}

export function createBook(data) {
    return api.post('/data/books', data)
}

export function getUserBooks(id) {
    return api.get(`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}
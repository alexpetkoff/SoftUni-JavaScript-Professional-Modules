import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllShoes() {
    return api.get('/data/shoes?sortBy=_createdOn%20desc');
}
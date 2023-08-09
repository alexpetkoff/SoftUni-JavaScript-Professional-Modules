import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/motorcycles?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/motorcycles', data);
}

function getDataById(id) {
    return api.get('/data/motorcycles/' + id);
}

function updateData(id, data) {
    return api.update('/data/motorcycles/' + id, data)
}

function deleteData(id) {
    return api.del('/data/motorcycles/' + id);
}

function getSearchItem(query) {
    return api.get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
}


export {login, register, logout, createData, getAllData, getDataById, updateData, deleteData, getSearchItem}
import {getUserData, setUserData, removeUserData} from '../util.js';

const host = 'http://localhost:3030';
async function request(endpoint, options) {
    try {
        const response = await fetch(host + endpoint, options)
        if (response.ok != true) {
            if (response.status == 403) {
                removeUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            return await response.json();
        }catch (err) {
            return response;
        }
        
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

function createOptions(method, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }
    return options;
}

function get(endpoint){
    return request(endpoint, createOptions('get')); 
}

function post(endpoint, data){
    return request(endpoint, createOptions('post', data)); 
}

function update(endpoint, data){
    return request(endpoint, createOptions('put', data)); 
}

function del(endpoint){
    return request(endpoint, createOptions('delete')); 
}

async function login(email, password) {
    const result = await request('/users/login', createOptions('post', {email, password}));
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
}

async function register(email, password) {
    const result = await request('/users/register', createOptions('post', {email, password}));
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
}

function logout() {
    request('/users/logout', createOptions('get'))
    removeUserData();
}

export {get, post, update, del, login, register, logout};
export function getUserData() { //get user info from sessionStorage
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) { //initialize userData in sessionStorage
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() { //delete userData from sessionStorage
    sessionStorage.removeItem('userData');
}
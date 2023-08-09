function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

function removeUserData() {
    localStorage.removeItem('userData');
}

export {getUserData, setUserData, removeUserData};
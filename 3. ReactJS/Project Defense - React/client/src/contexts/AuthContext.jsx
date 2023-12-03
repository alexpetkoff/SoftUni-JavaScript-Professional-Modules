import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userLogin, userRegister, userLogout } from '../services/userServices';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        const result = await userRegister(values);
        setAuth(result);
        localStorage.setItem('token', result.accessToken);
        navigate('/')
    }

    const loginSubmitHandler = async (values) => {
        const result = await userLogin(values);
        setAuth(result);
        localStorage.setItem('token', result.accessToken);
        navigate('/');
    }

    const logoutHandler = async () => {
        await userLogout(auth.accessToken);
        localStorage.removeItem('token');
        setAuth({});
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ registerSubmitHandler, loginSubmitHandler, auth, setAuth, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
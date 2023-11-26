import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userLogin } from '../services/userServices';
import { userLogout } from '../services/userServices';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        const result = await userLogin(values);
        setAuth(result);
        navigate('/');
    }

    const logoutHandler = async () => {
        await userLogout(auth.accessToken);
        setAuth({});
        navigate('/');
    }
    return (
        <AuthContext.Provider value={{ loginSubmitHandler, auth, setAuth, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister, userLogin, userLogout } from "../services/userServices";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setAuth(JSON.parse(user));
        }
    }, []);

    const loginHandler = async (values) => {
        const response = await userLogin(values);
        setAuth(response);
        localStorage.setItem("user", JSON.stringify(response));

        navigate("/");
    };

    const registerHandler = async (values) => {
        const response = await userRegister(values);
        setAuth(response);
        localStorage.setItem("user", JSON.stringify(response));

        navigate("/");
    };

    const logoutHandler = async () => {
        const response = await userLogout(auth.accessToken);
        setAuth({});
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                loginHandler,
                registerHandler,
                logoutHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userLogin, userRegister, userLogout } from "../services/userServices";

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

  const registerSubmitHandler = async (values) => {
    const result = await userRegister(values);

    setAuth(result);
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  const loginSubmitHandler = async (values) => {
    const result = await userLogin(values);

    setAuth(result);
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  const logoutHandler = async () => {
    await userLogout(auth.accessToken);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth({});
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        registerSubmitHandler,
        loginSubmitHandler,
        auth,
        setAuth,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

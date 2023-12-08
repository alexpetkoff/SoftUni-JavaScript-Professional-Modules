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
    try {
      const result = await userRegister(values);

      if (!result.ok) {
        throw new Error(result.message);
      }

      setAuth(result);
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const loginSubmitHandler = async (values) => {
    try {
      const result = await userLogin(values);

      if (!result.ok) {
        throw new Error(result.message);
      }

      setAuth(result);
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
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

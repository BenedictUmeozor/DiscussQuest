import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axiosClient";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  _setToken: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const _setToken = (token) => {
    setToken(token);

    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    localStorage.setItem("token", JSON.stringify(token));
  };

  const getUser = async () => {
    try {
      const { data } = await axiosClient.get("/user");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, token, _setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

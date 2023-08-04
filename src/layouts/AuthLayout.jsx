import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import { useEffect } from "react";
import axiosClient from "../axiosClient";

export default function AuthLayout() {
  const { token, setUser } = useAuthContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

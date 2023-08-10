import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import { useEffect } from "react";
import axiosClient from "../axiosClient";

export default function AuthLayout() {
  const { token, setUser } = useAuthContext();

  if (!token) {
    return <Navigate to={"/guest"} />;
  }

  return (
    <main className="main">
      <div>
        <Header />
      </div>
      <section>
        <Outlet />
      </section>
      <footer className="py-4">
        <div className="center">
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()} Benedict
          </p>
        </div>
      </footer>
    </main>
  );
}

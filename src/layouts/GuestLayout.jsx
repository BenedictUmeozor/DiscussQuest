import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

import Header from "../components/Header";

export default function GuestLayout() {
  const { token } = useAuthContext();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="main">
      <div>
        <Header />
      </div>
      <section>
        <Outlet />
      </section>
      <footer className="py-4 main-footer">
        <div className="center">
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()} Benedict
          </p>
        </div>
      </footer>
    </main>
  );
}

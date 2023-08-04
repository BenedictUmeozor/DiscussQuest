import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

import Header from "../components/Header";

export default function GuestLayout() {
  const { token } = useAuthContext();

  if (token) {
    return <Navigate to={"/"} />;
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

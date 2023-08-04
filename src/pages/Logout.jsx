import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";

export default function Logout() {
  const { _setToken, setUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    axiosClient
      .post("/logout")
      .then(() => {
        localStorage.removeItem("token");
        setUser({});
        _setToken(null);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section>
      <div className="my-10 w-11/12 max-w-lg mx-auto bg-white rounded-lg shadow p-4">
        <p className="mb-4">
          You are attempting to logout of{" "}
          <span className="font-bold text-red-500">DiscussQuest</span>
        </p>
        <p className="mb-6">Are you sure you want to logout?</p>
        <div className="flex items-center justify-center gap-10">
          <Link
            className="px-4 py-2 rounded border-2 transition-all duration-300 ease-in-out hover:border-red-500 hover:text-red-500"
            to="/"
          >
            Cancel
          </Link>
          <button
            disabled={loading}
            className="px-4 py-2 rounded border-2 text-white bg-red-500  border-transparent transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-transparent hover:text-red-500"
            onClick={logout}
          >
            {loading ? "Please wait..." : "Logout"}
          </button>
        </div>
      </div>
    </section>
  );
}

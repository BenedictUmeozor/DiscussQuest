import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import axiosClient from "../axiosClient";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setUser, _setToken } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(null);
    setLoading(true);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const { data } = await axiosClient.post("/login", payload);

      setUser(data.user);

      if (data.token) {
        _setToken(data.token);
      }

      setLoading(false);
    } catch (error) {
      const { response } = error;
      if (response && response.status === 422) {
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          setErrors(response.data);
        }
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="my-10 w-11/12 max-w-lg mx-auto bg-white rounded-lg shadow p-4">
        <h2 className="text-center font-bold text-2xl text-gray-900 mb-3">
          Login
        </h2>
        <p className="text-center text-xs font-semibold text-red-500 mb-4">
          Login to your account
        </p>
        <form className="form" onSubmit={handleSubmit}>
        {errors && errors["message"] && (
              <p className="text-xs text-red-500 mb-1 text-center">
                {errors["message"]}
              </p>
            )}
          <div className="mb-4">
            <label>Email:</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="example@gmail.com"
            />
            {errors && errors["email"] && (
              <p className="text-xs text-red-500 mt-1">{errors["email"][0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label>Password:</label>
            <input ref={passwordRef} type="password" placeholder="********" />
            {errors && errors["password"] && (
              <p className="text-xs text-red-500 mt-1">
                {errors["password"][0]}
              </p>
            )}
          </div>

          <div className="mt-6">
            <button
              disabled={loading}
              className="transition-all duration-150 ease-in-out hover:bg-red-700"
              onClick={handleSubmit}
            >
              {loading ? "Please wait..." : "Login"}
            </button>
            {errors && (
              <p className="text-xs mt-2 text-center text-red-500">
                Check errors and try again
              </p>
            )}
          </div>
          <p className="text mt-4">
            Don't have an account? <Link to="/guest/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

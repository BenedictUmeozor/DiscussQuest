import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useAuthContext } from "../contexts/AuthContext";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setUser, _setToken } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(null);
    setLoading(true);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    };

    try {
      const { data } = await axiosClient.post("/signup", payload);

      setUser(data.user);

      if (data.token) {
        _setToken(data.token);
      }

      setLoading(false);
    } catch (error) {
      const { response } = error;
      if (response && response.status === 422) {
        setErrors(response.data.errors);
      } else {
        alert("We could not log you in at this time")
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="my-10 w-11/12 max-w-lg mx-auto bg-white rounded-lg shadow p-4">
        <h2 className="text-center font-bold text-2xl text-gray-900 mb-3">
          Signup
        </h2>
        <p className="text-center text-xs font-semibold text-red-500 mb-4">
          Create an account
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Name:</label>
            <input ref={nameRef} type="text" placeholder="John Doe" />
            {errors && errors["name"] && (
              <p className="text-xs text-red-500 mt-1">{errors["name"][0]}</p>
            )}
          </div>
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
            <label>Gender:</label>
            <select ref={genderRef}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {errors && errors["gender"] && (
              <p className="text-xs text-red-500 mt-1">{errors["gender"][0]}</p>
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
          <div className="mb-4">
            <label>Confirm Password:</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="********"
            />
          </div>
          <div className="mt-6">
            <button
              disabled={loading}
              className="transition-all duration-150 ease-in-out hover:bg-red-700"
            >
              {loading ? "Please wait..." : "Signup"}
            </button>
            {errors && <p className="text-xs mt-2 text-center text-red-500">Check errors and try again</p>}
          </div>
          <p className="text mt-4">
            Already have an account? <Link to="/guest/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

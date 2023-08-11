import { useRef, useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";

const EditForm = ({ user }) => {
  const nameRef = useRef();
  const bioRef = useRef();
  const genderRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(null);

    const payload = {
      name: nameRef.current.value,
      bio: bioRef.current.value,
      gender: genderRef.current.value,
    };

    try {
      const { data } = await axiosClient.patch("/user", payload);
      setIsLoading(false);
      return navigate("/profile");
    } catch (error) {
      const { response } = error;
      if (response && response.status === 422) {
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          setErrors(response.data);
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold mt-5">Edit Profile</h2>
      <form
        className="form w-11/12 max-w-md mx-auto mt-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label>Name</label>
          <input ref={nameRef} type="text" defaultValue={user.name} />
          {errors && errors["name"] && (
            <p className="text-xs text-red-500 mt-1">{errors["name"][0]}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Bio</label>
          <textarea
            ref={bioRef}
            rows="6"
            className=""
            defaultValue={user.bio ? user.bio : "Hi, I'm on DiscussQuest"}
          ></textarea>
          {errors && errors["bio"] && (
            <p className="text-xs text-red-500 mt-1">{errors["bio"][0]}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="opacity-70"
            value={user.email}
            disabled
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select defaultValue={user.gender} ref={genderRef}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors && errors["gender"] && (
            <p className="text-xs text-red-500 mt-1">{errors["gender"][0]}</p>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="transition-all duration-200 ease-out hover:bg-red-700 disabled:opacity-70"
        >
          {isLoading ? "Please wait..." : "Update Profile"}
        </button>
        {errors && (
          <p className="text-xs mt-2 text-center text-red-500">
            Check errors and try again
          </p>
        )}
      </form>
    </div>
  );
};

export default EditForm;

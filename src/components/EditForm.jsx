import { useRef } from "react";

const EditForm = ({ user }) => {
  const nameRef = useRef();
  const bioRef = useRef();
  const genderRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      bio: bioRef.current.value,
      gender: genderRef.current.value,
    };
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
        </div>
        <div className="mb-3">
          <label>Bio</label>
          <textarea
            ref={bioRef}
            rows="6"
            className=""
            defaultValue={user.bio ? user.bio : "Hi, I'm on DiscussQuest"}
          ></textarea>
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
        </div>
        <button
          type="submit"
          className="transition-all duration-200 ease-out hover:bg-red-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditForm;

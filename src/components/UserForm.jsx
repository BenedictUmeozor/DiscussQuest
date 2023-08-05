const UserForm = ({ user }) => {
  return (
    <div className="question-overlay">
      <div className="p-4 rounded bg-white mt-7 w-11/12 max-w-md mx-auto">
        <form className="form">
          <div className="mb-3">
            <label>Name</label>
            <input type="text" defaultValue={user.name} />
          </div>
          <div>
            <label>Bio</label>
            <textarea
              className="block w-full my-2 bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-500 rounded appearance-none"
              rows="5"
              defaultValue={user.bio ? user.bio : "Hey I'm on DiscussQuest!"}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="opacity-80"
            />
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <select defaultValue={user.gender}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

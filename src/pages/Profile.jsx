import { useEffect, useState } from "react";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import axiosClient from "../axiosClient";
import UserQuestion from "../components/UserQuestion";
import { Link } from "react-router-dom";
import { ProfileLoader } from "../components/SkeletonLoader";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    setError(false)
    try {
      const { data } = await axiosClient.get("/users");
      setUser(data.user);
      setQuestions(data.questions);
    } catch (error) {
      setError(true)
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-2">
      {!user && <ProfileLoader />}
      {user && (
        <>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl mb-4 font-bold text-gray-900">
                My Profile
              </h2>
              <div className=" rounded-full w-32 border-2 border-red-400 overflow-hidden">
                <img
                  className="w-full"
                  src={user.gender === "male" ? manImage : womanImage}
                  alt=""
                />
              </div>
              <div>
                <div className="mb-3">
                  <h5 className="text-lg font-semibold">Name</h5>
                  <p className="capitalize">{user.name}</p>
                </div>
                <div className="mb-3">
                  <h5 className="text-lg font-semibold">Bio</h5>
                  <p className="text-gray-800">
                    {user.bio ? user.bio : "You have not added a bio"}
                  </p>
                </div>
                <div className="mb-3">
                  <h5 className="text-lg font-semibold">Gender</h5>
                  <p className="capitalize">{user.gender}</p>
                </div>
                <div className="mb-3">
                  <h5 className="text-lg font-semibold">Email</h5>
                  <p>{user.email}</p>
                </div>
                <Link
                  to="/edit-profile"
                  className="py-1 px-3 text-white bg-red-500 rounded transition-all duration-200 hover:bg-red-700"
                >
                  Edit
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Questions</h2>
              <div>
                {!questions && <p className="mt-4">Loading...</p>}
                {questions && (
                  <div>
                    {questions.map((question) => (
                      <UserQuestion
                        key={question.id}
                        question={question}
                        onDelete={fetchUser}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import axiosClient from "../axiosClient";
import { useNavigate, useParams } from "react-router-dom";
import UserProfileQuestion from "../components/UserProfileQuestion";
import { useAuthContext } from "../contexts/AuthContext";

export default function UserProfile() {
  const { id } = useParams();
  const { user: loggedUser } = useAuthContext();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axiosClient.get("/profile/" + id);
      setUser(data.user);
      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedUser && id) {
      if (loggedUser.id == id) {
        return navigate('/profile');
      }
    }
    fetchUser();
  }, [loggedUser, id]);

  return (
    <div className="max-w-3xl mx-auto px-2">
      {!user && <p className="mt-4">Loading...</p>}
      {user && (
        <>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl mb-4 font-bold text-gray-900">
                Profile for {user.name}
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
                    {user.bio ? user.bio : "Hi! I'm using DiscussQuest!"}
                  </p>
                </div>
                <div className="mb-3">
                  <h5 className="text-lg font-semibold">Gender</h5>
                  <p className="capitalize">{user.gender}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Questions</h2>
              <div>
                {!questions && <p className="mt-4">Loading...</p>}
                {questions && questions.length > 0 && (
                  <div>
                    {questions.map((question) => (
                      <UserProfileQuestion
                        key={question.id}
                        question={question}
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

import { Link, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import Answer from "../components/Answer";
import { useAuthContext } from "../contexts/AuthContext";
import AnswerForm from "../components/AnswerForm";

export default function QuestionPage() {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { token } = useAuthContext();

  const { id } = useParams();

  const fetchQuestionAndAnswers = async () => {
    try {
      const { data } = await axiosClient.get("/questions/" + id);

      setQuestion(data.question);
      setAnswers(data.answers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    if (!token) {
      alert("You need to be logged in to answer this question");
    }
  };

  useEffect(() => {
    fetchQuestionAndAnswers();
  }, []);

  return (
    <div>
      <Header />
      {showForm && question && (
        <AnswerForm id={question.id} onShow={() => setShowForm(false)} />
      )}
      <div className="center my-6">
        <h2 className="text-xl font-bold">Question</h2>
        {question ? (
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                className=" w-10 rounded-full border border-red-500"
                src={question.user?.gender === "male" ? manImage : womanImage}
                alt="User"
              />
              <p className="capitalize ">{question.user.name}</p>
            </div>
            <div>
              <Link to={"/question/" + question.id}>
                <h3 className="font-semibold mb-3 text-lg">{question.title}</h3>
              </Link>
              <p>{question.body}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
        {/* answers  */}
        <div>
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-xl font-bold">Answers</h2>
            {question && (
              <button
                className="text-xs bg-red-500 text-white px-3 py-2 rounded transition-all duration-200 ease-linear hover:bg-red-700"
                onClick={() => setShowForm(true)}
              >
                Add answer
              </button>
            )}
          </div>
          {answers ? (
            answers.length > 0 ? (
              answers.map((answer) => (
                <Answer key={answer.id} answer={answer} />
              ))
            ) : (
              <p className="mt-4">No answers to this question yet.</p>
            )
          ) : (
            <p className="mt-4">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

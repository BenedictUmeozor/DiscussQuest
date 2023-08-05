import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import Answer from "../components/Answer";
import { useAuthContext } from "../contexts/AuthContext";
import AnswerForm from "../components/AnswerForm";
import lightFormat from "date-fns/lightFormat";

export default function QuestionPage() {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchQuestion = async () => {
    try {
      const { data } = await axiosClient.get("/questions/" + id);

      setQuestion(data.question);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnswers = async () => {
    try {
      const { data } = await axiosClient.get("/answers?id=" + id);
      setAnswers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!token) {
      navigate("/guest/login");
      return;
    }
    setShowForm(true);
  };

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, []);

  return (
    <div>
      <Header />
      {showForm && question && (
        <AnswerForm
          id={question.id}
          onShow={() => setShowForm(false)}
          onAnswer={() => fetchAnswers()}
        />
      )}
      <div className="max-w-3xl mx-auto px-2 my-6">
        <h2 className="text-xl font-bold text-red-500">Question</h2>
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
            <span className="text-xs inline-block text-gray-700">
              {lightFormat(new Date(question.created_at), "yyyy-MM-dd h:m a")}
            </span>
            <div>
              <h3 className="font-semibold mb-3 text-lg">{question.title}</h3>
              <p>{question.body}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
        {/* answers  */}
        <div>
          <h2 className="text-xl font-bold mt-6 text-red-500">Answers</h2>

          {question && (
            <div className="mt-4">
              <p className="text-gray-700">
                {question.answers_count}{" "}
                {question.answers_count === 1 ? "answer" : "answers"}
              </p>
            </div>
          )}
          {answers ? (
            answers.length > 0 ? (
              <div className="my-6 grid md:grid-cols-2 gap-5">
                {answers.map((answer) => (
                  <Answer key={answer.id} answer={answer} />
                ))}
              </div>
            ) : (
              <p className="mt-4">No answers to this question yet.</p>
            )
          ) : (
            <p className="mt-4">Loading...</p>
          )}
          {answers && (
            <button
              className="text-xs bg-red-500 text-white px-3 py-2 rounded transition-all duration-200 ease-linear hover:bg-red-700 mt-4"
              onClick={handleClick}
            >
              Add answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

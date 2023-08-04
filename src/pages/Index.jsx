import { useAuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import Question from "../components/Question";
import QuestionBox from "../components/QuestionBox";

export default function Index() {
  const { token } = useAuthContext();

  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    try {
      const { data } = await axiosClient.get("/questions");
      setQuestions(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const likeQuestion = async () => {

  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <section className="center">
      <div className="lg:grid lg:grid-cols-3 lg:gap-2">
        <div className="max-lg:hidden col-span-1 ">
          <div className="bg-white rounded shadow">
            <h2>User</h2>
          </div>
        </div>
        <div className="col-span-2">
          {token && <QuestionBox onHide={getQuestions} />}
          <div className="my-5">
            <h2 className="font-semibold text-xl">Recent Questions</h2>
            {questions ? (
              <div className="my-6 grid md:grid-cols-2 gap-5">
                {questions.length > 0 ? (
                  questions.map((question) => (
                    <Question key={question.id} question={question} />
                  ))
                ) : (
                  <p>No questions has been posted yet</p>
                )}
              </div>
            ) : (
              <p className="mt-4">Loading...</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

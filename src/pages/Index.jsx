import { useAuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import Question from "../components/Question";
import QuestionBox from "../components/QuestionBox";
import { IndexLoader } from "../components/SkeletonLoader";
import { Link } from "react-router-dom";
import Error from "../components/Error";

export default function Index() {
  const { token } = useAuthContext();
  const [error, setError] = useState(false);

  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    try {
      setError(false);
      const { data } = await axiosClient.get("/questions");
      setQuestions(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <section className="center">
      <div className="max-w-3xl mx-auto mt-6">
        <div>
          {token && <QuestionBox onHide={getQuestions} />}
          {!error && (
            <div className="my-5">
              <h2 className="font-semibold text-xl">Recent Questions</h2>
              {questions ? (
                <>
                  <div className="my-6 grid md:grid-cols-2 gap-5">
                    {questions.length > 0 ? (
                      questions.map((question) => (
                        <Question key={question.id} question={question} />
                      ))
                    ) : (
                      <p>No questions has been posted yet</p>
                    )}
                  </div>
                  <div className="mt-5 text-center text-red-500 hover:underline">
                    <Link to={token ? "/questions" : "/guest/questions"}>
                      See more
                    </Link>
                  </div>
                </>
              ) : (
                <IndexLoader />
              )}
            </div>
          )}
          {error && (
            <Error />
          )}
        </div>
      </div>
    </section>
  );
}

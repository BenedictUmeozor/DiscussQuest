import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import Error from "../components/Error";
import Question from "../components/Question";
import { IndexLoader } from "../components/SkeletonLoader";

export default function CategoryQuestionsPage() {
  const { id, category } = useParams();

  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState(null);

  const fetchCategory = async () => {
    setError(false);
    try {
      const { data } = await axiosClient.get("/questions/category/" + id);
      setQuestions(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-2 my-6">
        {error ? (
          <Error />
        ) : questions ? (
          <>
            <h2 className="capitalize font-semibold text-xl">{category}</h2>
            <div className="my-6 grid md:grid-cols-2 gap-5">
              {questions.length > 0 ? (
                questions.map((question) => (
                  <Question key={question.id} question={question} />
                ))
              ) : (
                <div>There are no questions for this category</div>
              )}
            </div>
          </>
        ) : (
          <IndexLoader />
        )}
      </div>
    </div>
  );
}

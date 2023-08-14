import React, { useEffect, useState } from "react";
import { IndexLoader } from "../components/SkeletonLoader";
import axiosClient from "../axiosClient";
import Question from "../components/Question";
import Error from "../components/Error";

const Questions = () => {
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(false);

  const getQuestions = async () => {
    try {
      setError(false);
      const { data } = await axiosClient.get("/questions/all");
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
          {!error && (
            <div className="my-5">
              <h2 className="font-semibold text-xl">All Questions</h2>
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
                <IndexLoader />
              )}
            </div>
          )}
          {error && <Error />}
        </div>
      </div>
    </section>
  );
};

export default Questions;

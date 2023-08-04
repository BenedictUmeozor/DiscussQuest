import { XMarkIcon } from "@heroicons/react/24/solid";
import { categories } from "../data";
import { useRef, useState } from "react";
import axiosClient from "../axiosClient";

export default function QuestionModal({ onShow, onHide }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const categoryRef = useRef();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(null);
    setLoading(true);

    const payload = {
      category_id: categoryRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    try {
      const { data } = await axiosClient.post("/questions", payload);
      console.log(data);
      setLoading(false);
      onHide();
      onShow();
    } catch (error) {
      const response = error.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors);
      }
      setLoading(false);
    }
  };

  return (
    <div className="question-overlay">
      <div className="w-11/12 max-w-md mx-auto my-10 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-2 p-4 border-b border-gray-300">
          <h2 className="font-bold text-lg">Ask a Question</h2>
          <XMarkIcon
            width={28}
            color="#f56565"
            className="cursor-pointer"
            onClick={onShow}
          />
        </div>
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="my-2">
            <input
              ref={titleRef}
              className="block w-full bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-300 rounded appearance-none"
              type="text"
              placeholder="title"
            />
            {errors && errors["title"] && (
              <p className="mt-1 text-xs text-red-500">{errors["title"][0]}</p>
            )}
          </div>
          <div className="my-2">
            <textarea
              ref={bodyRef}
              rows={8}
              className="block w-full my-2 bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-300 rounded appearance-none"
              placeholder="question body"
            ></textarea>
            {errors && errors["body"] && (
              <p className="mt-1 text-xs text-red-500">{errors["body"][0]}</p>
            )}
          </div>
          <div>
            <label className="text-base text-gray-700">Select category:</label>
            <select
              ref={categoryRef}
              className="block w-full my-2 bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-300 rounded appearance-none"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            {errors && errors["category_id"] && (
              <p className="mt-1 text-xs text-red-500">
                {errors["category_id"][0]}
              </p>
            )}
          </div>
          <button
            disabled={loading}
            className="mt-4 bg-red-400 border-2 border-transparent rounded text-white px-4 py-2 transition-all duration-200 ease-in-out hover:bg-red-700 "
          >
            {loading ? "Please wait..." : "Ask question"}
          </button>
          {errors && (
            <p className="mt-2 text-xs text-center text-red-500">
              check errors and try again
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import axiosClient from "../axiosClient";

const EditAnswerForm = ({ id, onShow, text }) => {
  const textareaRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    const payload = {
      question_id: id,
      body: textareaRef.current.value,
    };

    try {
      const { data } = await axiosClient.patch("/answers/" + id, payload);
      setLoading(false);
      onShow();
      window.location.reload();
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
      <div className="p-4 rounded bg-white mt-7 w-11/12 max-w-md mx-auto">
        <div>
          <XMarkIcon
            width={28}
            color="#f56565"
            className=" ml-auto cursor-pointer"
            onClick={onShow}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={id} />
          <textarea
            ref={textareaRef}
            placeholder="Edit this answer"
            className="block w-full my-2 bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-300 rounded appearance-none"
            rows="8"
            defaultValue={text}
          ></textarea>
          {errors && errors["body"] && (
            <p className="text-xs text-red-500">{errors["body"][0]}</p>
          )}
          <button
            disabled={loading}
            className="mt-4 bg-red-400 border-2 border-transparent rounded text-white px-4 py-2 transition-all duration-200 ease-in-out hover:bg-red-700"
          >
            {loading ? "Please wait..." : "Edit answer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAnswerForm;

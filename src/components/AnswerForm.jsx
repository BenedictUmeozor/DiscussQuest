import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const AnswerForm = ({ id, onShow }) => {
  const textareaRef = useRef();
  const idRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      questionId: id,
      body: textareaRef.current.value,
    };
    console.log(payload);
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
            className="block w-full my-2 bg-gray-100 px-3 py-2 focus: outline-none border border-gray-300 focus:border-red-300 rounded appearance-none"
            rows="8"
          ></textarea>
          <button
            disabled={loading}
            className="mt-4 bg-red-400 border-2 border-transparent rounded text-white px-4 py-2 transition-all duration-200 ease-in-out hover:bg-red-700"
          >
            {loading ? "Please wait..." : "Add answer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnswerForm;

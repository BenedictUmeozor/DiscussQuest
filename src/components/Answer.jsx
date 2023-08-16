import lightFormat from "date-fns/lightFormat";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useRef, useState } from "react";
import EditAnswerForm from "./EditAnswerForm";
import axiosClient from "../axiosClient";

const Answer = ({ answer, action }) => {
  const { user } = useAuthContext();
  const divRef = useRef();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (divRef.current.classList.contains("active")) {
      divRef.current.classList.remove("active");
    } else {
      divRef.current.classList.add("active");
    }
  };

  const showForm = () => {
    setShow(true);
    handleClick();
  };

  const handleDelete = async () => {
    handleClick();
    try {
      const { data } = await axiosClient.delete("/answers/" + answer.id);
      if (data) {
        action();
      }
    } catch (e) {
      alert("Error deleting");
    }
  };

  return (
    <>
      {show && (
        <EditAnswerForm
          id={answer.id}
          onShow={() => setShow(false)}
          text={answer.body}
          action={action}
        />
      )}
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar name={answer.user.name} />
            <Link to={"/profile/" + answer.user.id} className="hover:underline">
              <p className="capitalize ">{answer.user.name}</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {answer.created_at !== answer.updated_at && (
              <span className="text-xs text-gray-700">Edited</span>
            )}
            {user && user.id === answer.user.id && (
              <div className="relative">
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="ellipsis"
                  onClick={handleClick}
                >
                  <path
                    fill="#777"
                    d="M4 8a2 2 0 1 1-3.999.001A2 2 0 0 1 4 8zM10 8a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8zM16 8a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8z"
                  ></path>
                </svg>
                <div
                  ref={divRef}
                  className={
                    "answer-action absolute right-0 top-full z-10 w-20 bg-gray-100 shadow rounded "
                  }
                >
                  <p
                    className="py-2 px-3 border-b border-gray-200 cursor-pointer hover:bg-gray-300"
                    onClick={showForm}
                  >
                    Edit
                  </p>
                  <p
                    className="py-2 px-3 cursor-pointer hover:bg-gray-300"
                    onClick={handleDelete}
                  >
                    Delete
                  </p>
                </div>
              </div>
            )}
          </div>
        </header>
        <div className="mb-3">
          <p>{answer.body}</p>
        </div>
        <p className="text-xs text-gray-700">
          {lightFormat(new Date(answer.created_at), "yyyy-MM-dd h:m a")}
        </p>
      </div>
    </>
  );
};

export default Answer;

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import QuestionModal from "./QuestionModal";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import axiosClient from "../axiosClient";

const QuestionBox = ({ onHide }) => {
  const { setUser, user } = useAuthContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <QuestionModal onShow={() => setShowModal(false)} onHide={onHide} />
      )}

      {/* question box */}
      <div className="bg-white rounded shadow p-4 flex items-center gap-2">
        <div className="w-1/6 overflow- flex items-center justify-center">
          <img
            src={user?.gender === "male" ? manImage : womanImage}
            alt="user"
            className=" w-10 rounded-full border border-red-500"
          />
        </div>
        <div className="w-5/6">
          <div
            className="bg-gray-100 flex items-center justify-between py-2 px-3 rounded text-xs border-2 border-gray-300 cursor-pointer text-gray-800 hover:bg-gray-200"
            onClick={() => setShowModal(true)}
          >
            <span>Have a question?</span>
            <QuestionMarkCircleIcon width={18} className="opacity-75" />
          </div>
        </div>
      </div>
      {/* Question box end */}
    </>
  );
};

export default QuestionBox;

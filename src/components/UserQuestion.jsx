import { Link } from "react-router-dom";
import lightFormat from "date-fns/lightFormat";
import { TrashIcon } from "@heroicons/react/24/solid";
import axiosClient from "../axiosClient";

const UserQuestion = ({ question, onDelete }) => {
  const handleClick = async () => {
    try {
      const { data } = await axiosClient.delete("/questions/" + question.id);
      await onDelete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-3 border-2 border-gray-200 p-3 rounded">
      <div>
        <Link to={"/question/" + question.id} className="underline">
          <h4>{question.title}</h4>
        </Link>
        <p className="my-2 text-gray-700">
          {lightFormat(new Date(question.created_at), "yyyy-MM-dd h:m a")}
        </p>
        <TrashIcon
          width={20}
          color="#f56565"
          className="cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default UserQuestion;

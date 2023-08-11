import { Link } from "react-router-dom";
import lightFormat from "date-fns/lightFormat";
import { TrashIcon } from "@heroicons/react/24/solid";

const UserProfileQuestion = ({ question }) => {
  return (
    <div className="my-3 border-2 border-gray-200 p-3 rounded">
      <div>
        <Link to={"/question/" + question.id} className="underline">
          <h4>{question.title}</h4>
        </Link>
        <p className="my-2 text-gray-700">
          {lightFormat(new Date(question.created_at), "yyyy-MM-dd h:m a")}
        </p>
      </div>
    </div>
  );
};

export default UserProfileQuestion;

import lightFormat from "date-fns/lightFormat";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Answer = ({ answer }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <header className="flex items-center gap-3 mb-4">
        <Avatar name={answer.user.name} />
        <Link to={"/profile/" + answer.user.id} className="hover:underline">
          <p className="capitalize ">{answer.user.name}</p>
        </Link>
      </header>
      <div className="mb-3">
        <p>{answer.body}</p>
      </div>
      <p className="text-xs text-gray-700">
        {lightFormat(new Date(answer.created_at), "yyyy-MM-dd h:m a")}
      </p>
    </div>
  );
};

export default Answer;

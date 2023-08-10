import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import lightFormat from "date-fns/lightFormat";
import Avatar from "./Avatar";

const Question = ({ question }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Avatar name={question.user.name} />
        <p className="capitalize ">{question.user.name}</p>
      </div>
      <h4 className="uppercase tracking-wider mb-2 font-semibold text-red-500">
        {question.category.name}
      </h4>
      <span className="text-xs inline-block text-gray-700">
        {lightFormat(new Date(question.created_at), "yyyy-MM-dd h:m a")}
      </span>
      <div>
        <Link to={"/question/" + question.id}>
          <h3 className="font-semibold mb-3 text-lg">{question.title}</h3>
        </Link>
        <p>{question.body}</p>
      </div>
      <div className="mt-4">
        <Link
          className="flex items-center gap-2"
          to={"/question/" + question.id}
        >
          <ChatBubbleLeftIcon width={20} />
          <span>{question.answers_count} answers</span>
        </Link>
      </div>
    </div>
  );
};

export default Question;

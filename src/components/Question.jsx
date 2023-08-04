import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";

const Question = ({ question }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <img
          className=" w-10 rounded-full border border-red-500"
          src={question.user.gender === "male" ? manImage : womanImage}
          alt="User"
        />
        <p className="capitalize ">{question.user.name}</p>
      </div>
      <h4 className="uppercase tracking-wider mb-2 font-semibold text-red-500">
        {question.category.name}
      </h4>
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

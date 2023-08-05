import manImage from "../assets/man.png";
import womanImage from "../assets/woman.png";
import lightFormat from "date-fns/lightFormat";

const Answer = ({ answer }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <header className="flex items-center gap-3 mb-4">
        <img
          className=" w-10 rounded-full border border-red-500"
          src={answer.user.gender === "male" ? manImage : womanImage}
          alt="User"
        />
        <p className="capitalize ">{answer.user.name}</p>
      </header>
      <div className="mb-3">
        <p>{answer.body}</p>
      </div>
      <p className="text-xs text-gray-700">{lightFormat(new Date(answer.created_at), "yyyy-MM-dd h:m a")}</p>
    </div>
  );
};

export default Answer;

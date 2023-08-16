import { TagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="border-2 border-gray-200 rounded p-2">
      <Link
        to={`/categories/${category.id}/${category.name}`}
        className="flex items-center gap-2 text-red-500"
      >
        <TagIcon width={20} />
        <p className="capitalize text-lg text-gray-950">{category.name}</p>
      </Link>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-gray-500" style={{ fontSize: "0.95rem" }}>
          {category.questions_count}{" "}
          {category.questions_count === 1 ? "question" : "questions"}
        </p>
      </div>
    </div>
  );
};

export default Category;

import { Link } from "react-router-dom";
import errorImg from "../assets/error.svg";
import { useAuthContext } from "../contexts/AuthContext";

export default function ErrorPage() {
  const { token } = useAuthContext();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <div>
          <img className="w-5/6 max-w-sm" src={errorImg} alt="404" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Page Not Found</h2>
          <p className="mt-3">
            Go back to{" "}
            <Link
              to={token ? "/" : "/guest"}
              className="underline text-red-500"
            >Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

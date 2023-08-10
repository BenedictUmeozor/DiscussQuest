import errorImg from "../assets/error.svg";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <div>
        <img className="w-5/6 max-w-sm" src={errorImg} alt="404" />
        </div>
        <div>
            <h2>404</h2>
        </div>
      </div>
    </div>
  );
}

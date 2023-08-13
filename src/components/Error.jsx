import image from "../assets/notfound.svg";
const Error = () => {
  return (
    <div>
      <div className="mb-5 w-8/12 max-w-xs mx-auto">
        <img src={image} alt="Could not get data" />
      </div>
      <p className="text-center font-bold">Error getting data</p>
    </div>
  );
};

export default Error;

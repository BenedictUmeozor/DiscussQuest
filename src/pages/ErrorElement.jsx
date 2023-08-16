import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return <div>{error.statusText || error.message}</div>;
};

export default ErrorElement;

import { Link } from "react-router-dom";
import error from "../../../assets/error.svg";

const ErrorPage = () => {
  return (
    <div>
      <div className="">
        <img className="block mx-auto" src={error} alt="error" />
      </div>
      <Link to="/">
        <button className="btn btn-primary mt-5 block mx-auto">Back Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

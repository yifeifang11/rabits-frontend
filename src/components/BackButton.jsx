import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center flex-col">
      <Link to={destination}>
        <p className="border border-1 px-4 py-2 rounded-md">Back to home</p>
      </Link>
    </div>
  );
};

export default BackButton;

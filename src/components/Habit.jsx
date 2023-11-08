import { Link } from "react-router-dom";
import axios from "axios";

const Habit = ({
  name,
  description,
  count,
  goal,
  id,
  loading,
  setLoading,
  carrots,
  setCarrots,
}) => {
  const handleCount = async () => {
    await axios
      .put(`https://rabits-backend.onrender.com/habits/carrot/${id}`)
      .catch((error) => {
        console.log(error);
      });

    setLoading(true);
    axios
      .post("https://rabits-backend.onrender.com/carrots", {})
      .catch((error) => {
        console.log(error);
      });

    setCarrots(carrots + 1);

    setLoading(false);
  };

  return (
    <div className="border border-1 rounded-md p-2 gap-10 flex justify-between">
      <div className="w-full">
        <p>Habit: {name}</p>
        <p>Description: {description}</p>
        <p>Count: {count}</p>
        <p>Goal: {goal}</p>
      </div>
      <div className="text-right">
        <Link to={`/habits/edit/${id}`}>
          <p>Edit</p>
        </Link>
        <Link to={`/habits/delete/${id}`}>
          <p className="text-red-500">Delete</p>
        </Link>
        <button className="text-green-600" onClick={handleCount}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Habit;

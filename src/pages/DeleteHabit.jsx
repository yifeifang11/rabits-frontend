import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteHabit = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteHabit = () => {
    setLoading(true);
    axios
      .delete(`https://rabits-backend.onrender.com/habits/${id}`)
      .then((response) => {
        setLoading(false);
        navigate("/auth");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center pt-16">
      <p className="text-lg mb-2">
        Are you sure you want to delete this habit?
      </p>
      <button
        onClick={deleteHabit}
        className="text-red-500 border border-1 px-4 py-2 rounded-md mb-4"
      >
        Yes, delete
      </button>
      <BackButton />
    </div>
  );
};

export default DeleteHabit;
